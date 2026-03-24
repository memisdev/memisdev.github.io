import path from "node:path";
import { buildFinalQuestionBank } from "./lib/final-question-bank.mjs";
import { writeJson } from "./lib/utils.mjs";

const ROOT = process.cwd();
const QUESTIONS_DIR = path.join(ROOT, "output", "questions");

function normalizeTopic(questions) {
  const grouped = new Map();
  for (const question of questions) {
    const key = `${question.source_pdf}::${question.source_topic}::${question.source_subtopic}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
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

export async function buildQuestions() {
  const allQuestions = buildFinalQuestionBank().slice().sort((a, b) => a.id.localeCompare(b.id, "en"));
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
      hard: byDifficulty.Zor.length
    },
    topics: normalizeTopic(allQuestions),
    by_pdf: [...new Set(allQuestions.map((question) => question.source_pdf))]
      .sort((a, b) => a.localeCompare(b, "tr"))
      .map((pdf) => ({
        source_pdf: pdf,
        question_count: allQuestions.filter((question) => question.source_pdf === pdf).length
      }))
  };

  writeJson(path.join(QUESTIONS_DIR, "all-questions.json"), allQuestions);
  writeJson(path.join(QUESTIONS_DIR, "easy-questions.json"), byDifficulty.Kolay);
  writeJson(path.join(QUESTIONS_DIR, "medium-questions.json"), byDifficulty.Orta);
  writeJson(path.join(QUESTIONS_DIR, "hard-questions.json"), byDifficulty.Zor);
  writeJson(path.join(QUESTIONS_DIR, "topic-index.json"), topicIndex);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  buildQuestions();
}
