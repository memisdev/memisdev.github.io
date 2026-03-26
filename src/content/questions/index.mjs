export * from "./base.mjs";
export { curatedSupplementalQuestions } from "./curated-supplemental.mjs";
export { externalAcceptedQuestions } from "./external-accepted.mjs";
export { midtermExpansionQuestions } from "./midterm-expansion.mjs";

import { BASE_QUESTION_BANK } from "./base.mjs";
import { curatedSupplementalQuestions } from "./curated-supplemental.mjs";
import { externalAcceptedQuestions } from "./external-accepted.mjs";
import { midtermExpansionQuestions } from "./midterm-expansion.mjs";

export const INTERNAL_CANONICAL_QUESTION_BANK = [
  ...BASE_QUESTION_BANK,
  ...curatedSupplementalQuestions,
  ...midtermExpansionQuestions
];

export const QUESTION_BANK = [
  ...INTERNAL_CANONICAL_QUESTION_BANK,
  ...externalAcceptedQuestions
];
