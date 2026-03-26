import { BASE_QUESTION_BANK } from "./base.mjs";
import { curatedSupplementalQuestions } from "./curated-supplemental.mjs";
import { externalAcceptedQuestions } from "./external-accepted.mjs";
import { midtermExpansionQuestions } from "./midterm-expansion.mjs";

export const PUBLISHED_QUESTION_ROSTER = [
  ...BASE_QUESTION_BANK,
  ...curatedSupplementalQuestions,
  ...midtermExpansionQuestions,
  ...externalAcceptedQuestions
]
  .map((question) => question.id)
  .sort((left, right) => left.localeCompare(right, "en"));

export const PUBLISHED_FINAL_ROSTER = PUBLISHED_QUESTION_ROSTER;
