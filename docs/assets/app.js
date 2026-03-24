const STORAGE_KEY = "biyokimya-vize-progress-v1";

const state = {
  questions: null,
  questionMap: null,
  coverage: null,
  meta: null
};

async function loadJson(fileName) {
  const response = await fetch(`data/${fileName}`);
  if (!response.ok) {
    throw new Error(`Veri yüklenemedi: ${fileName}`);
  }
  return response.json();
}

async function loadSharedData() {
  if (!state.questions) {
    const [questions, coverage, meta] = await Promise.all([
      loadJson("all-questions.json"),
      loadJson("coverage-summary.json"),
      loadJson("site-meta.json")
    ]);
    state.questions = questions;
    state.questionMap = new Map(questions.map((question) => [question.id, question]));
    state.coverage = coverage;
    state.meta = meta;
  }
  return state;
}

function getStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      questionStats: parsed.questionStats || {},
      wrongQuestionIds: parsed.wrongQuestionIds || []
    };
  } catch {
    return { questionStats: {}, wrongQuestionIds: [] };
  }
}

function saveStore(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function recordAnswer(questionId, isCorrect) {
  const store = getStore();
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
    store.wrongQuestionIds = store.wrongQuestionIds.filter((id) => id !== questionId);
  } else {
    stats.wrongAttempts += 1;
    stats.lastCorrect = false;
    if (!store.wrongQuestionIds.includes(questionId)) {
      store.wrongQuestionIds.unshift(questionId);
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

function badge(label, extraClass = "") {
  return element("span", `badge ${extraClass}`.trim(), label);
}

function linkButton(label, href, className = "button secondary") {
  const link = element("a", className, label);
  link.href = href;
  return link;
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
  return state.coverage.inventory.find((item) => item.fileName === fileName);
}

function topicLabelByPdf(fileName) {
  const match = inventoryByFile(fileName);
  return match?.topic || formatFileLabel(fileName);
}

function coverageSummary() {
  const pages = state.coverage.inventory.reduce((sum, item) => sum + item.totalPages, 0);
  const subtopics =
    state.meta?.quality?.subtopicCount ||
    state.coverage.mergedCurriculum.reduce((sum, item) => sum + item.subtopics.length, 0);

  return {
    topics: state.meta.curriculumTopicCount,
    subtopics,
    questions: state.meta.totals.all,
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
  return state.questions.filter((question) => sources.includes(question.source_pdf)).length;
}

function sourceSummaryForTopic(fileName) {
  const match = inventoryByFile(fileName);
  if (!match) return formatFileLabel(fileName);
  return `${formatFileLabel(fileName)} • ${match.totalPages} sayfa`;
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

function buildQuestionCard(question, options = {}) {
  const { compact = false, progressLabel = "", onAnswered = null } = options;
  const card = element("article", compact ? "question-card compact-card" : "question-card");
  const meta = element("div", compact ? "question-meta question-meta-compact" : "question-meta");
  const topicLabel = question.source_subtopic || question.source_topic;

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

  const title = element("h3", "question-title", question.question);
  const optionGrid = element("div", "option-grid");
  const explanation = element("section", "explanation-panel");
  explanation.hidden = true;

  const optionButtons = [];

  Object.entries(question.options).forEach(([letter, value]) => {
    const button = element("button", "option-button");
    button.type = "button";
    button.dataset.letter = letter;
    button.append(element("span", "option-label", letter), text(value));

    button.addEventListener("click", () => {
      optionButtons.forEach((item) => {
        item.disabled = true;
      });

      const correctLetter = question.correct_answer;
      const isCorrect = letter === correctLetter;
      recordAnswer(question.id, isCorrect);

      optionButtons.forEach((item) => {
        if (item.dataset.letter === correctLetter) {
          item.classList.add("correct");
        } else if (!isCorrect && item.dataset.letter === letter) {
          item.classList.add("incorrect");
        }
      });

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

      if (compact) {
        if (notes.length || question.confusion_note) {
          const extraNotes = document.createElement("details");
          extraNotes.className = "info-details";
          extraNotes.append(element("summary", "", "Seçenek notları"));

          const noteBody = element("div", "detail-body");
          if (notes.length) {
            noteBody.append(
              buildDetailListBlock(
                "Kısa notlar",
                notes.map(([key, note]) => `${key}: ${note}`)
              )
            );
          }
          if (question.confusion_note) {
            noteBody.append(
              buildDetailTextBlock("Karıştırılan nokta", question.confusion_note)
            );
          }
          extraNotes.append(noteBody);
          explanation.append(extraNotes);
        }
      } else {
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

  const details = document.createElement("details");
  details.className = "info-details";
  details.append(element("summary", "", compact ? "Kaynak" : "Kaynak ve notlar"));

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

  card.append(meta);
  if (compact && topicLabel) {
    card.append(element("p", "question-kicker", topicLabel));
  }
  card.append(title, optionGrid, explanation, details);
  return card;
}

function renderCompactQuestion(container, question, position, total, options = {}) {
  clearNode(container);
  container.append(
    buildQuestionCard(question, {
      compact: true,
      progressLabel: `${position}/${total}`,
      onAnswered: options.onAnswered
    })
  );
}

function buildHome() {
  const statsRoot = document.getElementById("home-stats");
  const progressRoot = document.getElementById("home-progress");
  const coverageRoot = document.getElementById("home-coverage");
  if (!statsRoot || !progressRoot || !coverageRoot) return;

  const store = getStore();
  const totalSolved = Object.values(store.questionStats).reduce((sum, item) => sum + item.attempts, 0);
  const totalCorrect = Object.values(store.questionStats).reduce(
    (sum, item) => sum + item.correctAttempts,
    0
  );
  const totalWrong = Object.values(store.questionStats).reduce((sum, item) => sum + item.wrongAttempts, 0);
  const uniqueSeen = Object.keys(store.questionStats).length;
  const summary = coverageSummary();

  const statCards = [
    ["Soru", String(summary.questions), "Hazır çalışma havuzu"],
    ["Konu", String(summary.topics), "Ana tekrar alanı"],
    ["Alt başlık", String(summary.subtopics), "Dağıtılmış kapsam"],
    ["Sayfa", String(summary.pages), "Toplam ders içeriği"]
  ];

  clearNode(statsRoot);
  statCards.forEach(([label, value, copy]) => {
    const card = element("article", "stat-card");
    card.append(element("span", "", label), element("strong", "", value), element("p", "", copy));
    statsRoot.append(card);
  });

  clearNode(progressRoot);

  if (!uniqueSeen) {
    progressRoot.append(
      buildEmptyState("Başlamak için hazırsın", "Rastgele pratikle hemen başla ya da doğrudan bir konu seç.", [
        linkButton("Pratiğe Başla", "practice.html", "button primary"),
        linkButton("Konuya Git", "questions.html", "button secondary")
      ])
    );
  } else {
    const overviewGrid = element("div", "summary-grid");
    const accuracy = totalSolved ? (totalCorrect / totalSolved) * 100 : 0;

    overviewGrid.append(
      miniStat("Çözülen", String(totalSolved), "Toplam deneme"),
      miniStat("Doğruluk", formatPercent(accuracy), totalWrong ? `${totalWrong} yanlış kaydı` : "Temiz ilerleme"),
      miniStat(
        "Tekrar listesi",
        String(store.wrongQuestionIds.length),
        store.wrongQuestionIds.length ? "Geri dönülecek soru" : "Liste temiz"
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

  clearNode(coverageRoot);
  coverageRoot.append(
    stackItem("Toplam kapsam", `${summary.topics} konu • ${summary.subtopics} alt başlık • ${summary.questions} soru`),
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
  const topics = [...new Set(state.coverage.inventory.map((item) => item.topic))];
  topics.forEach((topic) => select.append(new Option(topic, topic)));
}

function filterQuestions({ topic = "", difficulty = "", search = "" }) {
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

  populateTopicSelect(topicSelect);
  let currentIndex = 0;
  let orderIds = [];
  let committedFilters = { topic: "", difficulty: "", search: "" };
  let draftFilters = { ...committedFilters };
  let lastTrigger = null;

  const isDesktop = () => desktopQuery.matches;

  const getFilteredQuestions = (filters) => filterQuestions(filters);

  const formatFilterSummary = (filters) => {
    const parts = [];
    if (filters.topic) parts.push(filters.topic);
    if (filters.difficulty) parts.push(filters.difficulty);
    if (filters.search.trim()) parts.push(`Ara: ${filters.search.trim()}`);
    return parts.length ? parts.join(" • ") : "Tüm havuz";
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
  desktopQuery.addEventListener("change", () => {
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
    const parts = [];
    if (filters.topic) parts.push(filters.topic);
    if (filters.difficulty) parts.push(filters.difficulty);
    return parts.length ? parts.join(" • ") : "Tüm havuz";
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
  desktopQuery.addEventListener("change", () => {
    if (isDesktop()) {
      closeOverlays();
    }
    draftFilters = { ...committedFilters };
    syncControlValues();
    updateCounts();
  });

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

  const isDesktop = () => desktopQuery.matches;

  const getReviewQuestions = () =>
    getStore()
      .wrongQuestionIds.map((id) => state.questionMap.get(id))
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

    counter.textContent = hasQuestions ? poolCountLabel(reviewQuestions.length) : "Liste boş";
    sheetCount.textContent = hasQuestions ? poolSizeLabel(reviewQuestions.length) : "Liste boş";
    activeFilter.textContent = hasQuestions ? "Yanlış havuzu" : "Tekrar listesi boş";

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
        linkButton("Pratiğe Başla", "practice.html", "button primary"),
        linkButton("Konuya Git", "questions.html", "button secondary")
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
    store.wrongQuestionIds = [];
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
  desktopQuery.addEventListener("change", () => {
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
  buildReviewPage();
  buildCoveragePage();
}

init().catch((error) => {
  console.error(error);
  document.body.append(buildEmptyState("Veriler yüklenemedi", "Sayfayı yenileyip tekrar dene."));
});
