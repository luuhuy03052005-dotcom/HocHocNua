(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  const SETS_STORAGE_KEY = 'hoctap123_custom_sets_v1';

  const SAMPLE_MCQ = `1. SQL viết tắt của cụm từ nào?
A. Simple Query Language
*B. Structured Query Language
C. System Query Logic
D. Standard Question Language

2. Khóa chính (Primary Key) có tính chất gì?
A. Cho phép giá trị NULL
B. Có thể trùng lặp
C. Duy nhất và không NULL
D. Chỉ dùng kiểu số nguyên
Đáp án: C`;

  const SAMPLE_QUIZLET = `HTTP chạy mặc định ở cổng nào?\t80
HTTPS chạy mặc định ở cổng nào?\t443
SSH chạy mặc định ở cổng nào?\t22
DNS chạy mặc định ở cổng nào?\t53`;

  let customSets = [];
  let filterKind = 'all';
  let searchQuery = '';
  let editingSetId = null;
  let draftCards = [];
  let pendingDeleteSetId = null;
  let deleteConfirmTimer = null;
  let listenersBound = false;

  function loadSets() {
    try {
      const raw = window.localStorage.getItem(SETS_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) {
        customSets = parsed.filter((s) => s && typeof s === 'object' && s.id && Array.isArray(s.questions));
      } else {
        customSets = [];
      }
    } catch (_) {
      customSets = [];
    }
    return customSets;
  }

  function saveSets() {
    try {
      window.localStorage.setItem(SETS_STORAGE_KEY, JSON.stringify(customSets));
    } catch (_) {}
    SWTApp.app?.refreshCoursePicker?.();
  }

  function getAllSets() {
    if (!customSets.length) loadSets();
    return customSets.slice();
  }

  function getSetById(id) {
    if (!customSets.length) loadSets();
    return customSets.find((s) => s.id === id) || null;
  }

  function genSetId(code) {
    const clean = String(code || 'set')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '')
      .slice(0, 10) || 'set';
    return 'C_' + clean + '_' + Date.now().toString(36).slice(-5);
  }

  function formatShortDate(ts) {
    if (!ts) return '';
    try {
      const d = new Date(Number(ts));
      return String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0') + '/' + d.getFullYear();
    } catch (_) {
      return '';
    }
  }

  // =========================================================================
  // QUIZLET & MCQ SMART PARSER
  // =========================================================================
  function getImportOptionsFromDom() {
    const { byId } = SWTApp.utils;
    return {
      termSep: document.querySelector('input[name="qz-term-sep"]:checked')?.value || 'auto',
      customTermSep: byId('qz-custom-term-sep')?.value || '',
      cardSep: document.querySelector('input[name="qz-card-sep"]:checked')?.value || 'auto',
      customCardSep: byId('qz-custom-card-sep')?.value || '',
      flipTermDef: Boolean(byId('qz-opt-flip')?.checked),
      autoGenerateMcq: Boolean(byId('qz-opt-automcq')?.checked),
      stripNumbering: Boolean(byId('qz-opt-stripnum')?.checked),
      dedupe: Boolean(byId('qz-opt-dedupe')?.checked),
      defaultTopic: (byId('set-default-topic-input')?.value || '').trim() || 'Tổng hợp'
    };
  }

  function cleanLeadingNumber(str, enabled) {
    const s = String(str || '').trim();
    if (!enabled) return s;
    return s.replace(/^(?:câu\s*\d+|question\s*\d+|q\s*\d+|\d+)\s*[.):\-]\s*/i, '').trim();
  }

  function splitIntoRawBlocks(rawText, opts) {
    const text = String(rawText || '').replace(/\r\n/g, '\n').trim();
    if (!text) return [];

    if (opts.cardSep === 'custom' && opts.customCardSep) {
      return text.split(opts.customCardSep).map((b) => b.trim()).filter(Boolean);
    }
    if (opts.cardSep === 'semicolon') {
      return text.split(';').map((b) => b.trim()).filter(Boolean);
    }
    if (opts.cardSep === 'newline') {
      return text.split('\n').map((b) => b.trim()).filter(Boolean);
    }
    if (opts.cardSep === 'blank') {
      return text.split(/\n\s*\n+/).map((b) => b.trim()).filter(Boolean);
    }

    // Auto mode
    if (/\n\s*\n/.test(text)) {
      const chunks = text.split(/\n\s*\n+/).map((b) => b.trim()).filter(Boolean);
      const expanded = [];
      chunks.forEach((chunk) => {
        const hasOptionLines = /^\s*(?:\*|\[x\])?\s*[A-Fa-f][.):\-]\s+/m.test(chunk);
        if (!hasOptionLines && chunk.includes('\n')) {
          const lines = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
          const allLookLikePairs = lines.every((l) => l.includes('\t') || /\s(?:-|->|:)\s/.test(l));
          if (allLookLikePairs) {
            expanded.push(...lines);
            return;
          }
        }
        expanded.push(chunk);
      });
      return expanded;
    }

    // Single block without blank lines: check if numbered MCQs exist
    const hasOptions = /^\s*(?:\*|\[x\])?\s*[A-Fa-f][.):\-]\s+/m.test(text);
    if (hasOptions) {
      const splitByQ = text.split(/\n(?=(?:câu\s*\d+|question\s*\d+|q\s*\d+|\d+\s*[.):\-])\s+)/i).map((b) => b.trim()).filter(Boolean);
      if (splitByQ.length > 1) return splitByQ;
      return [text];
    }

    return text.split('\n').map((b) => b.trim()).filter(Boolean);
  }

  function splitTwoSided(block, opts) {
    if (opts.termSep === 'custom' && opts.customTermSep) {
      const idx = block.lastIndexOf(opts.customTermSep);
      if (idx > 0) return [block.slice(0, idx).trim(), block.slice(idx + opts.customTermSep.length).trim()];
    }
    if (opts.termSep === 'tab' || (opts.termSep === 'auto' && block.includes('\t'))) {
      const idx = block.lastIndexOf('\t');
      if (idx > 0) return [block.slice(0, idx).trim(), block.slice(idx + 1).trim()];
    }
    if (opts.termSep === 'dash') {
      const m = block.match(/^([\s\S]+?)\s+-\s+([\s\S]+)$/);
      if (m) return [m[1].trim(), m[2].trim()];
    }
    if (opts.termSep === 'auto') {
      const arrow = block.match(/^([\s\S]+?)\s*(?:->|=>|::|\|)\s*([\s\S]+)$/);
      if (arrow) return [arrow[1].trim(), arrow[2].trim()];
      const dash = block.match(/^([^\n]+?)\s+-\s+([^\n]+)$/);
      if (dash) return [dash[1].trim(), dash[2].trim()];
      const colon = block.match(/^([^\n:]{2,80}):\s+([^\n]+)$/);
      if (colon) return [colon[1].trim(), colon[2].trim()];
    }
    return null;
  }

  function parseSingleBlock(block, opts) {
    let working = block.trim();
    if (!working) return null;

    let topic = opts.defaultTopic || 'Tổng hợp';
    let explanation = '';

    // Check if Quizlet Export put "\t<Answer>" at the very end of an MCQ block
    let trailingQuizletAns = '';
    if ((opts.termSep === 'auto' || opts.termSep === 'tab' || opts.termSep === 'custom') && /^\s*(?:\*|\[x\])?\s*[A-Fa-f][.):\-]\s+/m.test(working)) {
      const sep = (opts.termSep === 'custom' && opts.customTermSep) ? opts.customTermSep : '\t';
      const lastIdx = working.lastIndexOf(sep);
      if (lastIdx > 0) {
        const rightCandidate = working.slice(lastIdx + sep.length).trim();
        if (rightCandidate && rightCandidate.length <= 180 && !/\n.*[A-Fa-f][.):\-]/.test(rightCandidate)) {
          trailingQuizletAns = rightCandidate;
          working = working.slice(0, lastIdx).trim();
        }
      }
    }

    const lines = working.split('\n').map((l) => l.trim()).filter(Boolean);
    const optRegex = /^(\*|\[x\])?\s*([A-Fa-f])[.):\-]\s+(.+)$/;
    const ansLineRegex = /^(?:đáp\s*án|dap\s*an|answer|ans|correct|key)\s*[:=\->]\s*(.+)$/i;
    const topicLineRegex = /^(?:\[?\s*(?:chủ\s*đề|chu\s*de|topic|chương|chuong)\s*[:=\-]\s*([^\]]+)\]?)$/i;
    const expLineRegex = /^(?:giải\s*thích|giai\s*thich|explanation|explain)\s*[:=\-]\s*(.+)$/i;

    const stemLines = [];
    const parsedOptions = [];
    const starredKeys = [];
    let explicitAnsStr = trailingQuizletAns;

    lines.forEach((line) => {
      const tMatch = line.match(topicLineRegex);
      if (tMatch && parsedOptions.length === 0) {
        topic = tMatch[1].trim() || topic;
        return;
      }
      const eMatch = line.match(expLineRegex);
      if (eMatch) {
        explanation = eMatch[1].trim();
        return;
      }
      const aMatch = line.match(ansLineRegex);
      if (aMatch) {
        explicitAnsStr = aMatch[1].trim();
        return;
      }
      const oMatch = line.match(optRegex);
      if (oMatch) {
        const key = oMatch[2].toUpperCase();
        const text = oMatch[3].trim().replace(/^\*\s*/, '');
        parsedOptions.push({ key, text });
        if (oMatch[1] || /^\*/.test(oMatch[3].trim())) {
          starredKeys.push(key);
        }
        return;
      }
      if (parsedOptions.length === 0) {
        stemLines.push(line);
      } else {
        // Continuation of previous option
        parsedOptions[parsedOptions.length - 1].text += ' ' + line;
      }
    });

    if (parsedOptions.length >= 2 && stemLines.length >= 1) {
      const question = cleanLeadingNumber(stemLines.join('\n'), opts.stripNumbering);
      let correctKeys = starredKeys.slice();

      if (!correctKeys.length && explicitAnsStr) {
        // Match letters like "B" or "A, C" or "B. Option text"
        const letterOnly = explicitAnsStr.match(/^[A-Fa-f](?:\s*[,/&+\s]\s*[A-Fa-f])*$/);
        if (letterOnly) {
          correctKeys = (explicitAnsStr.toUpperCase().match(/[A-F]/g) || []);
        } else {
          const leadLetter = explicitAnsStr.match(/^([A-Fa-f])[.):\-]\s+/);
          if (leadLetter) {
            correctKeys = [leadLetter[1].toUpperCase()];
          } else {
            const normAns = explicitAnsStr.toLowerCase().replace(/\.$/, '').trim();
            parsedOptions.forEach((o) => {
              if (o.text.toLowerCase().replace(/\.$/, '').trim() === normAns) {
                correctKeys.push(o.key);
              }
            });
          }
        }
      }

      const validKeySet = new Set(parsedOptions.map((o) => o.key));
      correctKeys = Array.from(new Set(correctKeys.filter((k) => validKeySet.has(k))));
      if (!correctKeys.length) correctKeys = [parsedOptions[0].key];

      return {
        kind: 'mcq',
        question,
        options: parsedOptions,
        correctKeys,
        explanation,
        topic
      };
    }

    // Otherwise try Two-Sided Quizlet pair (Term <-> Definition)
    const pair = splitTwoSided(working, opts);
    if (pair && pair[0] && pair[1]) {
      let [term, def] = pair;
      if (opts.flipTermDef) {
        const tmp = term;
        term = def;
        def = tmp;
      }
      term = cleanLeadingNumber(term, opts.stripNumbering);
      return {
        kind: 'pair',
        question: term,
        answerText: def.trim(),
        explanation,
        topic
      };
    }

    return null;
  }

  function parseQuizletInput(rawText, customOpts) {
    const opts = customOpts || getImportOptionsFromDom();
    const blocks = splitIntoRawBlocks(rawText, opts);
    const rawItems = blocks.map((b) => parseSingleBlock(b, opts)).filter(Boolean);

    // Deduplicate if requested
    const items = [];
    const seenQ = new Set();
    rawItems.forEach((it) => {
      const normQ = SWTApp.utils.normalizeText(it.question);
      if (opts.dedupe && seenQ.has(normQ)) return;
      seenQ.add(normQ);
      items.push(it);
    });

    // Pool of unique answers for auto-generating MCQ distractors on 2-sided Quizlet pairs
    const pairAnswersPool = Array.from(
      new Set(items.filter((it) => it.kind === 'pair').map((it) => it.answerText))
    );

    const questions = items.map((it, idx) => {
      if (it.kind === 'mcq') {
        return {
          id: idx + 1,
          question: it.question,
          options: it.options,
          correctKeys: it.correctKeys,
          isMulti: it.correctKeys.length > 1,
          explanation: it.explanation || '',
          topic: it.topic || opts.defaultTopic || 'Tổng hợp'
        };
      }

      const ansLow = it.answerText.toLowerCase();
      if (ansLow === 'true' || ansLow === 'false' || ansLow === 'đúng' || ansLow === 'sai') {
        const isTrue = ansLow === 'true' || ansLow === 'đúng';
        const useVi = ansLow === 'đúng' || ansLow === 'sai';
        return {
          id: idx + 1,
          question: it.question,
          options: [
            { key: 'A', text: useVi ? 'Đúng' : 'True' },
            { key: 'B', text: useVi ? 'Sai' : 'False' }
          ],
          correctKeys: [isTrue ? 'A' : 'B'],
          isMulti: false,
          explanation: it.explanation || '',
          topic: it.topic || opts.defaultTopic || 'Tổng hợp'
        };
      }

      if (opts.autoGenerateMcq && pairAnswersPool.length >= 2) {
        const others = pairAnswersPool.filter((a) => a !== it.answerText);
        // Deterministic spread + variety based on idx so preview doesn't flicker wildly on each keystroke
        const pickedWrongs = [];
        for (let step = 0; step < others.length && pickedWrongs.length < 3; step += 1) {
          const candidate = others[(idx * 3 + step * 7 + 1) % others.length];
          if (!pickedWrongs.includes(candidate)) pickedWrongs.push(candidate);
        }
        const rawChoices = [it.answerText, ...pickedWrongs];
        // Rotate position of correct answer across A/B/C/D deterministically by idx
        const targetPos = idx % rawChoices.length;
        const rotated = rawChoices.slice(1);
        rotated.splice(targetPos, 0, it.answerText);
        const keys = ['A', 'B', 'C', 'D'];
        const options = rotated.map((txt, oi) => ({ key: keys[oi], text: txt }));
        const rightKey = keys[targetPos];
        return {
          id: idx + 1,
          question: it.question,
          options,
          correctKeys: [rightKey],
          isMulti: false,
          explanation: it.explanation || '',
          topic: it.topic || opts.defaultTopic || 'Tổng hợp'
        };
      }

      return {
        id: idx + 1,
        question: it.question,
        options: [{ key: 'A', text: it.answerText }],
        correctKeys: ['A'],
        isMulti: false,
        explanation: it.explanation || '',
        topic: it.topic || opts.defaultTopic || 'Tổng hợp'
      };
    });

    return questions;
  }

  function exportSetToQuizletText(questions) {
    return (questions || []).map((q) => {
      const rightSet = new Set(q.correctKeys || []);
      const optLines = (q.options || []).map((o) => (rightSet.has(o.key) ? '*' : '') + o.key + '. ' + o.text);
      const parts = [q.question, ...optLines];
      if (q.explanation) parts.push('Giải thích: ' + q.explanation);
      return parts.join('\n');
    }).join('\n\n');
  }

  // =========================================================================
  // UI RENDERING — SET MANAGER DASHBOARD & QUIZLET CREATOR
  // =========================================================================
  function getCatalogEntries() {
    loadSets();
    const builtins = [
      {
        id: 'SWT301',
        code: 'SWT301',
        title: 'Software Testing — Semester 5',
        isCustom: false,
        questions: window.SWT301_DATA?.questions || [],
        updatedAt: null
      },
      {
        id: 'PRJ301',
        code: 'PRJ301',
        title: 'Java Web Application Development',
        isCustom: false,
        questions: window.PRJ301_DATA?.questions || [],
        updatedAt: null
      },
      {
        id: 'SSG105',
        code: 'SSG105',
        title: 'Communication & Teamwork Skills',
        isCustom: false,
        questions: window.SSG105_DATA?.questions || [],
        updatedAt: null
      }
    ];
    const customs = customSets.map((s) => ({
      id: s.id,
      code: s.code || 'MÔN MỚI',
      title: s.title || 'Bộ đề tự tạo',
      isCustom: true,
      questions: s.questions || [],
      updatedAt: s.updatedAt || s.createdAt || null
    }));
    return [...customs, ...builtins];
  }

  function resetDeleteSetConfirm() {
    pendingDeleteSetId = null;
    if (deleteConfirmTimer) {
      window.clearTimeout(deleteConfirmTimer);
      deleteConfirmTimer = null;
    }
  }

  function renderDashboard() {
    const { byId, el, setText, normalizeText } = SWTApp.utils;
    const grid = byId('sets-catalog-grid');
    const emptyEl = byId('sets-catalog-empty');
    if (!grid) return;

    const allEntries = getCatalogEntries();
    const activeCourseId = SWTApp.app?.getCourse?.()?.id || SWTApp.app?.getCourse?.()?.code || 'SWT301';

    // Top summary stats
    let totalQuestionsAll = 0;
    let totalMasteredAll = 0;
    allEntries.forEach((entry) => {
      const sum = SWTApp.storage.getSummaryForCourse(entry.id, entry.questions);
      totalQuestionsAll += sum.total;
      totalMasteredAll += sum.mastered;
    });
    setText('sets-stat-total', String(allEntries.length));
    setText('sets-stat-custom', String(customSets.length));
    setText('sets-stat-questions', String(totalQuestionsAll));
    setText('sets-stat-mastered', String(totalMasteredAll));

    document.querySelectorAll('[data-sets-filter]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-sets-filter') === filterKind);
    });

    const qNorm = normalizeText(searchQuery);
    const visible = allEntries.filter((entry) => {
      if (filterKind === 'custom' && !entry.isCustom) return false;
      if (filterKind === 'builtin' && entry.isCustom) return false;
      if (!qNorm) return true;
      const topics = Array.from(new Set((entry.questions || []).map((q) => q.topic).filter(Boolean)));
      return normalizeText([entry.code, entry.title, ...topics].join(' ')).includes(qNorm);
    });

    grid.replaceChildren();
    if (emptyEl) emptyEl.hidden = visible.length > 0;

    visible.forEach((entry) => {
      const stats = SWTApp.storage.getSummaryForCourse(entry.id, entry.questions);
      const topics = Array.from(new Set((entry.questions || []).map((q) => q.topic).filter(Boolean)));
      const pct = stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0;
      const isCurrent = entry.id === activeCourseId;

      const card = el('article', 'set-manage-card' + (isCurrent ? ' is-current-course' : ''));

      const topRow = el('div', 'set-card-top');
      const badges = el('div', 'set-card-badges');
      badges.appendChild(el('span', 'badge badge-accent', entry.code));
      badges.appendChild(el('span', 'badge', entry.isCustom ? 'Tự tạo' : 'Có sẵn'));
      if (isCurrent) badges.appendChild(el('span', 'badge badge-success', 'Đang mở'));
      topRow.appendChild(badges);
      if (entry.updatedAt) {
        topRow.appendChild(el('span', 'set-card-date', formatShortDate(entry.updatedAt)));
      }

      const titleEl = el('h3', 'set-card-title', entry.title);

      const metrics = el('div', 'set-card-metrics');
      [
        [stats.total + ' câu', ''],
        [topics.length + ' chủ đề', ''],
        ['Thuộc ' + stats.mastered + '/' + stats.total, 'is-good'],
        ['Sai ' + stats.mistakes, stats.mistakes > 0 ? 'is-bad' : ''],
        ['Đúng ' + stats.accuracy + '%', '']
      ].forEach(([txt, cls]) => {
        metrics.appendChild(el('span', ('set-metric-pill ' + cls).trim(), txt));
      });

      const barTrack = el('div', 'set-card-bar-track');
      const barFill = el('div', 'set-card-bar-fill');
      barFill.style.inlineSize = pct + '%';
      barTrack.appendChild(barFill);

      const actions = el('div', 'set-card-actions');
      const studyBtn = el('button', 'btn btn-primary btn-sm', '▶ Học ngay');
      studyBtn.type = 'button';
      studyBtn.addEventListener('click', () => SWTApp.app?.switchCourse(entry.id, 'tab-practice'));

      const fcBtn = el('button', 'btn btn-secondary btn-sm', 'Flashcard');
      fcBtn.type = 'button';
      fcBtn.addEventListener('click', () => SWTApp.app?.switchCourse(entry.id, 'tab-flashcard'));

      const examBtn = el('button', 'btn btn-secondary btn-sm', 'Thi thử');
      examBtn.type = 'button';
      examBtn.addEventListener('click', () => SWTApp.app?.switchCourse(entry.id, 'tab-exam'));

      actions.append(studyBtn, fcBtn, examBtn);

      if (entry.isCustom) {
        const editBtn = el('button', 'btn btn-ghost btn-sm', 'Sửa');
        editBtn.type = 'button';
        editBtn.addEventListener('click', () => openEditorForSet(entry.id));

        const exportBtn = el('button', 'btn btn-ghost btn-sm', 'Xuất file');
        exportBtn.type = 'button';
        exportBtn.addEventListener('click', () => downloadSetJson(entry.id));

        const isConfirming = pendingDeleteSetId === entry.id;
        const delBtn = el('button', 'btn btn-ghost btn-sm btn-danger-subtle', isConfirming ? 'Chắc xóa?' : 'Xóa');
        delBtn.type = 'button';
        delBtn.addEventListener('click', () => {
          if (pendingDeleteSetId !== entry.id) {
            resetDeleteSetConfirm();
            pendingDeleteSetId = entry.id;
            renderDashboard();
            deleteConfirmTimer = window.setTimeout(() => {
              resetDeleteSetConfirm();
              renderDashboard();
            }, 3000);
            return;
          }
          deleteCustomSet(entry.id);
        });

        actions.append(editBtn, exportBtn, delBtn);
      }

      card.append(topRow, titleEl, metrics, barTrack, actions);
      grid.appendChild(card);
    });
  }

  function downloadSetJson(setId) {
    const found = getSetById(setId);
    if (!found) return;
    const blob = new Blob([JSON.stringify(found, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (found.code || 'bo-de').toLowerCase().replace(/[^a-z0-9_-]+/g, '-') + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function deleteCustomSet(setId) {
    resetDeleteSetConfirm();
    customSets = customSets.filter((s) => s.id !== setId);
    SWTApp.storage.removeCourseProgress(setId);
    saveSets();
    const cur = SWTApp.app?.getCourse?.();
    if (cur?.id === setId) {
      SWTApp.app?.switchCourse('SWT301', 'tab-sets');
      return;
    }
    renderDashboard();
  }

  function showDashboardView() {
    const { setHidden } = SWTApp.utils;
    setHidden('sets-editor-view', true);
    setHidden('sets-dashboard-view', false);
    renderDashboard();
  }

  function openCreator() {
    editingSetId = null;
    draftCards = [];
    const { byId, setText, setHidden } = SWTApp.utils;
    setText('sets-editor-heading', 'Tạo bộ đề mới');
    if (byId('set-code-input')) byId('set-code-input').value = '';
    if (byId('set-title-input')) byId('set-title-input').value = '';
    if (byId('set-default-topic-input')) byId('set-default-topic-input').value = 'Tổng hợp';
    if (byId('qz-import-textarea')) byId('qz-import-textarea').value = '';
    setEditorNotice('');
    setHidden('sets-dashboard-view', true);
    setHidden('sets-editor-view', false);
    updateLiveImportPreview();
    renderDraftCards();
  }

  function openEditorForSet(setId) {
    const target = getSetById(setId);
    if (!target) {
      openCreator();
      return;
    }
    editingSetId = target.id;
    draftCards = (target.questions || []).map((q, idx) => ({
      id: idx + 1,
      question: String(q.question || ''),
      options: (q.options || []).map((o) => ({ key: o.key, text: o.text })),
      correctKeys: Array.isArray(q.correctKeys) ? q.correctKeys.slice() : ['A'],
      explanation: String(q.explanation || ''),
      topic: String(q.topic || 'Tổng hợp')
    }));
    const { byId, setText, setHidden } = SWTApp.utils;
    setText('sets-editor-heading', 'Chỉnh sửa: ' + (target.code ? target.code + ' — ' : '') + target.title);
    if (byId('set-code-input')) byId('set-code-input').value = target.code || '';
    if (byId('set-title-input')) byId('set-title-input').value = target.title || '';
    if (byId('set-default-topic-input')) byId('set-default-topic-input').value = target.topics?.[0] || 'Tổng hợp';
    if (byId('qz-import-textarea')) byId('qz-import-textarea').value = '';
    setEditorNotice('');
    setHidden('sets-dashboard-view', true);
    setHidden('sets-editor-view', false);
    updateLiveImportPreview();
    renderDraftCards();
  }

  function setEditorNotice(msg) {
    const { byId } = SWTApp.utils;
    const elNote = byId('sets-editor-error');
    if (!elNote) return;
    elNote.hidden = !msg;
    elNote.textContent = msg || '';
  }

  function updateLiveImportPreview() {
    const { byId, el, setText } = SWTApp.utils;
    const raw = byId('qz-import-textarea')?.value || '';
    const parsed = raw.trim() ? parseQuizletInput(raw) : [];
    const parseBtn = byId('qz-parse-into-cards-btn');
    if (parseBtn) {
      parseBtn.textContent = parsed.length > 0
        ? '+ Đưa ' + parsed.length + ' câu vào danh sách thẻ'
        : '+ Đưa vào danh sách thẻ';
      parseBtn.disabled = parsed.length === 0;
    }
    setText('qz-live-count', parsed.length + ' câu tách được');

    const previewWrap = byId('qz-live-preview');
    if (!previewWrap) return;
    previewWrap.replaceChildren();
    if (parsed.length === 0) {
      previewWrap.hidden = true;
      return;
    }
    previewWrap.hidden = false;
    parsed.slice(0, 3).forEach((q, idx) => {
      const row = el('div', 'qz-preview-item');
      const head = el('div', 'qz-preview-q', '#' + (idx + 1) + '. ' + q.question);
      const optsWrap = el('div', 'qz-preview-opts');
      const rightSet = new Set(q.correctKeys || []);
      (q.options || []).forEach((o) => {
        optsWrap.appendChild(
          el(
            'span',
            'rote-chip ' + (rightSet.has(o.key) ? 'rote-chip-pick' : 'rote-chip-instant'),
            o.key + '. ' + o.text
          )
        );
      });
      row.append(head, optsWrap);
      previewWrap.appendChild(row);
    });
  }

  function renderDraftCards() {
    const { byId, el, setText } = SWTApp.utils;
    const list = byId('set-draft-cards-list');
    if (!list) return;
    setText('set-draft-count', draftCards.length + ' thẻ trong đề');
    list.replaceChildren();

    draftCards.forEach((card, cIdx) => {
      card.id = cIdx + 1;
      const item = el('article', 'draft-card-item');

      const top = el('div', 'draft-card-top');
      top.appendChild(el('strong', 'draft-card-num', '#' + (cIdx + 1)));

      const topicInput = el('input', 'draft-topic-input');
      topicInput.type = 'text';
      topicInput.placeholder = 'Chủ đề';
      topicInput.value = card.topic || '';
      topicInput.addEventListener('input', () => { card.topic = topicInput.value; });

      const removeBtn = el('button', 'btn btn-ghost btn-sm btn-danger-subtle', 'Xóa thẻ');
      removeBtn.type = 'button';
      removeBtn.addEventListener('click', () => {
        draftCards.splice(cIdx, 1);
        renderDraftCards();
      });

      top.append(topicInput, removeBtn);

      const qArea = el('textarea', 'draft-q-textarea');
      qArea.rows = 2;
      qArea.placeholder = 'Nhập nội dung câu hỏi / thuật ngữ...';
      qArea.value = card.question || '';
      qArea.addEventListener('input', () => { card.question = qArea.value; });

      const optsGrid = el('div', 'draft-opts-grid');
      const rightSet = new Set(card.correctKeys || []);
      const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

      (card.options || []).forEach((opt, oIdx) => {
        opt.key = KEYS[oIdx] || String.fromCharCode(65 + oIdx);
        const optRow = el('div', 'draft-opt-row' + (rightSet.has(opt.key) ? ' is-correct' : ''));
        const keyBtn = el('button', 'draft-opt-key-btn' + (rightSet.has(opt.key) ? ' is-correct' : ''), opt.key);
        keyBtn.type = 'button';
        keyBtn.title = 'Bấm để đặt làm đáp án đúng';
        keyBtn.addEventListener('click', () => {
          if (card.correctKeys.includes(opt.key)) {
            if (card.correctKeys.length > 1) {
              card.correctKeys = card.correctKeys.filter((k) => k !== opt.key);
            }
          } else {
            // Single-click sets it, or toggles multi if user clicks another; keep simple toggle with at least 1 selected
            card.correctKeys.push(opt.key);
          }
          renderDraftCards();
        });

        const singleSelectBtn = el('button', 'draft-opt-only-btn', 'Đúng');
        singleSelectBtn.type = 'button';
        singleSelectBtn.title = 'Chỉ chọn đáp án này đúng';
        singleSelectBtn.addEventListener('click', () => {
          card.correctKeys = [opt.key];
          renderDraftCards();
        });

        const optInput = el('input', 'draft-opt-input');
        optInput.type = 'text';
        optInput.placeholder = 'Lựa chọn ' + opt.key;
        optInput.value = opt.text || '';
        optInput.addEventListener('input', () => { opt.text = optInput.value; });

        optRow.append(keyBtn, optInput, singleSelectBtn);
        if (card.options.length > 2) {
          const delOpt = el('button', 'draft-opt-del-btn', '×');
          delOpt.type = 'button';
          delOpt.title = 'Xóa lựa chọn này';
          delOpt.addEventListener('click', () => {
            card.options.splice(oIdx, 1);
            card.options.forEach((o, i) => { o.key = KEYS[i]; });
            const validKeys = new Set(card.options.map((o) => o.key));
            card.correctKeys = card.correctKeys.filter((k) => validKeys.has(k));
            if (!card.correctKeys.length && card.options[0]) card.correctKeys = [card.options[0].key];
            renderDraftCards();
          });
          optRow.appendChild(delOpt);
        }
        optsGrid.appendChild(optRow);
      });

      const foot = el('div', 'draft-card-foot');
      if ((card.options || []).length < 6) {
        const addOptBtn = el('button', 'btn btn-ghost btn-sm', '+ Lựa chọn');
        addOptBtn.type = 'button';
        addOptBtn.addEventListener('click', () => {
          const nextKey = KEYS[card.options.length] || 'E';
          card.options.push({ key: nextKey, text: '' });
          renderDraftCards();
        });
        foot.appendChild(addOptBtn);
      }

      const expInput = el('input', 'draft-exp-input');
      expInput.type = 'text';
      expInput.placeholder = 'Giải thích ngắn (tùy chọn)';
      expInput.value = card.explanation || '';
      expInput.addEventListener('input', () => { card.explanation = expInput.value; });
      foot.appendChild(expInput);

      item.append(top, qArea, optsGrid, foot);
      list.appendChild(item);
    });
  }

  function addManualBlankCard() {
    const defaultTopic = (SWTApp.utils.byId('set-default-topic-input')?.value || '').trim() || 'Tổng hợp';
    draftCards.push({
      id: draftCards.length + 1,
      question: '',
      options: [
        { key: 'A', text: '' },
        { key: 'B', text: '' },
        { key: 'C', text: '' },
        { key: 'D', text: '' }
      ],
      correctKeys: ['A'],
      explanation: '',
      topic: defaultTopic
    });
    renderDraftCards();
  }

  function saveCurrentSet(andStudyNow) {
    const { byId } = SWTApp.utils;
    let code = (byId('set-code-input')?.value || '').trim().toUpperCase();
    let title = (byId('set-title-input')?.value || '').trim();
    const defaultTopic = (byId('set-default-topic-input')?.value || '').trim() || 'Tổng hợp';

    // If user pasted into textarea but forgot to click "+ Đưa vào danh sách thẻ", auto-parse it!
    const pendingRaw = (byId('qz-import-textarea')?.value || '').trim();
    if (draftCards.length === 0 && pendingRaw) {
      const autoParsed = parseQuizletInput(pendingRaw);
      if (autoParsed.length > 0) {
        draftCards = autoParsed;
      }
    }

    const cleanedQuestions = draftCards
      .map((c) => {
        const qText = String(c.question || '').trim();
        const opts = (c.options || [])
          .map((o) => ({ key: o.key, text: String(o.text || '').trim() }))
          .filter((o) => o.text.length > 0);
        if (!qText || opts.length === 0) return null;
        const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];
        const keyRemap = new Map();
        opts.forEach((o, idx) => {
          keyRemap.set(o.key, KEYS[idx]);
          o.key = KEYS[idx];
        });
        let right = (c.correctKeys || []).map((k) => keyRemap.get(k)).filter(Boolean);
        if (!right.length) right = [opts[0].key];
        return {
          question: qText,
          options: opts,
          correctKeys: Array.from(new Set(right)),
          isMulti: right.length > 1,
          explanation: String(c.explanation || '').trim(),
          topic: String(c.topic || '').trim() || defaultTopic
        };
      })
      .filter(Boolean)
      .map((q, i) => ({ id: i + 1, ...q }));

    if (!code && !title) {
      setEditorNotice('Vui lòng nhập Mã môn hoặc Tên bộ đề.');
      byId('set-code-input')?.focus();
      return;
    }
    if (!code) code = title.slice(0, 10).toUpperCase();
    if (!title) title = code;

    if (cleanedQuestions.length === 0) {
      setEditorNotice('Cần ít nhất 1 câu hỏi hợp lệ trước khi lưu.');
      byId('qz-import-textarea')?.focus();
      return;
    }

    setEditorNotice('');
    loadSets();
    const topics = Array.from(new Set(cleanedQuestions.map((q) => q.topic).filter(Boolean)));
    const now = Date.now();
    let savedId = editingSetId;

    if (editingSetId) {
      const idx = customSets.findIndex((s) => s.id === editingSetId);
      if (idx >= 0) {
        customSets[idx] = {
          ...customSets[idx],
          code,
          title,
          topics,
          questions: cleanedQuestions,
          updatedAt: now
        };
      } else {
        savedId = genSetId(code);
        customSets.unshift({ id: savedId, code, title, topics, questions: cleanedQuestions, createdAt: now, updatedAt: now });
      }
    } else {
      savedId = genSetId(code);
      customSets.unshift({ id: savedId, code, title, topics, questions: cleanedQuestions, createdAt: now, updatedAt: now });
    }

    saveSets();
    if (byId('qz-import-textarea')) byId('qz-import-textarea').value = '';

    if (andStudyNow) {
      SWTApp.app?.switchCourse(savedId, 'tab-practice');
      return;
    }

    const cur = SWTApp.app?.getCourse?.();
    if (cur?.id === savedId) {
      // Reload current custom course so updated questions take effect everywhere
      SWTApp.app?.switchCourse('SWT301', 'tab-sets');
      window.location.assign(new URL('?course=' + encodeURIComponent(savedId) + '&tab=tab-sets', window.location.href).toString());
      return;
    }

    showDashboardView();
  }

  function handleFileImport(file, intoEditor) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const content = String(reader.result || '');
      // Try JSON first
      if (file.name.toLowerCase().endsWith('.json') || content.trim().startsWith('{') || content.trim().startsWith('[')) {
        try {
          const parsed = JSON.parse(content);
          const qArr = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.questions) ? parsed.questions : null);
          if (qArr && qArr.length > 0) {
            if (intoEditor) {
              draftCards.push(...qArr.map((q, i) => ({
                id: draftCards.length + i + 1,
                question: String(q.question || ''),
                options: (q.options || []).map((o) => ({ key: o.key, text: o.text })),
                correctKeys: Array.isArray(q.correctKeys) ? q.correctKeys : ['A'],
                explanation: String(q.explanation || ''),
                topic: String(q.topic || 'Tổng hợp')
              })));
              renderDraftCards();
              return;
            }
            loadSets();
            const code = String(parsed.code || file.name.replace(/\.[^.]+$/, '')).slice(0, 12).toUpperCase();
            const title = String(parsed.title || parsed.meta?.title || code);
            const id = genSetId(code);
            const now = Date.now();
            const topics = Array.from(new Set(qArr.map((q) => q.topic || 'Tổng hợp')));
            customSets.unshift({
              id,
              code,
              title,
              topics,
              questions: qArr.map((q, idx) => ({
                id: idx + 1,
                question: String(q.question || ''),
                options: Array.isArray(q.options) ? q.options : [],
                correctKeys: Array.isArray(q.correctKeys) ? q.correctKeys : ['A'],
                isMulti: Array.isArray(q.correctKeys) && q.correctKeys.length > 1,
                explanation: String(q.explanation || ''),
                topic: String(q.topic || 'Tổng hợp')
              })),
              createdAt: now,
              updatedAt: now
            });
            saveSets();
            renderDashboard();
            return;
          }
        } catch (_) {}
      }

      // Otherwise treat as text / Quizlet format -> open editor with text loaded!
      if (!intoEditor) openCreator();
      const { byId } = SWTApp.utils;
      const baseName = file.name.replace(/\.[^.]+$/, '');
      if (byId('set-title-input') && !byId('set-title-input').value) {
        byId('set-title-input').value = baseName;
      }
      if (byId('qz-import-textarea')) {
        byId('qz-import-textarea').value = content;
        updateLiveImportPreview();
      }
    };
    reader.readAsText(file, 'utf-8');
  }

  function init() {
    loadSets();
    SWTApp.app?.refreshCoursePicker?.();
    renderDashboard();
    if (listenersBound) return;
    listenersBound = true;

    const { byId } = SWTApp.utils;

    byId('sets-search-input')?.addEventListener('input', (e) => {
      searchQuery = e.target.value || '';
      renderDashboard();
    });

    byId('sets-filter-bar')?.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-sets-filter]');
      if (!btn) return;
      filterKind = btn.getAttribute('data-sets-filter') || 'all';
      renderDashboard();
    });

    byId('sets-open-creator-btn')?.addEventListener('click', openCreator);
    byId('sets-back-dashboard-btn')?.addEventListener('click', showDashboardView);

    byId('sets-import-file-btn')?.addEventListener('click', () => byId('sets-file-input')?.click());
    byId('sets-file-input')?.addEventListener('change', (e) => {
      const f = e.target.files?.[0];
      if (f) handleFileImport(f, false);
      e.target.value = '';
    });

    byId('qz-import-file-btn')?.addEventListener('click', () => byId('qz-editor-file-input')?.click());
    byId('qz-editor-file-input')?.addEventListener('change', (e) => {
      const f = e.target.files?.[0];
      if (f) handleFileImport(f, true);
      e.target.value = '';
    });

    byId('qz-sample-mcq-btn')?.addEventListener('click', () => {
      const ta = byId('qz-import-textarea');
      if (!ta) return;
      ta.value = SAMPLE_MCQ;
      updateLiveImportPreview();
    });

    byId('qz-sample-pair-btn')?.addEventListener('click', () => {
      const ta = byId('qz-import-textarea');
      if (!ta) return;
      ta.value = SAMPLE_QUIZLET;
      updateLiveImportPreview();
    });

    byId('qz-clear-input-btn')?.addEventListener('click', () => {
      const ta = byId('qz-import-textarea');
      if (!ta) return;
      ta.value = '';
      updateLiveImportPreview();
    });

    byId('qz-export-text-btn')?.addEventListener('click', () => {
      const ta = byId('qz-import-textarea');
      if (!ta || draftCards.length === 0) return;
      ta.value = exportSetToQuizletText(draftCards);
      updateLiveImportPreview();
    });

    byId('qz-import-textarea')?.addEventListener('input', updateLiveImportPreview);
    byId('qz-options-panel')?.addEventListener('change', updateLiveImportPreview);
    byId('qz-custom-term-sep')?.addEventListener('input', () => {
      const customRadio = document.querySelector('input[name="qz-term-sep"][value="custom"]');
      if (customRadio) customRadio.checked = true;
      updateLiveImportPreview();
    });
    byId('qz-custom-card-sep')?.addEventListener('input', () => {
      const customRadio = document.querySelector('input[name="qz-card-sep"][value="custom"]');
      if (customRadio) customRadio.checked = true;
      updateLiveImportPreview();
    });

    byId('qz-parse-into-cards-btn')?.addEventListener('click', () => {
      const ta = byId('qz-import-textarea');
      if (!ta || !ta.value.trim()) return;
      const parsed = parseQuizletInput(ta.value);
      if (!parsed.length) return;
      draftCards.push(...parsed);
      ta.value = '';
      updateLiveImportPreview();
      renderDraftCards();
    });

    byId('set-add-manual-card-btn')?.addEventListener('click', addManualBlankCard);
    byId('set-clear-all-cards-btn')?.addEventListener('click', () => {
      draftCards = [];
      renderDraftCards();
    });

    byId('set-save-btn')?.addEventListener('click', () => saveCurrentSet(false));
    byId('set-save-and-study-btn')?.addEventListener('click', () => saveCurrentSet(true));
  }

  SWTApp.customSets = {
    init,
    getAllSets,
    getSetById,
    parseQuizletInput,
    openCreator,
    openEditorForSet,
    onTabActivated(tabId) {
      if (tabId === 'tab-sets') renderDashboard();
    }
  };
})();
