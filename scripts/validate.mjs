import fs from "node:fs";
import path from "node:path";
import {
  BANNED_META_PATTERN_STRINGS,
  buildSubtopicCoverage,
  comparePublishedRoster,
  detectExactDuplicatePrompts,
  detectNearDuplicates,
  findBannedTermHits,
  findLeadingDiscourseMarkerHits,
  findLowercaseStarts,
  findOptionBalanceFlags,
  scanPlaceholderFiles
} from "./lib/final-question-bank.mjs";
import { writeJson, writeText } from "./lib/utils.mjs";

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, "output", "raw");
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");
const ANALYSIS_DIR = path.join(ROOT, "output", "analysis");
const DOCS_DATA_DIR = path.join(ROOT, "docs", "data");

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

const LETTERS = ["A", "B", "C", "D", "E"];

function compareArtifacts(outputQuestions, siteQuestions, qualitySummary, siteMeta) {
  const findings = [];

  if (!siteQuestions || JSON.stringify(outputQuestions) !== JSON.stringify(siteQuestions)) {
    findings.push("output/questions/all-questions.json ile docs/data/all-questions.json eşleşmiyor");
  }

  if (siteMeta) {
    if (siteMeta.totals?.all !== outputQuestions.length) {
      findings.push("site-meta toplam soru sayısı ile gerçek soru sayısı eşleşmiyor");
    }
    if (siteMeta.quality?.questionCount && siteMeta.quality.questionCount !== qualitySummary.questionCount) {
      findings.push("site-meta quality.questionCount ile quality-report.json eşleşmiyor");
    }
    if (
      siteMeta.quality?.banned_term_hits_count != null &&
      siteMeta.quality.banned_term_hits_count !== qualitySummary.banned_term_hits_count
    ) {
      findings.push("site-meta banned_term_hits_count ile quality-report.json eşleşmiyor");
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
    `- Kolay / Orta / Zor dağılımı: Kolay ${summary.difficultyTotals.Kolay}, Orta ${summary.difficultyTotals.Orta}, Zor ${summary.difficultyTotals.Zor}`,
    `- OCR özeti: yerleşik metin ${summary.ocrSummary.text}, yerel OCR ${summary.ocrSummary.ocr_local}, harici OCR ${summary.ocrSummary.ocr_external}, görsel boş ${summary.ocrSummary.visual_blank}`,
    `- Yasak meta dil kontrolü sonucu: ${
      summary.banned_term_hits_count === 0 ? "Temiz" : `${summary.banned_term_hits_count} ihlal`
    }`,
    `- Leading discourse marker bulgusu: ${
      summary.leading_discourse_marker_count === 0 ? "Yok" : `${summary.leading_discourse_marker_count} soru`
    }`,
    `- Şık denge uyarısı: ${
      summary.option_balance_flag_count === 0 ? "Yok" : `${summary.option_balance_flag_count} soru`
    }`,
    `- Küçük harfle başlayan soru kökü: ${
      summary.lowercase_start_count === 0 ? "Yok" : `${summary.lowercase_start_count} ihlal`
    }`,
    `- Exact duplicate soru kökü: ${
      summary.exact_duplicate_prompt_count === 0 ? "Yok" : `${summary.exact_duplicate_prompt_count} çift`
    }`,
    `- Near-duplicate soru kökü: ${
      summary.near_duplicate_count === 0 ? "Yok" : `${summary.near_duplicate_count} çift`
    }`,
    `- Placeholder dosya bulgusu: ${
      summary.placeholder_file_findings.length === 0 ? "Yok" : `${summary.placeholder_file_findings.length} dosya`
    }`,
    `- Eşik altı kalan alt konu var mı?: ${
      summary.uncoveredCurriculum.length === 0 ? "Yok" : `${summary.uncoveredCurriculum.length} alt konu eşik altında`
    }`,
    `- Yayınlanan roster sapması var mı?: ${
      summary.roster_mismatch_findings.length === 0 ? "Yok" : `${summary.roster_mismatch_findings.length} bulgu`
    }`,
    `- Beklenmeyen supplemental ID sayısı: ${summary.unexpected_supplemental_count}`,
    `- Artifact senkron sorunu var mı?: ${
      summary.artifact_sync_findings.length === 0 ? "Yok" : `${summary.artifact_sync_findings.length} bulgu`
    }`,
    "",
    "## Yasak Desenler",
    ...BANNED_META_PATTERN_STRINGS.map((pattern) => `- \`${pattern}\``),
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

  if (summary.banned_term_hits_count) {
    lines.push(
      "",
      "## Yasak Meta Dil Bulguları",
      ...summary.banned_term_hit_details.map(
        (item) =>
          `- ${item.id}: ${item.hits
            .map((hit) => `${hit.field} -> ${hit.patterns.join(", ")}`)
            .join(" | ")}`
      )
    );
  }

  if (summary.lowercase_start_count) {
    lines.push("", "## Küçük Harfle Başlayan Soru Kökleri", ...summary.lowercase_start_ids.map((id) => `- ${id}`));
  }

  if (summary.leading_discourse_marker_count) {
    lines.push(
      "",
      "## Leading Discourse Marker Bulguları",
      ...summary.leading_discourse_marker_details.map(
        (item) => `- ${item.id}: ${item.hits.map((hit) => `${hit.field} -> ${hit.patterns.join(", ")}`).join(" | ")}`
      )
    );
  }

  if (summary.option_balance_flag_count) {
    lines.push(
      "",
      "## Şık Denge Bulguları",
      ...summary.option_balance_flag_details.map(
        (item) =>
          `- ${item.id}: ${item.flags
            .map((flag) => `${flag.type} (${Object.entries(flag.details).map(([key, value]) => `${key}=${value}`).join(", ")})`)
            .join(" | ")}`
      )
    );
  }

  if (summary.placeholder_file_findings.length) {
    lines.push(
      "",
      "## Placeholder Dosya Bulguları",
      ...summary.placeholder_file_findings.map((item) => `- ${item.file}: ${item.matches.join(", ")}`)
    );
  }

  lines.push(
    "",
    "## Tekrar / Çakışma Özeti",
    `- Birebir tekrar soru: ${summary.exact_duplicate_prompt_count}`,
    `- Near-duplicate soru: ${summary.near_duplicate_count}`,
    `- Mükerrer ID: ${summary.duplicateIds.length}`
  );

  if (summary.exact_duplicate_prompt_count) {
    lines.push(
      "",
      "## Exact Duplicate Çiftleri",
      ...summary.exact_duplicate_prompt_pairs.map((pair) => `- ${pair.left} ~ ${pair.right}`)
    );
  }

  if (summary.near_duplicate_count) {
    lines.push(
      "",
      "## Near-Duplicate Çiftleri",
      ...summary.near_duplicate_pairs.map(
        (pair) =>
          `- ${pair.left} ~ ${pair.right} (${pair.source_subtopic}, benzerlik ${pair.similarity})`
      )
    );
  }

  if (summary.uncoveredCurriculum.length) {
    lines.push(
      "",
      "## Eşik Altı Kalan Alt Konular",
      ...summary.uncoveredCurriculum.map(
        (entry) =>
          `- ${entry.sourcePdf} / ${entry.subtopic}: ${entry.actualCount}/${entry.requiredMinimum}`
      )
    );
  }

  if (summary.fieldErrors.length) {
    lines.push("", "## Şema Hataları", ...summary.fieldErrors.map((item) => `- ${item}`));
  }

  if (summary.artifact_sync_findings.length) {
    lines.push("", "## Artifact Senkron Bulguları", ...summary.artifact_sync_findings.map((item) => `- ${item}`));
  }

  if (summary.roster_mismatch_findings.length) {
    lines.push("", "## Yayınlanan Roster Bulguları", ...summary.roster_mismatch_findings.map((item) => `- ${item}`));
  }

  lines.push(
    "",
    "## PDF İşleme Özeti",
    ...summary.inventory.map(
      (item) =>
        `- ${item.fileName}: ${item.totalPages} sayfa, durum ${item.readabilityStatus}, yerel OCR ${item.statusCounts.ocr_local}, harici OCR ${item.statusCounts.ocr_external}, görsel boş ${item.statusCounts.visual_blank}`
    )
  );

  return `${lines.join("\n")}\n`;
}

export async function validate() {
  const inventory = loadJson(path.join(RAW_DIR, "pdf-inventory.json"));
  const questions = loadJson(path.join(QUESTIONS_DIR, "all-questions.json"));
  const siteQuestions = fs.existsSync(path.join(DOCS_DATA_DIR, "all-questions.json"))
    ? loadJson(path.join(DOCS_DATA_DIR, "all-questions.json"))
    : null;
  const siteMeta = fs.existsSync(path.join(DOCS_DATA_DIR, "site-meta.json"))
    ? loadJson(path.join(DOCS_DATA_DIR, "site-meta.json"))
    : null;

  const { duplicateIds, fieldErrors } = validateSchema(questions);
  const bannedTermHitDetails = findBannedTermHits(questions);
  const bannedTermHitsIds = bannedTermHitDetails.map((item) => item.id);
  const leadingDiscourseMarkerDetails = findLeadingDiscourseMarkerHits(questions);
  const lowercaseStartIds = findLowercaseStarts(questions);
  const exactDuplicatePromptPairs = detectExactDuplicatePrompts(questions);
  const nearDuplicatePairs = detectNearDuplicates(questions);
  const optionBalanceFlagDetails = findOptionBalanceFlags(questions);
  const subtopicCoverage = buildSubtopicCoverage(questions);
  const uncoveredCurriculum = subtopicCoverage.filter((entry) => entry.actualCount < entry.requiredMinimum);
  const placeholderFileFindings = scanPlaceholderFiles(ROOT);
  const rosterComparison = comparePublishedRoster(questions);

  const difficultyTotals = questions.reduce(
    (acc, question) => {
      acc[question.difficulty] += 1;
      return acc;
    },
    { Kolay: 0, Orta: 0, Zor: 0 }
  );

  const totalPages = inventory.reduce((sum, item) => sum + item.totalPages, 0);
  const ocrSummary = inventory.reduce(
    (acc, item) => {
      acc.text += item.statusCounts.text || 0;
      acc.ocr_local += item.statusCounts.ocr_local || 0;
      acc.ocr_external += item.statusCounts.ocr_external || 0;
      acc.visual_blank += item.statusCounts.visual_blank || 0;
      return acc;
    },
    { text: 0, ocr_local: 0, ocr_external: 0, visual_blank: 0 }
  );

  const provisionalSummary = {
    generatedAt: new Date().toISOString(),
    inventory,
    pdfCount: inventory.length,
    totalPages,
    ocrSummary,
    topicCount: [...new Set(subtopicCoverage.map((entry) => entry.topic))].length,
    subtopicCount: subtopicCoverage.length,
    questionCount: questions.length,
    difficultyTotals,
    duplicateIds,
    exact_duplicate_prompt_count: exactDuplicatePromptPairs.length,
    exact_duplicate_prompt_pairs: exactDuplicatePromptPairs,
    near_duplicate_count: nearDuplicatePairs.length,
    near_duplicate_pairs: nearDuplicatePairs,
    fieldErrors,
    banned_term_hits_count: bannedTermHitsIds.length,
    banned_term_hits_ids: bannedTermHitsIds,
    banned_term_hit_details: bannedTermHitDetails,
    leading_discourse_marker_count: leadingDiscourseMarkerDetails.length,
    leading_discourse_marker_details: leadingDiscourseMarkerDetails,
    lowercase_start_count: lowercaseStartIds.length,
    lowercase_start_ids: lowercaseStartIds,
    option_balance_flag_count: optionBalanceFlagDetails.length,
    option_balance_flag_details: optionBalanceFlagDetails,
    placeholder_file_findings: placeholderFileFindings,
    topicTotals: topicDistribution(questions),
    subtopic_coverage: subtopicCoverage,
    uncoveredCurriculum,
    roster_mismatch_findings: rosterComparison.findings,
    roster_missing_ids: rosterComparison.missing_ids,
    roster_unexpected_ids: rosterComparison.unexpected_ids,
    unexpected_supplemental_count: rosterComparison.unexpected_supplemental_count
  };

  const artifactSyncFindings = compareArtifacts(questions, siteQuestions, provisionalSummary, siteMeta);

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
