import fs from "node:fs";
import path from "node:path";
import { BASE_QUESTION_BANK } from "../src/content/questions/base.mjs";

const ROOT = process.cwd();
const OUTPUT_QUESTIONS_PATH = path.join(ROOT, "output", "questions", "all-questions.json");
const ROSTER_PATH = path.join(ROOT, "src", "content", "questions", "published-roster.mjs");
const SUPPLEMENTAL_PATH = path.join(ROOT, "src", "content", "questions", "curated-supplemental.mjs");
const LETTERS = ["A", "B", "C", "D", "E"];
const QUESTION_STEM_OVERRIDES = {
  "CHO-032": "Bir monosakkarit halka yapısına geçtiğinde anomer oluşumunu en doğru açıklayan ifade aşağıdakilerden hangisidir?",
  "CHO-044": "Lizozimin bakteri hücre duvarını zayıflatıcı etkisini en iyi açıklayan ifade aşağıdakilerden hangisidir?",
  "MEM-020": "Biyolojik zarların seçici geçirgenliği dikkate alındığında aşağıdaki ifadelerden hangisi beklenir?",
  "MEM-028": "Taşıyıcı ve kanal proteinleri karşılaştırıldığında aşağıdaki ifadelerden hangisi doğrudur?",
  "MEM-032": "Klorür-bikarbonat değiştiricisinin çalışması için aşağıdaki sonuçlardan hangisi beklenir?",
  "MET-041": "Mayalarda pirüvatın asetaldehit üzerinden etanole yönelmesini en doğru açıklayan ifade aşağıdakilerden hangisidir?",
  "MET-048": "Glukoneogenezde by-pass tepkimelerine neden ihtiyaç duyulduğunu en iyi açıklayan ifade aşağıdakilerden hangisidir?",
  "OXP-025": "Fotosentetik elektron akışında CO2 indirgenmesi ile su yükseltgenmesi birlikte düşünüldüğünde aşağıdaki ifadelerden hangisi doğrudur?",
  "OXP-032": "Kloroplast stroması ile tilakoit sistemi birlikte değerlendirildiğinde aşağıdaki ifadelerden hangisi doğrudur?"
};
const QUESTION_OPTION_OVERRIDES = {
  "CAC-026": {
    A: "Doğrudan ATP eşdeğeri oluşumu ve oksidatif katkı ayrımı",
    B: "Süksinil-KoA basamağında ATP eşdeğeri korunumu",
    C: "NADP+-bağımlı izositrat dehidrogenaz ile NADPH üretimi",
    D: "Sitratın izositrata tersinir izomerizasyonu",
    E: "Asetil-KoA ile oksaloasetat kondensasyonu"
  },
  "CHO-035": {
    A: "Karbonil grubunun yükseltgenmesi",
    B: "Anomerler arası mutarotasyon",
    C: "D-ribozdan D-ribuloz adlandırması",
    D: "İndirgen olmayan uç kavramı",
    E: "C-2 aminasyonu ve C-6 oksidasyonu"
  },
  "CHO-047": {
    A: "Hiyaluronan ve diğer sülfatlı GAG'lar",
    B: "Homosakkaritlerde alfa-beta bağ düzeni",
    C: "Yüzey bilgisi taşıyan glikokonjugatlar",
    D: "Serbest glukozun osmolarite sorunu",
    E: "Glikojen dallanması"
  },
  "LIP-021": {
    A: "Çift bağ sayısı",
    B: "Alfa-linolenik asit",
    C: "Karbon zinciri uzunluğu",
    D: "Doymamış bağların erime noktasını düşürmesi",
    E: "Suda çözünmeme özelliği"
  },
  "MEM-025": {
    A: "Sıvı-düzenli paketlenme",
    B: "Doymuş zincirlerin akışkanlığı azaltması",
    C: "GLUT aracılı pasif glukoz taşınması",
    D: "İntegral zar proteini",
    E: "SNARE ailesi"
  },
  "MEM-028": {
    A: "İyon seçiciliği ve zar potansiyeli düzenlenmesi",
    B: "Akuaporin aracılı su geçişi",
    C: "Endergonik taşınmanın egzergonik süreçle eşleşmesi",
    D: "Eritrositte hızlı hacim yanıtı",
    E: "Alternatif geçiş yolu ile aktivasyon enerjisinin düşmesi"
  },
  "NUC-022": {
    A: "Enerji birimi olarak görev yapma",
    B: "Pentoz tipinin ayırt ediciliği",
    C: "Azotlu baz-pentoz-fosfat bileşimi",
    D: "Adenin örneği",
    E: "Fosfatın ℗ ile gösterimi"
  },
  "NUC-024": {
    A: "Pürin bazı adenin",
    B: "Fosfatın ℗ ile gösterimi",
    C: "Enerji birimi işlevi",
    D: "A + G = T + C eşitliği",
    E: "A = T ve G = C kuralı"
  },
  "NUC-033": {
    A: "260 nm civarında UV soğurması",
    B: "Hibrit çift sarmal oluşturabilen tamamlayıcılık",
    C: "G-C içeriğine bağlı Tm artışı",
    D: "Sitozin deaminasyonunun urasil oluşturması",
    E: "Denatürasyonda kovalent bağların korunması"
  },
  "OXP-028": {
    A: "CO2'nin indirgenmesi ve suyun yükseltgenmesi",
    B: "Klorofil a/b ve bakteriyoklorofiller",
    C: "Işık ve karanlık tepkimelerin bölmesel ayrımı",
    D: "Karotenoid pigmentlerin ışık koruması",
    E: "Işığa bağlı fotofosforilasyon"
  },
  "OXP-033": {
    A: "CO2 indirgenmesi ile su yükseltgenmesi",
    B: "Işık ve karanlık tepkimelerin bölmesel ayrımı",
    C: "Karotenoid pigmentlerin ışık koruması",
    D: "Klorofil a/b ayrımı",
    E: "Işığa bağlı fotofosforilasyon"
  }
};

