import fs from "node:fs";
import path from "node:path";
import { CURRICULUM_MAP, PDF_ANALYSES, QUESTION_DENSITY_MINIMUMS } from "../../src/content/curriculum.mjs";
import { buildQuestionExamScope } from "../../src/content/exam-scope.mjs";
import { BASE_QUESTION_BANK } from "../../src/content/questions/base.mjs";
import { QUESTION_BANK as RAW_QUESTION_BANK } from "../../src/content/questions/index.mjs";
import { PUBLISHED_QUESTION_ROSTER } from "../../src/content/questions/published-roster.mjs";
import { normalizeSingleLine } from "./utils.mjs";

const LETTERS = ["A", "B", "C", "D", "E"];
const STOP_TOKENS = new Set(["ve", "ile", "icin", "bir", "iki", "uc", "genel", "temel"]);
const PREFIX_BY_PDF = {
  "Hücre Zarından Madde Geçişi.pdf": "MEM",
  "Karbonhidratlar ve Glikobiyoloji.pdf": "CHO",
  "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf": "MET",
  "Lipitler.pdf": "LIP",
  "Nükleotidler Ve Nükleik Asitler.pdf": "NUC",
  "Sitrik Asit Çevrimi.pdf": "CAC",
  "Oksidatif Fosforillenme.pdf": "OXP"
};

export const BANNED_META_PATTERN_STRINGS = [
  String.raw`\bslayt[a-z]*\b`,
  String.raw`\bsunum[a-z]*\b`,
  String.raw`\bpdf(?:\s+de|\s+ye\s+gore)?\b`,
  String.raw`\bmetinde\b`,
  String.raw`\bkaynak\s+icerik(?:te|te\s+verilen|e\s+gore)?\b`,
  String.raw`\bnotta\s+gectigi\s+gibi\b`
];

export const BANNED_META_PATTERNS = BANNED_META_PATTERN_STRINGS.map((pattern) => new RegExp(pattern, "iu"));
export const LEADING_DISCOURSE_MARKER_STRINGS = [
  "Bu konuda",
  "Bu bağlamda",
  "Bu durumda",
  "Burada",
  "Bu yapı için"
];
export const LEADING_DISCOURSE_MARKERS = LEADING_DISCOURSE_MARKER_STRINGS.map(
  (marker) => new RegExp(`^${marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "iu")
);

export const PLACEHOLDER_SCAN_FILES = [
  "docs/notes.md",
  "docs/index.html",
  "docs/questions.html",
  "docs/practice.html",
  "docs/review.html",
  "docs/coverage.html",
  "docs/assets/app.js"
];

const PLACEHOLDER_PATTERNS = [
  { label: "lorem-ipsum", pattern: /\blorem ipsum\b/i },
  { label: "todo", pattern: /\bTODO\b/i },
  { label: "generic-notes-copy", pattern: /Bu dosyayi .* kullanabilirsin/i },
  { label: "generic-protein-heading", pattern: /^\s*-\s*Proteinler\s*$/im },
  { label: "generic-enzyme-heading", pattern: /^\s*-\s*Enzimler\s*$/im },
  { label: "generic-vitamin-heading", pattern: /^\s*-\s*Vitaminler(?: ve koenzimler)?\s*$/im }
];

function normalizeApostrophes(value) {
  return String(value || "").replace(/[’`´]/g, "'");
}

