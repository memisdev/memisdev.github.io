import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";
import { createWorker } from "tesseract.js";
import { PDF_SOURCES } from "../src/content/pdfs.mjs";
import {
  ensureDir,
  isSubstantivePageText,
  pageTextStats,
  pickTopicLines,
  splitPdfPages,
  summarizePageRange,
  writeJson,
  writeText
} from "./lib/utils.mjs";

const ROOT = process.cwd();
const PDF_DIR = path.join(ROOT, "Biyokimya 2");
const RAW_DIR = path.join(ROOT, "output", "raw");
const EXTRACT_DIR = path.join(RAW_DIR, "extracted-pdfs");
const TEXT_DIR = path.join(RAW_DIR, "pdf-text");

const OCR_MIN_LENGTH = 40;
const OCR_TARGET_WIDTH = 1800;
const DEFAULT_OPENAI_MODEL = process.env.OPENAI_OCR_MODEL || "gpt-4.1-mini";

function shouldRunLocalOcr(pageRecord) {
  return !pageRecord.isSubstantive || pageRecord.textLength < OCR_MIN_LENGTH;
}

function normalizeOcrText(text) {
  return text.replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

function buildPageRecord(pageNumber, text, status = "text", confidence = null) {
  const stats = pageTextStats(text);
  return {
    pageNumber,
    text: stats.cleaned,
    preview: pickTopicLines(stats.cleaned, 4),
    status,
    confidence,
    isSubstantive: isSubstantivePageText(stats),
    textLength: stats.length
  };
}

async function getOcrWorker() {
  if (!globalThis.__biyokimyaOcrWorker) {
    globalThis.__biyokimyaOcrWorker = await createWorker("tur+eng");
  }
  return globalThis.__biyokimyaOcrWorker;
}

async function terminateOcrWorker() {
  if (globalThis.__biyokimyaOcrWorker) {
    await globalThis.__biyokimyaOcrWorker.terminate();
    delete globalThis.__biyokimyaOcrWorker;
  }
}

async function runLocalOcr(imageBuffer) {
  const worker = await getOcrWorker();
  const result = await worker.recognize(imageBuffer);
  return {
    text: normalizeOcrText(result.data.text || ""),
    confidence: result.data.confidence ?? null
  };
}

function parseResponseOutputText(payload) {
  if (typeof payload?.output_text === "string") {
    return payload.output_text.trim();
  }

  const textParts = [];
  for (const item of payload?.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) {
        textParts.push(content.text);
      }
    }
  }
  return textParts.join("\n").trim();
}

