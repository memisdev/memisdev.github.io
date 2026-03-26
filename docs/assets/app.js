const STORAGE_KEY = "biyokimya-vize-progress-v2";
const EXAM_SCOPE_LABELS = {
  midterm: "Vize",
  final: "Final"
};
const PAGES_REQUIRING_SCOPE = new Set(["questions", "practice", "review", "coverage"]);

const state = {
  questions: null,
  questionMap: null,
  fillBlanks: null,
  fillBlankMap: null,
  coverage: null,
  allCoverage: null,
  meta: null,
  topicIndex: null,
  activeScope: null
};

const COMPACT_FIT_TIERS = ["default", "compact", "dense", "ultra"];
const QUESTION_FLOW_MOBILE_QUERY = "(max-width: 767px)";
const compactQuestionUi = {
  activeCard: null,
  fitFrame: 0,
  resizeBound: false,
  dialog: null,
  dock: null
};

async function loadJson(fileName) {
  const response = await fetch(`data/${fileName}`);
  if (!response.ok) {
    throw new Error(`Veri yüklenemedi: ${fileName}`);
  }
  return response.json();
}

function normalizeExamScope(value) {
  return value === "midterm" || value === "final" ? value : null;
}

function currentPage() {
  return document.body.dataset.page || "home";
}

function onMediaQueryChange(query, handler) {
  if (!query || typeof handler !== "function") {
    return () => {};
  }

  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }

  if (typeof query.addListener === "function") {
    query.addListener(handler);
    return () => query.removeListener(handler);
  }

  return () => {};
}

function pageRequiresScope() {
  return PAGES_REQUIRING_SCOPE.has(currentPage());
}

function examScopeLabel(scope) {
  return EXAM_SCOPE_LABELS[scope] || "Kapsam";
}

function emptyWrongQuestionBuckets() {
  return { midterm: [], final: [] };
}

function emptyFillBlankScopeState() {
  return {
    statsById: {},
    lastSeenIds: [],
    weakIds: [],
    lastQuestionId: null
  };
}

function emptyFillBlankBuckets() {
  return {
    midterm: emptyFillBlankScopeState(),
    final: emptyFillBlankScopeState()
  };
}

async function loadMeta() {
  if (!state.meta) {
    const [meta, coverage] = await Promise.all([
      loadJson("site-meta.json"),
      loadJson("coverage-summary.json")
    ]);
    state.meta = meta;
    state.allCoverage = coverage;
  }
}

function setActiveExamScope(scope) {
  const normalizedScope = normalizeExamScope(scope);
  state.activeScope = normalizedScope;

  const store = getStore();
  store.activeExamScope = normalizedScope;
  saveStore(store);
}

function queryExamScope() {
  return normalizeExamScope(new URLSearchParams(window.location.search).get("scope"));
}

function getPersistedExamScope() {
  return normalizeExamScope(getStore().activeExamScope);
}

function getWrongQuestionIds(store, scope = state.activeScope) {
  if (!scope) return [];
  return store.wrongQuestionIdsByScope?.[scope] || [];
}

function setWrongQuestionIds(store, ids, scope = state.activeScope) {
  if (!scope) return;
  store.wrongQuestionIdsByScope[scope] = ids;
}

function migrateLegacyWrongQuestionIds() {
  const store = getStore();
  if (!store.legacyWrongQuestionIds.length || !state.questionMap || !state.activeScope) return;

  const kept = [];
  const nextWrongIds = [...getWrongQuestionIds(store)];

  store.legacyWrongQuestionIds.forEach((id) => {
    if (state.questionMap.has(id)) {
      if (!nextWrongIds.includes(id)) {
        nextWrongIds.push(id);
      }
    } else {
      kept.push(id);
    }
  });

  store.legacyWrongQuestionIds = kept;
  setWrongQuestionIds(store, nextWrongIds);
  saveStore(store);
}

async function loadScopeData(scope) {
  const normalizedScope = normalizeExamScope(scope);
  if (!normalizedScope) return;
  await loadMeta();

  if (state.activeScope === normalizedScope && state.questions?.length) {
    return;
  }

  const [questions, topicIndex] = await Promise.all([
    loadJson(state.meta.datasets[normalizedScope]),
    loadJson(state.meta.topicIndexes[normalizedScope])
  ]);

  state.activeScope = normalizedScope;
  state.questions = questions;
  state.questionMap = new Map(questions.map((question) => [question.id, question]));
  state.topicIndex = topicIndex;
  state.coverage = state.allCoverage.by_scope[normalizedScope];
  setActiveExamScope(normalizedScope);
  migrateLegacyWrongQuestionIds();
}

function fillBlankStudyModeMeta() {
  return state.meta?.study_modes?.fill_blank || null;
}

async function loadFillBlankData() {
  await loadMeta();
  const fillBlankMeta = fillBlankStudyModeMeta();
  if (!fillBlankMeta?.dataset) {
    state.fillBlanks = [];
    state.fillBlankMap = new Map();
    return;
  }

  if (state.fillBlanks?.length && state.fillBlankMap?.size) {
    return;
  }

  const fillBlanks = await loadJson(fillBlankMeta.dataset);
  state.fillBlanks = fillBlanks;
  state.fillBlankMap = new Map(fillBlanks.map((item) => [item.id, item]));
}

async function loadSharedData() {
  await loadMeta();
  const resolvedScope = queryExamScope() || getPersistedExamScope();

  if (resolvedScope) {
    await loadScopeData(resolvedScope);
  } else {
    state.activeScope = null;
    state.questions = [];
    state.questionMap = new Map();
    state.coverage = null;
    state.topicIndex = null;
  }

  if (currentPage() === "fill-blanks") {
    await loadScopeData("midterm");
    await loadFillBlankData();
  }

  return state;
}

function getStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      questionStats: parsed.questionStats || {},
      activeExamScope: normalizeExamScope(parsed.activeExamScope),
      wrongQuestionIdsByScope: {
        ...emptyWrongQuestionBuckets(),
        ...(parsed.wrongQuestionIdsByScope || {})
      },
      legacyWrongQuestionIds: Array.isArray(parsed.wrongQuestionIds) ? parsed.wrongQuestionIds : [],
      fillBlankByScope: {
        ...emptyFillBlankBuckets(),
        ...(parsed.fillBlankByScope || {})
      }
    };
  } catch {
    return {
      questionStats: {},
      activeExamScope: null,
      wrongQuestionIdsByScope: emptyWrongQuestionBuckets(),
      legacyWrongQuestionIds: [],
      fillBlankByScope: emptyFillBlankBuckets()
    };
  }
}

function saveStore(store) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      questionStats: store.questionStats || {},
      activeExamScope: normalizeExamScope(store.activeExamScope),
      wrongQuestionIdsByScope: {
        ...emptyWrongQuestionBuckets(),
        ...(store.wrongQuestionIdsByScope || {})
      },
      legacyWrongQuestionIds: store.legacyWrongQuestionIds || [],
      fillBlankByScope: {
        ...emptyFillBlankBuckets(),
        ...(store.fillBlankByScope || {})
      }
    })
  );
}

function getFillBlankScopeState(store, scope = "midterm") {
  if (!store.fillBlankByScope) {
    store.fillBlankByScope = emptyFillBlankBuckets();
  }

  if (!store.fillBlankByScope[scope]) {
    store.fillBlankByScope[scope] = emptyFillBlankScopeState();
  }

  const current = store.fillBlankByScope[scope];
  current.statsById = current.statsById || {};
  current.lastSeenIds = Array.isArray(current.lastSeenIds) ? current.lastSeenIds : [];
  current.weakIds = Array.isArray(current.weakIds) ? current.weakIds : [];
  current.lastQuestionId = current.lastQuestionId || null;
  return current;
}

function updateRecentIds(ids, nextId, maxSize = 24) {
  return [nextId, ...ids.filter((id) => id !== nextId)].slice(0, maxSize);
}

function recordFillBlankSeen(questionId, scope = "midterm") {
  const store = getStore();
  const scopeState = getFillBlankScopeState(store, scope);
  scopeState.lastSeenIds = updateRecentIds(scopeState.lastSeenIds, questionId);
  scopeState.lastQuestionId = questionId;
  saveStore(store);
}

function recordFillBlankResult(questionId, result, scope = "midterm") {
  const store = getStore();
  const scopeState = getFillBlankScopeState(store, scope);
  const stats = scopeState.statsById[questionId] || {
    attempts: 0,
    correctAttempts: 0,
    wrongAttempts: 0,
    skippedAttempts: 0,
    lastResult: null,
    lastSeenAt: null
  };

  if (result === "correct" || result === "wrong") {
    stats.attempts += 1;
  }
  if (result === "correct") {
    stats.correctAttempts += 1;
  }
  if (result === "wrong") {
    stats.wrongAttempts += 1;
  }
  if (result === "skipped") {
    stats.skippedAttempts += 1;
  }

  stats.lastResult = result;
  stats.lastSeenAt = new Date().toISOString();
  scopeState.statsById[questionId] = stats;
  scopeState.lastSeenIds = updateRecentIds(scopeState.lastSeenIds, questionId);
  scopeState.lastQuestionId = questionId;

  if (result === "correct") {
    scopeState.weakIds = scopeState.weakIds.filter((id) => id !== questionId);
  } else if (!scopeState.weakIds.includes(questionId)) {
    scopeState.weakIds = [questionId, ...scopeState.weakIds];
  }

  saveStore(store);
}

function fillBlankSummary(scope = "midterm") {
  const scopeState = getFillBlankScopeState(getStore(), scope);
  const statsEntries = Object.values(scopeState.statsById || {});
  return {
    solvedCount: statsEntries.filter((item) => item.attempts || item.skippedAttempts).length,
    correctCount: statsEntries.reduce((sum, item) => sum + (item.correctAttempts || 0), 0),
    wrongCount: statsEntries.reduce((sum, item) => sum + (item.wrongAttempts || 0), 0),
    skippedCount: statsEntries.reduce((sum, item) => sum + (item.skippedAttempts || 0), 0),
    weakCount: scopeState.weakIds.length,
    lastSeenIds: scopeState.lastSeenIds,
    weakIds: scopeState.weakIds,
    lastQuestionId: scopeState.lastQuestionId
  };
}

function recordAnswer(questionId, isCorrect) {
  if (!state.activeScope) return;
  const store = getStore();
  const wrongIds = getWrongQuestionIds(store);
  const stats = store.questionStats[questionId] || {
    attempts: 0,
    correctAttempts: 0,
    wrongAttempts: 0,
    lastCorrect: null
  };

  stats.attempts += 1;

  if (isCorrect) {
    stats.correctAttempts += 1;
    stats.lastCorrect = true;
    setWrongQuestionIds(
      store,
      wrongIds.filter((id) => id !== questionId)
    );
  } else {
    stats.wrongAttempts += 1;
    stats.lastCorrect = false;
    if (!wrongIds.includes(questionId)) {
      setWrongQuestionIds(store, [questionId, ...wrongIds]);
    }
  }

  store.questionStats[questionId] = stats;
  saveStore(store);
}