function loadPublishedQuestions() {
  return JSON.parse(fs.readFileSync(OUTPUT_QUESTIONS_PATH, "utf8"));
}

function normalizeApostrophes(value) {
  return String(value || "").replace(/[’`´]/g, "'");
}

function cleanText(value) {
  return normalizeApostrophes(value)
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\s+([?.,;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function sentenceCase(value) {
  return cleanText(value).replace(/^([a-zçğıöşü])/u, (match) => match.toLocaleUpperCase("tr-TR"));
}

function ensureEnd(value, punctuation = ".") {
  const trimmed = cleanText(value);
  if (!trimmed) return trimmed;
  if (/[?!.]$/u.test(trimmed)) return trimmed;
  return `${trimmed}${punctuation}`;
}

function normalizeForMatch(value) {
  return normalizeApostrophes(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ıİ]/g, "i")
    .replace(/[şŞ]/g, "s")
    .replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u")
    .replace(/[öÖ]/g, "o")
    .replace(/[çÇ]/g, "c")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function cleanMetaLead(text) {
  return cleanText(text)
    .replace(
      /^(?:Bu konuda|Bu bağlamda|Bu durumda|Burada|İlgili konuda|Kaynak içerik(?:te)?|Sunum(?:da|un)?|Slayt(?:ta|larda)?|PDF(?:'de|’de|ye göre|’ye göre)?)[,:]?\s*/iu,
      ""
    )
    .replace(/^(?:bu konuda|ilgili konuda)[,:]?\s*/iu, "")
    .replace(/\bilgili konudaı\b/giu, "ilgili konuda")
    .replace(/\bPDF(?:'de|’de|ye göre|’ye göre)\b/giu, "")
    .replace(/\bSlayt(?:ta|larda)?\b/giu, "")
    .replace(/\bSunum(?:da|un)?\b/giu, "")
    .replace(/\bKaynak içerik(?:te)?\b/giu, "")
    .replace(/\bmetinde\b/giu, "")
    .replace(/\bayrımı ayrımıdır\b/giu, "ayrımıdır")
    .replace(/\bbaşlığı başlığıyla\b/giu, "başlığıyla")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s*[,;:-]\s*/g, "")
    .trim();
}

function isShortOption(text) {
  const normalized = cleanMetaLead(text).replace(/[.?!]$/u, "");
  return normalized.length <= 56 && normalized.split(/\s+/).length <= 8 && !/[;:]/.test(normalized);
}

function isCompactOption(text) {
  const normalized = cleanMetaLead(text).replace(/[.?!]$/u, "");
  return normalized.length <= 84 && normalized.split(/\s+/).length <= 12 && !/[;:]/.test(normalized);
}

function phraseFromOption(text) {
  return cleanMetaLead(text).replace(/[.?!]$/u, "").trim();
}

function sentenceFromQuestion(question) {
  const optionText = cleanMetaLead(question.options[question.correct_answer]);
  const explanationText = cleanMetaLead(question.correct_explanation);

  if (!isShortOption(optionText) && optionText.length >= 48) {
    return sentenceCase(ensureEnd(optionText));
  }

  if (explanationText) {
    return sentenceCase(ensureEnd(explanationText));
  }

  return sentenceCase(ensureEnd(optionText));
}

function buildPhraseCandidate(question) {
  const raw = phraseFromOption(question.options[question.correct_answer]);
  if (!raw) return null;
  return {
    sourceSubtopic: question.source_subtopic,
    sourcePdf: question.source_pdf,
    text: raw
  };
}

function buildSentenceCandidate(question) {
  const text = sentenceFromQuestion(question);
  if (!text) return null;
  return {
    sourceSubtopic: question.source_subtopic,
    sourcePdf: question.source_pdf,
    text
  };
}

function byPdfMap(items) {
  const grouped = new Map();
  for (const item of items) {
    if (!grouped.has(item.sourcePdf)) {
      grouped.set(item.sourcePdf, []);
    }
    grouped.get(item.sourcePdf).push(item);
  }
  return grouped;
}

function uniqueByText(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const key = normalizeForMatch(item.text);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function subtopicOrder(questions) {
  const map = new Map();
  let index = 0;
  for (const question of questions) {
    const key = `${question.source_pdf}::${question.source_subtopic}`;
    if (!map.has(key)) {
      map.set(key, index);
      index += 1;
    }
  }
  return map;
}

function distanceScore(orderMap, leftPdf, leftSubtopic, rightSubtopic) {
  const leftKey = `${leftPdf}::${leftSubtopic}`;
  const rightKey = `${leftPdf}::${rightSubtopic}`;
  if (!orderMap.has(leftKey) || !orderMap.has(rightKey)) return 999;
  return Math.abs(orderMap.get(leftKey) - orderMap.get(rightKey));
}

function pickDistractors({
  pool,
  correctText,
  count,
  sourcePdf,
  sourceSubtopic,
  orderMap
}) {
  return uniqueByText(pool)
    .filter((item) => item.sourceSubtopic !== sourceSubtopic)
    .filter((item) => normalizeForMatch(item.text) !== normalizeForMatch(correctText))
    .sort((left, right) => {
      const leftDistance = distanceScore(orderMap, sourcePdf, sourceSubtopic, left.sourceSubtopic);
      const rightDistance = distanceScore(orderMap, sourcePdf, sourceSubtopic, right.sourceSubtopic);
      if (leftDistance !== rightDistance) return leftDistance - rightDistance;
      return Math.abs(left.text.length - correctText.length) - Math.abs(right.text.length - correctText.length);
    })
    .slice(0, count);
}

function buildQuestionStem(question, style) {
  const subtopic = question.source_subtopic;
  if (QUESTION_STEM_OVERRIDES[question.id]) {
    return QUESTION_STEM_OVERRIDES[question.id];
  }
  const variant = Number(question.id.split("-")[1]) % 4;

  const sentenceVariants = [
    `${subtopic} ile ilgili aşağıdaki ifadelerden hangisi doğrudur?`,
    `${subtopic} değerlendirildiğinde aşağıdaki ifadelerden hangisi uygundur?`,
    `${subtopic} açısından aşağıdaki yargılardan hangisi bilgiyle uyumludur?`,
    `${subtopic} için aşağıdaki açıklamalardan hangisi doğrudur?`
  ];

  const phraseVariants = [
    `${subtopic} için aşağıdaki seçeneklerden hangisi en uygundur?`,
    `${subtopic} açısından ayırt edici seçenek aşağıdakilerden hangisidir?`,
    `${subtopic} başlığında öne çıkan seçenek aşağıdakilerden hangisidir?`,
    `${subtopic} ile en yakından ilişkili seçenek hangisidir?`
  ];

  if (style === "phrase") {
    if (question.question_type === "eşleştirme") {
      return `${subtopic} için aşağıdaki eşleştirmelerden hangisi uygundur?`;
    }
    if (question.question_type === "kavramsal ayrım") {
      return [
        `${subtopic} için aşağıdaki seçeneklerden hangisi ayırt edicidir?`,
        `${subtopic} açısından belirleyici seçenek aşağıdakilerden hangisidir?`,
        `${subtopic} başlığında kavramsal olarak öne çıkan seçenek hangisidir?`,
        `${subtopic} ile en yakından ilişkili ayırt edici seçenek hangisidir?`
      ][variant];
    }
    if (question.question_type === "kavram") {
      return [
        `${subtopic} ile ilişkili temel kavram aşağıdakilerden hangisidir?`,
        `${subtopic} başlığında temel kavram olarak hangisi öne çıkar?`,
        `${subtopic} için merkezî kavram aşağıdakilerden hangisidir?`,
        `${subtopic} ile en doğrudan ilişkili kavram hangisidir?`
      ][variant];
    }
    return phraseVariants[variant];
  }

  if (question.question_type === "eşleştirme") {
      return `${subtopic} ile uyumlu ifade aşağıdakilerden hangisidir?`;
  }
  if (question.question_type === "odak") {
    return [
      `${subtopic} için aşağıdaki ifadelerden hangisi doğrudan uygundur?`,
      `${subtopic} açısından aşağıdaki ifadelerden hangisi en uygun odaktır?`,
      `${subtopic} ile doğrudan ilişkili ifade aşağıdakilerden hangisidir?`,
      `${subtopic} başlığına en uygun ifade hangisidir?`
    ][variant];
  }
  return sentenceVariants[variant];
}

function distractorExplanation(currentSubtopic, distractorSubtopic) {
  return sentenceCase(
    ensureEnd(
      `${distractorSubtopic} başlığıyla ilişkilidir; ${currentSubtopic.toLocaleLowerCase("tr-TR")} için ayırt edici değildir`
    )
  );
}

function serializeValue(value, indent = 0) {
  const space = " ".repeat(indent);
  if (Array.isArray(value)) {
    if (!value.length) return "[]";
    const inner = value.map((item) => `${" ".repeat(indent + 2)}${serializeValue(item, indent + 2)}`).join(",\n");
    return `[\n${inner}\n${space}]`;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    if (!entries.length) return "{}";
    const inner = entries
      .map(([key, item]) => `${" ".repeat(indent + 2)}${key}: ${serializeValue(item, indent + 2)}`)
      .join(",\n");
    return `{\n${inner}\n${space}}`;
  }
  return JSON.stringify(value);
}

function makeQuestionConfig(question, options, correctAnswer, distractorExplanations) {
  return {
    id: question.id,
    sourcePdf: question.source_pdf,
    sourceTopic: question.source_topic,
    sourceSubtopic: question.source_subtopic,
    sourcePages: question.source_pages,
    difficulty: question.difficulty,
    questionType: question.question_type,
    question: buildQuestionStem(question, isShortOption(question.options[question.correct_answer]) ? "phrase" : "sentence"),
    options,
    correctAnswer,
    correctExplanation: sentenceCase(ensureEnd(cleanMetaLead(question.correct_explanation))),
    distractorExplanations,
    learningObjective: sentenceCase(ensureEnd(cleanMetaLead(question.learning_objective))),
    tags: question.tags
  };
}

function generateCuratedSupplemental(publishedQuestions) {
  const rawIds = new Set(BASE_QUESTION_BANK.map((question) => question.id));
  const generated = publishedQuestions.filter((question) => !rawIds.has(question.id));
  const phrasePool = byPdfMap(
    publishedQuestions
      .filter((question) => isShortOption(question.options[question.correct_answer]))
      .map(buildPhraseCandidate)
      .filter(Boolean)
  );
  const phraseFallbackPool = byPdfMap(
    publishedQuestions
      .filter((question) => isCompactOption(question.options[question.correct_answer]))
      .map(buildPhraseCandidate)
      .filter(Boolean)
  );
  const sentencePool = byPdfMap(
    publishedQuestions
      .filter((question) => !isShortOption(question.options[question.correct_answer]) || question.correct_explanation.length >= 72)
      .map(buildSentenceCandidate)
      .filter(Boolean)
  );
  const orderMap = subtopicOrder(publishedQuestions);

  return generated.map((question) => {
    const correctText = isShortOption(question.options[question.correct_answer])
      ? phraseFromOption(question.options[question.correct_answer])
      : sentenceFromQuestion(question);
    const style = isShortOption(question.options[question.correct_answer]) ? "phrase" : "sentence";
    const primaryPool = style === "phrase" ? phrasePool.get(question.source_pdf) || [] : sentencePool.get(question.source_pdf) || [];
    const fallbackPool = style === "phrase" ? phraseFallbackPool.get(question.source_pdf) || [] : sentencePool.get(question.source_pdf) || [];
    let distractors = pickDistractors({
      pool: primaryPool,
      correctText,
      count: 4,
      sourcePdf: question.source_pdf,
      sourceSubtopic: question.source_subtopic,
      orderMap
    });

    if (distractors.length < 4 && style === "phrase") {
      distractors = pickDistractors({
        pool: [...primaryPool, ...fallbackPool],
        correctText,
        count: 4,
        sourcePdf: question.source_pdf,
        sourceSubtopic: question.source_subtopic,
        orderMap
      });
    }

    if (distractors.length !== 4) {
      throw new Error(`${question.id} için yeterli çeldirici üretilemedi`);
    }

    const answerIndex = (question.id.charCodeAt(question.id.length - 1) + question.source_subtopic.length) % LETTERS.length;
    const payloads = [...distractors];
    payloads.splice(answerIndex, 0, {
      sourceSubtopic: question.source_subtopic,
      sourcePdf: question.source_pdf,
      text: correctText
    });

    const options = Object.fromEntries(
      payloads.map((item, index) => [LETTERS[index], style === "phrase" ? ensureEnd(item.text) : sentenceCase(ensureEnd(item.text))])
    );
    const correctAnswer = LETTERS[answerIndex];
    const distractorExplanations = {};
    payloads.forEach((item, index) => {
      const letter = LETTERS[index];
      if (letter === correctAnswer) return;
      distractorExplanations[letter] = distractorExplanation(question.source_subtopic, item.sourceSubtopic);
    });

    const overriddenOptions = QUESTION_OPTION_OVERRIDES[question.id] || options;
    return makeQuestionConfig(question, overriddenOptions, correctAnswer, distractorExplanations);
  });
}

function renderQuestionModule(questions) {
  const lines = [
    'import { makeQuestion } from "./helpers.mjs";',
    "",
    "export const curatedSupplementalQuestions = ["
  ];

  questions.forEach((question, index) => {
    const config = serializeValue(question, 2);
    lines.push(`  makeQuestion(${config})${index === questions.length - 1 ? "" : ","}`);
  });

  lines.push("];", "");
  return lines.join("\n");
}

function renderRosterModule(ids) {
  const lines = [
    "export const PUBLISHED_FINAL_ROSTER = [",
    ...ids.map((id) => `  ${JSON.stringify(id)},`),
    "];",
    ""
  ];
  return lines.join("\n");
}

function main() {
  const publishedQuestions = loadPublishedQuestions();
  const curatedQuestions = generateCuratedSupplemental(publishedQuestions);
  const roster = publishedQuestions.map((question) => question.id);

  fs.writeFileSync(SUPPLEMENTAL_PATH, renderQuestionModule(curatedQuestions));
  fs.writeFileSync(ROSTER_PATH, renderRosterModule(roster));

  console.log(
    JSON.stringify(
      {
        rosterCount: roster.length,
        curatedSupplementalCount: curatedQuestions.length,
        firstCuratedIds: curatedQuestions.slice(0, 10).map((question) => question.id)
      },
      null,
      2
    )
  );
}

main();
