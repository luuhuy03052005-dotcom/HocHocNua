(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  const TAB_IDS = ['tab-practice', 'tab-flashcard', 'tab-exam', 'tab-keyword', 'tab-bank'];
  let questions = [];
  let activeTabId = 'tab-practice';

  function prepareQuestions(rawData) {
    const { normalizeText } = SWTApp.utils;
    const rawList = rawData && Array.isArray(rawData.questions) ? rawData.questions : [];
    return rawList.map((q, idx) => {
      const id = q.id != null ? q.id : idx + 1;
      const options = Array.isArray(q.options) ? q.options : [];
      const correctKeys = Array.isArray(q.correctKeys) ? q.correctKeys : [];
      const optBlob = options.map((o) => o.key + ' ' + o.text).join(' ');
      const searchNorm = normalizeText(
        [id, 'slide ' + (q.slideNumber || ''), q.topic || '', q.question || '', optBlob, q.explanation || ''].join(' ')
      );
      return {
        id,
        slideNumber: q.slideNumber || null,
        question: String(q.question || ''),
        options,
        correctKeys,
        isMulti: Boolean(q.isMulti || correctKeys.length > 1),
        explanation: String(q.explanation || ''),
        topic: String(q.topic || 'SWT301'),
        images: Array.isArray(q.images) ? q.images : [],
        _searchNorm: searchNorm
      };
    });
  }

  function populateTopicSelects(rawData) {
    const { byId, el } = SWTApp.utils;
    const counts = new Map();
    questions.forEach((q) => counts.set(q.topic, (counts.get(q.topic) || 0) + 1));
    const metaTopics = rawData && rawData.meta && Array.isArray(rawData.meta.topics) ? rawData.meta.topics : [];
    const topics = metaTopics.length > 0 ? metaTopics.filter((t) => counts.has(t)) : Array.from(counts.keys()).sort();
    counts.forEach((_, t) => { if (!topics.includes(t)) topics.push(t); });

    ['practice-filter-topic', 'fc-filter-topic', 'exam-topic-select', 'keyword-topic-select', 'bank-topic-select'].forEach((id) => {
      const sel = byId(id);
      if (!sel) return;
      while (sel.options.length > 1) sel.remove(1);
      topics.forEach((t) => {
        const opt = el('option', '', t + ' (' + (counts.get(t) || 0) + ')');
        opt.value = t;
        sel.appendChild(opt);
      });
    });

    const prefs = SWTApp.storage.getPrefs();
    const restoreSelect = (id, val) => {
      const sel = byId(id);
      if (sel && val && Array.from(sel.options).some((o) => o.value === val)) sel.value = val;
    };
    restoreSelect('practice-filter-mode', prefs.practiceFilterMode);
    restoreSelect('practice-filter-topic', prefs.practiceFilterTopic);
    restoreSelect('fc-filter-topic', prefs.fcFilterTopic);
  }

  function updateHeaderStats() {
    const { byId, setText } = SWTApp.utils;
    const s = SWTApp.storage.getSummary(questions);
    setText('stat-mastered', s.mastered + '/' + s.total);
    setText('stat-mistakes', String(s.mistakes));
    setText('stat-accuracy', s.accuracy + '%');
    const fill = byId('mastery-progress-fill');
    if (fill) {
      const pct = s.total > 0 ? Math.round((s.mastered / s.total) * 100) : 0;
      fill.style.inlineSize = pct + '%';
    }
  }

  function systemScheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const valid = theme === 'light' || theme === 'dark' ? theme : '';
    if (meta) meta.content = valid || 'light dark';
    if (valid) document.documentElement.dataset.theme = valid;
    else delete document.documentElement.dataset.theme;
  }

  function toggleTheme() {
    const stored = SWTApp.storage.getPrefs().theme;
    const current = stored === 'light' || stored === 'dark' ? stored : systemScheme();
    const target = current === 'dark' ? 'light' : 'dark';
    const nextStored = target === systemScheme() ? '' : target;
    SWTApp.storage.setPref('theme', nextStored);
    applyTheme(nextStored);
  }

  function panelForTab(tab) {
    const panelId = tab.dataset.panel || tab.id.replace(/^tab-/, 'panel-');
    return SWTApp.utils.byId(panelId);
  }

  function selectTab(tabId, opts) {
    const focusTab = Boolean(opts && opts.focus);
    const tabs = TAB_IDS.map((id) => SWTApp.utils.byId(id)).filter(Boolean);
    const selected = tabs.find((t) => t.id === tabId) || tabs[0];
    if (!selected) return;
    activeTabId = selected.id;

    tabs.forEach((tab) => {
      const isSel = tab === selected;
      tab.setAttribute('aria-selected', isSel ? 'true' : 'false');
      tab.tabIndex = isSel ? 0 : -1;
      tab.toggleAttribute('focusgroupstart', isSel);
      const panel = panelForTab(tab);
      if (panel) {
        if (isSel) panel.hidden = false;
        else panel.hidden = 'until-found';
      }
    });

    try {
      selected.scrollIntoView({ block: 'nearest', inline: 'nearest', container: 'nearest' });
    } catch (_) {
      selected.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    if (focusTab) selected.focus();

    SWTApp.practice?.onTabActivated(activeTabId);
    SWTApp.exam?.onTabActivated(activeTabId);
    SWTApp.keyword?.onTabActivated(activeTabId);
  }

  function initTabs() {
    const tabs = TAB_IDS.map((id) => SWTApp.utils.byId(id)).filter(Boolean);
    tabs.forEach((tab, idx) => {
      tab.tabIndex = idx === 0 ? 0 : -1;
      tab.addEventListener('click', () => selectTab(tab.id));
      tab.addEventListener('keydown', (e) => {
        let nextIdx = -1;
        if (e.key === 'ArrowRight') nextIdx = (idx + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') nextIdx = 0;
        else if (e.key === 'End') nextIdx = tabs.length - 1;
        if (nextIdx >= 0) {
          e.preventDefault();
          selectTab(tabs[nextIdx].id, { focus: true });
        }
      });

      const panel = panelForTab(tab);
      panel?.addEventListener('beforematch', () => selectTab(tab.id));
    });
  }

  function initDialogs() {
    const { byId } = SWTApp.utils;
    if (typeof HTMLButtonElement !== 'undefined' && !('commandForElement' in HTMLButtonElement.prototype)) {
      document.querySelectorAll('button[commandfor][command]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const target = byId(btn.getAttribute('commandfor'));
          const cmd = btn.getAttribute('command');
          if (!target) return;
          if (cmd === 'show-modal' && typeof target.showModal === 'function') target.showModal();
          else if ((cmd === 'close' || cmd === 'request-close') && typeof target.close === 'function') target.close();
        });
      });
    }

    if (typeof HTMLDialogElement !== 'undefined' && !('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, dlg) => {
        const r = dlg.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      document.querySelectorAll('dialog[closedby="any"]').forEach((dlg) => {
        let pressedOutside = false;
        dlg.addEventListener('pointerdown', (e) => { pressedOutside = outside(e, dlg); });
        dlg.addEventListener('pointerup', (e) => { if (pressedOutside && outside(e, dlg)) dlg.close(); });
      });
    }

    byId('confirm-reset-btn')?.addEventListener('click', () => {
      SWTApp.storage.resetProgress();
      SWTApp.practice?.refreshAll();
      SWTApp.exam?.refreshBank();
      byId('reset-dialog')?.close();
    });
  }

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
      if (document.querySelector('dialog[open]')) return;
      if (e.target?.closest('input:not([type="checkbox"]):not([type="radio"]), select, textarea, [contenteditable="true"]')) return;

      const k = e.key;
      const up = k.toUpperCase();
      const onControl = Boolean(e.target?.closest('button:not([role="tab"]), a[href], summary, input[type="checkbox"], input[type="radio"]'));
      if (k === '?') {
        const help = SWTApp.utils.byId('help-dialog');
        if (help && typeof help.showModal === 'function') { e.preventDefault(); help.showModal(); }
        return;
      }

      if (activeTabId === 'tab-practice') {
        if (/^[1-6]$/.test(k) && SWTApp.practice?.selectByNumber(Number(k))) e.preventDefault();
        else if (/^[A-F]$/.test(up) && SWTApp.practice?.selectByLetter(up)) e.preventDefault();
        else if (!onControl && (k === ' ' || k === 'Enter') && SWTApp.practice?.submitOrNext()) e.preventDefault();
        else if (k === 'ArrowLeft') { e.preventDefault(); SWTApp.practice?.step(-1); }
        else if (k === 'ArrowRight') { e.preventDefault(); SWTApp.practice?.step(1); }
        else if (up === 'R') { e.preventDefault(); SWTApp.practice?.reveal(); }
        else if (up === 'S') { e.preventDefault(); SWTApp.practice?.toggleStar(); }
      } else if (activeTabId === 'tab-flashcard') {
        if (up === 'R' || (!onControl && (k === ' ' || k === 'Enter'))) { e.preventDefault(); SWTApp.practice?.flipCard(); }
        else if (SWTApp.practice?.isCardFlipped() && (k === '1' || k === '2' || k === '3')) {
          e.preventDefault();
          SWTApp.practice.gradeCard(k === '1' ? 'hard' : k === '2' ? 'good' : 'easy');
        } else if (k === 'ArrowLeft') { e.preventDefault(); SWTApp.practice?.stepCard(-1); }
        else if (k === 'ArrowRight') { e.preventDefault(); SWTApp.practice?.stepCard(1); }
        else if (up === 'S') { e.preventDefault(); SWTApp.practice?.toggleCardStar(); }
      } else if (activeTabId === 'tab-exam' && SWTApp.exam?.isActive()) {
        if (/^[1-6]$/.test(k) && SWTApp.exam.selectByNumber(Number(k))) e.preventDefault();
        else if (/^[A-F]$/.test(up) && SWTApp.exam.selectByLetter(up)) e.preventDefault();
        else if (k === 'ArrowLeft') { e.preventDefault(); SWTApp.exam.step(-1); }
        else if (k === 'ArrowRight') { e.preventDefault(); SWTApp.exam.step(1); }
        else if (up === 'S') { e.preventDefault(); SWTApp.exam.toggleFlag(); }
      }
    });
  }

  function boot() {
    const raw = window.SWT301_DATA || { meta: {}, questions: [] };
    questions = prepareQuestions(raw);

    applyTheme(SWTApp.storage.getPrefs().theme);
    SWTApp.utils.byId('theme-toggle')?.addEventListener('click', toggleTheme);
    populateTopicSelects(raw);
    initTabs();
    initDialogs();
    initKeyboardShortcuts();

    SWTApp.storage.onChange(() => {
      applyTheme(SWTApp.storage.getPrefs().theme);
      updateHeaderStats();
    });

    SWTApp.practice?.init(questions);
    SWTApp.exam?.init(questions);
    SWTApp.keyword?.init(questions);
    updateHeaderStats();

    if (questions.length === 0) {
      SWTApp.utils.setText('practice-stem', 'Chưa tìm thấy dữ liệu câu hỏi SWT301 (data/questions.js).');
      SWTApp.utils.setText('fc-stem', 'Chưa tìm thấy dữ liệu câu hỏi SWT301 (data/questions.js).');
    }
  }

  SWTApp.app = { selectTab, getQuestions: () => questions.slice() };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
