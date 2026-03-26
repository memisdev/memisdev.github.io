import fs from "node:fs";
import path from "node:path";
import { CURRICULUM_MAP, DEDUP_RULES, PDF_ANALYSES } from "../src/content/curriculum.mjs";
import { PDF_EXAM_SCOPE_MAP, splitQuestionsByExamScope } from "../src/content/exam-scope.mjs";
import { buildQuestionBank, buildSubtopicCoverage } from "./lib/question-bank.mjs";
import { loadPdfInventory } from "./lib/pdf-inventory.mjs";
import { summarizePageRange, writeJson, writeText } from "./lib/utils.mjs";

const ROOT = process.cwd();
const ANALYSIS_DIR = path.join(ROOT, "output", "analysis");
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadQuestions() {
  const questionsPath = path.join(QUESTIONS_DIR, "all-questions.json");
  return fs.existsSync(questionsPath) ? loadJson(questionsPath) : buildQuestionBank();
}

function densityTarget(density) {
  return { low: 2, medium: 3, high: 4, very_high: 6 }[density] || 2;
}

function annotateInventoryWithScope(inventory) {
  const examScopeByFile = new Map(PDF_EXAM_SCOPE_MAP.map((entry) => [entry.file_name, entry.exam_scope]));
  return inventory.map((item) => ({
    ...item,
    exam_scope: examScopeByFile.get(item.fileName) || "review_needed"
  }));
}

function inventoryMarkdown(inventory) {
  const lines = [
    "# PDF Envanteri",
    "",
    `Toplam ${inventory.length} PDF işlendi.`,
    "",
    "| PDF | Scope | Sayfa | İşlenen sayfa | Anlamlı sayfa | Okunabilirlik | Ana konu alanları |",
    "| --- | --- | ---: | ---: | ---: | --- | --- |"
  ];

  for (const item of inventory) {
    const analysis = PDF_ANALYSES.find((entry) => entry.pdf === item.fileName);
    lines.push(
      `| ${item.fileName} | ${item.exam_scope} | ${item.totalPages} | ${item.processedPages} | ${item.substantivePages} | ${item.readabilityStatus} | ${
        analysis?.mainHeadings.slice(0, 3).join("; ") || item.topic
      } |`
    );
  }

  return `${lines.join("\n")}\n`;
}

function coverageMarkdown(inventory) {
  const inventoryMap = new Map(inventory.map((item) => [item.fileName, item]));
  const scopeMap = new Map(PDF_EXAM_SCOPE_MAP.map((entry) => [entry.file_name, entry.exam_scope]));
  const lines = ["# PDF Bazlı Kapsam Haritası", ""];

  for (const entry of PDF_ANALYSES) {
    const inventoryItem = inventoryMap.get(entry.pdf);
    lines.push(`## ${entry.pdf}`, "");
    lines.push(`- Scope: ${scopeMap.get(entry.pdf) || "review_needed"}`);
    lines.push(`- Özet: ${entry.summary}`);
    lines.push(`- İşlem durumu: ${inventoryItem?.readabilityStatus || "bilinmiyor"}`, "");
    lines.push("### Ana başlıklar", ...entry.mainHeadings.map((item) => `- ${item}`), "");
    lines.push(
      "### Alt başlıklar",
      ...entry.subtopics.map((item) => `- ${item.name} (s. ${item.pages[0]}-${item.pages[1]})`),
      ""
    );
  }

  return `${lines.join("\n")}\n`;
}

function curriculumMarkdown(entries = CURRICULUM_MAP) {
  const lines = [
    "# Birleşik Müfredat Haritası",
    "",
    "| Scope | Konu | Alt konu | Öğrenme hedefi | Kritik ayrım | Yoğunluk | Kaynak PDF | Kaynak sayfalar |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |"
  ];

  const scopeByPdf = new Map(PDF_EXAM_SCOPE_MAP.map((entry) => [entry.file_name, entry.exam_scope]));

  for (const entry of entries) {
    lines.push(
      `| ${scopeByPdf.get(entry.sourcePdf) || "review_needed"} | ${entry.topic} | ${entry.subtopic} | ${entry.learningObjective} | ${entry.criticalDistinction} | ${entry.questionDensityNeed} | ${entry.sourcePdf} | ${summarizePageRange(
        entry.sourcePages
      )} |`
    );
  }

  return `${lines.join("\n")}\n`;
}