function text(content) {
  return document.createTextNode(content);
}

function element(tagName, className, content) {
  const node = document.createElement(tagName);
  if (className) node.className = className;
  if (typeof content === "string") {
    node.textContent = content;
  } else if (content instanceof Node) {
    node.append(content);
  }
  return node;
}

function svgElement(tagName, attributes = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function buildDockIcon(name) {
  const svg = svgElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    class: "dock-icon"
  });

  const shapes = {
    source: [
      ["path", { d: "M5.5 4.5A2.5 2.5 0 0 1 8 2h10v17H8a2.5 2.5 0 0 0-2.5 2.5z" }],
      ["path", { d: "M5.5 4.5V21.5" }],
      ["path", { d: "M8.5 6.5H15.5" }],
      ["path", { d: "M8.5 10H15.5" }]
    ],
    explanation: [
      ["path", { d: "M8.75 14.5c-.97-.84-1.55-1.98-1.55-3.24a4.8 4.8 0 1 1 9.6 0c0 1.26-.58 2.4-1.55 3.24-.62.53-1.04 1.25-1.15 2.05H9.9c-.11-.8-.53-1.52-1.15-2.05Z" }],
      ["path", { d: "M9.75 18.5h4.5" }],
      ["path", { d: "M10.5 21h3" }]
    ],
    menu: [
      ["path", { d: "M4 6h6" }],
      ["circle", { cx: "13", cy: "6", r: "2" }],
      ["path", { d: "M16 6h4" }],
      ["path", { d: "M4 12h3" }],
      ["circle", { cx: "10", cy: "12", r: "2" }],
      ["path", { d: "M13 12h7" }],
      ["path", { d: "M4 18h9" }],
      ["circle", { cx: "16", cy: "18", r: "2" }],
      ["path", { d: "M19 18h1" }]
    ],
    next: [
      ["path", { d: "M5 12h12" }],
      ["path", { d: "M13 7l5 5-5 5" }]
    ]
  };

  (shapes[name] || []).forEach(([tagName, attributes]) => {
    svg.append(svgElement(tagName, attributes));
  });

  return svg;
}

function clearNode(node) {
  node.replaceChildren();
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[index]];
  }

  return shuffled;
}

function poolCountLabel(count) {
  return count === 1 ? "1 soru" : `${count} soru`;
}

function poolSizeLabel(count) {
  return count === 1 ? "1 soruluk havuz" : `${count} soruluk havuz`;
}

function fillBlankPoolLabel(count) {
  return count === 1 ? "1 boşluk" : `${count} boşluk`;
}

function badge(label, extraClass = "") {
  return element("span", `badge ${extraClass}`.trim(), label);
}

function linkButton(label, href, className = "button secondary") {
  const link = element("a", className, label);
  link.href = href;
  return link;
}

function scopeHref(scope, fileName = "practice.html") {
  const url = new URL(fileName, window.location.href);
  url.searchParams.set("scope", scope);
  return `${url.pathname.split("/").pop()}?${url.searchParams.toString()}`;
}

function scopeLinkButton(scope, pageFile, className = "button secondary") {
  return linkButton(`${examScopeLabel(scope)} Havuzu`, scopeHref(scope, pageFile), className);
}

function modeHref(fileName) {
  const url = new URL(fileName, window.location.href);
  if (fileName !== "fill-blanks.html" && state.activeScope) {
    url.searchParams.set("scope", state.activeScope);
  }
  return url.searchParams.toString()
    ? `${url.pathname.split("/").pop()}?${url.searchParams.toString()}`
    : url.pathname.split("/").pop();
}

function buildModeSwitch({ currentMode, mcqPage = "practice.html" } = {}) {
  if (state.activeScope !== "midterm" || !fillBlankStudyModeMeta()) {
    return null;
  }

  const root = element("div", "mode-switch");
  const mcqLink = linkButton("Çoktan Seçmeli", modeHref(mcqPage), "mode-switch-link");
  const fillBlankLink = linkButton("Boşluk Doldurma", "fill-blanks.html", "mode-switch-link");

  if (currentMode === "multiple_choice") {
    mcqLink.setAttribute("aria-current", "page");
  } else if (currentMode === "fill_blank") {
    fillBlankLink.setAttribute("aria-current", "page");
  }

  root.append(mcqLink, fillBlankLink);
  return root;
}

function renderModeSwitch(container, options = {}) {
  if (!container) return;
  clearNode(container);
  const switchNode = buildModeSwitch(options);
  container.hidden = !switchNode;
  if (switchNode) {
    container.append(switchNode);
  }
}

function buildFillBlankPrompt(promptText, fillText = null, className = "fill-blank-prompt") {
  const prompt = element("p", className);
  const parts = String(promptText || "").split("_____");

  if (parts.length === 1) {
    prompt.textContent = String(promptText || "");
    return prompt;
  }

  parts.forEach((part, index) => {
    if (part) {
      prompt.append(document.createTextNode(part));
    }

    if (index < parts.length - 1) {
      const gap = element("span", fillText ? "fill-blank-gap is-filled" : "fill-blank-gap", fillText || "_____");
      prompt.append(gap);
    }
  });

  return prompt;
}

function buildScopeChoiceActions(pageFile = "practice.html") {
  return [
    scopeLinkButton("midterm", pageFile, "button primary"),
    scopeLinkButton("final", pageFile, "button secondary")
  ];
}

function ensureScopeChosen(container, title = "Önce sınav türünü seç", pageFile = "practice.html") {
  setEmpty(
    container,
    title,
    "Bu ekran artık yalnız seçili Vize ya da Final havuzuyla çalışır.",
    buildScopeChoiceActions(pageFile)
  );
}

function stackItem(title, copy) {
  const item = element("article", "stack-item");
  item.append(element("h4", "", title), element("p", "", copy));
  return item;
}

function miniStat(label, value, copy) {
  const card = element("article", "mini-stat");
  card.append(element("span", "", label), element("strong", "", value), element("p", "", copy));
  return card;
}

function buildEmptyState(title, message, actions = []) {
  const empty = element("div", "empty-state");
  empty.append(element("h3", "", title), element("p", "", message));
  if (actions.length) {
    const actionRow = element("div", "link-row");
    actionRow.append(...actions);
    empty.append(actionRow);
  }
  return empty;
}

function setEmpty(container, title, message, actions = []) {
  closeQuestionDialog();
  resetQuestionFlowDockState();
  clearNode(container);
  container.append(buildEmptyState(title, message, actions));
}

function difficultyClass(difficulty) {
  return difficulty.toLocaleLowerCase("tr");
}

function densityRank(density) {
  return {
    very_high: 4,
    high: 3,
    medium: 2,
    low: 1
  }[density] || 0;
}

function densityMeta(density) {
  return {
    very_high: ["Çok yoğun", "density-very-high"],
    high: ["Yüksek", "density-high"],
    medium: ["Orta", "density-medium"],
    low: ["Temel", "density-low"]
  }[density] || ["Dengeli", "density-medium"];
}

function formatPercent(value) {
  return `%${Math.round(value)}`;
}

function formatFileLabel(fileName) {
  return fileName.replace(/\.pdf$/iu, "");
}

function inventoryByFile(fileName) {
  return state.coverage?.inventory?.find((item) => item.fileName === fileName) || null;
}

function topicLabelByPdf(fileName) {
  const match = inventoryByFile(fileName);
  return match?.topic || formatFileLabel(fileName);
}

function coverageSummary() {
  if (!state.activeScope || !state.coverage) {
    const pages = (state.allCoverage?.inventory || []).reduce((sum, item) => sum + item.totalPages, 0);
    return {
      topics: state.meta?.curriculumTopicCount || 0,
      subtopics: state.allCoverage?.curriculumMap?.length || 0,
      questions: state.meta?.scopeTotals?.all || 0,
      pages
    };
  }

  const scopeMeta = state.meta?.by_scope?.[state.activeScope] || {};
  const pages = state.coverage.inventory.reduce((sum, item) => sum + item.totalPages, 0);
  const subtopics =
    state.coverage?.curriculumMap?.length ||
    state.coverage?.mergedCurriculum?.reduce((sum, item) => sum + item.subtopics.length, 0) ||
    0;

  return {
    topics: state.coverage?.mergedCurriculum?.length || scopeMeta.topics || 0,
    subtopics,
    questions: state.meta?.scopeTotals?.[state.activeScope] || 0,
    pages
  };
}

function getTopicPerformance(questionStats) {
  const summary = new Map();

  Object.entries(questionStats).forEach(([questionId, stats]) => {
    const question = state.questionMap.get(questionId);
    if (!question) return;

    const topic = topicLabelByPdf(question.source_pdf);
    const current = summary.get(topic) || {
      topic,
      attempts: 0,
      correct: 0,
      wrong: 0,
      seen: 0
    };

    current.attempts += stats.attempts;
    current.correct += stats.correctAttempts;
    current.wrong += stats.wrongAttempts;
    current.seen += 1;
    summary.set(topic, current);
  });

  return [...summary.values()]
    .map((item) => ({
      ...item,
      accuracy: item.attempts ? item.correct / item.attempts : 0
    }))
    .sort(
      (a, b) =>
        a.accuracy - b.accuracy || b.wrong - a.wrong || a.topic.localeCompare(b.topic, "tr")
    );
}

function questionCountForSources(sources) {
  return (state.questions || []).filter((question) => sources.includes(question.source_pdf)).length;
}

function sourceSummaryForTopic(fileName) {
  const match = inventoryByFile(fileName);
  if (!match) return formatFileLabel(fileName);
  return `${formatFileLabel(fileName)} • ${match.totalPages} sayfa`;
}

function isQuestionFlowMobile() {
  return window.matchMedia(QUESTION_FLOW_MOBILE_QUERY).matches;
}

