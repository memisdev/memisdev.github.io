import fs from "node:fs";
import path from "node:path";
import {
  buildFillBlankBank,
  buildFillBlankReviewQueue,
  detectFillBlankExactDuplicates,
  detectFillBlankNearDuplicates,
  findFillBlankAcceptedAnswerIssues,
  findFillBlankBannedTermHits
} from "./lib/fill-blank-bank.mjs";
import {
  buildSubtopicCoverage,
  comparePublishedRoster,
  detectExactDuplicatePrompts,
  detectNearDuplicates,
  findBannedTermHits,
  findLeadingDiscourseMarkerHits,
  findLowercaseStarts,
  findOptionBalanceFlags,
  scanPlaceholderFiles
} from "./lib/question-bank.mjs";
import { loadPdfInventory } from "./lib/pdf-inventory.mjs";
import { writeJson, writeText } from "./lib/utils.mjs";

const ROOT = process.cwd();
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");
const ANALYSIS_DIR = path.join(ROOT, "output", "analysis");
const DOCS_DATA_DIR = path.join(ROOT, "docs", "data");
const LETTERS = ["A", "B", "C", "D", "E"];

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function topicDistribution(questions) {
  const counts = new Map();
  for (const question of questions) {
    counts.set(question.source_pdf, (counts.get(question.source_pdf) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], "tr"))
    .map(([source_pdf, question_count]) => ({ source_pdf, question_count }));
}

function validateSchema(questions) {
  const requiredFields = [
    "id",
    "exam_scope",
    "source_pdf",
    "source_topic",
    "source_subtopic",
    "difficulty",
    "question_type",
    "question",
    "correct_answer",
    "correct_explanation",
    "learning_objective"
  ];

  const fieldErrors = [];
  const ids = new Set();
  const duplicateIds = [];

  for (const question of questions) {
    if (ids.has(question.id)) {
      duplicateIds.push(question.id);
    }
    ids.add(question.id);

    for (const field of requiredFields) {
      if (!question[field]) {
        fieldErrors.push(`${question.id}: eksik alan -> ${field}`);
      }
    }

    const optionKeys = Object.keys(question.options || {});
    if (optionKeys.length !== 5 || !LETTERS.every((key) => optionKeys.includes(key))) {
      fieldErrors.push(`${question.id}: seçenek yapısı 5 şıklı değil`);
    }
    if (!question.options?.[question.correct_answer]) {
      fieldErrors.push(`${question.id}: doğru cevap seçeneklerde yok`);
    }
  }

  return { duplicateIds, fieldErrors };
}

function validateFillBlankSchema(entries) {
  const requiredFields = [
    "id",
    "mode",
    "exam_scope",
    "source_pdf",
    "source_topic",
    "source_subtopic",
    "difficulty",
    "prompt_text",
    "blank_answer",
    "accepted_answers",
    "normalization_rules",
    "explanation",
    "learning_objective"
  ];

  const ids = new Set();
  const duplicateIds = [];
  const fieldErrors = [];

  for (const entry of entries) {
    if (ids.has(entry.id)) {
      duplicateIds.push(entry.id);
    }
    ids.add(entry.id);

    for (const field of requiredFields) {
      if (
        entry[field] === undefined ||
        entry[field] === null ||
        entry[field] === "" ||
        (Array.isArray(entry[field]) && entry[field].length === 0)
      ) {
        fieldErrors.push(`${entry.id}: eksik fill-blank alanı -> ${field}`);
      }
    }

    if (entry.mode !== "fill_blank") {
      fieldErrors.push(`${entry.id}: mode fill_blank değil`);
    }

    if (entry.exam_scope !== "midterm") {
      fieldErrors.push(`${entry.id}: exam_scope midterm değil`);
    }
  }

  return { duplicateIds, fieldErrors };
}