function dedupMarkdown() {
  const lines = ["# Tekrar / Çakışma Temizliği Raporu", ""];
  for (const item of DEDUP_RULES) {
    lines.push(`## ${item.overlap}`, "", `- Karar: ${item.decision}`, "");
  }
  return `${lines.join("\n")}\n`;
}

function groupCurriculumByTopic(entries) {
  const grouped = new Map();
  for (const entry of entries) {
    if (!grouped.has(entry.topic)) {
      grouped.set(entry.topic, {
        title: entry.topic,
        questionDensity: entry.questionDensityNeed,
        sources: new Set(),
        learningObjectives: [],
        subtopics: []
      });
    }
    const group = grouped.get(entry.topic);
    group.sources.add(entry.sourcePdf);
    group.subtopics.push(entry.subtopic);
    group.learningObjectives.push(entry.learningObjective);
    const order = { low: 1, medium: 2, high: 3, very_high: 4 };
    if (order[entry.questionDensityNeed] > order[group.questionDensity]) {
      group.questionDensity = entry.questionDensityNeed;
    }
  }

  return [...grouped.values()].map((entry) => ({
    ...entry,
    sources: [...entry.sources]
  }));
}

function buildMidtermCoverageRows(questions) {
  const coverageByKey = new Map(
    buildSubtopicCoverage(questions)
      .filter((row) => row.questionIds.some(Boolean))
      .map((row) => [`${row.sourcePdf}::${row.subtopic}`, row])
  );
  const midtermPdfs = new Set(
    PDF_EXAM_SCOPE_MAP.filter((entry) => entry.exam_scope === "midterm").map((entry) => entry.file_name)
  );

  return CURRICULUM_MAP.filter((entry) => midtermPdfs.has(entry.sourcePdf)).map((entry) => {
    const key = `${entry.sourcePdf}::${entry.subtopic}`;
    const coverage = coverageByKey.get(key) || {
      actualCount: 0,
      questionIds: []
    };
    const recommendedQuestionDensity = densityTarget(entry.questionDensityNeed);
    const gap = recommendedQuestionDensity - coverage.actualCount;
    return {
      source_pdf: entry.sourcePdf,
      topic: entry.topic,
      subtopic: entry.subtopic,
      learning_objectives: [entry.learningObjective],
      confusion_points: [entry.criticalDistinction],
      current_question_count: coverage.actualCount,
      recommended_question_density: recommendedQuestionDensity,
      question_density_need: entry.questionDensityNeed,
      gap_count: Math.max(0, gap),
      gap_status: gap > 0 ? "gap" : coverage.actualCount === recommendedQuestionDensity ? "covered" : "strong",
      source_pages: entry.sourcePages,
      question_ids: coverage.questionIds
    };
  });
}

function buildExamScopeMapMarkdown() {
  const lines = [
    "# Exam Scope Map",
    "",
    "| PDF | Scope | Gerekçe | Kapsanan başlıklar |",
    "| --- | --- | --- | --- |"
  ];

  for (const entry of PDF_EXAM_SCOPE_MAP) {
    lines.push(
      `| ${entry.file_name} | ${entry.exam_scope} | ${entry.reason} | ${entry.covered_topics.join("; ")} |`
    );
  }

  return `${lines.join("\n")}\n`;
}

