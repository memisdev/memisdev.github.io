export { membraneQuestions } from "./membrane.mjs";
export { carbohydrateQuestions } from "./carbohydrates.mjs";
export { metabolismQuestions } from "./metabolism.mjs";
export { lipidQuestions } from "./lipids.mjs";
export { nucleotideQuestions } from "./nucleotides.mjs";
export { citricCycleQuestions } from "./citric-cycle.mjs";
export { oxidativeQuestions } from "./oxidative.mjs";

import { membraneQuestions } from "./membrane.mjs";
import { carbohydrateQuestions } from "./carbohydrates.mjs";
import { metabolismQuestions } from "./metabolism.mjs";
import { lipidQuestions } from "./lipids.mjs";
import { nucleotideQuestions } from "./nucleotides.mjs";
import { citricCycleQuestions } from "./citric-cycle.mjs";
import { oxidativeQuestions } from "./oxidative.mjs";

export const BASE_QUESTION_BANK = [
  ...membraneQuestions,
  ...carbohydrateQuestions,
  ...metabolismQuestions,
  ...lipidQuestions,
  ...nucleotideQuestions,
  ...citricCycleQuestions,
  ...oxidativeQuestions
];
