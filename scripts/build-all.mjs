import { extractPdfs } from "./extract-pdfs.mjs";
import { buildAnalysis } from "./build-analysis.mjs";
import { buildQuestions } from "./build-questions.mjs";
import { reviewExternalMerge } from "./review-external-merge.mjs";
import { buildSiteData } from "./build-site-data.mjs";
import { validate } from "./validate.mjs";

async function main() {
  await extractPdfs();
  await buildAnalysis();
  await buildQuestions();
  await reviewExternalMerge();
  await validate();
  await buildSiteData();
  await validate();
  await buildSiteData();
}

main();