function ensureCompactQuestionUi() {
  if (!compactQuestionUi.dialog) {
    const root = element("div", "question-dialog");
    root.setAttribute("aria-hidden", "true");

    const panel = element("section", "question-dialog-panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "question-dialog-title");

    const header = element("div", "question-dialog-header");
    const headerCopy = element("div", "question-dialog-heading");
    const title = element("h2", "", "");
    title.id = "question-dialog-title";
    const subtitle = element("p", "question-dialog-subtitle");
    const closeButton = element("button", "button ghost question-dialog-close", "Kapat");
    closeButton.type = "button";
    closeButton.addEventListener("click", () => closeQuestionDialog());

    headerCopy.append(title, subtitle);
    header.append(headerCopy, closeButton);

    const body = element("div", "question-dialog-body");
    panel.append(header, body);
    root.append(panel);

    root.addEventListener("click", (event) => {
      if (event.target === root) {
        closeQuestionDialog();
      }
    });

    document.body.append(root);
    compactQuestionUi.dialog = { root, title, subtitle, body };
  }

  if (!compactQuestionUi.dock) {
    const root = document.querySelector(".practice-dock");
    if (root) {
      const buttons = {
        source: root.querySelector('[data-dock-action="source"]'),
        explanation: root.querySelector('[data-dock-action="explanation"]'),
        menu: root.querySelector('[data-dock-action="menu"]'),
        next: root.querySelector('[data-dock-action="next"]')
      };

      Object.entries(buttons).forEach(([name, button]) => {
        if (!button || button.dataset.iconReady === "true") return;
        const label = button.getAttribute("aria-label") || button.getAttribute("title") || "";
        clearNode(button);
        button.append(buildDockIcon(name), element("span", "sr-only", label));
        button.dataset.iconReady = "true";
        if (label && !button.title) {
          button.title = label;
        }
      });

      buttons.source?.addEventListener("click", () => compactQuestionUi.dock?.handlers.source?.());
      buttons.explanation?.addEventListener("click", () => compactQuestionUi.dock?.handlers.explanation?.());

      compactQuestionUi.dock = {
        root,
        buttons,
        handlers: {
          source: null,
          explanation: null
        }
      };
    }
  }

  if (!compactQuestionUi.resizeBound) {
    compactQuestionUi.resizeBound = true;
    window.addEventListener("resize", () => scheduleCompactCardFit());
    document.fonts?.ready.then(() => scheduleCompactCardFit()).catch(() => {});
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && compactQuestionUi.dialog?.root.classList.contains("is-open")) {
        closeQuestionDialog();
      }
    });
  }
}

function setQuestionFlowDockState({
  question = null,
  topicLabel = "",
  answerState = null
} = {}) {
  if (document.body.dataset.layout !== "question-flow") return;

  ensureCompactQuestionUi();
  const dock = compactQuestionUi.dock;
  if (!dock) return;

  const hasQuestion = Boolean(question);
  const sourceButton = dock.buttons.source;
  const explanationButton = dock.buttons.explanation;

  dock.handlers.source = hasQuestion
    ? () =>
        openQuestionDialog({
          title: "Kaynak",
          subtitle: topicLabel || question.source_topic,
          content: buildSourceDialogContent(question, topicLabel)
        })
    : null;

  dock.handlers.explanation = hasQuestion && answerState
    ? () =>
        openQuestionDialog({
          title: "Açıklama",
          subtitle: topicLabel || question.source_topic,
          content: buildExplanationDialogContent(question, answerState)
        })
    : null;

  if (sourceButton) {
    sourceButton.disabled = !hasQuestion;
  }

  if (explanationButton) {
    const isExplanationReady = Boolean(hasQuestion && answerState);
    explanationButton.disabled = !isExplanationReady;
    explanationButton.dataset.state = isExplanationReady ? "ready" : hasQuestion ? "locked" : "empty";
    explanationButton.title = isExplanationReady ? "Açıklama" : "Açıklama (cevaptan sonra açılır)";
  }

  dock.root.dataset.dockState = answerState ? "answered" : hasQuestion ? "active" : "empty";
}

function resetQuestionFlowDockState() {
  setQuestionFlowDockState();
}

function openQuestionDialog({ title, subtitle = "", content = [] }) {
  ensureCompactQuestionUi();
  const dialog = compactQuestionUi.dialog;
  clearNode(dialog.body);
  dialog.body.append(...content);
  dialog.title.textContent = title;
  dialog.subtitle.textContent = subtitle;
  dialog.subtitle.hidden = !subtitle;
  dialog.root.classList.add("is-open");
  dialog.root.setAttribute("aria-hidden", "false");
  document.body.classList.add("question-dialog-open");
}

function closeQuestionDialog() {
  const dialog = compactQuestionUi.dialog;
  if (!dialog) return;
  dialog.root.classList.remove("is-open");
  dialog.root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("question-dialog-open");
}

function setActiveCompactCard(card) {
  compactQuestionUi.activeCard = card;
  ensureCompactQuestionUi();
  scheduleCompactCardFit(card);
}

function scheduleCompactCardFit(card = compactQuestionUi.activeCard) {
  if (!card?.isConnected) return;
  window.cancelAnimationFrame(compactQuestionUi.fitFrame);
  compactQuestionUi.fitFrame = window.requestAnimationFrame(() => applyCompactCardFit(card));
}

function applyCompactCardFit(card) {
  if (!card?.isConnected) return;

  const fitRegion = card.querySelector(".compact-fit-region");
  const fitCanvas = card.querySelector(".compact-fit-canvas");
  const fitBody = card.querySelector(".compact-fit-body");
  if (!fitRegion || !fitCanvas || !fitBody) return;

  if (!isQuestionFlowMobile()) {
    card.dataset.fitDensity = "default";
    card.style.setProperty("--compact-scale", "1");
    card.style.removeProperty("--compact-body-height");
    fitCanvas.style.removeProperty("height");
    return;
  }

  const availableHeight = fitRegion.clientHeight;
  if (!availableHeight) return;

  let naturalHeight = 0;
  let chosenTier = COMPACT_FIT_TIERS[COMPACT_FIT_TIERS.length - 1];

  fitCanvas.style.removeProperty("height");
  card.style.setProperty("--compact-scale", "1");

  for (const tier of COMPACT_FIT_TIERS) {
    card.dataset.fitDensity = tier;
    naturalHeight = Math.ceil(fitBody.getBoundingClientRect().height);
    chosenTier = tier;
    if (naturalHeight <= availableHeight) {
      break;
    }
  }

  const scale = naturalHeight ? Math.min(1, availableHeight / naturalHeight) : 1;
  card.dataset.fitDensity = chosenTier;
  card.style.setProperty("--compact-scale", scale.toFixed(4));
  card.style.setProperty("--compact-body-height", `${naturalHeight}px`);
  fitCanvas.style.height = `${Math.ceil(naturalHeight * scale)}px`;
}

function buildQuestionDialogSection(title, nodes = []) {
  const section = element("section", "question-dialog-section");
  if (title) {
    section.append(element("h3", "", title));
  }
  section.append(...nodes);
  return section;
}

function buildQuestionDialogStat(label, value, extraClass = "") {
  const stat = element("div", `question-dialog-stat ${extraClass}`.trim());
  stat.append(element("span", "question-dialog-stat-label", label), element("strong", "", value));
  return stat;
}

function buildDetailTextBlock(title, copy) {
  const block = element("div", "detail-block");
  block.append(element("h4", "", title), element("p", "", copy));
  return block;
}

function buildDetailListBlock(title, items) {
  const block = element("div", "detail-block");
  const list = element("ul", "detail-list");
  items.forEach((item) => {
    const entry = document.createElement("li");
    entry.textContent = item;
    list.append(entry);
  });
  block.append(element("h4", "", title), list);
  return block;
}

function buildDetailChipBlock(title, labels) {
  const block = element("div", "detail-block");
  const row = element("div", "detail-chip-row");
  labels.forEach((label) => row.append(badge(label)));
  block.append(element("h4", "", title), row);
  return block;
}

function buildInfoSummary(label) {
  const summary = document.createElement("summary");
  summary.append(element("span", "info-summary-label", label));
  return summary;
}

function buildSourceDialogContent(question, topicLabel) {
  const sections = [
    buildQuestionDialogSection("", [
      buildQuestionDialogStat("Kaynak", `${formatFileLabel(question.source_pdf)} • Sayfa ${question.source_pages.join(", ")}`),
      buildQuestionDialogStat("Odak", topicLabel || question.source_topic)
    ]),
    buildQuestionDialogSection("Öğrenme Hedefi", [element("p", "", question.learning_objective)])
  ];

  if (question.tags.length) {
    const tagWrap = element("div", "question-dialog-chip-row");
    question.tags.forEach((tag) => tagWrap.append(badge(tag)));
    sections.push(buildQuestionDialogSection("Etiketler", [tagWrap]));
  }

  return sections;
}

function buildExplanationDialogContent(question, answerState) {
  const sections = [
    buildQuestionDialogSection("", [
      buildQuestionDialogStat(
        answerState.isCorrect ? "Sonuç" : "Doğru Cevap",
        `${answerState.correctLetter}) ${question.options[answerState.correctLetter]}`,
        answerState.isCorrect ? "success" : ""
      )
    ]),
    buildQuestionDialogSection("Açıklama", [element("p", "", question.correct_explanation)])
  ];

  const notes = Object.entries(question.distractor_explanations || {}).filter(
    ([key]) => key !== question.correct_answer
  );

  if (notes.length) {
    const list = element("ul", "detail-list");
    notes.forEach(([key, note]) => {
      const item = document.createElement("li");
      item.textContent = `${key}: ${note}`;
      list.append(item);
    });
    sections.push(
      buildQuestionDialogSection("Seçenek Notları", [list])
    );
  }

  if (question.confusion_note) {
    sections.push(
      buildQuestionDialogSection("Karıştırılan Nokta", [element("p", "", question.confusion_note)])
    );
  }

  return sections;
}

function buildFillBlankExplanationDialogContent(question, answerState) {
  const sections = [
    buildQuestionDialogSection("", [
      buildQuestionDialogStat(
        answerState.isCorrect ? "Sonuç" : "Doğru Tamamlama",
        `${question.correct_answer}) ${question.correct_completion}`,
        answerState.isCorrect ? "success" : ""
      )
    ]),
    buildQuestionDialogSection("Tamamlanan Cümle", [
      buildFillBlankPrompt(question.prompt_text, question.correct_completion, "fill-blank-dialog-prompt")
    ]),
    buildQuestionDialogSection("Açıklama", [element("p", "", question.explanation)])
  ];

  if (!answerState.isCorrect) {
    sections.splice(
      1,
      0,
      buildQuestionDialogSection("", [
        buildQuestionDialogStat(
          "Seçimin",
          `${answerState.selectedLetter}) ${question.options[answerState.selectedLetter] || "Boş"}`
        )
      ])
    );
  }

  return sections;
}

