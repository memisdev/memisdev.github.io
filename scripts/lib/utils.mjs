import fs from "node:fs";
import path from "node:path";

export function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function writeJson(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export function writeText(filePath, value) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, value, "utf8");
}

export function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "S")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "G")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "U")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "O")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

export function splitPdfPages(fullText) {
  const normalized = fullText.replace(/\r\n/g, "\n");
  const markers = [...normalized.matchAll(/\n-- (\d+) of (\d+) --\n/g)];

  if (!markers.length) {
    return [
      {
        pageNumber: 1,
        text: normalized.trim()
      }
    ];
  }

  const pages = [];
  let startIndex = 0;

  for (let i = 0; i < markers.length; i += 1) {
    const marker = markers[i];
    const markerIndex = marker.index ?? 0;
    const markerText = marker[0];
    const pageNumber = Number(marker[1]);
    const pageStart = markerIndex + markerText.length;
    const pageEnd = i + 1 < markers.length ? markers[i + 1].index : normalized.length;
    const pageLead = normalized.slice(startIndex, markerIndex).trim();
    const pageBody = normalized.slice(pageStart, pageEnd).trim();
    const combined = [pageLead, pageBody].filter(Boolean).join("\n\n").trim();

    pages.push({
      pageNumber,
      text: combined
    });

    startIndex = pageEnd;
  }

  return pages;
}

export function uniqueLines(lines) {
  return [...new Set(lines.filter(Boolean))];
}

export function normalizeWhitespace(value) {
  return value.replace(/\r\n/g, "\n").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}

export function normalizeSingleLine(value) {
  return normalizeWhitespace(value).replace(/\s+/g, " ").trim();
}

export function isLikelyBoilerplateLine(line) {
  if (!line) return true;
  return (
    /^kaynak:/i.test(line) ||
    /^ders notlar[ıi]/i.test(line) ||
    /^ek çıkt[ıi]ya bak[ıi]n[ıi]z/i.test(line) ||
    /^page \d+/i.test(line) ||
    /^-- \d+ of \d+ --$/i.test(line) ||
    /^\d+$/.test(line)
  );
}

export function stripBoilerplateLines(pageText) {
  return normalizeWhitespace(pageText)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !isLikelyBoilerplateLine(line))
    .join("\n")
    .trim();
}

export function pickTopicLines(pageText, limit = 5) {
  const lines = stripBoilerplateLines(pageText)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/\s+/g, " "));

  return uniqueLines(lines).slice(0, limit);
}

export function countReadablePages(pages) {
  return pages.filter((page) => normalizeSingleLine(page.text).length >= 40).length;
}

export function pageTextStats(pageText) {
  const cleaned = stripBoilerplateLines(pageText);
  const singleLine = normalizeSingleLine(cleaned);
  const alphaMatches = singleLine.match(/[A-Za-zÇĞİÖŞÜçğıöşü]/g) || [];
  return {
    cleaned,
    singleLine,
    length: singleLine.length,
    alphaCount: alphaMatches.length,
    lineCount: cleaned ? cleaned.split("\n").length : 0
  };
}

export function isSubstantivePageText(pageText) {
  const stats = typeof pageText === "string" ? pageTextStats(pageText) : pageText;
  return stats.length >= 80 && stats.alphaCount >= 30;
}

export function summarizePageRange(pages) {
  if (!pages.length) return "";
  const sorted = [...new Set(pages)].sort((a, b) => a - b);
  const ranges = [];
  let start = sorted[0];
  let prev = sorted[0];

  for (let i = 1; i < sorted.length; i += 1) {
    const current = sorted[i];
    if (current === prev + 1) {
      prev = current;
      continue;
    }
    ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
    start = current;
    prev = current;
  }

  ranges.push(start === prev ? `${start}` : `${start}-${prev}`);
  return ranges.join(", ");
}
