import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { buildFinalQuestionBank, normalizeForMatch, stemSimilarity } from "./lib/final-question-bank.mjs";
import { getManualExternalReview, EXTERNAL_SOURCE_CONFIG } from "./lib/external-merge-config.mjs";
import { writeJson, writeText } from "./lib/utils.mjs";
import { INTERNAL_CANONICAL_QUESTION_BANK } from "../src/content/questions/index.mjs";
import { externalAcceptedQuestions } from "../src/content/questions/external-accepted.mjs";

const ROOT = process.cwd();
const EXTERNAL_SOURCE_PATH = path.join(ROOT, "myygunduz.github.io-main", "myygunduz.github.io-main", "data.js");
const OUTPUT_QUESTIONS_PATH = path.join(ROOT, "output", "questions", "all-questions.json");
const MERGE_DIR = path.join(ROOT, "output", "merge");

const DECISION_LABELS = {
  accept_unique: "Acceptable unique candidate",
  exact_duplicate: "Exact duplicate",
  near_duplicate: "Near-duplicate / learning-objective overlap",
  quality_reject: "Quality reject",
  scope_reject: "Scope reject"
};

const DECISION_ORDER = [
  "accept_unique",
  "exact_duplicate",
  "near_duplicate",
  "quality_reject",
  "scope_reject"
];

const QUESTION_TYPE_RULES = [
  { pattern: /\b(ne ad verilir|adı nedir)\b/iu, value: "tanım" },
  { pattern: /\b(neden|niçin|temel nedeni|avantajı)\b/iu, value: "neden-sonuç" },
  { pattern: /\b(nasıl|hangi basamak|hangi işlem|nasıldır)\b/iu, value: "süreç" },
  { pattern: /\b(farkı|karşılaştırıldığında)\b/iu, value: "karşılaştırma" },
  { pattern: /\b(hangisi doğrudur|hangisi uygundur|hangisi beklenir)\b/iu, value: "yorum" }
];

