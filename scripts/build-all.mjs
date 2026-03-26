import { buildAnalysis } from "./build-analysis.mjs";
import { buildQuestions } from "./build-questions.mjs";
import { buildSiteData } from "./build-site-data.mjs";
import { validate } from "./validate.mjs";

async function main() {
  await buildQuestions();
  await buildAnalysis();
  await validate();
  await buildSiteData();
  await validate();
}

main();