function buildQuestionScopeAuditMarkdown(questions, split) {
  const byPdf = PDF_EXAM_SCOPE_MAP.map((entry) => ({
    file_name: entry.file_name,
    exam_scope: entry.exam_scope,
    question_count: questions.filter((question) => question.source_pdf === entry.file_name).length
  }));

  const lines = [
    "# Question Scope Audit",
    "",
    `- Toplam mevcut soru sayısı: ${questions.length}`,
    `- Midterm'e atanan mevcut soru sayısı: ${split.midterm.length}`,
    `- Finale atanan mevcut soru sayısı: ${split.final.length}`,
    `- Review-needed sayısı: ${split.review_needed.length}`,
    "",
    "## PDF Bazlı Dağılım",
    "",
    "| PDF | Scope | Soru sayısı |",
    "| --- | --- | ---: |",
    ...byPdf.map((row) => `| ${row.file_name} | ${row.exam_scope} | ${row.question_count} |`)
  ];

  if (split.review_needed.length) {
    lines.push(
      "",
      "## Review Needed",
      "",
      "| ID | source_pdf | source_topic | source_subtopic |",
      "| --- | --- | --- | --- |",
      ...split.review_needed.map(
        (question) =>
          `| ${question.id} | ${question.source_pdf || "-"} | ${question.source_topic || "-"} | ${
            question.source_subtopic || "-"
          } |`
      )
    );
  }

  return `${lines.join("\n")}\n`;
}

function buildMidtermCoverageMarkdown(rows) {
  const lines = [
    "# Midterm Coverage Map",
    "",
    "| PDF | Konu | Alt konu | Öğrenme hedefi | Karıştırılan nokta | Mevcut soru | Önerilen yoğunluk | Durum |",
    "| --- | --- | --- | --- | --- | ---: | ---: | --- |"
  ];

  for (const row of rows) {
    lines.push(
      `| ${row.source_pdf} | ${row.topic} | ${row.subtopic} | ${row.learning_objectives.join("; ")} | ${row.confusion_points.join(
        "; "
      )} | ${row.current_question_count} | ${row.recommended_question_density} | ${row.gap_status} |`
    );
  }

  return `${lines.join("\n")}\n`;
}

function buildMidtermGapMarkdown(rows) {
  const gaps = rows.filter((row) => row.gap_count > 0).sort(
    (a, b) => b.gap_count - a.gap_count || a.subtopic.localeCompare(b.subtopic, "tr")
  );
  const lines = [
    "# Midterm Gap Report",
    "",
    `- Gap görülen alt konu sayısı: ${gaps.length}`,
    `- Güçlü kapsanan alt konu sayısı: ${rows.filter((row) => row.gap_status === "strong").length}`,
    ""
  ];

  if (!gaps.length) {
    lines.push("- Midterm tarafında önerilen yoğunluğun altında kalan alt konu yok.", "");
    return `${lines.join("\n")}\n`;
  }

  lines.push("| Alt konu | Mevcut | Hedef | Eksik |", "| --- | ---: | ---: | ---: |");
  for (const gap of gaps) {
    lines.push(
      `| ${gap.subtopic} | ${gap.current_question_count} | ${gap.recommended_question_density} | ${gap.gap_count} |`
    );
  }

  return `${lines.join("\n")}\n`;
}

function buildScopeQaReportMarkdown({ questions, split, midtermRows }) {
  const midtermFiles = new Set(
    PDF_EXAM_SCOPE_MAP.filter((entry) => entry.exam_scope === "midterm").map((entry) => entry.file_name)
  );
  const finalFiles = new Set(
    PDF_EXAM_SCOPE_MAP.filter((entry) => entry.exam_scope === "final").map((entry) => entry.file_name)
  );

  const midtermLeakage = split.midterm.filter((question) => !midtermFiles.has(question.source_pdf));
  const finalLeakage = split.final.filter((question) => !finalFiles.has(question.source_pdf));
  const reviewLeakage = split.review_needed.filter((question) => question.source_pdf && finalFiles.has(question.source_pdf));
  const strengthenedMidtermSubtopics = midtermRows.filter((row) => row.gap_count > 0).map((row) => row.subtopic);

  const lines = [
    "# Scope QA Report",
    "",
    `- Toplam soru: ${questions.length}`,
    `- Midterm sızıntı sayısı: ${midtermLeakage.length}`,
    `- Final sızıntı sayısı: ${finalLeakage.length}`,
    `- Review-needed yanlış yönlendirme sayısı: ${reviewLeakage.length}`,
    `- Midterm gap izlenen alt konular: ${strengthenedMidtermSubtopics.length}`,
    "",
    "## Guardrails",
    "- `exam_scope` alanı her soru için zorunlu hale getirildi.",
    "- Scope ataması doğrudan canonical PDF scope map üzerinden yapılıyor.",
    "- Site artık yalnız aktif scope datasetini yüklüyor.",
    "- Yanlışlar listesi scope bazlı tutuluyor; scope değişince havuz da değişiyor.",
    "- Kullanıcı yüzünde karışık mod kaldırıldı; scope seçmeden soru akışına girilmiyor."
  ];

  return `${lines.join("\n")}\n`;
}

