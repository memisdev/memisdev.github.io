import fs from "node:fs";
import path from "node:path";
import { PDF_SOURCES } from "../../src/content/pdfs.mjs";

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function buildStaticInventory() {
  return PDF_SOURCES.map((source) => ({
    id: source.id,
    fileName: source.fileName,
    title: source.title,
    topic: source.topic,
    totalPages: source.expectedPages,
    substantivePages: source.expectedPages,
    processedPages: source.expectedPages,
    readabilityStatus: "metadata_only",
    statusCounts: {
      text: 0,
      ocr_local: 0,
      ocr_external: 0,
      visual_blank: 0
    },
    blankPages: [],
    previewTopics: []
  }));
}

export function loadPdfInventory(rootDir = process.cwd()) {
  const rawInventoryPath = path.join(rootDir, "output", "raw", "pdf-inventory.json");
  if (fs.existsSync(rawInventoryPath)) {
    return loadJson(rawInventoryPath);
  }

  const siteMetaPath = path.join(rootDir, "docs", "data", "site-meta.json");
  if (fs.existsSync(siteMetaPath)) {
    const siteMeta = loadJson(siteMetaPath);
    if (Array.isArray(siteMeta?.quality?.inventory) && siteMeta.quality.inventory.length) {
      return siteMeta.quality.inventory;
    }
  }

  return buildStaticInventory();
}
