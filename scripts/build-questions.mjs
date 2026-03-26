import path from "node:path";
import { splitQuestionsByExamScope } from "../src/content/exam-scope.mjs";
import { midtermExpansionQuestions } from "../src/content/questions/midterm-expansion.mjs";
import { buildQuestionBank } from "./lib/question-bank.mjs";
import { writeJson } from "./lib/utils.mjs";

const ROOT = process.cwd();
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");

function difficultyTotals(questions) {
  return questions.reduce(
    (acc, question) => {
      acc[question.difficulty] = (acc[question.difficulty] || 0) + 1;
      return acc;
    },
    { Kolay: 0, Orta: 0, Zor: 0 }
  );
}

function normalizeTopic(questions) {
  const grouped = new Map();
  for (const question of questions) {
    const key = `${question.exam_scope}::${question.source_pdf}::${question.source_topic}::${question.source_subtopic}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        exam_scope: question.exam_scope,
        source_pdf: question.source_pdf,
        topic: question.source_topic,
        subtopic: question.source_subtopic,
        question_ids: [],
        tags: new Set(),
        difficulties: { Kolay: 0, Orta: 0, Zor: 0 }
      });
    }
    const entry = grouped.get(key);
    entry.question_ids.push(question.id);
    entry.difficulties[question.difficulty] += 1;
    for (const tag of question.tags) {
      entry.tags.add(tag);
    }
  }

  return [...grouped.values()].map((entry) => ({
    ...entry,
    question_count: entry.question_ids.length,
    tags: [...entry.tags].sort((a, b) => a.localeCompare(b, "tr"))
  }));
}

function buildTopicIndex(questions) {
  return {
    totals: {
      all: questions.length,
      ...difficultyTotals(questions)
    },
    topics: normalizeTopic(questions),
    by_pdf: [...new Set(questions.map((question) => question.source_pdf))]
      .sort((a, b) => a.localeCompare(b, "tr"))
      .map((pdf) => ({
        source_pdf: pdf,
        exam_scope: questions.find((question) => question.source_pdf === pdf)?.exam_scope || "review_needed",
        question_count: questions.filter((question) => question.source_pdf === pdf).length
      }))
  };
}

export async function buildQuestions() {
  const allQuestions = buildQuestionBank().slice().sort((a, b) => a.id.localeCompare(b.id, "en"));
  const split = splitQuestionsByExamScope(allQuestions);
  const midtermNewQuestionIds = new Set(midtermExpansionQuestions.map((question) => question.id));
  const midtermNewQuestions = allQuestions.filter((question) => midtermNewQuestionIds.has(question.id));

  const byDifficulty = {
    Kolay: allQuestions.filter((question) => question.difficulty === "Kolay"),
    Orta: allQuestions.filter((question) => question.difficulty === "Orta"),
    Zor: allQuestions.filter((question) => question.difficulty === "Zor")
  };

  const topicIndex = {
    generatedAt: new Date().toISOString(),
    totals: {
      all: allQuestions.length,
      easy: byDifficulty.Kolay.length,
      medium: byDifficulty.Orta.length,
      hard: byDifficulty.Zor.length,
      midterm: split.midterm.length,
      final: split.final.length,
      review_needed: split.review_needed.length
    },
    topics: normalizeTopic(allQuestions),
    by_pdf: [...new Set(allQuestions.map((question) => question.source_pdf))]
      .sort((a, b) => a.localeCompare(b, "tr"))
      .map((pdf) => ({
        source_pdf: pdf,
        exam_scope: allQuestions.find((question) => question.source_pdf === pdf)?.exam_scope || "review_needed",
        question_count: allQuestions.filter((question) => question.source_pdf === pdf).length
      })),
    by_scope: {
      midterm: buildTopicIndex(split.midterm),
      final: buildTopicIndex(split.final),
      review_needed: buildTopicIndex(split.review_needed)
    }
  };

  writeJson(path.join(QUESTIONS_DIR, "all-questions.json"), allQuestions);
  writeJson(path.join(QUESTIONS_DIR, "midterm-questions.json"), split.midterm);
  writeJson(path.join(QUESTIONS_DIR, "final-questions.json"), split.final);
  writeJson(path.join(QUESTIONS_DIR, "review-needed-questions.json"), split.review_needed);
  writeJson(path.join(QUESTIONS_DIR, "midterm-new-questions.json"), midtermNewQuestions);
  writeJson(path.join(QUESTIONS_DIR, "easy-questions.json"), byDifficulty.Kolay);
  writeJson(path.join(QUESTIONS_DIR, "medium-questions.json"), byDifficulty.Orta);
  writeJson(path.join(QUESTIONS_DIR, "hard-questions.json"), byDifficulty.Zor);
  writeJson(path.join(QUESTIONS_DIR, "topic-index.json"), topicIndex);
  writeJson(path.join(QUESTIONS_DIR, "midterm-topic-index.json"), topicIndex.by_scope.midterm);
  writeJson(path.join(QUESTIONS_DIR, "final-topic-index.json"), topicIndex.by_scope.final);
  writeJson(path.join(QUESTIONS_DIR, "review-needed-topic-index.json"), topicIndex.by_scope.review_needed);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildQuestions();
}