function setFillBlankDockState({ question = null, answerState = null } = {}) {
  if (document.body.dataset.layout !== "question-flow") return;

  ensureCompactQuestionUi();
  const dock = compactQuestionUi.dock;
  if (!dock) return;

  const hasQuestion = Boolean(question);
  const sourceButton = dock.buttons.source;
  const explanationButton = dock.buttons.explanation;

  dock.handlers.source = hasQuestion
    ? () =>
        openQuestionDialog({
          title: "Kaynak",
          subtitle: question.source_subtopic || question.source_topic,
          content: buildSourceDialogContent(question, question.source_subtopic || question.source_topic)
        })
    : null;

  dock.handlers.explanation = hasQuestion && answerState
    ? () =>
        openQuestionDialog({
          title: "Açıklama",
          subtitle: question.source_subtopic || question.source_topic,
          content: buildFillBlankExplanationDialogContent(question, answerState)
        })
    : null;

  if (sourceButton) {
    sourceButton.disabled = !hasQuestion;
  }

  if (explanationButton) {
    const isReady = Boolean(hasQuestion && answerState);
    explanationButton.disabled = !isReady;
    explanationButton.dataset.state = isReady ? "ready" : hasQuestion ? "locked" : "empty";
    explanationButton.title = isReady ? "Açıklama" : "Açıklama (cevaptan sonra açılır)";
  }

  dock.root.dataset.dockState = answerState ? "answered" : hasQuestion ? "active" : "empty";
}

function buildQuestionCard(question, options = {}) {
  const { compact = false, progressLabel = "", onAnswered = null, onAnswerStateChange = null } = options;
  const card = element("article", compact ? "question-card compact-card" : "question-card");
  const meta = element("div", compact ? "question-meta question-meta-compact" : "question-meta");
  const topicLabel = question.source_subtopic || question.source_topic;
  const title = element("h3", "question-title", question.question);
  const optionGrid = element("div", "option-grid");
  const optionButtons = [];
  let answerState = null;

  if (compact) {
    const metaGroup = element("div", "question-meta-group");
    metaGroup.append(badge(question.difficulty, difficultyClass(question.difficulty)));
    meta.append(metaGroup);

    if (progressLabel) {
      meta.append(element("span", "question-progress", progressLabel));
    }
  } else {
    meta.append(
      badge(question.difficulty, difficultyClass(question.difficulty)),
      badge(question.source_topic)
    );

    if (question.source_subtopic && question.source_subtopic !== question.source_topic) {
      meta.append(badge(question.source_subtopic));
    }
  }

  const explanation = compact ? null : element("section", "explanation-panel");
  if (explanation) {
    explanation.hidden = true;
  }

  const details = compact ? null : document.createElement("details");
  if (details) {
    details.className = "info-details";
    details.append(buildInfoSummary(compact ? "Kaynak" : "Kaynak ve notlar"));

    const detailBody = element("div", "detail-body");
    detailBody.append(
      buildDetailTextBlock(
        "Kaynak",
        `${formatFileLabel(question.source_pdf)} • Sayfa ${question.source_pages.join(", ")}`
      ),
      buildDetailTextBlock("Öğrenme hedefi", question.learning_objective)
    );

    if (question.tags.length) {
      detailBody.append(buildDetailChipBlock("Etiketler", question.tags));
    }

    details.append(detailBody);
  }

  let sourceButton = null;
  let explanationButton = null;

  if (compact) {
    sourceButton = element("button", "button secondary question-card-action", "Kaynak");
    sourceButton.type = "button";
    sourceButton.addEventListener("click", () => {
      openQuestionDialog({
        title: "Kaynak",
        subtitle: topicLabel || question.source_topic,
        content: buildSourceDialogContent(question, topicLabel)
      });
    });

    explanationButton = element("button", "button primary question-card-action", "Açıklama");
    explanationButton.type = "button";
    explanationButton.disabled = true;
    explanationButton.addEventListener("click", () => {
      if (!answerState) return;
      openQuestionDialog({
        title: "Açıklama",
        subtitle: topicLabel || question.source_topic,
        content: buildExplanationDialogContent(question, answerState)
      });
    });
  }

  Object.entries(question.options).forEach(([letter, value]) => {
    const button = element("button", "option-button");
    button.type = "button";
    button.dataset.letter = letter;
    button.append(element("span", "option-label", letter), element("span", "option-text", value));

    button.addEventListener("click", () => {
      optionButtons.forEach((item) => {
        item.disabled = true;
      });

      const correctLetter = question.correct_answer;
      const isCorrect = letter === correctLetter;
      recordAnswer(question.id, isCorrect);
      answerState = {
        isCorrect,
        correctLetter,
        selectedLetter: letter
      };

      optionButtons.forEach((item) => {
        if (item.dataset.letter === correctLetter) {
          item.classList.add("correct");
        } else if (!isCorrect && item.dataset.letter === letter) {
          item.classList.add("incorrect");
        }
      });

      if (compact) {
        explanationButton.disabled = false;
        onAnswerStateChange?.({ answerState, topicLabel });
      } else {
        explanation.hidden = false;
        clearNode(explanation);
        explanation.append(
          element("h4", "", isCorrect ? "Doğru cevap" : "Açıklama"),
          element("p", "", `${correctLetter}) ${question.options[correctLetter]}`),
          element("p", "", question.correct_explanation)
        );

        const notes = Object.entries(question.distractor_explanations || {}).filter(
          ([key]) => key !== question.correct_answer
        );

        if (notes.length) {
          const list = element("ul", "");
          notes.forEach(([key, note]) => {
            const item = document.createElement("li");
            item.textContent = `${key}: ${note}`;
            list.append(item);
          });
          explanation.append(list);
        }

        if (question.confusion_note) {
          explanation.append(element("p", "", `Karıştırılan nokta: ${question.confusion_note}`));
        }
      }

      onAnswered?.({
        questionId: question.id,
        isCorrect,
        selectedLetter: letter,
        correctLetter
      });
    });

    optionButtons.push(button);
    optionGrid.append(button);
  });

  if (compact) {
    const fitRegion = element("div", "compact-fit-region");
    const fitCanvas = element("div", "compact-fit-canvas");
    const fitBody = element("div", "compact-fit-body");
    if (topicLabel) {
      fitBody.append(element("p", "question-kicker", topicLabel));
    }
    fitBody.append(title, optionGrid);
    fitCanvas.append(fitBody);
    fitRegion.append(fitCanvas);

    const actionRow = element("div", "question-card-actions");
    actionRow.append(sourceButton, explanationButton);
    card.append(meta, fitRegion, actionRow);
  } else {
    card.append(meta, title, optionGrid, explanation, details);
  }

  return card;
}

function renderCompactQuestion(container, question, position, total, options = {}) {
  closeQuestionDialog();
  clearNode(container);
  const topicLabel = question.source_subtopic || question.source_topic;
  setQuestionFlowDockState({ question, topicLabel });
  const card = buildQuestionCard(question, {
    compact: true,
    progressLabel: `${position}/${total}`,
    onAnswered: options.onAnswered,
    onAnswerStateChange: ({ answerState }) => {
      setQuestionFlowDockState({ question, topicLabel, answerState });
    }
  });
  container.append(card);
  setActiveCompactCard(card);
}

function buildHome() {
  const statsRoot = document.getElementById("home-stats");
  const progressRoot = document.getElementById("home-progress");
  const coverageRoot = document.getElementById("home-coverage");
  if (!statsRoot || !progressRoot || !coverageRoot) return;

  const store = getStore();
  const summary = coverageSummary();
  const activeWrongIds = getWrongQuestionIds(store);
  const scopedStatEntries = Object.entries(store.questionStats).filter(([questionId]) => state.questionMap.has(questionId));
  const totalSolved = scopedStatEntries.reduce((sum, [, item]) => sum + item.attempts, 0);
  const totalCorrect = scopedStatEntries.reduce((sum, [, item]) => sum + item.correctAttempts, 0);
  const totalWrong = scopedStatEntries.reduce((sum, [, item]) => sum + item.wrongAttempts, 0);
  const uniqueSeen = scopedStatEntries.length;

  const statCards = state.activeScope
    ? [
        ["Scope", examScopeLabel(state.activeScope), "Aktif çalışma alanı"],
        ["Soru", String(summary.questions), "Hazır çalışma havuzu"],
        ["Konu", String(summary.topics), "Ana tekrar alanı"],
        ["Sayfa", String(summary.pages), "Bu scope kapsamı"]
      ]
    : [
        ["Vize", String(state.meta?.scopeTotals?.midterm || 0), "Yalnız vize havuzu"],
        ["Final", String(state.meta?.scopeTotals?.final || 0), "Yalnız final havuzu"],
        ["Toplam", String(state.meta?.scopeTotals?.all || 0), "Ayrılmış soru bankası"],
        ["PDF", String(state.meta?.pdfCount || 0), "Kaynak ders dosyası"]
      ];

  clearNode(statsRoot);
  statCards.forEach(([label, value, copy]) => {
    const card = element("article", "stat-card");
    card.append(element("span", "", label), element("strong", "", value), element("p", "", copy));
    statsRoot.append(card);
  });

  clearNode(progressRoot);
  clearNode(coverageRoot);

  if (!state.activeScope) {
    progressRoot.append(
      buildEmptyState(
        "Önce Vize ya da Final seç",
        "Bu sistem artık iki ayrı sınav havuzuyla çalışır. Soru akışına girmeden önce kapsam seçilir.",
        buildScopeChoiceActions("practice.html")
      )
    );

    coverageRoot.append(
      stackItem("Ayrım kuralı", "Vize ve final soruları artık aynı havuzda karışmıyor."),
      stackItem(
        "Vize kapsamı",
        `${state.meta?.scopeTotals?.midterm || 0} soru • Karbonhidratlar ve Glikobiyoloji, Nükleotidler ve Nükleik Asitler, Lipitler`
      ),
      stackItem(
        "Final kapsamı",
        `${state.meta?.scopeTotals?.final || 0} soru • Kalan dört PDF ayrı final havuzunda tutuluyor`
      )
    );
    return;
  }

  if (!uniqueSeen) {
    progressRoot.append(
      buildEmptyState(
        `${examScopeLabel(state.activeScope)} için hazırsın`,
        "Rastgele pratikle hemen başla ya da doğrudan bir konu seç.",
        [
          linkButton("Pratiğe Başla", scopeHref(state.activeScope, "practice.html"), "button primary"),
          linkButton("Konuya Git", scopeHref(state.activeScope, "questions.html"), "button secondary")
        ]
      )
    );
  } else {
    const overviewGrid = element("div", "summary-grid");
    const accuracy = totalSolved ? (totalCorrect / totalSolved) * 100 : 0;

    overviewGrid.append(
      miniStat("Çözülen", String(totalSolved), "Toplam deneme"),
      miniStat("Doğruluk", formatPercent(accuracy), totalWrong ? `${totalWrong} yanlış kaydı` : "Temiz ilerleme"),
      miniStat(
        "Tekrar listesi",
        String(activeWrongIds.length),
        activeWrongIds.length ? "Geri dönülecek soru" : "Liste temiz"
      ),
      miniStat("Görülen", `${uniqueSeen}/${state.questions.length}`, "Açılan farklı soru")
    );

    progressRoot.append(overviewGrid);

    const weakTopics = getTopicPerformance(store.questionStats).filter(
      (item) => item.wrong || item.attempts >= 2
    );

    if (weakTopics.length) {
      progressRoot.append(element("h3", "section-subtitle", "Odaklanman gereken alanlar"));
      const focusList = element("div", "stack-list");
      weakTopics.slice(0, 3).forEach((item) => {
        focusList.append(
          stackItem(
            item.topic,
            `${item.attempts} deneme • ${formatPercent(item.accuracy * 100)} doğruluk`
          )
        );
      });
      progressRoot.append(focusList);
    } else {
      const noteList = element("div", "stack-list");
      noteList.append(stackItem("Çalışma ritmi", "İstersen yeni bir konu seçip tekrarını sürdürebilirsin."));
      progressRoot.append(noteList);
    }
  }

  const denseTopics = [...state.coverage.mergedCurriculum]
    .sort(
      (a, b) =>
        densityRank(b.questionDensity) - densityRank(a.questionDensity) ||
        b.subtopics.length - a.subtopics.length ||
        a.title.localeCompare(b.title, "tr")
    )
    .slice(0, 3);

  const longestSource = [...state.coverage.inventory].sort((a, b) => b.totalPages - a.totalPages)[0];

  coverageRoot.append(
    stackItem(
      "Aktif kapsam",
      `${examScopeLabel(state.activeScope)} • ${summary.topics} konu • ${summary.subtopics} alt başlık • ${summary.questions} soru`
    ),
    stackItem("Yoğun tekrar alanları", denseTopics.map((item) => item.title).join(" • ")),
    stackItem(
      "En geniş kaynak",
      longestSource ? `${formatFileLabel(longestSource.fileName)} • ${longestSource.totalPages} sayfa` : ""
    )
  );
}

