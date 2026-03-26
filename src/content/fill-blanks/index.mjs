export { DEFAULT_NORMALIZATION_RULES, makeFillBlank } from "./helpers.mjs";
export { MIDTERM_FILL_BLANK_TARGETS } from "./targets.mjs";
export { carbohydrateFillBlanks } from "./carbohydrates.mjs";
export { lipidFillBlanks } from "./lipids.mjs";
export { nucleotideFillBlanks } from "./nucleotides.mjs";

import { carbohydrateFillBlanks } from "./carbohydrates.mjs";
import { lipidFillBlanks } from "./lipids.mjs";
import { nucleotideFillBlanks } from "./nucleotides.mjs";

export const MIDTERM_FILL_BLANK_BANK = [
  ...carbohydrateFillBlanks,
  ...lipidFillBlanks,
  ...nucleotideFillBlanks
].sort((left, right) => left.id.localeCompare(right.id, "en"));
