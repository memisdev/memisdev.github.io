import { buildAnalysis } from "./build-analysis.mjs";
import { buildFillBlanks } from "./build-fill-blanks.mjs";
import { buildMidtermAudit } from "./build-midterm-audit.mjs";
import { buildQuestions } from "./build-questions.mjs";
import { buildSiteData } from "./build-site-data.mjs";
import { validate } from "./validate.mjs";

async function main() {
  await buildQuestions();
  await buildFillBlanks();
  await buildAnalysis();
  await buildMidtermAudit();
  await validate();
  await buildSiteData();
  await validate();
}

main();
