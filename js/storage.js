(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  const requestedCourse = new URLSearchParams(window.location.search).get('course');
  const rawCourse = String(requestedCourse || '').toUpperCase();
  const COURSE_KEY = rawCourse === 'SSG105' ? 'ssg105' : rawCourse === 'PRJ301' ? 'prj301' : 'swt301';
  const STORAGE_KEY = COURSE_KEY + '_progress_v1';

  const DEFAULT_PREFS = {
    theme: '',
    shuffleQuestions: false,
    shuffleOptions: false,
    instantNext: false,
    fcOnlyUnmastered: true,
    bankShowAnswers: true,
    practiceFilterMode: 'all',
    practiceFilterTopic: 'all',
    fcFilterTopic: 'all',
    examRandom: false,
    examInstantAnswer: false
  };

  const DEFAULT_RECORD = {
    attempts: 0,
    correctStreak: 0,
    wrongCount: 0,
    mastery: 0,
    starred: false,
    lastWrong: false
  };

  const DEFAULT_PRACTICE = {
    recallStreaks: {},
    clusterIndex: 0
  };

  const byId = (id) => document.getElementById(id);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  const utils = {
    byId,
    el,
    setText(id, text) {
      const node = byId(id);
      if (node) node.textContent = text;
    },
    renderRichText(container, text) {
      if (!container) return;
      const source = String(text || '');
      if (!source.includes('```')) {
        container.textContent = source;
        return;
      }
      container.replaceChildren();
      const parts = source.split(/```(?:[a-zA-Z0-9_-]*\n)?([\s\S]*?)```/g);
      parts.forEach((part, idx) => {
        if (idx % 2 === 1) {
          const codeText = part.replace(/^\r?\n|\r?\n$/g, '');
          if (!codeText) return;
          const pre = el('pre', 'code-block');
          pre.appendChild(el('code', '', codeText));
          container.appendChild(pre);
        } else {
          const prose = part.replace(/^\r?\n+|\r?\n+$/g, '');
          if (!prose) return;
          container.appendChild(el('div', 'rich-text-prose', prose));
        }
      });
    },
    setRichText(id, text) {
      const node = byId(id);
      if (node) utils.renderRichText(node, text);
    },
    setHidden(id, hidden) {
      const node = byId(id);
      if (node) node.hidden = Boolean(hidden);
    },
    normalizeText(value) {
      return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .trim();
    },
    shuffle(items) {
      const copy = Array.isArray(items) ? items.slice() : [];
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = copy[i];
        copy[i] = copy[j];
        copy[j] = tmp;
      }
      return copy;
    },
    sameKeySet(selectedSet, correctKeys) {
      if (!(selectedSet instanceof Set) || !Array.isArray(correctKeys)) return false;
      if (selectedSet.size !== correctKeys.length || correctKeys.length === 0) return false;
      return correctKeys.every((k) => selectedSet.has(k));
    },
    formatClock(totalSeconds) {
      const safe = Math.max(0, Math.floor(Number(totalSeconds) || 0));
      return String(Math.floor(safe / 60)).padStart(2, '0') + ':' + String(safe % 60).padStart(2, '0');
    },
    renderImages(container, images) {
      if (!container) return;
      container.replaceChildren();
      const valid = Array.isArray(images) ? images.filter(Boolean) : [];
      container.hidden = valid.length === 0;
      valid.forEach((src, idx) => {
        const img = el('img', 'question-image');
        img.src = src;
        img.alt = 'Hình minh họa câu hỏi ' + (idx + 1);
        img.loading = 'lazy';
        container.appendChild(img);
      });
    },
    createOptionBtn(opt, opts, onClick) {
      const { selected = false, graded = false, isCorrectKey = false, disabled = false } = opts || {};
      const btn = el('button', 'option-item option-btn');
      btn.type = 'button';
      btn.dataset.key = opt.key;
      btn.classList.toggle('is-selected', selected);
      if (graded) {
        if (isCorrectKey) btn.classList.add('is-correct');
        else if (selected) btn.classList.add('is-wrong');
      }
      btn.disabled = Boolean(disabled);
      btn.setAttribute('aria-pressed', String(selected));
      const textSpan = el('span', 'option-text');
      utils.renderRichText(textSpan, opt.text);
      btn.append(el('span', 'option-key', opt.key), textSpan);
      if (onClick) btn.addEventListener('click', onClick);
      return btn;
    }
  };

  const listeners = new Set();
  let state = { prefs: { ...DEFAULT_PREFS }, records: {}, practice: { ...DEFAULT_PRACTICE } };

  function sanitizePractice(raw) {
    const source = raw && typeof raw === 'object' ? raw : {};
    const recallStreaks = {};
    if (source.recallStreaks && typeof source.recallStreaks === 'object') {
      Object.keys(source.recallStreaks).forEach((id) => {
        recallStreaks[id] = Math.min(2, Math.max(0, Number(source.recallStreaks[id]) || 0));
      });
    }
    return {
      recallStreaks,
      clusterIndex: Math.max(0, Math.floor(Number(source.clusterIndex) || 0))
    };
  }

  function sanitizeRecord(raw) {
    if (!raw || typeof raw !== 'object') return { ...DEFAULT_RECORD };
    return {
      attempts: Math.max(0, Number(raw.attempts) || 0),
      correctStreak: Math.max(0, Number(raw.correctStreak) || 0),
      wrongCount: Math.max(0, Number(raw.wrongCount) || 0),
      mastery: raw.mastery === 2 ? 2 : raw.mastery === 1 ? 1 : 0,
      starred: Boolean(raw.starred),
      lastWrong: Boolean(raw.lastWrong)
    };
  }

  function notify() {
    listeners.forEach((fn) => {
      try { fn(); } catch (_) {}
    });
  }

  function loadState() {
    let parsed = null;
    let storedScheme = '';
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      parsed = raw ? JSON.parse(raw) : null;
      storedScheme = window.localStorage.getItem('color-scheme') || '';
    } catch (_) {}
    const prefs = { ...DEFAULT_PREFS, ...(parsed && parsed.prefs ? parsed.prefs : {}) };
    if (storedScheme === 'light' || storedScheme === 'dark') prefs.theme = storedScheme;
    else if (prefs.theme !== 'light' && prefs.theme !== 'dark') prefs.theme = '';
    const records = {};
    if (parsed && parsed.records && typeof parsed.records === 'object') {
      Object.keys(parsed.records).forEach((id) => {
        records[id] = sanitizeRecord(parsed.records[id]);
      });
    }
    state = { prefs, records, practice: sanitizePractice(parsed && parsed.practice) };
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, prefs: state.prefs, records: state.records, practice: state.practice }));
    } catch (_) {}
    notify();
  }

  function ensureRecord(id) {
    const key = String(id);
    if (!state.records[key]) state.records[key] = { ...DEFAULT_RECORD };
    return state.records[key];
  }

  loadState();
  window.addEventListener('storage', (e) => {
    if (!e.key || e.key === STORAGE_KEY || e.key === 'color-scheme') {
      loadState();
      notify();
    }
  });

  SWTApp.utils = utils;
  SWTApp.storage = {
    getRecord(id) {
      const rec = state.records[String(id)];
      return rec ? { ...rec } : { ...DEFAULT_RECORD };
    },
    recordAnswer(id, isCorrect) {
      const rec = ensureRecord(id);
      rec.attempts += 1;
      if (isCorrect) {
        rec.correctStreak += 1;
        rec.lastWrong = false;
        rec.mastery = rec.correctStreak >= 2 ? 2 : 1;
      } else {
        rec.correctStreak = 0;
        rec.wrongCount += 1;
        rec.mastery = 1;
        rec.lastWrong = true;
      }
      saveState();
      return { ...rec };
    },
    markRevealed(id) {
      const rec = ensureRecord(id);
      rec.correctStreak = 0;
      rec.mastery = 1;
      saveState();
      return { ...rec };
    },
    gradeFlashcard(id, grade) {
      const rec = ensureRecord(id);
      rec.attempts += 1;
      if (grade === 'easy') {
        rec.correctStreak += 1;
        rec.mastery = 2;
        rec.lastWrong = false;
      } else {
        if (grade === 'hard') rec.correctStreak = 0;
        rec.mastery = 1;
      }
      saveState();
      return { ...rec };
    },
    toggleStar(id) {
      const rec = ensureRecord(id);
      rec.starred = !rec.starred;
      saveState();
      return rec.starred;
    },
    matchesStatus(id, status) {
      if (!status || status === 'all') return true;
      const r = this.getRecord(id);
      if (status === 'unmastered') return r.mastery < 2;
      if (status === 'mastered') return r.mastery === 2;
      if (status === 'learning' || status === 'in-progress') return r.mastery === 1;
      if (status === 'mistakes' || status === 'wrong') return r.lastWrong;
      if (status === 'starred') return r.starred;
      if (status === 'unseen' || status === 'new') return r.mastery === 0;
      return true;
    },
    getSummary(questions) {
      const list = Array.isArray(questions) ? questions : [];
      let mastered = 0, learning = 0, unseen = 0, mistakes = 0, starred = 0, attempts = 0, wrong = 0;
      for (let i = 0; i < list.length; i += 1) {
        const r = this.getRecord(list[i].id);
        if (r.mastery === 2) mastered += 1;
        else if (r.mastery === 1) learning += 1;
        else unseen += 1;
        if (r.lastWrong) mistakes += 1;
        if (r.starred) starred += 1;
        attempts += r.attempts;
        wrong += r.wrongCount;
      }
      const accuracy = attempts > 0 ? Math.round((Math.max(0, attempts - wrong) / attempts) * 100) : 0;
      return { total: list.length, mastered, learning, unseen, mistakes, starred, totalAttempts: attempts, totalWrong: wrong, accuracy };
    },
    getPrefs() {
      return { ...state.prefs };
    },
    setPref(key, value) {
      if (!(key in DEFAULT_PREFS)) return;
      state.prefs[key] = value;
      if (key === 'theme') {
        try {
          if (value === 'light' || value === 'dark') window.localStorage.setItem('color-scheme', value);
          else window.localStorage.removeItem('color-scheme');
        } catch (_) {}
      }
      saveState();
    },
    getPracticeState() {
      return {
        recallStreaks: { ...state.practice.recallStreaks },
        clusterIndex: state.practice.clusterIndex
      };
    },
    setPracticeRecall(id, streak) {
      state.practice.recallStreaks[String(id)] = Math.min(2, Math.max(0, Number(streak) || 0));
      saveState();
      return state.practice.recallStreaks[String(id)];
    },
    resetPracticeRecall(ids) {
      (Array.isArray(ids) ? ids : []).forEach((id) => { state.practice.recallStreaks[String(id)] = 0; });
      saveState();
    },
    setPracticeClusterIndex(clusterIndex) {
      state.practice.clusterIndex = Math.max(0, Math.floor(Number(clusterIndex) || 0));
      saveState();
    },
    resetProgress() {
      state.records = {};
      state.practice = { recallStreaks: {}, clusterIndex: 0 };
      saveState();
    },
    onChange(fn) {
      if (typeof fn === 'function') listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
})();