export function normalizeForMatch(value) {
  return normalizeApostrophes(value)
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
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function cleanSpacing(value) {
  return normalizeApostrophes(value)
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\s+([?.,;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s*[,;:-]\s*/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function sentenceCase(value) {
  return cleanSpacing(value).replace(/^([a-zçğıöşü])/u, (match) => match.toLocaleUpperCase("tr-TR"));
}

function ensureTrailingPunctuation(value, punctuation = ".") {
  const trimmed = cleanSpacing(value);
  if (!trimmed) return trimmed;
  if (/[?!.]$/u.test(trimmed)) return trimmed;
  return `${trimmed}${punctuation}`;
}

function tokenSet(value) {
  return new Set(
    normalizeForMatch(value)
      .split(/\s+/)
      .filter(Boolean)
      .filter((token) => !STOP_TOKENS.has(token))
  );
}

export function stemSimilarity(left, right) {
  const a = tokenSet(left);
  const b = tokenSet(right);
  if (!a.size || !b.size) return 0;
  let intersect = 0;
  for (const token of a) {
    if (b.has(token)) intersect += 1;
  }
  return intersect / Math.min(a.size, b.size);
}

function firstSentence(value) {
  const cleaned = cleanSpacing(value);
  const match = cleaned.match(/^(.+?[.!?])(?:\s|$)/u);
  return match ? match[1] : ensureTrailingPunctuation(cleaned);
}

function sanitizeResidualMeta(value, replacement = "") {
  return value
    .replace(/\bslayt[a-zçğıöşü]*\b/giu, replacement)
    .replace(/\bsunum[a-zçğıöşü]*\b/giu, replacement)
    .replace(/\bPDF(?:'de|'ye göre|’de|’ye göre)?\b/giu, replacement)
    .replace(/\bmetinde\b/giu, replacement)
    .replace(/\bkaynak içerik(?:te|te verilen|e göre)?\b/giu, replacement)
    .replace(/\bnotta geçtiği gibi\b/giu, replacement);
}

function sanitizeQuestionText(value) {
  const replacements = [
    [/\bslayt(?:lar)?daki tanımıyla en uyumludur\b/giu, "en doğru tanımı verir"],
    [/\bslayt(?:lar)?daki bilgiyle uyumludur\b/giu, "doğrudur"],
    [/\bslayt(?:lar)?da verilen bilgiye uygundur\b/giu, "doğrudur"],
    [/\bslayt(?:lar)?da verilen ayrımı doğru yansıtır\b/giu, "doğru yansıtır"],
    [/\bslayt(?:lar)?a göre\b/giu, ""],
    [/\bslayta uygundur\b/giu, "doğrudur"],
    [/\bslayt(?:lar)?la uyumludur\b/giu, "doğrudur"],
    [/\bözellikle örneklenmiştir\b/giu, "özellikle hangi sonucu gösterir"],
    [/\bkaynak içerikte\b/giu, ""],
    [/\bkaynak içerik\b/giu, ""],
    [/\bsunumda\b/giu, ""],
    [/\bsunumun\b/giu, ""],
    [/\bPDF(?:'de|’de|'ye göre|’ye göre)\b/giu, ""],
    [/\bmetinde\b/giu, ""]
  ];

  let text = normalizeApostrophes(value);
  for (const [pattern, next] of replacements) {
    text = text.replace(pattern, next);
  }

  text = sanitizeResidualMeta(text, "");
  text = text.replace(/\s{2,}/g, " ");
  text = text.replace(/\s+\?/g, "?");
  text = text.replace(/\s+,/g, ",");
  return sentenceCase(text);
}

function sanitizeExplanationText(value) {
  let text = normalizeApostrophes(value)
    .replace(
      /^\s*(Kaynak içerik(?:te)?|Sunum(?:da|un)?|Slayt(?:ta|larda)?|PDF(?:'de|’de))\s*,?\s*/iu,
      ""
    )
    .replace(/\bSunum(?:da|un)?\b/giu, "")
    .replace(/\bSlayt(?:ta|larda)?\b/giu, "")
    .replace(/\bKaynak içerik(?:te)?\b/giu, "")
    .replace(/\bPDF(?:'de|’de)\b/giu, "");

  text = sanitizeResidualMeta(text, "");
  text = text
    .replace(/\bbu konuda bunun tersini söyler\b/giu, "bu seçenek ilgili biyokimyasal ilkeye ters düşer")
    .replace(/\bbu konuda açıkça bunun doğru olmadığını söyler\b/giu, "bu seçenek ilgili biyokimyasal ilkeyle çelişir")
    .replace(
      /\bbu konuda böyle bir (işlev|tanım|etki|tipik aralık|eşleştirme|bağlam|özellik|taşıyıcı çifti) verilmez\b/giu,
      "bu seçenek ilgili biyokimyasal bağlamda desteklenmez"
    )
    .replace(/\bilgili konuda etkiler bunun ters yönünde verilir\b/giu, "ilgili biyokimyasal etkiler bunun ters yönündedir")
    .replace(/\bböyle zorunlu tek akıbet verilmez\b/giu, "tek zorunlu akıbet böyle kurulamaz")
    .replace(/\bbu seçenek .*? değildir\b/giu, (match) => match)
    .replace(/^(?:Bu konuda|İlgili konuda)\s+/iu, "")
    .replace(/\bilgili konuda\b/giu, "ilgili biyokimyasal bağlamda")
    .replace(/\s{2,}/g, " ");

  return sentenceCase(ensureTrailingPunctuation(text));
}

function sanitizeLearningObjective(value) {
  const text = sanitizeResidualMeta(normalizeApostrophes(value), "");
  return sentenceCase(ensureTrailingPunctuation(text));
}

function sanitizeOptionText(value) {
  const text = sanitizeResidualMeta(normalizeApostrophes(value), "");
  return sentenceCase(ensureTrailingPunctuation(text));
}

function sanitizeTags(tags) {
  const seen = new Set();
  const cleaned = [];
  for (const tag of tags || []) {
    const next = sentenceCase(tag).replace(/[.?!]$/u, "");
    const key = normalizeForMatch(next);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    cleaned.push(next);
  }
  return cleaned;
}

function sortById(left, right) {
  return left.id.localeCompare(right.id, "en");
}

function findCurriculumEntry(question) {
  const candidates = CURRICULUM_MAP.filter((entry) => entry.sourcePdf === question.source_pdf);
  return candidates
    .map((entry) => {
      const entryMin = Math.min(...entry.sourcePages);
      const entryMax = Math.max(...entry.sourcePages);
      const entrySpan = Math.max(1, entryMax - entryMin + 1);
      const pageOverlap = (question.source_pages || []).filter((page) => page >= entryMin && page <= entryMax).length;
      const overlapRatio = pageOverlap / Math.max(1, (question.source_pages || []).length);
      const pageDistance = (question.source_pages || []).reduce((best, page) => {
        if (page >= entryMin && page <= entryMax) return 0;
        return Math.min(best, Math.min(Math.abs(page - entryMin), Math.abs(page - entryMax)));
      }, 999);
      const sourceText = question.source_subtopic || question.source_topic;
      const sourceNorm = normalizeForMatch(sourceText);
      const entryNorm = normalizeForMatch(entry.subtopic);
      const exactish = sourceNorm === entryNorm ? 3 : sourceNorm.includes(entryNorm) || entryNorm.includes(sourceNorm) ? 1 : 0;
      const similarity = stemSimilarity(sourceText, entry.subtopic);
      const specificityBonus = pageOverlap > 0 ? 20 / entrySpan : 0;
      return {
        entry,
        score:
          pageOverlap * 50 +
          overlapRatio * 20 +
          exactish * 8 +
          similarity * 10 +
          specificityBonus -
          pageDistance / 100
      };
    })
    .sort((a, b) => b.score - a.score)[0]?.entry;
}

function canonicalizeQuestion(question) {
  const entry = findCurriculumEntry(question);
  const examScope = buildQuestionExamScope(question);
  const pages = (question.source_pages?.length ? question.source_pages : entry?.sourcePages || [])
    .map(Number)
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
  const sourceTopic = entry?.topic || question.source_topic;
  const sourceSubtopic = entry?.subtopic || question.source_subtopic || question.source_topic;

  return {
    ...question,
    exam_scope: examScope,
    source_topic: sourceTopic,
    source_subtopic: sourceSubtopic,
    source_pages: [...new Set(pages)],
    question: sanitizeQuestionText(question.question),
    options: Object.fromEntries(
      Object.entries(question.options || {}).map(([key, value]) => [key, sanitizeOptionText(value)])
    ),
    correct_explanation: sanitizeExplanationText(question.correct_explanation),
    distractor_explanations: Object.fromEntries(
      Object.entries(question.distractor_explanations || {}).map(([key, value]) => [key, sanitizeExplanationText(value)])
    ),
    learning_objective: sanitizeLearningObjective(question.learning_objective),
    tags: sanitizeTags([sourceTopic, sourceSubtopic, ...(question.tags || [])]),
    ...(question.confusion_note ? { confusion_note: sanitizeExplanationText(question.confusion_note) } : {})
  };
}

function normalizeQuestionStem(value) {
  return normalizeSingleLine(value).toLocaleLowerCase("tr-TR");
}

function exactDuplicatePairs(questions) {
  const seen = new Map();
  const pairs = [];
  for (const question of questions) {
    const normalized = normalizeQuestionStem(question.question);
    if (seen.has(normalized)) {
      pairs.push([seen.get(normalized), question.id]);
      continue;
    }
    seen.set(normalized, question.id);
  }
  return pairs;
}

function dedupeQuestions(questions) {
  const byStem = new Set();
  const deduped = [];

  for (const question of [...questions].sort(sortById)) {
    const normalized = normalizeQuestionStem(question.question);
    if (byStem.has(normalized)) {
      continue;
    }
    const nearDuplicate = deduped.some(
      (existing) =>
        existing.source_pdf === question.source_pdf &&
        existing.source_subtopic === question.source_subtopic &&
        stemSimilarity(existing.question, question.question) >= 0.82
    );
    if (nearDuplicate) {
      continue;
    }
    byStem.add(normalized);
    deduped.push(question);
  }

  return deduped;
}

function relatedAnalysisItems(entry) {
  const analysis = PDF_ANALYSES.find((item) => item.pdf === entry.sourcePdf);
  if (!analysis) return [];

  const pool = [
    ...analysis.criticalConcepts,
    ...analysis.mechanisms,
    ...analysis.classifications,
    ...analysis.comparisons,
    ...analysis.examDistinctions
  ];

  return [...new Set(pool)]
    .map((item) => ({
      text: ensureTrailingPunctuation(item),
      score: stemSimilarity(item, `${entry.subtopic} ${entry.learningObjective} ${entry.criticalDistinction}`)
    }))
    .sort((a, b) => b.score - a.score)
    .map((item) => item.text);
}

function uniqueStatements(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    if (!item?.text) continue;
    const key = normalizeForMatch(item.text);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function buildStatementPool(entry, existingQuestions) {
  const statements = [];
  for (const question of existingQuestions) {
    const correctText = question.options?.[question.correct_answer];
    if (correctText) {
      statements.push({
        kind: "fact",
        text: sanitizeOptionText(correctText),
        explanation: question.correct_explanation
      });
    }
    const supportText = firstSentence(question.correct_explanation);
    if (supportText) {
      statements.push({
        kind: "support",
        text: sanitizeOptionText(supportText),
        explanation: question.correct_explanation
      });
    }
  }

  statements.push({
    kind: "focus",
    text: sanitizeLearningObjective(entry.learningObjective),
    explanation: sentenceCase(
      ensureTrailingPunctuation(`${entry.subtopic} başlığı ${entry.learningObjective.toLocaleLowerCase("tr-TR")}`)
    )
  });

  statements.push({
    kind: "distinction",
    text: ensureTrailingPunctuation(`${entry.criticalDistinction}`),
    explanation: sentenceCase(
      ensureTrailingPunctuation(`${entry.subtopic} için belirleyici ayrım ${entry.criticalDistinction.toLocaleLowerCase("tr-TR")}`)
    )
  });

  for (const item of relatedAnalysisItems(entry).slice(0, 4)) {
    statements.push({
      kind: "concept",
      text: sanitizeOptionText(item),
      explanation: sentenceCase(
        ensureTrailingPunctuation(`${item.replace(/[.?!]$/u, "")} bu alt konunun doğrudan kapsamına girer`)
      )
    });
  }

  return uniqueStatements(statements);
}

function sourceSubtopicMap(questions) {
  return CURRICULUM_MAP.reduce((map, entry) => {
    map.set(`${entry.sourcePdf}::${entry.subtopic}`, questions.filter(
      (question) => question.source_pdf === entry.sourcePdf && question.source_subtopic === entry.subtopic
    ));
    return map;
  }, new Map());
}

function nextNumberMap(questions) {
  const next = new Map();
  for (const question of questions) {
    const [prefix, rawNumber] = question.id.split("-");
    const numeric = Number(rawNumber);
    if (!next.has(prefix) || numeric >= next.get(prefix)) {
      next.set(prefix, numeric + 1);
    }
  }
  return next;
}

function reserveId(pdf, nextNumbers) {
  const prefix = PREFIX_BY_PDF[pdf];
  const nextNumber = nextNumbers.get(prefix) || 1;
  nextNumbers.set(prefix, nextNumber + 1);
  return `${prefix}-${String(nextNumber).padStart(3, "0")}`;
}

function buildOptionPayloads(correct, distractors, seed = 0) {
  const unique = [];
  const seen = new Set();
  for (const item of [correct, ...distractors]) {
    if (!item?.text) continue;
    const key = normalizeForMatch(item.text);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(item);
  }

  const trimmed = unique.slice(0, 5);
  const correctIndex = trimmed.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
  if (trimmed.length !== 5 || correctIndex === -1) {
    return null;
  }

  const rotated = trimmed.filter((_, index) => index !== correctIndex);
  rotated.splice(seed % 5, 0, trimmed[correctIndex]);
  return rotated;
}

function pickDistractors(pool, correctText, count, offset = 0) {
  return pool
    .filter((item) => normalizeForMatch(item.text) !== normalizeForMatch(correctText))
    .filter((item, index, items) => items.findIndex((other) => normalizeForMatch(other.text) === normalizeForMatch(item.text)) === index)
    .slice(offset, offset + count);
}

function questionTags(entry, templateLabel) {
  return sanitizeTags([entry.topic, entry.subtopic, templateLabel]);
}

function genericWrongExplanation(entry, optionSource) {
  return sentenceCase(
    ensureTrailingPunctuation(
      `${optionSource} ifadesi ${entry.subtopic.toLocaleLowerCase("tr-TR")} için değil, farklı bir biyokimyasal odak için uygundur`
    )
  );
}

function buildQuestionRecord({
  id,
  entry,
  difficulty,
  questionType,
  question,
  optionPayloads,
  correctIndex,
  correctExplanation,
  learningObjective,
  tags
}) {
  const options = {};
  const distractorExplanations = {};

  optionPayloads.forEach((payload, index) => {
    const letter = LETTERS[index];
    options[letter] = sanitizeOptionText(payload.text);
    if (index !== correctIndex) {
      distractorExplanations[letter] = sanitizeExplanationText(payload.note);
    }
  });

  return {
    id,
    source_pdf: entry.sourcePdf,
    source_topic: entry.topic,
    source_subtopic: entry.subtopic,
    source_pages: [...entry.sourcePages],
    difficulty,
    question_type: questionType,
    question: sentenceCase(ensureTrailingPunctuation(question, "?")),
    options,
    correct_answer: LETTERS[correctIndex],
    correct_explanation: sanitizeExplanationText(correctExplanation),
    distractor_explanations: Object.fromEntries(
      LETTERS.filter((letter) => letter !== LETTERS[correctIndex]).map((letter) => [letter, distractorExplanations[letter]])
    ),
    learning_objective: sanitizeLearningObjective(learningObjective),
    tags: questionTags(entry, tags)
  };
}

function buildTemplateCandidates(entry, existingQuestions, siblingEntries) {
  const ownPool = buildStatementPool(entry, existingQuestions);
  const siblingPool = uniqueStatements(
    siblingEntries.flatMap((item) => buildStatementPool(item, []))
  );
  const conceptPool = relatedAnalysisItems(entry);

  const templates = [];

  if (ownPool.length) {
    templates.push(({ id }) => {
      const correct = ownPool[0];
      const distractors = pickDistractors(
        uniqueStatements(
          siblingEntries.flatMap((item) =>
            buildStatementPool(item, []).map((statement) => ({
              ...statement,
              note: `${item.subtopic} alt konusu başka bir kapsamı temsil eder.`
            }))
          )
        ),
        correct.text,
        4
      );
      const optionPayloads = buildOptionPayloads(
        { text: correct.text, note: "Doğru seçenek." },
        distractors.map((item) => ({
          text: item.text,
          note: genericWrongExplanation(entry, item.text)
        }))
      );
      if (!optionPayloads) return null;
      const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
      return buildQuestionRecord({
        id,
        entry,
        difficulty: "Orta",
        questionType: "yorum",
        question: `${entry.subtopic} ile ilgili aşağıdaki ifadelerden hangisi doğrudur`,
        optionPayloads,
        correctIndex,
        correctExplanation: correct.explanation,
        learningObjective: `${entry.subtopic} kapsamında doğru biyokimyasal ifadeyi seçmek.`,
        tags: "Doğru ifade"
      });
    });
  }

  if (ownPool.length > 1) {
    templates.push(({ id }) => {
      const correct = ownPool[1];
      const distractors = pickDistractors(
        uniqueStatements(
          siblingEntries.flatMap((item) =>
            buildStatementPool(item, []).map((statement) => ({
              ...statement,
              note: `${item.subtopic} alt konusu başka bir kapsamı temsil eder.`
            }))
          )
        ),
        correct.text,
        4,
        1
      );
      const optionPayloads = buildOptionPayloads(
        { text: correct.text, note: "Doğru seçenek." },
        distractors.map((item) => ({
          text: item.text,
          note: genericWrongExplanation(entry, item.text)
        })),
        2
      );
      if (!optionPayloads) return null;
      const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
      return buildQuestionRecord({
        id,
        entry,
        difficulty: "Zor",
        questionType: "destekleyici sonuç",
        question: `${entry.subtopic} bağlamında aşağıdaki yargılardan hangisi en güçlü biçimde desteklenir`,
        optionPayloads,
        correctIndex,
        correctExplanation: correct.explanation,
        learningObjective: `${entry.subtopic} için desteklenen sonucu ayırt etmek.`,
        tags: "Desteklenen sonuç"
      });
    });
  }

  templates.push(({ id }) => {
    const correct = {
      text: ensureTrailingPunctuation(entry.criticalDistinction),
      note: "Doğru seçenek."
    };
    const distractors = siblingEntries.slice(0, 4).map((item) => ({
      text: ensureTrailingPunctuation(item.criticalDistinction),
      note: genericWrongExplanation(entry, item.criticalDistinction)
    }));
    const optionPayloads = buildOptionPayloads(correct, distractors, 1);
    if (!optionPayloads) return null;
    const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
    return buildQuestionRecord({
      id,
      entry,
      difficulty: "Kolay",
      questionType: "kavramsal ayrım",
      question: `${entry.subtopic} değerlendirilirken aşağıdaki ayrımlardan hangisi belirleyicidir`,
      optionPayloads,
      correctIndex,
      correctExplanation: `${entry.subtopic} için merkezde yer alan ayırıcı eksen ${entry.criticalDistinction.toLocaleLowerCase("tr-TR")} ayrımıdır.`,
      learningObjective: `${entry.subtopic} için belirleyici kavramsal ayrımı seçmek.`,
      tags: "Kavramsal ayrım"
    });
  });

  templates.push(({ id }) => {
    const correct = {
      text: sanitizeLearningObjective(entry.learningObjective),
      note: "Doğru seçenek."
    };
    const distractors = siblingEntries.slice(0, 4).map((item) => ({
      text: sanitizeLearningObjective(item.learningObjective),
      note: genericWrongExplanation(entry, item.learningObjective)
    }));
    const optionPayloads = buildOptionPayloads(correct, distractors, 3);
    if (!optionPayloads) return null;
    const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
    return buildQuestionRecord({
      id,
      entry,
      difficulty: "Orta",
      questionType: "odak",
      question: `${entry.subtopic} için aşağıdaki çalışma odaklarından hangisi doğrudan uygundur`,
      optionPayloads,
      correctIndex,
      correctExplanation: `${entry.subtopic} alt konusu doğrudan ${entry.learningObjective.toLocaleLowerCase("tr-TR")}`,
      learningObjective: `${entry.subtopic} için uygun biyokimyasal odağı belirlemek.`,
      tags: "Çalışma odağı"
    });
  });

  templates.push(({ id }) => {
    const correct = {
      text: `${entry.subtopic}: ${entry.criticalDistinction}`,
      note: "Doğru seçenek."
    };
    const distractors = siblingEntries.slice(0, 4).map((item) => ({
      text: `${entry.subtopic}: ${item.criticalDistinction}`,
      note: genericWrongExplanation(entry, item.criticalDistinction)
    }));
    const optionPayloads = buildOptionPayloads(correct, distractors, 4);
    if (!optionPayloads) return null;
    const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
    return buildQuestionRecord({
      id,
      entry,
      difficulty: "Zor",
      questionType: "eşleştirme",
      question: `${entry.subtopic} ile ilgili aşağıdaki eşleştirmelerden hangisi tutarlıdır`,
      optionPayloads,
      correctIndex,
      correctExplanation: `${entry.subtopic} başlığının doğru eşleşmesi ${entry.criticalDistinction.toLocaleLowerCase("tr-TR")} ayrımıdır.`,
      learningObjective: `${entry.subtopic} ile ayırt edici biyokimyasal ekseni eşleştirmek.`,
      tags: "Eşleştirme"
    });
  });

  templates.push(({ id }) => {
    const correctConcept = conceptPool[0] || entry.subtopic;
    const distractorConcepts = conceptPool.slice(1, 5);
    while (distractorConcepts.length < 4) {
      const sibling = siblingEntries[distractorConcepts.length];
      distractorConcepts.push(sibling?.subtopic || sibling?.criticalDistinction || `${entry.topic} içindeki başka bir vurgu`);
    }
    const optionPayloads = buildOptionPayloads(
      { text: sanitizeOptionText(correctConcept), note: "Doğru seçenek." },
      distractorConcepts.map((item) => ({
        text: sanitizeOptionText(item),
        note: genericWrongExplanation(entry, item)
      })),
      2
    );
    if (!optionPayloads) return null;
    const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correctConcept));
    return buildQuestionRecord({
      id,
      entry,
      difficulty: "Kolay",
      questionType: "kavram",
      question: `${entry.subtopic} için aşağıdaki kavramlardan hangisi öncelikli vurgudur`,
      optionPayloads,
      correctIndex,
      correctExplanation: `${sanitizeOptionText(correctConcept).replace(/[.?!]$/u, "")} bu alt konunun doğrudan kapsamına girer.`,
      learningObjective: `${entry.subtopic} ile ilişkili temel kavramı tanımak.`,
      tags: "Temel kavram"
    });
  });

  templates.push(({ id }) => {
    const correct = {
      text: entry.subtopic,
      note: "Doğru seçenek."
    };
    const distractors = siblingEntries.slice(0, 4).map((item) => ({
      text: item.subtopic,
      note: genericWrongExplanation(entry, item.subtopic)
    }));
    const optionPayloads = buildOptionPayloads(correct, distractors, 0);
    if (!optionPayloads) return null;
    const correctIndex = optionPayloads.findIndex((item) => normalizeForMatch(item.text) === normalizeForMatch(correct.text));
    return buildQuestionRecord({
      id,
      entry,
      difficulty: "Orta",
      questionType: "kapsam",
      question: `${entry.topic} içinde aşağıdaki alt başlıklardan hangisi ${entry.criticalDistinction.toLocaleLowerCase("tr-TR")} ayrımıyla öne çıkar`,
      optionPayloads,
      correctIndex,
      correctExplanation: `${entry.subtopic} alt başlığı ${entry.criticalDistinction.toLocaleLowerCase("tr-TR")} ayrımına odaklanır.`,
      learningObjective: `${entry.topic} içinde doğru alt başlığı ayırt etmek.`,
      tags: "Alt başlık kapsamı"
    });
  });

  return templates;
}

function hasCollision(candidate, existingQuestions) {
  return existingQuestions.some((question) => {
    if (normalizeQuestionStem(question.question) === normalizeQuestionStem(candidate.question)) {
      return true;
    }
    return stemSimilarity(question.question, candidate.question) >= 0.82;
  });
}

function generateSupplementalQuestions(entry, existingQuestions, nextNumbers) {
  const required = QUESTION_DENSITY_MINIMUMS[entry.questionDensityNeed];
  const deficit = Math.max(0, required - existingQuestions.length);
  if (!deficit) return [];

  const siblingEntries = CURRICULUM_MAP.filter(
    (item) => item.sourcePdf === entry.sourcePdf && item.subtopic !== entry.subtopic
  );
  const templates = buildTemplateCandidates(entry, existingQuestions, siblingEntries);
  const generated = [];

  for (const template of templates) {
    if (generated.length >= deficit) break;
    const candidate = template({ id: reserveId(entry.sourcePdf, nextNumbers) });
    if (!candidate) continue;
    if (hasCollision(candidate, [...existingQuestions, ...generated])) {
      continue;
    }
    generated.push(candidate);
  }

  return generated;
}

export function buildQuestionBank({ allowSupplemental = false } = {}) {
  const sourceBank = allowSupplemental ? BASE_QUESTION_BANK : RAW_QUESTION_BANK;
  const transformed = sourceBank.map(canonicalizeQuestion).sort(sortById);
  if (!allowSupplemental) {
    return transformed;
  }

  const deduped = dedupeQuestions(transformed);
  const groups = sourceSubtopicMap(deduped);
  const nextNumbers = nextNumberMap(deduped);
  const supplemental = [];

  for (const entry of CURRICULUM_MAP) {
    const key = `${entry.sourcePdf}::${entry.subtopic}`;
    const existing = groups.get(key) || [];
    const generated = generateSupplementalQuestions(entry, existing, nextNumbers);
    supplemental.push(...generated);
    groups.set(key, [...existing, ...generated]);
  }

  return [...deduped, ...supplemental].sort(sortById);
}

export const buildFinalQuestionBank = buildQuestionBank;

export function buildSubtopicCoverage(questions) {
  return CURRICULUM_MAP.map((entry) => {
    const matched = questions.filter(
      (question) => question.source_pdf === entry.sourcePdf && question.source_subtopic === entry.subtopic
    );
    const requiredMinimum = QUESTION_DENSITY_MINIMUMS[entry.questionDensityNeed];
    return {
      sourcePdf: entry.sourcePdf,
      topic: entry.topic,
      subtopic: entry.subtopic,
      questionDensityNeed: entry.questionDensityNeed,
      requiredMinimum,
      actualCount: matched.length,
      status: matched.length >= requiredMinimum ? "OK" : "Eksik",
      questionIds: matched.map((question) => question.id)
    };
  });
}

export function detectExactDuplicatePrompts(questions) {
  return exactDuplicatePairs(questions).map(([left, right]) => ({ left, right }));
}

export function detectNearDuplicates(questions) {
  const pairs = [];
  for (let i = 0; i < questions.length; i += 1) {
    for (let j = i + 1; j < questions.length; j += 1) {
      const left = questions[i];
      const right = questions[j];
      if (left.source_pdf !== right.source_pdf) continue;
      if (left.source_subtopic !== right.source_subtopic) continue;
      const similarity = stemSimilarity(left.question, right.question);
      if (similarity >= 0.82) {
        pairs.push({
          left: left.id,
          right: right.id,
          source_pdf: left.source_pdf,
          source_subtopic: left.source_subtopic,
          similarity: Number(similarity.toFixed(2))
        });
      }
    }
  }
  return pairs;
}

export function findLeadingDiscourseMarkerHits(questions) {
  const results = [];

  for (const question of questions) {
    const hits = [];

    const fields = [
      { field: "question", value: question.question },
      ...Object.entries(question.options || {}).map(([letter, value]) => ({ field: `option_${letter}`, value })),
    ];

    for (const { field, value } of fields) {
      const trimmed = String(value || "").trim();
      const matched = LEADING_DISCOURSE_MARKERS.filter((pattern) => pattern.test(trimmed)).map((pattern) => pattern.toString());
      if (matched.length) {
        hits.push({ field, patterns: matched });
      }
    }

    if (hits.length) {
      results.push({ id: question.id, hits });
    }
  }

  return results;
}

function isSentenceLikeOption(value) {
  const text = String(value || "").trim();
  return /[.?!]$/u.test(text) && /\s/u.test(text);
}

export function findOptionBalanceFlags(questions) {
  return questions.flatMap((question) => {
    const options = LETTERS.map((letter) => ({
      letter,
      text: question.options?.[letter] || "",
      length: String(question.options?.[letter] || "").trim().length
    }));
    const sorted = [...options].sort((left, right) => right.length - left.length);
    const correct = options.find((option) => option.letter === question.correct_answer);
    if (!correct) return [];

    const flags = [];
    const max = sorted[0]?.length || 0;
    const second = sorted[1]?.length || 0;
    const sentenceLikeCount = options.filter((option) => isSentenceLikeOption(option.text)).length;

    if (correct.length === max && max - second >= 35) {
      flags.push({
        type: "correct_length_outlier",
        details: { correct_length: correct.length, next_length: second, delta: max - second }
      });
    }

    if (sentenceLikeCount === 1 || sentenceLikeCount === LETTERS.length - 1) {
      flags.push({
        type: "mixed_option_structure",
        details: { sentence_like_count: sentenceLikeCount }
      });
    }

    return flags.length ? [{ id: question.id, correct_answer: question.correct_answer, flags }] : [];
  });
}

export function comparePublishedRoster(questions) {
  const ids = questions.map((question) => question.id);
  const rosterSet = new Set(PUBLISHED_QUESTION_ROSTER);
  const questionSet = new Set(ids);

  const missing_ids = PUBLISHED_QUESTION_ROSTER.filter((id) => !questionSet.has(id));
  const unexpected_ids = ids.filter((id) => !rosterSet.has(id));
  const findings = [];

  if (questions.length !== PUBLISHED_QUESTION_ROSTER.length) {
    findings.push(`yayınlanan roster ${PUBLISHED_QUESTION_ROSTER.length}, mevcut çıktı ${questions.length}`);
  }
  if (missing_ids.length) {
    findings.push(`eksik ID: ${missing_ids.slice(0, 10).join(", ")}`);
  }
  if (unexpected_ids.length) {
    findings.push(`beklenmeyen ID: ${unexpected_ids.slice(0, 10).join(", ")}`);
  }
  if (!missing_ids.length && !unexpected_ids.length) {
    const orderMismatchIndex = ids.findIndex((id, index) => id !== PUBLISHED_QUESTION_ROSTER[index]);
    if (orderMismatchIndex !== -1) {
      findings.push(`sıra sapması: ${PUBLISHED_QUESTION_ROSTER[orderMismatchIndex]} beklenirken ${ids[orderMismatchIndex]} bulundu`);
    }
  }

  return {
    findings,
    missing_ids,
    unexpected_ids,
    published_count: PUBLISHED_QUESTION_ROSTER.length,
    actual_count: questions.length,
    unexpected_supplemental_count: unexpected_ids.length
  };
}

export function findBannedTermHits(questions) {
  const fields = [
    "question",
    "correct_explanation",
    "learning_objective",
    "confusion_note"
  ];

  const results = [];

  for (const question of questions) {
    const hits = [];
    const buckets = {
      question: question.question,
      options: Object.values(question.options || {}).join(" || "),
      correct_explanation: question.correct_explanation,
      distractor_explanations: Object.values(question.distractor_explanations || {}).join(" || "),
      learning_objective: question.learning_objective,
      confusion_note: question.confusion_note || ""
    };

    for (const [field, value] of Object.entries(buckets)) {
      const normalized = normalizeForMatch(value);
      const matched = BANNED_META_PATTERNS.filter((pattern) => pattern.test(normalized)).map((pattern) => pattern.toString());
      if (matched.length) {
        hits.push({ field, patterns: matched });
      }
    }

    if (hits.length) {
      results.push({ id: question.id, hits });
    }
  }

  return results;
}

export function findLowercaseStarts(questions) {
  return questions
    .filter((question) => /^\p{Ll}/u.test(String(question.question || "").trim()))
    .map((question) => question.id);
}

export function scanPlaceholderFiles(rootDir = process.cwd()) {
  const findings = [];

  for (const relativePath of PLACEHOLDER_SCAN_FILES) {
    const filePath = path.join(rootDir, relativePath);
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, "utf8");
    const matches = PLACEHOLDER_PATTERNS.filter((entry) => entry.pattern.test(content)).map((entry) => entry.label);
    if (matches.length) {
      findings.push({ file: relativePath, matches });
    }
  }

  return findings;
}