function populateTopicSelect(select) {
  if (!select) return;
  clearNode(select);
  select.append(new Option("Tümü", ""));
  const topics = [...new Set((state.coverage?.inventory || []).map((item) => item.topic))];
  topics.forEach((topic) => select.append(new Option(topic, topic)));
}

function filterQuestions({ topic = "", difficulty = "", search = "" }) {
  if (!state.questions?.length) return [];
  const normalizedSearch = search.trim().toLocaleLowerCase("tr");

  return state.questions.filter((question) => {
    const topicMatch = !topic || topicLabelByPdf(question.source_pdf) === topic;
    const difficultyMatch = !difficulty || question.difficulty === difficulty;
    const searchMatch =
      !normalizedSearch ||
      question.question.toLocaleLowerCase("tr").includes(normalizedSearch) ||
      question.source_topic.toLocaleLowerCase("tr").includes(normalizedSearch) ||
      (question.source_subtopic || "").toLocaleLowerCase("tr").includes(normalizedSearch) ||
      question.tags.some((tag) => tag.toLocaleLowerCase("tr").includes(normalizedSearch));

    return topicMatch && difficultyMatch && searchMatch;
  });
}

function buildQuestionsPage() {
  const root = document.getElementById("questions-question");
  if (!root) return;

  renderModeSwitch(document.getElementById("questions-mode-switch"), {
    currentMode: "multiple_choice",
    mcqPage: "questions.html"
  });

  const body = document.body;
  const topicSelect = document.getElementById("questions-topic");
  const difficultySelect = document.getElementById("questions-difficulty");
  const searchInput = document.getElementById("questions-search");
  const counter = document.getElementById("questions-count");
  const sheetCount = document.getElementById("questions-sheet-count");
  const activeFilter = document.getElementById("questions-active-filter");
  const button = document.getElementById("next-topic-question");
  const desktopButton = document.getElementById("next-topic-question-desktop");
  const filterToggle = document.getElementById("questions-filters-toggle");
  const filterDockToggle = document.getElementById("questions-filters-dock-toggle");
  const filtersSheet = document.getElementById("questions-filters-sheet");
  const filterClose = document.getElementById("questions-filters-close");
  const applyButton = document.getElementById("questions-apply-filters");
  const resetButton = document.getElementById("questions-reset-filters");
  const overlay = document.getElementById("questions-overlay");
  const desktopQuery = window.matchMedia("(min-width: 768px)");
  const nextButtons = [button, desktopButton].filter(Boolean);
  const filterToggles = [filterToggle, filterDockToggle].filter(Boolean);

  if (!state.activeScope) {
    counter.textContent = "Kapsam seç";
    sheetCount.textContent = "Kapsam seç";
    activeFilter.textContent = "Önce Vize veya Final seç";
    nextButtons.forEach((node) => {
      node.disabled = true;
    });
    filterToggles.forEach((node) => {
      node.disabled = true;
    });
    ensureScopeChosen(root, "Önce sınav türünü seç", "questions.html");
    return;
  }

  populateTopicSelect(topicSelect);
  let currentIndex = 0;
  let orderIds = [];
  let committedFilters = { topic: "", difficulty: "", search: "" };
  let draftFilters = { ...committedFilters };
  let lastTrigger = null;

  const isDesktop = () => desktopQuery.matches;

  const getFilteredQuestions = (filters) => filterQuestions(filters);

  const formatFilterSummary = (filters) => {
    const scopePrefix = examScopeLabel(state.activeScope);
    const parts = [];
    if (filters.topic) parts.push(filters.topic);
    if (filters.difficulty) parts.push(filters.difficulty);
    if (filters.search.trim()) parts.push(`Ara: ${filters.search.trim()}`);
    return parts.length ? `${scopePrefix} • ${parts.join(" • ")}` : `${scopePrefix} • Tüm havuz`;
  };

  const syncControlValues = () => {
    topicSelect.value = draftFilters.topic;
    difficultySelect.value = draftFilters.difficulty;
    searchInput.value = draftFilters.search;
  };

  const resetFilterExpansion = () => {
    filterToggles.forEach((node) => node.setAttribute("aria-expanded", "false"));
  };

  const setSheetSemantics = () => {
    if (body.classList.contains("practice-filters-open") && !isDesktop()) {
      filtersSheet?.setAttribute("role", "dialog");
      filtersSheet?.setAttribute("aria-modal", "true");
      filterToggles.forEach((node) => node.setAttribute("aria-expanded", "true"));
    } else {
      filtersSheet?.removeAttribute("role");
      filtersSheet?.removeAttribute("aria-modal");
    }
  };

  const updateCounts = () => {
    const committedPool = getFilteredQuestions(committedFilters);
    const draftPool = getFilteredQuestions(draftFilters);

    counter.textContent = poolCountLabel(committedPool.length);
    sheetCount.textContent = poolSizeLabel(draftPool.length);
    activeFilter.textContent = formatFilterSummary(committedFilters);

    nextButtons.forEach((node) => {
      node.disabled = committedPool.length === 0;
    });
    resetButton.disabled =
      !draftFilters.topic && !draftFilters.difficulty && !draftFilters.search.trim();
  };

  const closeOverlays = ({ restoreFocus = false } = {}) => {
    body.classList.remove("practice-filters-open", "practice-sheet-open");
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
    resetFilterExpansion();
    setSheetSemantics();

    if (restoreFocus && lastTrigger) {
      lastTrigger.focus();
    }
  };

  const openFilters = (trigger) => {
    if (isDesktop()) return;
    closeQuestionDialog();
    lastTrigger = trigger;
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
    body.classList.add("practice-filters-open", "practice-sheet-open");
    setSheetSemantics();
    window.setTimeout(() => topicSelect.focus(), 0);
  };

  const resetQuestionOrder = (questions) => {
    orderIds = questions.map((question) => question.id);
    currentIndex = 0;
  };

  const render = () => {
    const filtered = getFilteredQuestions(committedFilters);
    updateCounts();

    if (!filtered.length) {
      orderIds = [];
      currentIndex = 0;
      setEmpty(root, "Bu seçimde soru yok", "Filtreleri genişletip tekrar dene.");
      return;
    }

    const expectedOrder = filtered.map((question) => question.id);
    const isOrderStale =
      orderIds.length !== expectedOrder.length ||
      orderIds.some((id, index) => id !== expectedOrder[index]);

    if (isOrderStale) {
      resetQuestionOrder(filtered);
    }

    const question = state.questionMap.get(orderIds[currentIndex]) || filtered[0];
    renderCompactQuestion(root, question, currentIndex + 1, orderIds.length);
  };

  const applyFilters = () => {
    committedFilters = {
      topic: draftFilters.topic,
      difficulty: draftFilters.difficulty,
      search: draftFilters.search.trim()
    };
    resetQuestionOrder(getFilteredQuestions(committedFilters));
    render();

    if (!isDesktop()) {
      closeOverlays({ restoreFocus: true });
    }
  };

  const handleFilterChange = () => {
    draftFilters = {
      topic: topicSelect.value,
      difficulty: difficultySelect.value,
      search: searchInput.value
    };

    if (isDesktop()) {
      applyFilters();
    } else {
      updateCounts();
    }
  };

  const goToNextQuestion = () => {
    if (!orderIds.length) {
      render();
      return;
    }

    currentIndex = (currentIndex + 1) % orderIds.length;
    render();
  };

  [topicSelect, difficultySelect].forEach((node) => node.addEventListener("change", handleFilterChange));
  searchInput.addEventListener("input", handleFilterChange);
  nextButtons.forEach((node) => node.addEventListener("click", goToNextQuestion));
  filterToggles.forEach((node) =>
    node.addEventListener("click", () => {
      if (body.classList.contains("practice-filters-open")) {
        closeOverlays({ restoreFocus: true });
      } else {
        openFilters(node);
      }
    })
  );
  filterClose?.addEventListener("click", () => closeOverlays({ restoreFocus: true }));
  applyButton?.addEventListener("click", applyFilters);
  resetButton?.addEventListener("click", () => {
    draftFilters = { topic: "", difficulty: "", search: "" };
    syncControlValues();

    if (isDesktop()) {
      applyFilters();
    } else {
      updateCounts();
    }
  });
  overlay?.addEventListener("click", () => closeOverlays({ restoreFocus: true }));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("practice-sheet-open")) {
      closeOverlays({ restoreFocus: true });
    }
  });
  onMediaQueryChange(desktopQuery, () => {
    if (isDesktop()) {
      closeOverlays();
    }
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
  });

  render();
}

