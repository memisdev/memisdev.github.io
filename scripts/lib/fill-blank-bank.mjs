import { CURRICULUM_MAP } from "../../src/content/curriculum.mjs";
import { MIDTERM_PDF_FILES } from "../../src/content/exam-scope.mjs";
import { MIDTERM_FILL_BLANK_BANK, MIDTERM_FILL_BLANK_TARGETS } from "../../src/content/fill-blanks/index.mjs";
import { BANNED_META_PATTERNS, normalizeForMatch, stemSimilarity } from "./final-question-bank.mjs";

const SAFE_SHORT_ANSWERS = new Set(["4", "tm", "atp", "gtp", "nad", "ros", "ap"]);

function sortById(left, right) {
  return left.id.localeCompare(right.id, "en");
}

function promptKey(value) {
  return normalizeForMatch(String(value || "").replace(/_{3,}/g, " "));
}

function answerKey(value) {
  return normalizeForMatch(
    String(value || "")
      .replace(/[αΑ]/g, "alpha")
      .replace(/[βΒ]/g, "beta")
      .replace(/[ωΩ]/g, "omega")
  );
}

function targetMap() {
  return new Map(
    MIDTERM_FILL_BLANK_TARGETS.map((item) => [`${item.sourcePdf}::${item.subtopic}`, item])
  );
}

export function buildFillBlankBank() {
  return [...MIDTERM_FILL_BLANK_BANK].sort(sortById);
}

export function midtermFillBlankCurriculum() {
  return CURRICULUM_MAP.filter((entry) => MIDTERM_PDF_FILES.includes(entry.sourcePdf));
}

export function buildFillBlankCoverageRows(entries = buildFillBlankBank()) {
  const targets = targetMap();

  return midtermFillBlankCurriculum().map((entry) => {
    const key = `${entry.sourcePdf}::${entry.subtopic}`;
    const target = targets.get(key);
    const matched = entries.filter(
      (item) => item.source_pdf === entry.sourcePdf && item.source_subtopic === entry.subtopic
    );
    const targetCount = target?.targetCount || 0;
    const suitability = targetCount > 0 ? "uygun" : "uygun_degil";
    const actualCount = matched.length;
    const gapCount = Math.max(0, targetCount - actualCount);

    return {
      source_pdf: entry.sourcePdf,
      topic: entry.topic,
      subtopic: entry.subtopic,
      learning_objective: entry.learningObjective,
      fill_blank_focus: target?.fillBlankFocus || "",
      target_count: targetCount,
      actual_count: actualCount,
      gap_count: gapCount,
      suitability,
      status:
        targetCount === 0 ? "out_of_scope" : gapCount > 0 ? "gap" : actualCount > targetCount ? "over" : "covered",
      question_ids: matched.map((item) => item.id)
    };
  });
}

export function detectFillBlankExactDuplicates(entries) {
  const seen = new Map();
  const duplicates = [];

  for (const entry of entries) {
    const key = promptKey(entry.prompt_text);
    if (!key) continue;
    if (seen.has(key)) {
      duplicates.push({ left: seen.get(key), right: entry.id });
    } else {
      seen.set(key, entry.id);
    }
  }

  return duplicates;
}

export function detectFillBlankNearDuplicates(entries) {
  const duplicates = [];

  for (let i = 0; i < entries.length; i += 1) {
    for (let j = i + 1; j < entries.length; j += 1) {
      const left = entries[i];
      const right = entries[j];
      if (left.source_pdf !== right.source_pdf) continue;
      if (left.source_subtopic !== right.source_subtopic) continue;

      const promptSimilarity = stemSimilarity(left.prompt_text, right.prompt_text);
      const sameAnswer = answerKey(left.blank_answer) === answerKey(right.blank_answer);

      if (promptSimilarity >= 0.82 || (sameAnswer && promptSimilarity >= 0.65)) {
        duplicates.push({
          left: left.id,
          right: right.id,
          source_pdf: left.source_pdf,
          source_subtopic: left.source_subtopic,
          similarity: Number(promptSimilarity.toFixed(2)),
          same_answer: sameAnswer
        });
      }
    }
  }

  return duplicates;
}

export function findFillBlankBannedTermHits(entries) {
  const results = [];

  for (const entry of entries) {
    const buckets = {
      prompt_text: entry.prompt_text,
      explanation: entry.explanation,
      learning_objective: entry.learning_objective
    };
    const hits = [];

    for (const [field, value] of Object.entries(buckets)) {
      const normalized = normalizeForMatch(value);
      const matched = BANNED_META_PATTERNS.filter((pattern) => pattern.test(normalized)).map((pattern) => pattern.toString());
      if (matched.length) {
        hits.push({ field, patterns: matched });
      }
    }

    if (hits.length) {
      results.push({ id: entry.id, hits });
    }
  }

  return results;
}

export function findFillBlankAcceptedAnswerIssues(entries) {
  const issues = [];

  for (const entry of entries) {
    const normalizedAccepted = new Map();
    const currentIssues = [];

    if (!entry.accepted_answers?.length) {
      currentIssues.push("accepted_answers boş");
    }

    for (const answer of entry.accepted_answers || []) {
      const key = answerKey(answer);
      if (!key) {
        currentIssues.push("boş normalize edilen accepted_answer bulundu");
        continue;
      }
      if (normalizedAccepted.has(key)) {
        currentIssues.push(`normalize çakışması: ${answer}`);
      } else {
        normalizedAccepted.set(key, answer);
      }

      if (key.length < 2 && !SAFE_SHORT_ANSWERS.has(key)) {
        currentIssues.push(`aşırı kısa accepted_answer: ${answer}`);
      }
    }

    const canonicalKey = answerKey(entry.blank_answer);
    if (!normalizedAccepted.has(canonicalKey)) {
      currentIssues.push("blank_answer accepted_answers içinde normalize eşleşmiyor");
    }

    if (currentIssues.length) {
      issues.push({ id: entry.id, issues: [...new Set(currentIssues)] });
    }
  }

  return issues;
}

export function buildFillBlankReviewQueue(entries = buildFillBlankBank()) {
  const exactDuplicates = detectFillBlankExactDuplicates(entries);
  const nearDuplicates = detectFillBlankNearDuplicates(entries);
  const bannedHits = findFillBlankBannedTermHits(entries);
  const acceptedAnswerIssues = findFillBlankAcceptedAnswerIssues(entries);
  const reviewMap = new Map();

  for (const item of exactDuplicates) {
    for (const id of [item.left, item.right]) {
      if (!reviewMap.has(id)) reviewMap.set(id, new Set());
      reviewMap.get(id).add("exact_duplicate_prompt");
    }
  }

  for (const item of nearDuplicates) {
    for (const id of [item.left, item.right]) {
      if (!reviewMap.has(id)) reviewMap.set(id, new Set());
      reviewMap.get(id).add("near_duplicate_prompt");
    }
  }

  for (const item of bannedHits) {
    if (!reviewMap.has(item.id)) reviewMap.set(item.id, new Set());
    reviewMap.get(item.id).add("banned_meta_language");
  }

  for (const item of acceptedAnswerIssues) {
    if (!reviewMap.has(item.id)) reviewMap.set(item.id, new Set());
    reviewMap.get(item.id).add("accepted_answer_issue");
  }

  return [...reviewMap.entries()]
    .sort((left, right) => left[0].localeCompare(right[0], "en"))
    .map(([id, reasons]) => ({
      id,
      reasons: [...reasons]
    }));
}
