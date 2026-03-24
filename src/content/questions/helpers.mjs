function cleanText(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function capitalizeStemStart(question) {
  return question.replace(/^([a-zçğıöşü])/u, (match) => match.toLocaleUpperCase("tr-TR"));
}

function normalizeQuestionText(question) {
  const cleaned = cleanText(question)
    .replace(/\s+([?.,;:])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();

  return capitalizeStemStart(cleaned);
}

function normalizeExplanationText(text) {
  return cleanText(text)
    .replace(/\s+([?.,;:])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function makeQuestion({
  id,
  sourcePdf,
  sourceTopic,
  sourceSubtopic,
  sourcePages,
  difficulty,
  questionType,
  question,
  options,
  correctAnswer,
  correctExplanation,
  distractorExplanations,
  learningObjective,
  tags,
  confusionNote
}) {
  return {
    id,
    source_pdf: sourcePdf,
    source_topic: sourceTopic,
    source_subtopic: sourceSubtopic || sourceTopic,
    source_pages: sourcePages,
    difficulty,
    question_type: questionType,
    question: normalizeQuestionText(question),
    options: Object.fromEntries(
      Object.entries(options || {}).map(([key, value]) => [key, normalizeQuestionText(value)])
    ),
    correct_answer: correctAnswer,
    correct_explanation: normalizeExplanationText(correctExplanation),
    distractor_explanations: Object.fromEntries(
      Object.entries(distractorExplanations || {}).map(([key, value]) => [key, normalizeExplanationText(value)])
    ),
    learning_objective: normalizeExplanationText(learningObjective),
    tags: (tags || []).map((tag) => normalizeExplanationText(tag)),
    ...(confusionNote ? { confusion_note: normalizeExplanationText(confusionNote) } : {})
  };
}