export async function buildAnalysis() {
  const questions = loadQuestions();
  const split = splitQuestionsByExamScope(questions);
  const inventory = annotateInventoryWithScope(loadPdfInventory(ROOT));
  const midtermCoverageRows = buildMidtermCoverageRows(questions);
  const byScopeCurriculum = {
    midterm: CURRICULUM_MAP.filter((entry) =>
      PDF_EXAM_SCOPE_MAP.some((scope) => scope.file_name === entry.sourcePdf && scope.exam_scope === "midterm")
    ),
    final: CURRICULUM_MAP.filter((entry) =>
      PDF_EXAM_SCOPE_MAP.some((scope) => scope.file_name === entry.sourcePdf && scope.exam_scope === "final")
    )
  };

  const coverageSummary = {
    generatedAt: new Date().toISOString(),
    inventory,
    pdfAnalyses: PDF_ANALYSES,
    scopeMap: PDF_EXAM_SCOPE_MAP,
    curriculumMap: CURRICULUM_MAP,
    mergedCurriculum: groupCurriculumByTopic(CURRICULUM_MAP),
    dedupRules: DEDUP_RULES,
    questionTotals: {
      all: questions.length,
      midterm: split.midterm.length,
      final: split.final.length,
      review_needed: split.review_needed.length
    },
    by_scope: {
      midterm: {
        inventory: inventory.filter((item) => item.exam_scope === "midterm"),
        curriculumMap: byScopeCurriculum.midterm,
        mergedCurriculum: groupCurriculumByTopic(byScopeCurriculum.midterm),
        questionCount: split.midterm.length,
        subtopicCoverage: midtermCoverageRows
      },
      final: {
        inventory: inventory.filter((item) => item.exam_scope === "final"),
        curriculumMap: byScopeCurriculum.final,
        mergedCurriculum: groupCurriculumByTopic(byScopeCurriculum.final),
        questionCount: split.final.length,
        subtopicCoverage: buildSubtopicCoverage(questions).filter(
          (row) => PDF_EXAM_SCOPE_MAP.find((scope) => scope.file_name === row.sourcePdf)?.exam_scope === "final"
        )
      }
    },
    midtermCoverageMap: midtermCoverageRows
  };

  writeText(path.join(ANALYSIS_DIR, "pdf-inventory.md"), inventoryMarkdown(inventory));
  writeText(path.join(ANALYSIS_DIR, "coverage-map.md"), coverageMarkdown(inventory));
  writeText(path.join(ANALYSIS_DIR, "curriculum-map.md"), curriculumMarkdown());
  writeText(path.join(ANALYSIS_DIR, "merged-curriculum-map.md"), curriculumMarkdown());
  writeText(path.join(ANALYSIS_DIR, "dedup-report.md"), dedupMarkdown());
  writeText(path.join(ANALYSIS_DIR, "exam-scope-map.md"), buildExamScopeMapMarkdown());
  writeText(path.join(ANALYSIS_DIR, "question-scope-audit.md"), buildQuestionScopeAuditMarkdown(questions, split));
  writeText(path.join(ANALYSIS_DIR, "midterm-coverage-map.md"), buildMidtermCoverageMarkdown(midtermCoverageRows));
  writeText(path.join(ANALYSIS_DIR, "midterm-gap-report.md"), buildMidtermGapMarkdown(midtermCoverageRows));
  writeText(path.join(ANALYSIS_DIR, "scope-qa-report.md"), buildScopeQaReportMarkdown({ questions, split, midtermRows: midtermCoverageRows }));
  writeJson(path.join(ANALYSIS_DIR, "coverage-summary.json"), coverageSummary);
  writeJson(path.join(ANALYSIS_DIR, "exam-scope-map.json"), PDF_EXAM_SCOPE_MAP);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildAnalysis();
}