function compareArtifacts(outputArtifacts, siteArtifacts, qualitySummary, siteMeta) {
  const findings = [];

  for (const [name, outputValue] of Object.entries(outputArtifacts)) {
    if (!siteArtifacts[name] || JSON.stringify(outputValue) !== JSON.stringify(siteArtifacts[name])) {
      findings.push(`${name} output ile docs/data arasında eşleşmiyor`);
    }
  }

  if (siteMeta) {
    if (siteMeta.scopeTotals?.all !== outputArtifacts.allQuestions.length) {
      findings.push("site-meta scopeTotals.all gerçek soru sayısı ile eşleşmiyor");
    }
    if (siteMeta.scopeTotals?.midterm !== outputArtifacts.midtermQuestions.length) {
      findings.push("site-meta midterm toplamı ile midterm dataset eşleşmiyor");
    }
    if (siteMeta.scopeTotals?.final !== outputArtifacts.finalQuestions.length) {
      findings.push("site-meta final toplamı ile final dataset eşleşmiyor");
    }
    if (siteMeta.quality?.questionCount && siteMeta.quality.questionCount !== qualitySummary.questionCount) {
      findings.push("site-meta quality.questionCount ile quality-report.json eşleşmiyor");
    }
    if (outputArtifacts.fillBlankQuestions && siteMeta.study_modes?.fill_blank?.question_count !== outputArtifacts.fillBlankQuestions.length) {
      findings.push("site-meta fill_blank question_count ile dataset eşleşmiyor");
    }
  }

  return findings;
}

function qualityMarkdown(summary) {
  const lines = [
    "# Kalite Kontrol Raporu",
    "",
    `- Toplam PDF sayısı: ${summary.pdfCount}`,
    `- Toplam sayfa hacmi: ${summary.totalPages}`,
    `- Toplam konu sayısı: ${summary.topicCount}`,
    `- Toplam alt konu sayısı: ${summary.subtopicCount}`,
    `- Toplam üretilen soru sayısı: ${summary.questionCount}`,
    `- Midterm / Final / Review-needed: ${summary.scopeTotals.midterm} / ${summary.scopeTotals.final} / ${summary.scopeTotals.review_needed}`,
    `- Midterm için yeni eklenen soru sayısı: ${summary.midterm_new_question_count}`,
    `- Kolay / Orta / Zor dağılımı: Kolay ${summary.difficultyTotals.Kolay}, Orta ${summary.difficultyTotals.Orta}, Zor ${summary.difficultyTotals.Zor}`,
    `- Yasak meta dil kontrolü sonucu: ${
      summary.banned_term_hits_count === 0 ? "Temiz" : `${summary.banned_term_hits_count} ihlal`
    }`,
    `- Exact duplicate soru kökü: ${
      summary.exact_duplicate_prompt_count === 0 ? "Yok" : `${summary.exact_duplicate_prompt_count} çift`
    }`,
    `- Near-duplicate soru kökü: ${
      summary.near_duplicate_count === 0 ? "Yok" : `${summary.near_duplicate_count} çift`
    }`,
    `- Scope sızıntısı: midterm ${summary.scope_leakage.midterm}, final ${summary.scope_leakage.final}`,
    `- Artifact senkron sorunu var mı?: ${
      summary.artifact_sync_findings.length === 0 ? "Yok" : `${summary.artifact_sync_findings.length} bulgu`
    }`,
    `- Fill-in-the-blank soru sayısı: ${summary.fill_blank_question_count}`,
    `- Fill-in-the-blank near-duplicate: ${
      summary.fill_blank_near_duplicate_count === 0 ? "Yok" : `${summary.fill_blank_near_duplicate_count} çift`
    }`,
    `- Fill-in-the-blank accepted answer issue: ${
      summary.fill_blank_accepted_answer_issue_count === 0
        ? "Temiz"
        : `${summary.fill_blank_accepted_answer_issue_count} kayıt`
    }`,
    "",
    "## Konu başına soru dağılımı",
    ...summary.topicTotals.map((item) => `- ${item.source_pdf}: ${item.question_count}`),
    "",
    "## Alt Konu Kapsama Tablosu",
    "",
    "| PDF | Alt konu | Yoğunluk | Minimum gerekli | Gerçek sayı | Durum |",
    "| --- | --- | --- | ---: | ---: | --- |",
    ...summary.subtopic_coverage.map(
      (row) =>
        `| ${row.sourcePdf} | ${row.subtopic} | ${row.questionDensityNeed} | ${row.requiredMinimum} | ${row.actualCount} | ${row.status} |`
    )
  ];

  if (summary.uncoveredCurriculum.length) {
    lines.push(
      "",
      "## Eşik Altı Kalan Alt Konular",
      ...summary.uncoveredCurriculum.map(
        (entry) => `- ${entry.sourcePdf} / ${entry.subtopic}: ${entry.actualCount}/${entry.requiredMinimum}`
      )
    );
  }

  if (summary.fieldErrors.length) {
    lines.push("", "## Şema Hataları", ...summary.fieldErrors.map((item) => `- ${item}`));
  }

  if (summary.fill_blank_field_errors.length) {
    lines.push("", "## Fill-in-the-Blank Şema Hataları", ...summary.fill_blank_field_errors.map((item) => `- ${item}`));
  }

  if (summary.artifact_sync_findings.length) {
    lines.push("", "## Artifact Senkron Bulguları", ...summary.artifact_sync_findings.map((item) => `- ${item}`));
  }

  if (summary.roster_mismatch_findings.length) {
    lines.push("", "## Yayınlanan Roster Bulguları", ...summary.roster_mismatch_findings.map((item) => `- ${item}`));
  }

  return `${lines.join("\n")}\n`;
}

