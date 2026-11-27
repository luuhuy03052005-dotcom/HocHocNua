(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  const TAB_IDS = ['tab-practice', 'tab-flashcard', 'tab-exam', 'tab-keyword', 'tab-study', 'tab-bank', 'tab-sets'];
  const COURSE_CONFIG = {
    SWT301: { id: 'SWT301', code: 'SWT301', subtitle: 'SWT301 — Software Testing — Semester 5', dataKey: 'SWT301_DATA', isCustom: false },
    SSG105: { id: 'SSG105', code: 'SSG105', subtitle: 'SSG105 — Communication & Teamwork Skills — Semester 4', dataKey: 'SSG105_DATA', isCustom: false },
    PRJ301: { id: 'PRJ301', code: 'PRJ301', subtitle: 'PRJ301 — Java Web Application Development — Semester 4', dataKey: 'PRJ301_DATA', isCustom: false }
  };
  let questions = [];
  let activeTabId = 'tab-practice';
  let currentCourse = COURSE_CONFIG.SWT301;

  function requestedCourse() {
    const raw = String(new URLSearchParams(window.location.search).get('course') || '').trim();
    const upper = raw.toUpperCase();
    if (COURSE_CONFIG[upper]) return COURSE_CONFIG[upper];
    if (raw && SWTApp.customSets?.getSetById) {
      const custom = SWTApp.customSets.getSetById(raw);
      if (custom) {
        return {
          id: custom.id,
          code: custom.code || 'CUSTOM',
          subtitle: (custom.code ? custom.code + ' — ' : '') + custom.title,
          customSet: custom,
          isCustom: true
        };
      }
    }
    return COURSE_CONFIG.SWT301;
  }

  function prepareQuestions(rawData) {
    const { normalizeText } = SWTApp.utils;
    const rawList = rawData && Array.isArray(rawData.questions) ? rawData.questions : [];
    const prepared = rawList.map((q, idx) => {
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
        topic: String(q.topic || currentCourse.code),
        images: Array.isArray(q.images) ? q.images : [],
        _searchNorm: searchNorm
      };
    });
    if (currentCourse.code !== 'PRJ301') return prepared;
    const seenStems = new Set();
    return prepared.filter((question) => {
      const stem = normalizeText(question.question).replace(/[^a-z0-9]+/g, ' ').trim();
      if (seenStems.has(stem)) return false;
      seenStems.add(stem);
      return true;
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
      if (panel) panel.hidden = !isSel;
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
    SWTApp.customSets?.onTabActivated?.(activeTabId);
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

  function refreshCoursePickerOptions() {
    const { byId, el } = SWTApp.utils;
    const picker = byId('course-select');
    if (!picker) return;
    picker.replaceChildren();
    [
      ['SWT301', 'SWT301'],
      ['PRJ301', 'PRJ301'],
      ['SSG105', 'SSG105']
    ].forEach(([val, label]) => {
      const opt = el('option', '', label);
      opt.value = val;
      picker.appendChild(opt);
    });
    const customs = SWTApp.customSets?.getAllSets?.() || [];
    if (customs.length > 0) {
      const group = document.createElement('optgroup');
      group.label = 'Đề tự tạo';
      customs.forEach((s) => {
        const opt = el('option', '', (s.code ? s.code + ' — ' : '') + s.title);
        opt.value = s.id;
        group.appendChild(opt);
      });
      picker.appendChild(group);
    }
    picker.value = currentCourse.id || currentCourse.code;
  }

  function switchCourse(courseId, targetTabId) {
    const targetId = String(courseId || 'SWT301').trim();
    const curId = currentCourse.id || currentCourse.code;
    if (targetId === curId) {
      if (targetTabId) selectTab(targetTabId);
      return;
    }
    const url = new URL(window.location.href);
    if (!targetId || targetId === 'SWT301') url.searchParams.delete('course');
    else url.searchParams.set('course', targetId);
    if (targetTabId && targetTabId !== 'tab-practice') url.searchParams.set('tab', targetTabId);
    else url.searchParams.delete('tab');
    window.location.assign(url.toString());
  }

  function initCoursePicker(raw) {
    const { byId, setText } = SWTApp.utils;
    refreshCoursePickerOptions();
    const picker = byId('course-select');
    if (picker && !picker.dataset.boundChange) {
      picker.dataset.boundChange = 'true';
      picker.addEventListener('change', () => {
        switchCourse(picker.value);
      });
    }
    byId('topbar-create-set-btn')?.addEventListener('click', () => {
      selectTab('tab-sets');
      SWTApp.customSets?.openCreator?.();
    });
    const subtitle = raw?.meta?.title || currentCourse.subtitle;
    setText('app-subtitle', subtitle);
    setText('exam-setup-title', 'Cấu hình đề thi thử — ' + currentCourse.code);
    document.title = 'Học tập 123 — ' + currentCourse.code;
    document.querySelector('.tabs-bar')?.setAttribute('aria-label', 'Chế độ học ' + currentCourse.code);
  }

  function boot() {
    currentCourse = requestedCourse();
    const raw = currentCourse.isCustom && currentCourse.customSet
      ? {
          meta: {
            title: (currentCourse.customSet.code ? currentCourse.customSet.code + ' — ' : '') + currentCourse.customSet.title,
            topics: currentCourse.customSet.topics || []
          },
          questions: currentCourse.customSet.questions || []
        }
      : (window[currentCourse.dataKey] || { meta: {}, questions: [] });
    questions = prepareQuestions(raw);

    applyTheme(SWTApp.storage.getPrefs().theme);
    SWTApp.utils.byId('theme-toggle')?.addEventListener('click', toggleTheme);
    initCoursePicker(raw);
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
    SWTApp.study?.init(currentCourse.isCustom ? currentCourse.id : currentCourse.code);
    SWTApp.customSets?.init?.();
    updateHeaderStats();

    const initialTab = new URLSearchParams(window.location.search).get('tab');
    if (initialTab && TAB_IDS.includes(initialTab)) {
      selectTab(initialTab);
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('tab');
      window.history.replaceState({}, '', cleanUrl.toString());
    }

    if (questions.length === 0) {
      SWTApp.utils.setText('practice-stem', 'Chưa tìm thấy dữ liệu câu hỏi ' + currentCourse.code + '.');
      SWTApp.utils.setText('fc-stem', 'Chưa tìm thấy dữ liệu câu hỏi ' + currentCourse.code + '.');
    }
  }

  SWTApp.app = {
    selectTab,
    switchCourse,
    refreshCoursePicker: refreshCoursePickerOptions,
    getQuestions: () => questions.slice(),
    getCourse: () => ({ ...currentCourse })
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