function buildPracticePage() {
  const root = document.getElementById("practice-question");
  if (!root) return;

  renderModeSwitch(document.getElementById("practice-mode-switch"), {
    currentMode: "multiple_choice",
    mcqPage: "practice.html"
  });

  const body = document.body;
  const topicSelect = document.getElementById("practice-topic");
  const difficultySelect = document.getElementById("practice-difficulty");
  const counter = document.getElementById("practice-count");
  const sheetCount = document.getElementById("practice-sheet-count");
  const activeFilter = document.getElementById("practice-active-filter");
  const button = document.getElementById("next-random-question");
  const desktopButton = document.getElementById("next-random-question-desktop");
  const filterToggle = document.getElementById("practice-filters-toggle");
  const filterDockToggle = document.getElementById("practice-filters-dock-toggle");
  const filtersSheet = document.getElementById("practice-filters-sheet");
  const filterClose = document.getElementById("practice-filters-close");
  const applyButton = document.getElementById("practice-apply-filters");
  const resetButton = document.getElementById("practice-reset-filters");
  const overlay = document.getElementById("practice-overlay");
  const desktopQuery = window.matchMedia("(min-width: 768px)");
  const nextButtons = [button, desktopButton].filter(Boolean);
  const filterToggles = [filterToggle, filterDockToggle].filter(Boolean);

  if (!state.activeScope) {
    counter.textContent = "Kapsam seç";
    sheetCount.textContent = "Kapsam seç";
    activeFilter.textContent = "Önce Vize veya Final seç";
    nextButtons.forEach((node) => {
      node.disabled = true;
    });
    filterToggles.forEach((node) => {
      node.disabled = true;
    });
    ensureScopeChosen(root, "Önce sınav türünü seç", "practice.html");
    return;
  }

  populateTopicSelect(topicSelect);
  let currentIndex = 0;
  let orderIds = [];
  let committedFilters = { topic: "", difficulty: "" };
  let draftFilters = { ...committedFilters };
  let lastTrigger = null;

  const isDesktop = () => desktopQuery.matches;

  const getFilteredQuestions = (filters) =>
    filterQuestions({
      topic: filters.topic,
      difficulty: filters.difficulty
    });

  const formatFilterSummary = (filters) => {
    const scopePrefix = examScopeLabel(state.activeScope);
    const parts = [];
    if (filters.topic) parts.push(filters.topic);
    if (filters.difficulty) parts.push(filters.difficulty);
    return parts.length ? `${scopePrefix} • ${parts.join(" • ")}` : `${scopePrefix} • Tüm havuz`;
  };

  const syncControlValues = () => {
    topicSelect.value = draftFilters.topic;
    difficultySelect.value = draftFilters.difficulty;
  };

  const resetFilterExpansion = () => {
    filterToggles.forEach((node) => node.setAttribute("aria-expanded", "false"));
  };

  const setSheetSemantics = () => {
    if (body.classList.contains("practice-filters-open") && !isDesktop()) {
      filtersSheet?.setAttribute("role", "dialog");
      filtersSheet?.setAttribute("aria-modal", "true");
      filterToggles.forEach((node) => node.setAttribute("aria-expanded", "true"));
    } else {
      filtersSheet?.removeAttribute("role");
      filtersSheet?.removeAttribute("aria-modal");
    }
  };

  function updateCounts() {
    const committedPool = getFilteredQuestions(committedFilters);
    const draftPool = getFilteredQuestions(draftFilters);

    counter.textContent = poolCountLabel(committedPool.length);
    sheetCount.textContent = poolSizeLabel(draftPool.length);
    activeFilter.textContent = formatFilterSummary(committedFilters);

    nextButtons.forEach((node) => {
      node.disabled = committedPool.length === 0;
    });
    resetButton.disabled = !draftFilters.topic && !draftFilters.difficulty;
  }

  const closeOverlays = ({ restoreFocus = false } = {}) => {
    body.classList.remove("practice-filters-open", "practice-sheet-open");
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
    resetFilterExpansion();
    setSheetSemantics();

    if (restoreFocus && lastTrigger) {
      lastTrigger.focus();
    }
  };

  const openFilters = (trigger) => {
    if (isDesktop()) return;
    closeQuestionDialog();
    lastTrigger = trigger;
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
    body.classList.add("practice-filters-open", "practice-sheet-open");
    setSheetSemantics();
    window.setTimeout(() => topicSelect.focus(), 0);
  };

  const render = () => {
    const filtered = getFilteredQuestions(committedFilters);
    updateCounts();

    if (!filtered.length) {
      orderIds = [];
      currentIndex = 0;
      setEmpty(root, "Bu seçimde soru yok", "Filtreleri sıfırlayıp tekrar dene.");
      return;
    }

    const filteredIds = new Set(filtered.map((question) => question.id));
    const isOrderStale =
      orderIds.length !== filtered.length || orderIds.some((id) => !filteredIds.has(id));

    if (isOrderStale) {
      orderIds = shuffleArray(filtered.map((question) => question.id));
      currentIndex = 0;
    }

    const picked = state.questionMap.get(orderIds[currentIndex]) || filtered[0];
    renderCompactQuestion(root, picked, currentIndex + 1, orderIds.length);
  };

  const applyFilters = () => {
    committedFilters = { ...draftFilters };
    orderIds = shuffleArray(getFilteredQuestions(committedFilters).map((question) => question.id));
    currentIndex = 0;
    render();
    if (!isDesktop()) {
      closeOverlays({ restoreFocus: true });
    }
  };

  const handleFilterChange = () => {
    draftFilters = {
      topic: topicSelect.value,
      difficulty: difficultySelect.value
    };

    if (isDesktop()) {
      applyFilters();
    } else {
      updateCounts();
    }
  };

  [topicSelect, difficultySelect].forEach((node) => node.addEventListener("change", handleFilterChange));
  nextButtons.forEach((node) =>
    node.addEventListener("click", () => {
      if (!orderIds.length) {
        render();
        return;
      }

      currentIndex = (currentIndex + 1) % orderIds.length;
      render();
    })
  );
  filterToggles.forEach((node) =>
    node.addEventListener("click", () => {
      if (body.classList.contains("practice-filters-open")) {
        closeOverlays({ restoreFocus: true });
      } else {
        openFilters(node);
      }
    })
  );
  filterClose?.addEventListener("click", () => closeOverlays({ restoreFocus: true }));
  applyButton?.addEventListener("click", applyFilters);
  resetButton?.addEventListener("click", () => {
    draftFilters = { topic: "", difficulty: "" };
    syncControlValues();

    if (isDesktop()) {
      applyFilters();
    } else {
      updateCounts();
    }
  });
  overlay?.addEventListener("click", () => closeOverlays({ restoreFocus: true }));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("practice-sheet-open")) {
      closeOverlays({ restoreFocus: true });
    }
  });
  onMediaQueryChange(desktopQuery, () => {
    if (isDesktop()) {
      closeOverlays();
    }
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
  });

  render();
}

function populateFillBlankTopicSelect(select) {
  if (!select) return;
  clearNode(select);
  select.append(new Option("Tümü", ""));
  const topics = [...new Set((state.fillBlanks || []).map((item) => topicLabelByPdf(item.source_pdf)))].sort(
    (a, b) => a.localeCompare(b, "tr")
  );
  topics.forEach((topic) => select.append(new Option(topic, topic)));
}

function filterFillBlanks({ topic = "", difficulty = "", weakOnly = false }) {
  if (!state.fillBlanks?.length) return [];
  const weakSet = new Set(fillBlankSummary("midterm").weakIds);

  return state.fillBlanks.filter((question) => {
    const topicMatch = !topic || topicLabelByPdf(question.source_pdf) === topic;
    const difficultyMatch = !difficulty || question.difficulty === difficulty;
    const weakMatch = !weakOnly || weakSet.has(question.id);
    return topicMatch && difficultyMatch && weakMatch;
  });
}

function buildFillBlankStage({
  question,
  index,
  total,
  answerState,
  onAnswer
}) {
  const fragment = document.createDocumentFragment();
  const card = element("article", "question-card compact-card fill-blank-card");
  const meta = element("div", "question-meta question-meta-compact");
  const metaGroup = element("div", "question-meta-group");
  const utility = element("div", "fill-blank-utility");
  const kicker = element(
    "p",
    "question-kicker",
    question.source_subtopic && question.source_subtopic !== question.source_topic
      ? question.source_subtopic
      : question.source_topic
  );
  const prompt = buildFillBlankPrompt(question.prompt_text);
  const promptPanel = element("section", "fill-blank-prompt-panel");
  const promptLabel = element("span", "fill-blank-prompt-label", "Doğru ifadeye dokun ve boşluğu tamamla");
  const optionGrid = element("div", "option-grid fill-blank-option-grid");
  const fitRegion = element("div", "compact-fit-region fill-blank-fit-region");
  const fitCanvas = element("div", "compact-fit-canvas");
  const fitBody = element("div", "compact-fit-body fill-blank-fit-body");
  const actionRow = element("div", "question-card-actions");
  const topicLabel = question.source_subtopic || question.source_topic;
  const sourceButton = element("button", "button secondary question-card-action", "Kaynak");
  const explanationButton = element("button", "button primary question-card-action", "Açıklama");
  sourceButton.type = "button";
  explanationButton.type = "button";

  metaGroup.append(
    badge(question.difficulty, difficultyClass(question.difficulty)),
    badge(topicLabelByPdf(question.source_pdf))
  );
  utility.append(element("span", "question-progress", `${index}/${total}`));
  meta.append(metaGroup, utility);

  sourceButton.addEventListener("click", () => {
    openQuestionDialog({
      title: "Kaynak",
      subtitle: topicLabel,
      content: buildSourceDialogContent(question, topicLabel)
    });
  });

  explanationButton.disabled = !answerState;
  explanationButton.addEventListener("click", () => {
    if (!answerState) return;
    openQuestionDialog({
      title: "Açıklama",
      subtitle: topicLabel,
      content: buildFillBlankExplanationDialogContent(question, answerState)
    });
  });

  promptPanel.append(promptLabel, prompt);

  Object.entries(question.options).forEach(([letter, value]) => {
    const button = element("button", "option-button");
    button.type = "button";
    button.dataset.letter = letter;
    button.append(element("span", "option-label", letter), element("span", "option-text", value));

    if (answerState) {
      button.disabled = true;
      if (letter === question.correct_answer) {
        button.classList.add("correct");
      } else if (!answerState.isCorrect && letter === answerState.selectedLetter) {
        button.classList.add("incorrect");
      }
    } else {
      button.addEventListener("click", () => onAnswer(letter));
    }

    optionGrid.append(button);
  });

  fitBody.append(kicker, promptPanel, optionGrid);
  fitCanvas.append(fitBody);
  fitRegion.append(fitCanvas);
  actionRow.append(sourceButton, explanationButton);
  card.append(meta, fitRegion, actionRow);
  fragment.append(card);

  return { fragment, card };
}