export async function validate() {
  const inventory = loadPdfInventory(ROOT);
  const allQuestions = loadJson(path.join(QUESTIONS_DIR, "all-questions.json"));
  const midtermQuestions = loadJson(path.join(QUESTIONS_DIR, "midterm-questions.json"));
  const finalQuestions = loadJson(path.join(QUESTIONS_DIR, "final-questions.json"));
  const reviewNeededQuestions = loadJson(path.join(QUESTIONS_DIR, "review-needed-questions.json"));
  const midtermNewQuestions = loadJson(path.join(QUESTIONS_DIR, "midterm-new-questions.json"));
  const fillBlankQuestions = fs.existsSync(path.join(QUESTIONS_DIR, "midterm-fill-blanks.json"))
    ? loadJson(path.join(QUESTIONS_DIR, "midterm-fill-blanks.json"))
    : buildFillBlankBank();
  const fillBlankReviewQueue = fs.existsSync(path.join(QUESTIONS_DIR, "midterm-fill-blanks-review.json"))
    ? loadJson(path.join(QUESTIONS_DIR, "midterm-fill-blanks-review.json"))
    : buildFillBlankReviewQueue(fillBlankQuestions);
  const siteArtifacts = {
    allQuestions: fs.existsSync(path.join(DOCS_DATA_DIR, "all-questions.json"))
      ? loadJson(path.join(DOCS_DATA_DIR, "all-questions.json"))
      : null,
    midtermQuestions: fs.existsSync(path.join(DOCS_DATA_DIR, "midterm-questions.json"))
      ? loadJson(path.join(DOCS_DATA_DIR, "midterm-questions.json"))
      : null,
    finalQuestions: fs.existsSync(path.join(DOCS_DATA_DIR, "final-questions.json"))
      ? loadJson(path.join(DOCS_DATA_DIR, "final-questions.json"))
      : null,
    reviewNeededQuestions: fs.existsSync(path.join(DOCS_DATA_DIR, "review-needed-questions.json"))
      ? loadJson(path.join(DOCS_DATA_DIR, "review-needed-questions.json"))
      : null,
    fillBlankQuestions: fs.existsSync(path.join(DOCS_DATA_DIR, "midterm-fill-blanks.json"))
      ? loadJson(path.join(DOCS_DATA_DIR, "midterm-fill-blanks.json"))
      : null,
    fillBlankReviewQueue: fs.existsSync(path.join(DOCS_DATA_DIR, "midterm-fill-blanks-review.json"))
      ? loadJson(path.join(DOCS_DATA_DIR, "midterm-fill-blanks-review.json"))
      : null
  };
  const siteMeta = fs.existsSync(path.join(DOCS_DATA_DIR, "site-meta.json"))
    ? loadJson(path.join(DOCS_DATA_DIR, "site-meta.json"))
    : null;

  const { duplicateIds, fieldErrors } = validateSchema(allQuestions);
  const fillBlankSchema = validateFillBlankSchema(fillBlankQuestions);
  const bannedTermHitDetails = findBannedTermHits(allQuestions);
  const leadingDiscourseMarkerDetails = findLeadingDiscourseMarkerHits(allQuestions);
  const lowercaseStartIds = findLowercaseStarts(allQuestions);
  const exactDuplicatePromptPairs = detectExactDuplicatePrompts(allQuestions);
  const nearDuplicatePairs = detectNearDuplicates(allQuestions);
  const fillBlankExactDuplicatePairs = detectFillBlankExactDuplicates(fillBlankQuestions);
  const fillBlankNearDuplicatePairs = detectFillBlankNearDuplicates(fillBlankQuestions);
  const fillBlankBannedHitDetails = findFillBlankBannedTermHits(fillBlankQuestions);
  const fillBlankAcceptedAnswerIssueDetails = findFillBlankAcceptedAnswerIssues(fillBlankQuestions);
  const optionBalanceFlagDetails = findOptionBalanceFlags(allQuestions);
  const subtopicCoverage = buildSubtopicCoverage(allQuestions);
  const uncoveredCurriculum = subtopicCoverage.filter((entry) => entry.actualCount < entry.requiredMinimum);
  const placeholderFileFindings = scanPlaceholderFiles(ROOT);
  const rosterComparison = comparePublishedRoster(allQuestions);

  const difficultyTotals = allQuestions.reduce(
    (acc, question) => {
      acc[question.difficulty] += 1;
      return acc;
    },
    { Kolay: 0, Orta: 0, Zor: 0 }
  );

  const totalPages = inventory.reduce((sum, item) => sum + item.totalPages, 0);
  const scopeLeakage = {
    midterm: midtermQuestions.filter((question) => question.exam_scope !== "midterm").length,
    final: finalQuestions.filter((question) => question.exam_scope !== "final").length
  };

  const provisionalSummary = {
    generatedAt: new Date().toISOString(),
    inventory,
    pdfCount: inventory.length,
    totalPages,
    topicCount: [...new Set(subtopicCoverage.map((entry) => entry.topic))].length,
    subtopicCount: subtopicCoverage.length,
    questionCount: allQuestions.length,
    difficultyTotals,
    scopeTotals: {
      all: allQuestions.length,
      midterm: midtermQuestions.length,
      final: finalQuestions.length,
      review_needed: reviewNeededQuestions.length
    },
    midterm_new_question_count: midtermNewQuestions.length,
    duplicateIds,
    exact_duplicate_prompt_count: exactDuplicatePromptPairs.length,
    exact_duplicate_prompt_pairs: exactDuplicatePromptPairs,
    near_duplicate_count: nearDuplicatePairs.length,
    near_duplicate_pairs: nearDuplicatePairs,
    fieldErrors,
    fill_blank_duplicate_ids: fillBlankSchema.duplicateIds,
    fill_blank_field_errors: fillBlankSchema.fieldErrors,
    banned_term_hits_count: bannedTermHitDetails.length,
    banned_term_hit_details: bannedTermHitDetails,
    fill_blank_banned_term_hits_count: fillBlankBannedHitDetails.length,
    fill_blank_banned_term_hit_details: fillBlankBannedHitDetails,
    leading_discourse_marker_count: leadingDiscourseMarkerDetails.length,
    leading_discourse_marker_details: leadingDiscourseMarkerDetails,
    lowercase_start_count: lowercaseStartIds.length,
    lowercase_start_ids: lowercaseStartIds,
    option_balance_flag_count: optionBalanceFlagDetails.length,
    option_balance_flag_details: optionBalanceFlagDetails,
    fill_blank_question_count: fillBlankQuestions.length,
    fill_blank_review_queue_count: fillBlankReviewQueue.length,
    fill_blank_exact_duplicate_count: fillBlankExactDuplicatePairs.length,
    fill_blank_exact_duplicate_pairs: fillBlankExactDuplicatePairs,
    fill_blank_near_duplicate_count: fillBlankNearDuplicatePairs.length,
    fill_blank_near_duplicate_pairs: fillBlankNearDuplicatePairs,
    fill_blank_accepted_answer_issue_count: fillBlankAcceptedAnswerIssueDetails.length,
    fill_blank_accepted_answer_issue_details: fillBlankAcceptedAnswerIssueDetails,
    placeholder_file_findings: placeholderFileFindings,
    topicTotals: topicDistribution(allQuestions),
    subtopic_coverage: subtopicCoverage,
    uncoveredCurriculum,
    scope_leakage: scopeLeakage,
    roster_mismatch_findings: rosterComparison.findings,
    roster_missing_ids: rosterComparison.missing_ids,
    roster_unexpected_ids: rosterComparison.unexpected_ids,
    unexpected_supplemental_count: rosterComparison.unexpected_supplemental_count
  };

  const artifactSyncFindings = compareArtifacts(
    { allQuestions, midtermQuestions, finalQuestions, reviewNeededQuestions, fillBlankQuestions, fillBlankReviewQueue },
    siteArtifacts,
    provisionalSummary,
    siteMeta
  );

  const summary = {
    ...provisionalSummary,
    artifact_sync_findings: artifactSyncFindings
  };

  writeText(path.join(ANALYSIS_DIR, "quality-report.md"), qualityMarkdown(summary));
  writeJson(path.join(ANALYSIS_DIR, "quality-report.json"), summary);
  return summary;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  validate();
}
