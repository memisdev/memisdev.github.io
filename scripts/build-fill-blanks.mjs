import path from "node:path";
import { buildFillBlankBank, buildFillBlankReviewQueue } from "./lib/fill-blank-bank.mjs";
import { writeJson } from "./lib/utils.mjs";

const ROOT = process.cwd();
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");

export async function buildFillBlanks() {
  const fillBlanks = buildFillBlankBank();
  const reviewQueue = buildFillBlankReviewQueue(fillBlanks);

  writeJson(path.join(QUESTIONS_DIR, "midterm-fill-blanks.json"), fillBlanks);
  writeJson(path.join(QUESTIONS_DIR, "midterm-fill-blanks-review.json"), reviewQueue);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildFillBlanks();
}