function buildFillBlanksPage() {
  const root = document.getElementById("fill-blank-stage");
  if (!root) return;

  renderModeSwitch(document.getElementById("fill-blank-mode-switch"), {
    currentMode: "fill_blank",
    mcqPage: "practice.html"
  });

  const body = document.body;
  const topicSelect = document.getElementById("fill-blank-topic");
  const difficultySelect = document.getElementById("fill-blank-difficulty");
  const weakOnlyInput = document.getElementById("fill-blank-weak-only");
  const toolsSheet = document.getElementById("fill-blank-tools-sheet");
  const toolsClose = document.getElementById("fill-blank-tools-close");
  const applyButton = document.getElementById("fill-blank-apply-filters");
  const resetButton = document.getElementById("fill-blank-reset-filters");
  const overlay = document.getElementById("fill-blank-overlay");
  const toolsHeaderToggle = document.getElementById("fill-blank-tools-toggle");
  const toolsDockToggle = document.getElementById("fill-blank-tools-dock-toggle");
  const dockNextButton = document.getElementById("fill-blank-next-dock");
  const desktopNextButton = document.getElementById("fill-blank-next-desktop");
  const poolCount = document.getElementById("fill-blank-count");
  const activeFilter = document.getElementById("fill-blank-active-filter");
  const headerCount = document.getElementById("fill-blank-count-header");
  const headerActiveFilter = document.getElementById("fill-blank-active-filter-header");
  const solvedStat = document.getElementById("fill-blank-solved");
  const correctStat = document.getElementById("fill-blank-correct");
  const weakStat = document.getElementById("fill-blank-weak");
  const desktopQuery = window.matchMedia("(min-width: 768px)");

  populateFillBlankTopicSelect(topicSelect);

  let committedFilters = {
    topic: "",
    difficulty: "",
    weakOnly: false
  };
  let draftFilters = { ...committedFilters };
  let currentQuestionId = null;
  let answerState = null;
  let lastRenderedId = null;
  let lastTrigger = null;

  const formatFilterSummary = (filters) => {
    const parts = [examScopeLabel("midterm")];
    if (filters.topic) parts.push(filters.topic);
    if (filters.difficulty) parts.push(filters.difficulty);
    if (filters.weakOnly) parts.push("Zayıf sorular");
    if (parts.length === 1) parts.push("Tüm havuz");
    return parts.join(" • ");
  };

  const syncControlValues = () => {
    topicSelect.value = draftFilters.topic;
    difficultySelect.value = draftFilters.difficulty;
    weakOnlyInput.checked = draftFilters.weakOnly;
  };

  const resetToolExpansion = () => {
    document
      .querySelectorAll("#fill-blank-tools-dock-toggle, #fill-blank-tools-toggle, .fill-blank-tools-toggle")
      .forEach((node) => node.setAttribute("aria-expanded", "false"));
  };

  const setSheetSemantics = () => {
    if (body.classList.contains("practice-sheet-open")) {
      toolsSheet?.setAttribute("role", "dialog");
      toolsSheet?.setAttribute("aria-modal", "true");
      document
        .querySelectorAll("#fill-blank-tools-dock-toggle, #fill-blank-tools-toggle, .fill-blank-tools-toggle")
        .forEach((node) => node.setAttribute("aria-expanded", "true"));
    } else {
      toolsSheet?.removeAttribute("role");
      toolsSheet?.removeAttribute("aria-modal");
    }
  };

  const updateSummary = () => {
    const summary = fillBlankSummary("midterm");
    const committedPool = filterFillBlanks(committedFilters);
    const draftPool = filterFillBlanks(draftFilters);
    const committedLabel = formatFilterSummary(committedFilters);
    const draftPoolLabel = fillBlankPoolLabel(draftPool.length);

    activeFilter.textContent = committedLabel;
    if (headerActiveFilter) {
      headerActiveFilter.textContent = `${committedLabel} • ${fillBlankPoolLabel(committedPool.length)}`;
    }
    poolCount.textContent = draftPoolLabel;
    if (headerCount) {
      headerCount.textContent = fillBlankPoolLabel(committedPool.length);
    }
    solvedStat.textContent = String(summary.solvedCount);
    correctStat.textContent = String(summary.correctCount);
    weakStat.textContent = String(summary.weakCount);
    applyButton.disabled = false;
    resetButton.disabled = !draftFilters.topic && !draftFilters.difficulty && !draftFilters.weakOnly;

    return committedPool;
  };

  const closeTools = ({ restoreFocus = false } = {}) => {
    body.classList.remove("practice-filters-open", "practice-sheet-open");
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateSummary();
    resetToolExpansion();
    setSheetSemantics();

    if (restoreFocus && lastTrigger) {
      lastTrigger.focus();
    }
  };

  const openTools = (trigger) => {
    closeQuestionDialog();
    lastTrigger = trigger;
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateSummary();
    body.classList.add("practice-filters-open", "practice-sheet-open");
    setSheetSemantics();
    window.setTimeout(() => topicSelect.focus(), 0);
  };

  const resolveQuestion = (filtered) => {
    if (!filtered.length) {
      currentQuestionId = null;
      return { question: null, index: -1 };
    }

    let index = filtered.findIndex((item) => item.id === currentQuestionId);

    if (index < 0) {
      const preferredId = fillBlankSummary("midterm").lastQuestionId;
      index = filtered.findIndex((item) => item.id === preferredId);
    }

    if (index < 0) {
      index = 0;
    }

    currentQuestionId = filtered[index].id;
    return {
      question: filtered[index],
      index
    };
  };

  const render = () => {
    const filtered = updateSummary();

    if (!state.fillBlanks?.length) {
      setFillBlankDockState();
      if (desktopNextButton) {
        desktopNextButton.disabled = true;
        desktopNextButton.onclick = null;
      }
      if (dockNextButton) {
        dockNextButton.disabled = true;
        dockNextButton.onclick = null;
      }
      setEmpty(
        root,
        "Boşluk doldurma verisi hazır değil",
        "Bu mod için veri dosyası üretilmedi veya site datasına henüz taşınmadı.",
        [linkButton("Ana Sayfa", "index.html", "button primary")]
      );
      return;
    }

    if (!filtered.length) {
      setFillBlankDockState();
      if (desktopNextButton) {
        desktopNextButton.disabled = true;
        desktopNextButton.onclick = null;
      }
      if (dockNextButton) {
        dockNextButton.disabled = true;
        dockNextButton.onclick = null;
      }
      const message = committedFilters.weakOnly
        ? "Zayıf boşluk havuzun şu an boş. Filtreyi kapatıp tüm havuza dönebilirsin."
        : "Bu filtrelerle eşleşen boşluk bulunamadı.";
      setEmpty(root, "Bu seçimde boşluk yok", message, [
        linkButton("Rastgele Pratik", scopeHref("midterm", "practice.html"), "button secondary")
      ]);
      return;
    }

    const { question, index } = resolveQuestion(filtered);
    if (!question) return;

    renderQuestion(question, index, filtered.length);
  };

  const renderQuestion = (question, index, total) => {
    if (lastRenderedId !== question.id) {
      recordFillBlankSeen(question.id, "midterm");
      lastRenderedId = question.id;
    }

    const goToNextQuestion = () => {
      const nextPool = filterFillBlanks(committedFilters);
      if (!nextPool.length) {
        currentQuestionId = null;
        answerState = null;
        lastRenderedId = null;
        render();
        return;
      }

      const currentPosition = nextPool.findIndex((item) => item.id === question.id);
      const resolvedIndex = currentPosition >= 0 ? currentPosition : Math.max(0, index - 1);
      const nextIndex = (resolvedIndex + 1) % nextPool.length;
      currentQuestionId = nextPool[nextIndex].id;
      answerState = null;
      lastRenderedId = null;
      render();
    };

    const skipCurrentQuestion = () => {
      const currentPool = filterFillBlanks(committedFilters);
      recordFillBlankResult(question.id, "skipped", "midterm");
      const nextIndex = currentPool.length > 1 ? (index + 1) % currentPool.length : index;
      currentQuestionId = currentPool[nextIndex]?.id || null;
      answerState = null;
      lastRenderedId = null;
      render();
    };

    clearNode(root);
    const stage = buildFillBlankStage({
      question,
      index: index + 1,
      total,
      answerState,
      onAnswer: (letter) => {
        const isCorrect = letter === question.correct_answer;
        answerState = {
          isCorrect,
          selectedLetter: letter,
          correctLetter: question.correct_answer
        };
        recordFillBlankResult(question.id, isCorrect ? "correct" : "wrong", "midterm");
        renderQuestion(question, index, total);
      }
    });

    root.append(stage.fragment);
    setFillBlankDockState({ question, answerState });
    setActiveCompactCard(stage.card);

    if (dockNextButton) {
      dockNextButton.disabled = false;
      dockNextButton.onclick = answerState ? goToNextQuestion : skipCurrentQuestion;
      dockNextButton.title = answerState ? "Sonraki" : "Atla";
    }

    if (desktopNextButton) {
      desktopNextButton.disabled = !answerState;
      desktopNextButton.textContent = "Sonraki Boşluk";
      desktopNextButton.onclick = answerState ? goToNextQuestion : null;
    }
  };

  const applyFilters = () => {
    committedFilters = {
      topic: draftFilters.topic,
      difficulty: draftFilters.difficulty,
      weakOnly: draftFilters.weakOnly
    };
    answerState = null;
    lastRenderedId = null;
    render();
    closeTools({ restoreFocus: true });
  };

  const handleDraftChange = () => {
    draftFilters = {
      topic: topicSelect.value,
      difficulty: difficultySelect.value,
      weakOnly: weakOnlyInput.checked
    };
    updateSummary();
  };

  [topicSelect, difficultySelect].forEach((node) => node.addEventListener("change", handleDraftChange));
  weakOnlyInput?.addEventListener("change", handleDraftChange);
  [toolsHeaderToggle, toolsDockToggle]
    .filter(Boolean)
    .forEach((node) =>
      node.addEventListener("click", () => {
        if (body.classList.contains("practice-sheet-open")) {
          closeTools({ restoreFocus: true });
        } else {
          openTools(node);
        }
      })
    );
  toolsClose?.addEventListener("click", () => closeTools({ restoreFocus: true }));
  applyButton?.addEventListener("click", applyFilters);
  resetButton?.addEventListener("click", () => {
    draftFilters = { topic: "", difficulty: "", weakOnly: false };
    syncControlValues();
    updateSummary();
  });
  overlay?.addEventListener("click", () => closeTools({ restoreFocus: true }));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("practice-sheet-open")) {
      closeTools({ restoreFocus: true });
    }
  });
  onMediaQueryChange(desktopQuery, () => {
    closeTools();
  });

  syncControlValues();
  render();
}

