import fs from "node:fs";
import path from "node:path";
import { writeJson } from "./lib/utils.mjs";

const ROOT = process.cwd();
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");
const ANALYSIS_DIR = path.join(ROOT, "output", "analysis");
const DOCS_DATA_DIR = path.join(ROOT, "docs", "data");

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export async function buildSiteData() {
  const allQuestionsPath = path.join(QUESTIONS_DIR, "all-questions.json");
  const topicIndexPath = path.join(QUESTIONS_DIR, "topic-index.json");
  const coverageSummaryPath = path.join(ANALYSIS_DIR, "coverage-summary.json");
  const allQuestions = loadJson(allQuestionsPath);
  const topicIndex = loadJson(topicIndexPath);
  const coverageSummary = loadJson(coverageSummaryPath);
  const qualitySummary = fs.existsSync(path.join(ANALYSIS_DIR, "quality-report.json"))
    ? loadJson(path.join(ANALYSIS_DIR, "quality-report.json"))
    : null;

  fs.mkdirSync(DOCS_DATA_DIR, { recursive: true });
  fs.copyFileSync(allQuestionsPath, path.join(DOCS_DATA_DIR, "all-questions.json"));
  fs.copyFileSync(topicIndexPath, path.join(DOCS_DATA_DIR, "topic-index.json"));
  fs.copyFileSync(coverageSummaryPath, path.join(DOCS_DATA_DIR, "coverage-summary.json"));
  writeJson(
    path.join(DOCS_DATA_DIR, "site-meta.json"),
    {
      generatedAt: new Date().toISOString(),
      totals: topicIndex.totals,
      pdfCount: coverageSummary.inventory.length,
      curriculumTopicCount: coverageSummary.mergedCurriculum.length,
      quality: qualitySummary
    }
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildSiteData();
}