function loadExternalQuestions() {
  const source = fs.readFileSync(EXTERNAL_SOURCE_PATH, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${source}\nthis.SUBJECTS = SUBJECTS;`, sandbox);

  return sandbox.SUBJECTS.flatMap((subject) =>
    subject.questions.map((question) => {
      const config = EXTERNAL_SOURCE_CONFIG[subject.id];
      return {
        subject_id: subject.id,
        subject_title: subject.title,
        source_pdf: config.sourcePdf,
        source_topic: config.sourceTopic,
        external_id: question.id,
        question: question.question,
        options: question.options.map((value, index) => ({
          letter: ["A", "B", "C", "D", "E"][index],
          value
        })),
        correct_answer: ["A", "B", "C", "D", "E"][question.correct],
        correct_option_text: question.options[question.correct],
        explanation: question.explanation
      };
    })
  );
}

function inferQuestionType(question) {
  for (const rule of QUESTION_TYPE_RULES) {
    if (rule.pattern.test(question)) return rule.value;
  }
  return "tanım";
}

function learningObjectiveCandidate(inferredSubtopic, questionType) {
  const suffixByType = {
    tanım: "temel kavramı tanımak",
    "neden-sonuç": "biyokimyasal sonucu yorumlamak",
    süreç: "süreç basamağını tanımlamak",
    karşılaştırma: "kavramsal ayrımı yapmak",
    yorum: "doğru biyokimyasal ifadeyi seçmek"
  };

  return `${inferredSubtopic} kapsamında ${suffixByType[questionType] || "ilgili kavramı açıklamak"}.`;
}

function similarityScore(externalQuestion, internalQuestion, subtopicHint = "") {
  const questionScore = stemSimilarity(externalQuestion.question, internalQuestion.question);
  const explanationScore = stemSimilarity(externalQuestion.explanation, internalQuestion.correct_explanation);
  const optionScore = stemSimilarity(
    externalQuestion.correct_option_text,
    `${internalQuestion.options?.[internalQuestion.correct_answer] || ""} ${internalQuestion.correct_explanation}`
  );
  const contextScore = stemSimilarity(
    `${externalQuestion.question} ${externalQuestion.explanation}`,
    `${internalQuestion.question} ${internalQuestion.correct_explanation} ${internalQuestion.learning_objective} ${(
      internalQuestion.tags || []
    ).join(" ")}`
  );
  const subtopicBoost =
    subtopicHint && normalizeForMatch(subtopicHint) === normalizeForMatch(internalQuestion.source_subtopic) ? 0.18 : 0;

  return questionScore * 0.42 + explanationScore * 0.26 + optionScore * 0.12 + contextScore * 0.2 + subtopicBoost;
}

function bestMatchesFor(externalQuestion, internalQuestions, manualCase) {
  const byId = new Map(internalQuestions.map((question) => [question.id, question]));

  if (manualCase?.matchIds?.length) {
    return manualCase.matchIds
      .map((id) => byId.get(id))
      .filter(Boolean)
      .map((question) => ({
        id: question.id,
        question: question.question,
        source_pdf: question.source_pdf,
        source_subtopic: question.source_subtopic,
        similarity: Number(
          similarityScore(externalQuestion, question, manualCase.inferredSubtopic || question.source_subtopic).toFixed(3)
        )
      }));
  }

  return internalQuestions
    .filter((question) => question.source_pdf === externalQuestion.source_pdf)
    .map((question) => ({
      id: question.id,
      question: question.question,
      source_pdf: question.source_pdf,
      source_subtopic: question.source_subtopic,
      similarity: Number(
        similarityScore(externalQuestion, question, manualCase?.inferredSubtopic || "").toFixed(3)
      )
    }))
    .sort((left, right) => right.similarity - left.similarity || left.id.localeCompare(right.id, "en"))
    .slice(0, 3);
}

function defaultNearDuplicateReason(matchList) {
  const top = matchList[0];
  if (!top) {
    return "Aynı konu kümesinde mevcut sorular aynı öğrenme hedefini zaten yeterince temsil ediyor.";
  }

  return `${top.id} ve yakın eşleşmeleri, ${top.source_subtopic} altında aynı bilgi noktasını ve doğru cevap mantığını zaten ölçüyor.`;
}

function normalizedExternalRow(externalQuestion, internalQuestions) {
  const manualCase = getManualExternalReview(externalQuestion.external_id);
  const matches = bestMatchesFor(externalQuestion, internalQuestions, manualCase);
  const inferredSubtopic = manualCase?.inferredSubtopic || matches[0]?.source_subtopic || externalQuestion.source_topic;
  const questionType = inferQuestionType(externalQuestion.question);
  const decision = manualCase?.decision || "near_duplicate";
  const reason = manualCase?.reason || defaultNearDuplicateReason(matches);
  const notes =
    manualCase?.notes ||
    (decision === "near_duplicate"
      ? "Metin farklı olsa da aynı alt konu ve öğrenme hedefi tekrarına düşüyor."
      : "");

  return {
    external_id: externalQuestion.external_id,
    external_question: externalQuestion.question,
    external_options: externalQuestion.options,
    correct_answer: externalQuestion.correct_answer,
    explanation: externalQuestion.explanation,
    inferred_topic: externalQuestion.source_topic,
    inferred_subtopic: inferredSubtopic,
    learning_objective_candidate: learningObjectiveCandidate(inferredSubtopic, questionType),
    question_type_candidate: questionType,
    decision,
    reason,
    closest_internal_matches: matches.map((match) => ({
      id: match.id,
      question: match.question,
      source_pdf: match.source_pdf,
      source_subtopic: match.source_subtopic,
      similarity: match.similarity
    })),
    notes,
    ...(manualCase?.acceptedQuestionId ? { accepted_question_id: manualCase.acceptedQuestionId } : {})
  };
}

function loadUpdatedQuestions() {
  if (fs.existsSync(OUTPUT_QUESTIONS_PATH)) {
    return JSON.parse(fs.readFileSync(OUTPUT_QUESTIONS_PATH, "utf8"));
  }

  return buildFinalQuestionBank();
}

function summaryCounts(reviewRows) {
  const counts = {
    total_external_questions: reviewRows.length,
    accepted_count: 0,
    exact_duplicate_count: 0,
    near_duplicate_count: 0,
    quality_reject_count: 0,
    scope_reject_count: 0
  };

  for (const row of reviewRows) {
    if (row.decision === "accept_unique") counts.accepted_count += 1;
    if (row.decision === "exact_duplicate") counts.exact_duplicate_count += 1;
    if (row.decision === "near_duplicate") counts.near_duplicate_count += 1;
    if (row.decision === "quality_reject") counts.quality_reject_count += 1;
    if (row.decision === "scope_reject") counts.scope_reject_count += 1;
  }

  return counts;
}

function renderMatchLine(matches) {
  if (!matches.length) return "- Yakın iç eşleşme bulunamadı.";
  return `- Yakın iç eşleşmeler: ${matches
    .map((match) => `${match.id} (${match.source_subtopic})`)
    .join(", ")}`;
}

function reviewMarkdown(reviewRows, counts) {
  const lines = [
    "# Dış Set Merge Review",
    "",
    "## Özet",
    `- Toplam dış soru sayısı: ${counts.total_external_questions}`,
    `- Accepted count: ${counts.accepted_count}`,
    `- Exact duplicate count: ${counts.exact_duplicate_count}`,
    `- Near-duplicate count: ${counts.near_duplicate_count}`,
    `- Quality reject count: ${counts.quality_reject_count}`,
    `- Scope reject count: ${counts.scope_reject_count}`,
    "- Kısa karar özeti: muhafazakâr merge uygulanarak yalnız gerçekten yeni, kapsam içi ve revize edilmeye değer maddeler kabul edildi.",
    ""
  ];

  for (const decision of DECISION_ORDER) {
    const rows = reviewRows.filter((row) => row.decision === decision);
    if (!rows.length) continue;

    lines.push(`## ${DECISION_LABELS[decision]}`);
    for (const row of rows) {
      lines.push(`### ${row.external_id}`);
      lines.push(`- Dış soru: ${row.external_question}`);
      lines.push(`- Karar: ${DECISION_LABELS[row.decision]}`);
      lines.push(`- Gerekçe: ${row.reason}`);
      lines.push(renderMatchLine(row.closest_internal_matches));
      if (row.decision === "accept_unique") {
        lines.push(`- Yeni soru ID'si: ${row.accepted_question_id}`);
        lines.push(`- Bağlanan alt konu: ${row.inferred_subtopic}`);
      }
      if (row.notes) {
        lines.push(`- Not: ${row.notes}`);
      }
      lines.push("");
    }
  }

  return lines.join("\n").trimEnd() + "\n";
}

export async function reviewExternalMerge() {
  const externalQuestions = loadExternalQuestions();
  const internalQuestions = INTERNAL_CANONICAL_QUESTION_BANK;
  const reviewRows = externalQuestions.map((question) => normalizedExternalRow(question, internalQuestions));
  const counts = summaryCounts(reviewRows);
  const updatedQuestions = loadUpdatedQuestions();
  const acceptedIds = new Set(externalAcceptedQuestions.map((question) => question.id));
  const acceptedQuestions = updatedQuestions.filter((question) => acceptedIds.has(question.id));

  writeJson(path.join(MERGE_DIR, "merge-review.json"), reviewRows);
  writeText(path.join(MERGE_DIR, "merge-review.md"), reviewMarkdown(reviewRows, counts));
  writeJson(path.join(MERGE_DIR, "accepted-new-questions.json"), acceptedQuestions);
  writeJson(path.join(MERGE_DIR, "updated-all-questions.json"), updatedQuestions);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  reviewExternalMerge();
}
