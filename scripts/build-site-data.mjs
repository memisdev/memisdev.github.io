import fs from "node:fs";
import path from "node:path";
import { PDF_EXAM_SCOPE_MAP } from "../src/content/exam-scope.mjs";
import { writeJson } from "./lib/utils.mjs";

const ROOT = process.cwd();
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");
const ANALYSIS_DIR = path.join(ROOT, "output", "analysis");
const DOCS_DATA_DIR = path.join(ROOT, "docs", "data");

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function copyDataFile(sourceDir, fileName) {
  fs.copyFileSync(path.join(sourceDir, fileName), path.join(DOCS_DATA_DIR, fileName));
}

export async function buildSiteData() {
  const allQuestions = loadJson(path.join(QUESTIONS_DIR, "all-questions.json"));
  const midtermQuestions = loadJson(path.join(QUESTIONS_DIR, "midterm-questions.json"));
  const finalQuestions = loadJson(path.join(QUESTIONS_DIR, "final-questions.json"));
  const reviewNeededQuestions = loadJson(path.join(QUESTIONS_DIR, "review-needed-questions.json"));
  const topicIndex = loadJson(path.join(QUESTIONS_DIR, "topic-index.json"));
  const midtermTopicIndex = loadJson(path.join(QUESTIONS_DIR, "midterm-topic-index.json"));
  const finalTopicIndex = loadJson(path.join(QUESTIONS_DIR, "final-topic-index.json"));
  const reviewNeededTopicIndex = loadJson(path.join(QUESTIONS_DIR, "review-needed-topic-index.json"));
  const coverageSummary = loadJson(path.join(ANALYSIS_DIR, "coverage-summary.json"));
  const qualitySummary = fs.existsSync(path.join(ANALYSIS_DIR, "quality-report.json"))
    ? loadJson(path.join(ANALYSIS_DIR, "quality-report.json"))
    : null;

  fs.mkdirSync(DOCS_DATA_DIR, { recursive: true });

  [
    "all-questions.json",
    "midterm-questions.json",
    "final-questions.json",
    "review-needed-questions.json",
    "midterm-new-questions.json",
    "topic-index.json",
    "midterm-topic-index.json",
    "final-topic-index.json",
    "review-needed-topic-index.json"
  ].forEach((fileName) => copyDataFile(QUESTIONS_DIR, fileName));

  copyDataFile(ANALYSIS_DIR, "coverage-summary.json");

  writeJson(path.join(DOCS_DATA_DIR, "site-meta.json"), {
    generatedAt: new Date().toISOString(),
    totals: topicIndex.totals,
    scopeTotals: {
      midterm: midtermQuestions.length,
      final: finalQuestions.length,
      review_needed: reviewNeededQuestions.length,
      all: allQuestions.length
    },
    pdfCount: coverageSummary.inventory.length,
    curriculumTopicCount: coverageSummary.mergedCurriculum.length,
    availableExamScopes: ["midterm", "final"],
    requiresScopeSelection: true,
    mixedModeEnabled: false,
    defaultExamScope: null,
    datasets: {
      midterm: "midterm-questions.json",
      final: "final-questions.json",
      review_needed: "review-needed-questions.json"
    },
    topicIndexes: {
      all: "topic-index.json",
      midterm: "midterm-topic-index.json",
      final: "final-topic-index.json",
      review_needed: "review-needed-topic-index.json"
    },
    pdfScopes: PDF_EXAM_SCOPE_MAP,
    quality: qualitySummary,
    by_scope: {
      midterm: {
        questions: midtermQuestions.length,
        topics: midtermTopicIndex.topics.length,
        pdfs: midtermTopicIndex.by_pdf.length
      },
      final: {
        questions: finalQuestions.length,
        topics: finalTopicIndex.topics.length,
        pdfs: finalTopicIndex.by_pdf.length
      },
      review_needed: {
        questions: reviewNeededQuestions.length,
        topics: reviewNeededTopicIndex.topics.length,
        pdfs: reviewNeededTopicIndex.by_pdf.length
      }
    }
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildSiteData();
}