async function runOpenAiOcr(imageDataUrl) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: DEFAULT_OPENAI_MODEL,
      max_output_tokens: 1200,
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text:
                "Transcribe the text on this Turkish biochemistry lecture slide. Return only the recovered slide text in reading order. If the slide is blank or decorative with no readable text, return BLANK."
            },
            {
              type: "input_image",
              image_url: imageDataUrl
            }
          ]
        }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI OCR failed with status ${response.status}`);
  }

  const payload = await response.json();
  const text = parseResponseOutputText(payload);
  if (!text || /^blank\.?$/i.test(text)) {
    return {
      text: "",
      confidence: null
    };
  }

  return {
    text: normalizeOcrText(text),
    confidence: null
  };
}

function chooseBestRecord(pageNumber, nativeRecord, localOcr, externalOcr) {
  const localRecord = localOcr ? buildPageRecord(pageNumber, localOcr.text, "ocr_local", localOcr.confidence) : null;
  const externalRecord = externalOcr
    ? buildPageRecord(pageNumber, externalOcr.text, "ocr_external", externalOcr.confidence)
    : null;

  if (externalRecord?.isSubstantive) return externalRecord;
  if (localRecord?.isSubstantive) return localRecord;
  if (nativeRecord.isSubstantive) return nativeRecord;

  if (externalRecord?.textLength) return externalRecord;
  if (localRecord?.textLength) return localRecord;
  if (nativeRecord.textLength) return nativeRecord;

  return buildPageRecord(pageNumber, "", "visual_blank", null);
}

async function recoverPagesWithOcr(parser, pageRecords) {
  const ocrPages = pageRecords.filter(shouldRunLocalOcr).map((page) => page.pageNumber);
  if (!ocrPages.length) return pageRecords;

  const screenshotResult = await parser.getScreenshot({
    partial: ocrPages,
    desiredWidth: OCR_TARGET_WIDTH,
    imageDataUrl: true,
    imageBuffer: true
  });

  const screenshotMap = new Map(screenshotResult.pages.map((page) => [page.pageNumber, page]));
  const recovered = [];

  for (const pageRecord of pageRecords) {
    if (!shouldRunLocalOcr(pageRecord)) {
      recovered.push(pageRecord);
      continue;
    }

    const screenshot = screenshotMap.get(pageRecord.pageNumber);
    if (!screenshot) {
      recovered.push(pageRecord);
      continue;
    }

    const localOcr = await runLocalOcr(screenshot.data);
    const needsExternal =
      (!localOcr.text || localOcr.text.length < OCR_MIN_LENGTH || (localOcr.confidence ?? 100) < 40) &&
      Boolean(process.env.OPENAI_API_KEY);
    const externalOcr = needsExternal ? await runOpenAiOcr(screenshot.dataUrl) : null;

    recovered.push(chooseBestRecord(pageRecord.pageNumber, pageRecord, localOcr, externalOcr));
  }

  return recovered;
}

function inventorySummary(extractionRecord) {
  const statusCounts = extractionRecord.pages.reduce(
    (acc, page) => {
      acc[page.status] = (acc[page.status] || 0) + 1;
      return acc;
    },
    {
      text: 0,
      ocr_local: 0,
      ocr_external: 0,
      visual_blank: 0
    }
  );

  return {
    id: extractionRecord.id,
    fileName: extractionRecord.fileName,
    title: extractionRecord.title,
    topic: extractionRecord.topic,
    totalPages: extractionRecord.totalPages,
    substantivePages: extractionRecord.substantivePages,
    processedPages: extractionRecord.processedPages,
    readabilityStatus: extractionRecord.readabilityStatus,
    statusCounts,
    blankPages: extractionRecord.blankPages,
    previewTopics: extractionRecord.pages.flatMap((page) => page.preview).filter(Boolean).slice(0, 10)
  };
}

export async function extractPdfs() {
  ensureDir(EXTRACT_DIR);
  ensureDir(TEXT_DIR);

  const inventory = [];

  try {
    for (const source of PDF_SOURCES) {
      const pdfPath = path.join(PDF_DIR, source.fileName);
      if (!fs.existsSync(pdfPath)) {
        throw new Error(`PDF bulunamadi: ${source.fileName}`);
      }

      const parser = new PDFParse({ data: fs.readFileSync(pdfPath) });
      const info = await parser.getInfo({ parsePageInfo: true });
      const textResult = await parser.getText();
      const rawPages = splitPdfPages(textResult.text);

      const nativePages = rawPages.map((page) => buildPageRecord(page.pageNumber, page.text));
      const recoveredPages = await recoverPagesWithOcr(parser, nativePages);

      await parser.destroy();

      const processedPages = recoveredPages.length;
      const substantivePages = recoveredPages.filter((page) => page.isSubstantive).length;
      const blankPages = recoveredPages.filter((page) => page.status === "visual_blank").map((page) => page.pageNumber);
      const extractionRecord = {
        id: source.id,
        fileName: source.fileName,
        title: info.info?.Title || source.title,
        author: info.info?.Author || null,
        creator: info.info?.Creator || null,
        producer: info.info?.Producer || null,
        expectedPages: source.expectedPages,
        totalPages: info.total,
        processedPages,
        substantivePages,
        readabilityStatus: processedPages === info.total ? "complete" : "incomplete",
        blankPages,
        topic: source.topic,
        extractedAt: new Date().toISOString(),
        ocr: {
          localUsedOnPages: summarizePageRange(recoveredPages.filter((page) => page.status === "ocr_local").map((page) => page.pageNumber)),
          externalUsedOnPages: summarizePageRange(
            recoveredPages.filter((page) => page.status === "ocr_external").map((page) => page.pageNumber)
          )
        },
        pages: recoveredPages
      };

      writeJson(path.join(EXTRACT_DIR, `${source.id}.json`), extractionRecord);
      writeText(path.join(TEXT_DIR, `${source.id}.txt`), recoveredPages.map((page) => page.text).join("\n\n"));
      inventory.push(inventorySummary(extractionRecord));
    }
  } finally {
    await terminateOcrWorker();
  }

  writeJson(path.join(RAW_DIR, "pdf-inventory.json"), inventory);
  return inventory;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  extractPdfs().then((inventory) => {
    console.log(`Extracted ${inventory.length} PDF(s).`);
  });
}
