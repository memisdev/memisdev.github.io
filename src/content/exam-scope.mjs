import { PDF_SOURCES } from "./pdfs.mjs";
import { PDF_ANALYSES } from "./curriculum.mjs";

export const EXAM_SCOPES = ["midterm", "final", "review_needed"];

export const MIDTERM_PDF_FILES = [
  "Karbonhidratlar ve Glikobiyoloji.pdf",
  "Nükleotidler Ve Nükleik Asitler.pdf",
  "Lipitler.pdf"
];

export const FINAL_PDF_FILES = PDF_SOURCES.map((source) => source.fileName).filter(
  (fileName) => !MIDTERM_PDF_FILES.includes(fileName)
);

const SCOPE_REASONS = {
  "Karbonhidratlar ve Glikobiyoloji.pdf":
    "Kullanıcının verdiği düzeltilmiş sınav kapsamına göre vize havuzuna dahildir.",
  "Nükleotidler Ve Nükleik Asitler.pdf":
    "Kullanıcının verdiği düzeltilmiş sınav kapsamına göre vize havuzuna dahildir.",
  "Lipitler.pdf":
    "Kullanıcının verdiği düzeltilmiş sınav kapsamına göre vize havuzuna dahildir.",
  "Hücre Zarından Madde Geçişi.pdf":
    "Kullanıcının verdiği düzeltilmiş sınav kapsamına göre final havuzuna dahildir.",
  "Karbohidrat Metabolizması Pentoz Fosfat Yolağı.pdf":
    "Karbonhidrat yapısı değil metabolizma odaklı olduğu için final havuzuna ayrılmıştır.",
  "Sitrik Asit Çevrimi.pdf":
    "Kullanıcının verdiği düzeltilmiş sınav kapsamına göre final havuzuna dahildir.",
  "Oksidatif Fosforillenme.pdf":
    "Kullanıcının verdiği düzeltilmiş sınav kapsamına göre final havuzuna dahildir."
};

export const PDF_EXAM_SCOPE_MAP = PDF_SOURCES.map((source) => {
  const analysis = PDF_ANALYSES.find((entry) => entry.pdf === source.fileName);
  const exam_scope = MIDTERM_PDF_FILES.includes(source.fileName) ? "midterm" : "final";

  return {
    file_name: source.fileName,
    exam_scope,
    reason: SCOPE_REASONS[source.fileName],
    covered_topics: analysis?.mainHeadings || [source.topic]
  };
});

const SCOPE_BY_FILE = new Map(PDF_EXAM_SCOPE_MAP.map((entry) => [entry.file_name, entry.exam_scope]));

export function getExamScopeForPdf(fileName) {
  return SCOPE_BY_FILE.get(fileName) || "review_needed";
}

export function isMidtermPdf(fileName) {
  return getExamScopeForPdf(fileName) === "midterm";
}

export function isFinalPdf(fileName) {
  return getExamScopeForPdf(fileName) === "final";
}

export function buildQuestionExamScope(question) {
  if (!question?.source_pdf) {
    return "review_needed";
  }
  return getExamScopeForPdf(question.source_pdf);
}

export function splitQuestionsByExamScope(questions) {
  return questions.reduce(
    (acc, question) => {
      const examScope = question.exam_scope || buildQuestionExamScope(question);
      if (examScope === "midterm") {
        acc.midterm.push(question);
      } else if (examScope === "final") {
        acc.final.push(question);
      } else {
        acc.review_needed.push(question);
      }
      return acc;
    },
    { midterm: [], final: [], review_needed: [] }
  );
}
