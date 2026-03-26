const DEFAULT_NORMALIZATION_RULES = [
  "trim",
  "collapse_whitespace",
  "case_fold",
  "turkish_fold",
  "apostrophe_fold",
  "separator_fold"
];

function cleanText(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\s+([?.,;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sentenceCase(value) {
  const cleaned = cleanText(value);
  if (/^[a-zçğıöşü][A-Z]/u.test(cleaned)) {
    return cleaned;
  }
  return cleaned.replace(/^([a-zçğıöşü])/u, (match) => match.toLocaleUpperCase("tr-TR"));
}

function normalizeAnswerKey(value) {
  return String(value || "")
    .replace(/[’`´]/g, "'")
    .replace(/[αΑ]/g, "alpha")
    .replace(/[βΒ]/g, "beta")
    .replace(/[ωΩ]/g, "omega")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/Ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/Ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "c")
    .toLocaleLowerCase("tr-TR")
    .replace(/[’'"]/g, " ")
    .replace(/[‐‑‒–—-]/g, " ")
    .replace(/[(){}\[\],.;:!?/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueAcceptedAnswers(items) {
  const seen = new Set();
  const accepted = [];

  for (const item of items) {
    const cleaned = cleanText(item);
    const key = normalizeAnswerKey(cleaned);
    if (!cleaned || !key || seen.has(key)) continue;
    seen.add(key);
    accepted.push(cleaned);
  }

  return accepted;
}

function normalizeTags(tags) {
  const seen = new Set();
  const normalized = [];

  for (const tag of tags || []) {
    const cleaned = sentenceCase(tag).replace(/[.?!]$/u, "");
    const key = normalizeAnswerKey(cleaned);
    if (!cleaned || !key || seen.has(key)) continue;
    seen.add(key);
    normalized.push(cleaned);
  }

  return normalized;
}

export function makeFillBlank({
  id,
  sourcePdf,
  sourceTopic,
  sourceSubtopic,
  sourcePages,
  difficulty,
  promptText,
  blankAnswer,
  acceptedAnswers = [],
  caseSensitive = false,
  normalizationRules = DEFAULT_NORMALIZATION_RULES,
  explanation,
  learningObjective,
  tags = []
}) {
  return {
    id,
    mode: "fill_blank",
    exam_scope: "midterm",
    source_pdf: sourcePdf,
    source_topic: sentenceCase(sourceTopic),
    source_subtopic: sentenceCase(sourceSubtopic || sourceTopic),
    source_pages: [...new Set((sourcePages || []).map(Number).filter(Number.isFinite))].sort((a, b) => a - b),
    difficulty,
    prompt_text: sentenceCase(promptText),
    blank_answer: cleanText(blankAnswer),
    accepted_answers: uniqueAcceptedAnswers([blankAnswer, ...acceptedAnswers]),
    case_sensitive: Boolean(caseSensitive),
    normalization_rules: [...normalizationRules],
    explanation: sentenceCase(explanation),
    learning_objective: sentenceCase(learningObjective),
    tags: normalizeTags([sourceTopic, sourceSubtopic || sourceTopic, ...(tags || [])])
  };
}

export { DEFAULT_NORMALIZATION_RULES };
