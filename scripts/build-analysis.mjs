import fs from "node:fs";
import path from "node:path";
import { CURRICULUM_MAP, DEDUP_RULES, PDF_ANALYSES } from "../src/content/curriculum.mjs";
import { summarizePageRange, writeJson, writeText } from "./lib/utils.mjs";

const ROOT = process.cwd();
const ANALYSIS_DIR = path.join(ROOT, "output", "analysis");
const RAW_DIR = path.join(ROOT, "output", "raw");

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function inventoryMarkdown(inventory) {
  const lines = [
    "# PDF Envanteri",
    "",
    `Toplam ${inventory.length} PDF işlendi.`,
    "",
    "| PDF | Sayfa | İşlenen sayfa | Anlamlı sayfa | OCR / boş sayfa özeti | Ana konu alanları |",
    "| --- | ---: | ---: | ---: | --- | --- |"
  ];

  for (const item of inventory) {
    const analysis = PDF_ANALYSES.find((entry) => entry.pdf === item.fileName);
    const ocrSummary = [
      item.statusCounts.ocr_local ? `yerel OCR ${item.statusCounts.ocr_local}` : null,
      item.statusCounts.ocr_external ? `harici OCR ${item.statusCounts.ocr_external}` : null,
      item.statusCounts.visual_blank ? `boş ${item.statusCounts.visual_blank}` : null
    ]
      .filter(Boolean)
      .join(", ") || "yalnızca yerleşik metin";

    lines.push(
      `| ${item.fileName} | ${item.totalPages} | ${item.processedPages} | ${item.substantivePages} | ${ocrSummary} | ${
        analysis?.mainHeadings.slice(0, 3).join("; ") || item.topic
      } |`
    );
  }

  lines.push("", "## Okunabilirlik durumu", "");

  for (const item of inventory) {
    const blankPages = item.blankPages.length ? summarizePageRange(item.blankPages) : "yok";
    lines.push(
      `- ${item.fileName}: durum ${item.readabilityStatus}; yerel OCR ${item.statusCounts.ocr_local}, harici OCR ${item.statusCounts.ocr_external}, görsel boş ${blankPages}.`
    );
  }

  return `${lines.join("\n")}\n`;
}

function coverageMarkdown(inventory) {
  const inventoryMap = new Map(inventory.map((item) => [item.fileName, item]));
  const lines = ["# PDF Bazlı Kapsam Haritası", ""];

  for (const entry of PDF_ANALYSES) {
    const inventoryItem = inventoryMap.get(entry.pdf);
    lines.push(`## ${entry.pdf}`, "");
    lines.push(entry.summary, "");
    lines.push(
      `- İşlem durumu: ${inventoryItem?.readabilityStatus || "bilinmiyor"}`
    );
    lines.push(
      `- OCR özeti: yerel ${inventoryItem?.statusCounts.ocr_local || 0}, harici ${
        inventoryItem?.statusCounts.ocr_external || 0
      }, görsel boş ${inventoryItem?.statusCounts.visual_blank || 0}`,
      ""
    );
    lines.push("### Ana başlıklar", ...entry.mainHeadings.map((item) => `- ${item}`), "");
    lines.push(
      "### Alt başlıklar",
      ...entry.subtopics.map((item) => `- ${item.name} (s. ${item.pages[0]}-${item.pages[1]})`),
      ""
    );
    lines.push("### Temel kavramlar", ...entry.criticalConcepts.map((item) => `- ${item}`), "");
    lines.push("### Mekanizmalar", ...entry.mechanisms.map((item) => `- ${item}`), "");
    lines.push("### Sınıflandırmalar", ...entry.classifications.map((item) => `- ${item}`), "");
    lines.push("### Karşılaştırmalar", ...entry.comparisons.map((item) => `- ${item}`), "");
    lines.push("### İstisnalar", ...entry.exceptions.map((item) => `- ${item}`), "");
    lines.push("### Sınavlık ayrımlar", ...entry.examDistinctions.map((item) => `- ${item}`), "");
  }

  return `${lines.join("\n")}\n`;
}

function curriculumMarkdown() {
  const lines = [
    "# Birleşik Müfredat Haritası",
    "",
    "| Konu | Alt konu | Öğrenme hedefi | Kritik ayrım | Soru yoğunluğu ihtiyacı | Kaynak PDF | Kaynak sayfalar |",
    "| --- | --- | --- | --- | --- | --- | --- |"
  ];

  for (const entry of CURRICULUM_MAP) {
    lines.push(
      `| ${entry.topic} | ${entry.subtopic} | ${entry.learningObjective} | ${entry.criticalDistinction} | ${entry.questionDensityNeed} | ${entry.sourcePdf} | ${summarizePageRange(
        entry.sourcePages
      )} |`
    );
  }

  return `${lines.join("\n")}\n`;
}

function dedupMarkdown() {
  const lines = ["# Tekrar / Çakışma Temizliği Raporu", ""];
  for (const item of DEDUP_RULES) {
    lines.push(`## ${item.overlap}`, "", `- Karar: ${item.decision}`, "");
  }
  return `${lines.join("\n")}\n`;
}

function groupCurriculumByTopic() {
  const grouped = new Map();
  for (const entry of CURRICULUM_MAP) {
    if (!grouped.has(entry.topic)) {
      grouped.set(entry.topic, {
        title: entry.topic,
        questionDensity: entry.questionDensityNeed,
        sources: new Set(),
        learningObjectives: [],
        subtopics: []
      });
    }
    const group = grouped.get(entry.topic);
    group.sources.add(entry.sourcePdf);
    group.subtopics.push(entry.subtopic);
    group.learningObjectives.push(entry.learningObjective);
    const order = { low: 1, medium: 2, high: 3, very_high: 4 };
    if (order[entry.questionDensityNeed] > order[group.questionDensity]) {
      group.questionDensity = entry.questionDensityNeed;
    }
  }

  return [...grouped.values()].map((entry) => ({
    ...entry,
    sources: [...entry.sources]
  }));
}

export async function buildAnalysis() {
  const inventory = loadJson(path.join(RAW_DIR, "pdf-inventory.json"));
  const coverageSummary = {
    generatedAt: new Date().toISOString(),
    inventory,
    pdfAnalyses: PDF_ANALYSES,
    curriculumMap: CURRICULUM_MAP,
    mergedCurriculum: groupCurriculumByTopic(),
    dedupRules: DEDUP_RULES
  };

  writeText(path.join(ANALYSIS_DIR, "pdf-inventory.md"), inventoryMarkdown(inventory));
  writeText(path.join(ANALYSIS_DIR, "coverage-map.md"), coverageMarkdown(inventory));
  writeText(path.join(ANALYSIS_DIR, "curriculum-map.md"), curriculumMarkdown());
  writeText(path.join(ANALYSIS_DIR, "merged-curriculum-map.md"), curriculumMarkdown());
  writeText(path.join(ANALYSIS_DIR, "dedup-report.md"), dedupMarkdown());
  writeJson(path.join(ANALYSIS_DIR, "coverage-summary.json"), coverageSummary);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildAnalysis();
}