function buildReviewPage() {
  const root = document.getElementById("review-question");
  if (!root) return;

  const body = document.body;
  const counter = document.getElementById("review-count");
  const sheetCount = document.getElementById("review-sheet-count");
  const activeFilter = document.getElementById("review-active-filter");
  const clearDesktopButton = document.getElementById("clear-review-desktop");
  const clearButton = document.getElementById("clear-review");
  const button = document.getElementById("next-review-question");
  const desktopButton = document.getElementById("next-review-question-desktop");
  const toolsToggle = document.getElementById("review-tools-toggle");
  const toolsDockToggle = document.getElementById("review-tools-dock-toggle");
  const toolsSheet = document.getElementById("review-tools-sheet");
  const toolsClose = document.getElementById("review-tools-close");
  const overlay = document.getElementById("review-overlay");
  const desktopQuery = window.matchMedia("(min-width: 768px)");
  const nextButtons = [button, desktopButton].filter(Boolean);
  const clearButtons = [clearButton, clearDesktopButton].filter(Boolean);
  const toolToggles = [toolsToggle, toolsDockToggle].filter(Boolean);
  let currentId = null;
  let lastIndex = 0;
  let lastTrigger = null;

  if (!state.activeScope) {
    counter.textContent = "Kapsam seç";
    sheetCount.textContent = "Kapsam seç";
    activeFilter.textContent = "Önce Vize veya Final seç";
    nextButtons.forEach((node) => {
      node.disabled = true;
    });
    clearButtons.forEach((node) => {
      node.disabled = true;
    });
    toolToggles.forEach((node) => {
      node.disabled = true;
    });
    ensureScopeChosen(root, "Önce sınav türünü seç", "review.html");
    return;
  }

  const isDesktop = () => desktopQuery.matches;

  const getReviewQuestions = () =>
    getWrongQuestionIds(getStore())
      .map((id) => state.questionMap.get(id))
      .filter(Boolean);

  const resetToolExpansion = () => {
    toolToggles.forEach((node) => node.setAttribute("aria-expanded", "false"));
  };

  const setSheetSemantics = () => {
    if (body.classList.contains("practice-filters-open") && !isDesktop()) {
      toolsSheet?.setAttribute("role", "dialog");
      toolsSheet?.setAttribute("aria-modal", "true");
      toolToggles.forEach((node) => node.setAttribute("aria-expanded", "true"));
    } else {
      toolsSheet?.removeAttribute("role");
      toolsSheet?.removeAttribute("aria-modal");
    }
  };

  const updateCounts = () => {
    const reviewQuestions = getReviewQuestions();
    const hasQuestions = reviewQuestions.length > 0;
    const scopePrefix = examScopeLabel(state.activeScope);

    counter.textContent = hasQuestions ? poolCountLabel(reviewQuestions.length) : "Liste boş";
    sheetCount.textContent = hasQuestions ? poolSizeLabel(reviewQuestions.length) : "Liste boş";
    activeFilter.textContent = hasQuestions
      ? `${scopePrefix} • Yanlış havuzu`
      : `${scopePrefix} • Tekrar listesi boş`;

    nextButtons.forEach((node) => {
      node.disabled = !hasQuestions;
    });
    clearButtons.forEach((node) => {
      node.disabled = !hasQuestions;
    });

    return reviewQuestions;
  };

  const closeOverlays = ({ restoreFocus = false } = {}) => {
    body.classList.remove("practice-filters-open", "practice-sheet-open");
    resetToolExpansion();
    setSheetSemantics();

    if (restoreFocus && lastTrigger) {
      lastTrigger.focus();
    }
  };

  const openTools = (trigger) => {
    if (isDesktop()) return;
    closeQuestionDialog();
    lastTrigger = trigger;
    updateCounts();
    body.classList.add("practice-filters-open", "practice-sheet-open");
    setSheetSemantics();
    window.setTimeout(() => clearButton?.focus(), 0);
  };

  const renderCurrentQuestion = (question, position, total) => {
    renderCompactQuestion(root, question, position, total, {
      onAnswered: () => {
        updateCounts();
      }
    });
  };

  const render = () => {
    const reviewQuestions = updateCounts();

    if (!reviewQuestions.length) {
      currentId = null;
      lastIndex = 0;
      setEmpty(root, "Liste şu an boş", "Yeni yanlışlar burada birikir.", [
        linkButton("Pratiğe Başla", scopeHref(state.activeScope, "practice.html"), "button primary"),
        linkButton("Konuya Git", scopeHref(state.activeScope, "questions.html"), "button secondary")
      ]);
      return;
    }

    const currentPosition = reviewQuestions.findIndex((question) => question.id === currentId);
    const resolvedIndex =
      currentPosition >= 0 ? currentPosition : Math.min(lastIndex, reviewQuestions.length - 1);
    const question = reviewQuestions[resolvedIndex];

    currentId = question.id;
    lastIndex = resolvedIndex;
    renderCurrentQuestion(question, resolvedIndex + 1, reviewQuestions.length);
  };

  const goToNextQuestion = () => {
    const reviewQuestions = updateCounts();
    if (!reviewQuestions.length) {
      render();
      return;
    }

    const currentPosition = reviewQuestions.findIndex((question) => question.id === currentId);
    const nextIndex =
      currentPosition >= 0
        ? (currentPosition + 1) % reviewQuestions.length
        : Math.min(lastIndex, reviewQuestions.length - 1);
    const question = reviewQuestions[nextIndex];

    currentId = question.id;
    lastIndex = nextIndex;
    renderCurrentQuestion(question, nextIndex + 1, reviewQuestions.length);
  };

  const clearReview = () => {
    const store = getStore();
    setWrongQuestionIds(store, []);
    saveStore(store);
    currentId = null;
    lastIndex = 0;
    render();
    if (!isDesktop()) {
      closeOverlays({ restoreFocus: true });
    }
  };

  nextButtons.forEach((node) => node.addEventListener("click", goToNextQuestion));
  clearButtons.forEach((node) => node.addEventListener("click", clearReview));
  toolToggles.forEach((node) =>
    node.addEventListener("click", () => {
      if (body.classList.contains("practice-filters-open")) {
        closeOverlays({ restoreFocus: true });
      } else {
        openTools(node);
      }
    })
  );
  toolsClose?.addEventListener("click", () => closeOverlays({ restoreFocus: true }));
  overlay?.addEventListener("click", () => closeOverlays({ restoreFocus: true }));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("practice-sheet-open")) {
      closeOverlays({ restoreFocus: true });
    }
  });
  onMediaQueryChange(desktopQuery, () => {
    if (isDesktop()) {
      closeOverlays();
    }
    updateCounts();
  });

  render();
}

function buildCoverageTopicCard(topic) {
  const card = element("article", "topic-card");
  const head = element("div", "topic-head");
  const meta = element("div", "topic-meta");
  const details = document.createElement("details");
  const detailBody = element("div", "detail-body");
  const [densityLabel, densityClass] = densityMeta(topic.questionDensity);
  const questionCount = questionCountForSources(topic.sources);

  head.append(element("h3", "", topic.title), badge(densityLabel, densityClass));
  meta.append(
    badge(`${topic.subtopics.length} alt başlık`),
    badge(`${topic.learningObjectives.length} hedef`),
    badge(`${questionCount} soru`)
  );

  card.append(
    head,
    meta,
    element("p", "", `${topic.subtopics.length} alt başlık ve ${topic.learningObjectives.length} öğrenme hedefi ile ilerler.`)
  );

  details.className = "info-details";
  details.append(element("summary", "", "Detayı gör"));
  detailBody.append(
    buildDetailListBlock("Alt başlıklar", topic.subtopics),
    buildDetailListBlock("Öğrenme hedefleri", topic.learningObjectives),
    buildDetailListBlock("Kaynaklar", topic.sources.map(sourceSummaryForTopic))
  );
  details.append(detailBody);

  card.append(details);
  return card;
}

function buildCoveragePage() {
  const statsRoot = document.getElementById("coverage-stats");
  const topicsRoot = document.getElementById("coverage-topics");
  if (!statsRoot || !topicsRoot) return;

  if (!state.activeScope || !state.coverage) {
    const statCards = [
      ["Vize", String(state.meta?.scopeTotals?.midterm || 0), "Yalnız vize havuzu"],
      ["Final", String(state.meta?.scopeTotals?.final || 0), "Yalnız final havuzu"],
      ["Toplam", String(state.meta?.scopeTotals?.all || 0), "Ayrılmış soru bankası"],
      ["PDF", String(state.meta?.pdfCount || 0), "Kaynak ders dosyası"]
    ];

    clearNode(statsRoot);
    statCards.forEach(([label, value, copy]) => {
      const card = element("article", "stat-card");
      card.append(element("span", "", label), element("strong", "", value), element("p", "", copy));
      statsRoot.append(card);
    });

    clearNode(topicsRoot);
    topicsRoot.append(
      buildEmptyState(
        "Önce Vize ya da Final seç",
        "Kapsam ekranı yalnız seçili sınav havuzunun konu yoğunluğunu gösterir.",
        buildScopeChoiceActions("coverage.html")
      )
    );
    return;
  }

  const summary = coverageSummary();
  const statCards = [
    ["Konu", String(summary.topics), "Ana tekrar alanı"],
    ["Alt başlık", String(summary.subtopics), "Detay dağılımı"],
    ["Soru", String(summary.questions), "Çalışılabilir havuz"],
    ["Sayfa", String(summary.pages), "Toplam kapsam"]
  ];

  clearNode(statsRoot);
  statCards.forEach(([label, value, copy]) => {
    const card = element("article", "stat-card");
    card.append(element("span", "", label), element("strong", "", value), element("p", "", copy));
    statsRoot.append(card);
  });

  const sortedTopics = [...state.coverage.mergedCurriculum].sort(
    (a, b) =>
      densityRank(b.questionDensity) - densityRank(a.questionDensity) ||
      questionCountForSources(b.sources) - questionCountForSources(a.sources) ||
      a.title.localeCompare(b.title, "tr")
  );

  clearNode(topicsRoot);
  sortedTopics.forEach((topic) => topicsRoot.append(buildCoverageTopicCard(topic)));
}

async function init() {
  await loadSharedData();
  buildHome();
  buildQuestionsPage();
  buildPracticePage();
  buildFillBlanksPage();
  buildReviewPage();
  buildCoveragePage();
}

init().catch((error) => {
  console.error(error);
  document.body.append(buildEmptyState("Veriler yüklenemedi", "Sayfayı yenileyip tekrar dene."));
});
