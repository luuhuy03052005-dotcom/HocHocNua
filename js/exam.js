(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let allQuestions = [];
  let examQs = [];
  let currentIdx = 0;
  let answers = new Map();
  let flagged = new Set();
  let timerId = null;
  let startedAt = 0;
  let endAt = 0;
  let lastWrongIds = [];
  let rangeStart = 1;
  let rangeEnd = 1;
  let orderedPool = [];
  let lastExamQId = null;

  function isRandomEnabled() {
    return Boolean(SWTApp.utils.byId('exam-random-questions')?.checked);
  }

  function isInstantAnswerEnabled() {
    return Boolean(SWTApp.utils.byId('exam-instant-answer')?.checked);
  }

  function syncExamToggles(randomVal, instantVal) {
    const { byId } = SWTApp.utils;
    ['exam-random-questions', 'exam-active-random'].forEach((id) => {
      const node = byId(id);
      if (node) node.checked = Boolean(randomVal);
    });
    ['exam-instant-answer', 'exam-active-instant'].forEach((id) => {
      const node = byId(id);
      if (node) node.checked = Boolean(instantVal);
    });
  }

  function isQuestionGradedInActiveExam(q, sel) {
    if (!isInstantAnswerEnabled() || !q || !(sel instanceof Set) || sel.size === 0) return false;
    return q.isMulti ? sel.size >= Math.max(1, (q.correctKeys || []).length) : true;
  }

  function stopTimer() {
    if (timerId) { window.clearInterval(timerId); timerId = null; }
  }

  function tickTimer() {
    const { byId, formatClock } = SWTApp.utils;
    const rem = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
    const timerEl = byId('exam-timer');
    if (timerEl) {
      timerEl.textContent = formatClock(rem);
      timerEl.classList.toggle('is-urgent', rem <= 60);
    }
    if (rem <= 0) submitExam();
  }

  function setSetupNotice(msg) {
    const { byId, el } = SWTApp.utils;
    const setup = byId('exam-setup');
    if (!setup) return;
    let note = byId('exam-setup-notice');
    if (!msg) { if (note) note.hidden = true; return; }
    if (!note) { note = el('p', 'feedback-box is-wrong'); note.id = 'exam-setup-notice'; setup.appendChild(note); }
    note.hidden = false;
    note.textContent = msg;
  }

  function getCurrentFilters() {
    const { byId } = SWTApp.utils;
    return {
      source: byId('exam-source-select')?.value || 'all',
      topic: byId('exam-topic-select')?.value || 'all'
    };
  }

  function getQuestionsInRange(start, end) {
    return allQuestions.slice(Math.max(0, start - 1), Math.min(allQuestions.length, end));
  }

  function getEligibleQuestions(start, end) {
    const { source, topic } = getCurrentFilters();
    if (source === 'same-options' || source === 'similar-questions' || source === 'confusing-all') {
      const confusingSet = new Set(SWTApp.conceptHelper?.getConfusingQuestionIds?.(source) || []);
      return getQuestionsInRange(start, end).filter((q) =>
        confusingSet.has(Number(q.id)) && (topic === 'all' || q.topic === topic)
      );
    }
    return getQuestionsInRange(start, end).filter((q) =>
      (topic === 'all' || q.topic === topic) && SWTApp.storage.matchesStatus(q.id, source)
    );
  }

  function readPendingRange() {
    const { byId } = SWTApp.utils;
    const start = Number.parseInt(byId('exam-start-question')?.value || String(rangeStart), 10);
    const end = Number.parseInt(byId('exam-end-question')?.value || String(rangeEnd), 10);
    return {
      start: Math.min(allQuestions.length, Math.max(1, start || 1)),
      end: Math.min(allQuestions.length, Math.max(1, end || 1))
    };
  }

  function updateRangePreview() {
    const { byId, setText } = SWTApp.utils;
    const { start, end } = readPendingRange();
    const selectedCount = Math.max(0, end - start + 1);
    const eligibleCount = start <= end ? getEligibleQuestions(start, end).length : 0;
    const preview = byId('exam-range-preview');
    if (preview) {
      preview.classList.toggle('is-empty', eligibleCount === 0);
      preview.replaceChildren();
      const strong = document.createElement('strong');
      strong.textContent = selectedCount + ' câu trong phạm vi';
      const detail = document.createElement('span');
      detail.textContent = eligibleCount === selectedCount
        ? 'Toàn bộ ' + eligibleCount + ' câu sẽ được đưa vào đề.'
        : eligibleCount + ' câu phù hợp với nguồn và chủ đề hiện tại sẽ được đưa vào đề.';
      preview.append(strong, detail);
    }
    const applyBtn = byId('exam-apply-range-btn');
    if (applyBtn) applyBtn.disabled = start > end || eligibleCount === 0;
    setText('exam-total-question-count', String(allQuestions.length));
  }

  function updateRangeSummary() {
    const { setText } = SWTApp.utils;
    const selectedCount = Math.max(0, rangeEnd - rangeStart + 1);
    const eligibleCount = getEligibleQuestions(rangeStart, rangeEnd).length;
    setText('exam-range-summary', 'Câu ' + rangeStart + ' – ' + rangeEnd);
    setText(
      'exam-range-count',
      eligibleCount === selectedCount
        ? selectedCount + ' / ' + allQuestions.length + ' câu'
        : eligibleCount + ' câu phù hợp · ' + selectedCount + ' câu trong khoảng'
    );
  }

  function openRangeDialog() {
    const { byId } = SWTApp.utils;
    const startSelect = byId('exam-start-question');
    const endSelect = byId('exam-end-question');
    if (startSelect) startSelect.value = String(rangeStart);
    if (endSelect) endSelect.value = String(rangeEnd);
    updateRangePreview();
  }

  function applyRange() {
    const { byId } = SWTApp.utils;
    const { start, end } = readPendingRange();
    if (start > end || getEligibleQuestions(start, end).length === 0) return;
    rangeStart = start;
    rangeEnd = end;
    updateRangeSummary();
    setSetupNotice('');
    byId('exam-range-dialog')?.close();
  }

  function populateRangeSelectors() {
    const { byId, el, setText } = SWTApp.utils;
    const startSelect = byId('exam-start-question');
    const endSelect = byId('exam-end-question');
    if (!startSelect || !endSelect || allQuestions.length === 0) return;
    const startFrag = document.createDocumentFragment();
    const endFrag = document.createDocumentFragment();
    allQuestions.forEach((q, index) => {
      const number = index + 1;
      startFrag.appendChild(el('option', '', 'Câu ' + number));
      endFrag.appendChild(el('option', '', 'Câu ' + number));
      startFrag.lastChild.value = String(number);
      endFrag.lastChild.value = String(number);
    });
    startSelect.replaceChildren(startFrag);
    endSelect.replaceChildren(endFrag);
    rangeStart = 1;
    rangeEnd = Math.min(50, allQuestions.length);
    startSelect.value = String(rangeStart);
    endSelect.value = String(rangeEnd);
    setText('exam-total-question-count', String(allQuestions.length));
    updateRangeSummary();
    updateRangePreview();
  }

  function beginExam(pool, durationMinutes) {
    const { setHidden } = SWTApp.utils;
    if (pool.length === 0) {
      return false;
    }
    const mins = Math.min(240, Math.max(1, Number(durationMinutes) || 60));
    setSetupNotice('');
    orderedPool = pool.slice();
    examQs = isRandomEnabled() ? SWTApp.utils.shuffle(orderedPool) : orderedPool.slice();
    currentIdx = 0;
    answers = new Map();
    flagged = new Set();
    lastExamQId = null;
    SWTApp.conceptHelper?.resetConceptBox(SWTApp.utils.byId('exam-concept-btn'), SWTApp.utils.byId('exam-concept-box'));
    startedAt = Date.now();
    endAt = startedAt + mins * 60 * 1000;

    setHidden('exam-setup', true);
    setHidden('exam-result', true);
    setHidden('exam-active', false);
    stopTimer();
    tickTimer();
    timerId = window.setInterval(tickTimer, 500);
    renderExamActive();
    return true;
  }

  function startExam() {
    const { byId } = SWTApp.utils;
    const mins = Math.min(240, Math.max(1, parseInt(byId('exam-duration-input')?.value || '60', 10) || 60));
    const pool = getEligibleQuestions(rangeStart, rangeEnd);
    if (!beginExam(pool, mins)) {
      setSetupNotice('Không có câu hỏi nào trong phạm vi khớp nguồn hoặc chủ đề đã chọn.');
    }
  }

  function startExamWithQuestions(questionIds) {
    const ids = new Set((Array.isArray(questionIds) ? questionIds : []).map(Number));
    const pool = allQuestions.filter((question) => ids.has(Number(question.id)));
    const mins = Math.min(60, Math.max(5, pool.length));
    return beginExam(pool, mins);
  }

  function selectExamOption(key) {
    const q = examQs[currentIdx];
    if (!q) return;
    if (q.isMulti) {
      const cur = new Set(answers.get(q.id) || []);
      if (cur.has(key)) cur.delete(key); else cur.add(key);
      if (cur.size > 0) answers.set(q.id, cur); else answers.delete(q.id);
    } else {
      answers.set(q.id, new Set([key]));
    }
    renderExamActive();
  }

  function renderExamActive() {
    const { byId, el, setText, setRichText, renderImages, createOptionBtn } = SWTApp.utils;
    const q = examQs[currentIdx];
    const optsEl = byId('exam-options');
    const palEl = byId('exam-palette');
    if (!q || !optsEl || !palEl) return;

    let answered = 0;
    answers.forEach((s) => { if (s.size > 0) answered += 1; });
    setText('exam-progress-text', 'Đã chọn ' + answered + ' / ' + examQs.length);
    const hint = q.isMulti ? ' [Chọn ' + q.correctKeys.length + ' đáp án]' : '';
    setRichText('exam-stem', 'Câu ' + (currentIdx + 1) + '/' + examQs.length + hint + ': ' + q.question);
    renderImages(byId('exam-images'), q.images);

    const sel = answers.get(q.id) || new Set();
    const correctSet = new Set(q.correctKeys || []);
    const graded = isQuestionGradedInActiveExam(q, sel);
    if (lastExamQId !== q.id) {
      lastExamQId = q.id;
      SWTApp.conceptHelper?.resetConceptBox(byId('exam-concept-btn'), byId('exam-concept-box'));
    } else {
      SWTApp.conceptHelper?.refreshIfOpen({
        button: byId('exam-concept-btn'),
        box: byId('exam-concept-box'),
        question: q,
        showDistinction: graded
      });
    }
    optsEl.replaceChildren();
    (q.options || []).forEach((opt) =>
      optsEl.appendChild(
        createOptionBtn(
          opt,
          { selected: sel.has(opt.key), graded, isCorrectKey: correctSet.has(opt.key) },
          () => selectExamOption(opt.key)
        )
      )
    );

    const fbEl = byId('exam-feedback');
    if (fbEl) {
      fbEl.replaceChildren();
      fbEl.hidden = !graded;
      const isRight = graded && SWTApp.utils.sameKeySet(sel, q.correctKeys);
      fbEl.classList.toggle('is-correct', isRight);
      fbEl.classList.toggle('is-wrong', graded && !isRight);
      if (graded) {
        const ans = (q.correctKeys || []).join(', ');
        const msg = isRight ? 'Chính xác (' + ans + ')' : 'Chưa đúng — Đáp án đúng: ' + ans;
        fbEl.appendChild(el('strong', 'feedback-title', msg));
        if (q.explanation) fbEl.appendChild(el('p', 'feedback-explanation', q.explanation));
      }
    }

    const isFlag = flagged.has(q.id);
    const flagBtn = byId('exam-flag-btn');
    if (flagBtn) { flagBtn.setAttribute('aria-pressed', String(isFlag)); flagBtn.classList.toggle('is-flagged', isFlag); }
    if (byId('exam-prev-btn')) byId('exam-prev-btn').disabled = currentIdx <= 0;
    if (byId('exam-next-btn')) byId('exam-next-btn').disabled = currentIdx >= examQs.length - 1;

    palEl.replaceChildren();
    examQs.forEach((item, idx) => {
      const b = el('button', 'palette-btn', String(idx + 1));
      b.type = 'button';
      b.dataset.index = String(idx);
      const itemAns = answers.get(item.id);
      const hasAns = Boolean(itemAns && itemAns.size > 0);
      const itemGraded = isQuestionGradedInActiveExam(item, itemAns);
      const itemRight = itemGraded && SWTApp.utils.sameKeySet(itemAns, item.correctKeys);
      b.classList.toggle('is-current', idx === currentIdx);
      b.classList.toggle('is-answered', hasAns && !itemGraded);
      b.classList.toggle('is-correct', itemGraded && itemRight);
      b.classList.toggle('is-wrong', itemGraded && !itemRight);
      b.classList.toggle('is-flagged', flagged.has(item.id));
      b.addEventListener('click', () => { currentIdx = idx; renderExamActive(); });
      palEl.appendChild(b);
    });
  }

  function submitExam() {
    stopTimer();
    if (examQs.length === 0) return;
    const { byId, el, setHidden, sameKeySet, formatClock, createOptionBtn } = SWTApp.utils;
    const elapsed = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    let correctCount = 0;
    lastWrongIds = [];
    const topicMap = new Map();
    const reviewEl = byId('exam-review-list');
    if (reviewEl) reviewEl.replaceChildren();

    examQs.forEach((q, idx) => {
      const sel = answers.get(q.id) || new Set();
      const hasAnswered = sel.size > 0;
      const ok = hasAnswered && sameKeySet(sel, q.correctKeys);
      if (hasAnswered) {
        SWTApp.storage.recordAnswer(q.id, ok);
      }
      if (ok) correctCount += 1; else lastWrongIds.push(q.id);

      const tKey = q.topic || SWTApp.app?.getCourse().code || 'Môn học';
      const st = topicMap.get(tKey) || { right: 0, total: 0 };
      st.total += 1;
      if (ok) st.right += 1;
      topicMap.set(tKey, st);

      if (reviewEl) {
        const card = el('article', 'review-item ' + (ok ? 'is-correct' : 'is-wrong'));
        const statusText = ok ? 'Đúng' : sel.size === 0 ? 'Bỏ trống' : 'Sai';
        const head = el('div', 'question-meta');
        const cBtn = el('button', 'btn btn-ghost btn-sm q-concept-btn');
        cBtn.type = 'button';
        cBtn.setAttribute('aria-expanded', 'false');
        cBtn.title = 'Xem khái niệm & kiến thức câu này';
        cBtn.append(el('span', 'q-concept-icon', '?'), el('span', '', 'Kiến thức'));
        const metaActions = el('div', 'question-meta-actions');
        metaActions.appendChild(cBtn);
        head.append(
          el('span', 'badge ' + (ok ? 'badge-success' : 'badge-danger'), 'Câu ' + (idx + 1) + ' — ' + statusText),
          el('span', 'badge', q.slideNumber ? 'Slide ' + q.slideNumber : '#' + q.id),
          el('span', 'badge', tKey),
          metaActions
        );
        const cBox = el('div', 'q-concept-box');
        cBox.hidden = true;
        cBtn.addEventListener('click', () => {
          SWTApp.conceptHelper?.toggleConceptBox({ button: cBtn, box: cBox, question: q, showDistinction: true });
        });
        const optsWrap = el('div', 'options-list');
        const rightSet = new Set(q.correctKeys || []);
        (q.options || []).forEach((opt) => optsWrap.appendChild(createOptionBtn(opt, { selected: sel.has(opt.key), graded: true, isCorrectKey: rightSet.has(opt.key), disabled: true })));
        const stemEl = el('div', 'question-stem');
        SWTApp.utils.renderRichText(stemEl, q.question);
        card.append(head, stemEl, cBox, optsWrap);
        if (q.explanation) card.appendChild(el('p', 'feedback-box', q.explanation));
        reviewEl.appendChild(card);
      }
    });

    const summaryEl = byId('exam-score-summary');
    if (summaryEl) {
      summaryEl.replaceChildren();
      const total = examQs.length;
      const pct = Math.round((correctCount / total) * 100);
      summaryEl.appendChild(el('h2', '', 'Kết quả bài thi thử'));
      const grid = el('div', 'score-grid');
      [['Điểm hệ 10', ((correctCount / total) * 10).toFixed(2) + ' / 10'], ['Số câu đúng', correctCount + ' / ' + total], ['Tỷ lệ đúng', pct + '%'], ['Thời gian làm', formatClock(elapsed)]].forEach(([lbl, val]) => {
        const box = el('div', 'score-stat');
        box.append(el('div', '', lbl), el('div', 'stat-value', val));
        grid.appendChild(box);
      });
      summaryEl.appendChild(grid);

      const wrap = el('div', 'table-wrapper');
      wrap.tabIndex = 0;
      wrap.setAttribute('role', 'region');
      wrap.setAttribute('aria-label', 'Phân tích kết quả theo chủ đề');
      const tbl = el('table', 'data-table');
      const thead = el('thead'), hr = el('tr');
      ['Chủ đề', 'Đúng / Tổng', 'Tỷ lệ'].forEach((h) => { const th = el('th', '', h); th.scope = 'col'; hr.appendChild(th); });
      thead.appendChild(hr);
      const tbody = el('tbody');
      topicMap.forEach((st, name) => {
        const tp = Math.round((st.right / st.total) * 100);
        const tr = el('tr'), th = el('th', '', name);
        th.scope = 'row';
        tr.append(th, el('td', 'tabular', st.right + ' / ' + st.total), el('td', 'tabular', tp + '%'));
        tbody.appendChild(tr);
      });
      tbl.append(thead, tbody);
      wrap.appendChild(tbl);
      summaryEl.appendChild(wrap);
    }

    const retryBtn = byId('exam-retry-wrong-btn');
    if (retryBtn) { retryBtn.hidden = lastWrongIds.length === 0; retryBtn.textContent = 'Luyện ngay ' + lastWrongIds.length + ' câu sai'; }
    SWTApp.practice?.refreshAll();
    renderBank();
    setHidden('exam-active', true);
    setHidden('exam-result', false);
  }

  function renderBank() {
    const { byId, el, setText, normalizeText } = SWTApp.utils;
    const listEl = byId('bank-list');
    if (!listEl) return;
    const tokens = normalizeText(byId('bank-search-input')?.value || '').split(' ').filter(Boolean);
    const topic = byId('bank-topic-select')?.value || 'all';
    const status = byId('bank-status-select')?.value || 'all';
    const showAns = Boolean(byId('bank-show-answers')?.checked);
    listEl.classList.toggle('show-answers', showAns);

    const matched = allQuestions.filter((q) => (topic === 'all' || q.topic === topic) && SWTApp.storage.matchesStatus(q.id, status) && (tokens.length === 0 || tokens.every((tk) => q._searchNorm.includes(tk))));
    setText('bank-result-count', matched.length + ' / ' + allQuestions.length + ' câu');
    listEl.replaceChildren();
    if (matched.length === 0) {
      const tr = el('tr'), td = el('td', '', 'Không tìm thấy câu hỏi phù hợp.');
      td.colSpan = 5;
      tr.appendChild(td);
      listEl.appendChild(tr);
      return;
    }

    const frag = document.createDocumentFragment();
    matched.forEach((q) => {
      const rec = SWTApp.storage.getRecord(q.id);
      const rightSet = new Set(q.correctKeys || []);
      const tr = el('tr'), th = el('th', '', '#' + q.id + (q.slideNumber ? ' · S' + q.slideNumber : ''));
      th.scope = 'row';
      const tdContent = el('td');
      const stemDiv = el('div');
      SWTApp.utils.renderRichText(stemDiv, q.question);
      tdContent.appendChild(stemDiv);
      const ul = el('ul', 'bank-options');
      (q.options || []).forEach((opt) => {
        const li = el('li', 'bank-option' + (rightSet.has(opt.key) ? ' is-correct' : ''));
        SWTApp.utils.renderRichText(li, opt.key + '. ' + opt.text);
        ul.appendChild(li);
      });
      tdContent.appendChild(ul);
      if (showAns && q.explanation) tdContent.appendChild(el('p', 'bank-explanation', 'Giải thích: ' + q.explanation));

      const tdStatus = el('td');
      const m = rec.mastery === 2 ? ['badge-success', 'Đã thuộc'] : rec.mastery === 1 ? ['badge-warning', 'Đang nhớ'] : ['', 'Chưa làm'];
      tdStatus.appendChild(el('span', ('badge ' + m[0]).trim(), m[1]));
      if (rec.lastWrong) tdStatus.appendChild(el('span', 'badge badge-danger', 'Hay sai'));
      if (rec.starred) tdStatus.appendChild(el('span', 'badge badge-accent', 'Đánh dấu'));

      const tdAction = el('td'), btn = el('button', 'btn btn-sm btn-secondary', 'Luyện câu này');
      btn.type = 'button';
      btn.dataset.practiceId = String(q.id);
      tdAction.appendChild(btn);
      tr.append(th, el('td', '', q.topic || SWTApp.app?.getCourse().code || 'Môn học'), tdContent, tdStatus, tdAction);
      frag.appendChild(tr);
    });
    listEl.appendChild(frag);
  }

  SWTApp.exam = {
    init(questions) {
      allQuestions = Array.isArray(questions) ? questions : [];
      const { byId, setHidden } = SWTApp.utils;
      const prefs = SWTApp.storage.getPrefs();
      syncExamToggles(prefs.examRandom, prefs.examInstantAnswer);

      const handleRandomToggle = (checked) => {
        syncExamToggles(checked, isInstantAnswerEnabled());
        SWTApp.storage.setPref('examRandom', checked);
        if (this.isActive() && examQs.length > 0) {
          const base = orderedPool.length === examQs.length ? orderedPool : examQs.slice();
          const orderMap = new Map(base.map((item, idx) => [item.id, idx]));
          const lockedByIndex = new Map();
          const unanswered = [];
          examQs.forEach((item, idx) => {
            const ans = answers.get(item.id);
            if (ans && ans.size > 0) {
              lockedByIndex.set(idx, item);
            } else {
              unanswered.push(item);
            }
          });
          const reorderedUnanswered = checked
            ? SWTApp.utils.shuffle(unanswered)
            : unanswered.slice().sort((a, b) => (orderMap.get(a.id) ?? 0) - (orderMap.get(b.id) ?? 0));
          let cursor = 0;
          examQs = examQs.map((_, idx) => {
            if (lockedByIndex.has(idx)) return lockedByIndex.get(idx);
            const nextItem = reorderedUnanswered[cursor];
            cursor += 1;
            return nextItem;
          });
          renderExamActive();
        }
      };

      const handleInstantToggle = (checked) => {
        syncExamToggles(isRandomEnabled(), checked);
        SWTApp.storage.setPref('examInstantAnswer', checked);
        if (this.isActive()) renderExamActive();
      };

      ['exam-random-questions', 'exam-active-random'].forEach((id) => {
        byId(id)?.addEventListener('change', (e) => handleRandomToggle(Boolean(e.target.checked)));
      });
      ['exam-instant-answer', 'exam-active-instant'].forEach((id) => {
        byId(id)?.addEventListener('change', (e) => handleInstantToggle(Boolean(e.target.checked)));
      });

      const showAnsSwitch = byId('bank-show-answers');
      if (showAnsSwitch) {
        showAnsSwitch.checked = Boolean(SWTApp.storage.getPrefs().bankShowAnswers);
        showAnsSwitch.addEventListener('change', () => { SWTApp.storage.setPref('bankShowAnswers', showAnsSwitch.checked); renderBank(); });
      }
      byId('exam-start-btn')?.addEventListener('click', startExam);
      byId('exam-range-btn')?.addEventListener('click', openRangeDialog);
      byId('exam-apply-range-btn')?.addEventListener('click', applyRange);
      byId('exam-start-question')?.addEventListener('change', () => {
        const startSelect = byId('exam-start-question');
        const endSelect = byId('exam-end-question');
        if (startSelect && endSelect && Number(startSelect.value) > Number(endSelect.value)) endSelect.value = startSelect.value;
        updateRangePreview();
      });
      byId('exam-end-question')?.addEventListener('change', () => {
        const startSelect = byId('exam-start-question');
        const endSelect = byId('exam-end-question');
        if (startSelect && endSelect && Number(endSelect.value) < Number(startSelect.value)) startSelect.value = endSelect.value;
        updateRangePreview();
      });
      byId('exam-source-select')?.addEventListener('change', (e) => {
        const val = e.target.value;
        if ((val === 'same-options' || val === 'similar-questions' || val === 'confusing-all') && allQuestions.length > 0) {
          rangeStart = 1;
          rangeEnd = allQuestions.length;
          if (byId('exam-start-question')) byId('exam-start-question').value = '1';
          if (byId('exam-end-question')) byId('exam-end-question').value = String(allQuestions.length);
        }
        updateRangeSummary();
        updateRangePreview();
        if (getEligibleQuestions(rangeStart, rangeEnd).length > 0) setSetupNotice('');
      });
      byId('exam-topic-select')?.addEventListener('change', () => {
        updateRangeSummary();
        updateRangePreview();
        if (getEligibleQuestions(rangeStart, rangeEnd).length > 0) setSetupNotice('');
      });
      byId('exam-submit-btn')?.addEventListener('click', submitExam);
      byId('exam-prev-btn')?.addEventListener('click', () => this.step(-1));
      byId('exam-next-btn')?.addEventListener('click', () => this.step(1));
      byId('exam-flag-btn')?.addEventListener('click', () => this.toggleFlag());
      byId('exam-concept-btn')?.addEventListener('click', () => {
        const q = examQs[currentIdx];
        if (!q) return;
        const sel = answers.get(q.id) || new Set();
        const graded = isQuestionGradedInActiveExam(q, sel);
        SWTApp.conceptHelper?.toggleConceptBox({
          button: byId('exam-concept-btn'),
          box: byId('exam-concept-box'),
          question: q,
          showDistinction: graded
        });
      });
      byId('exam-new-btn')?.addEventListener('click', () => { stopTimer(); setHidden('exam-active', true); setHidden('exam-result', true); setHidden('exam-setup', false); });
      byId('exam-retry-wrong-btn')?.addEventListener('click', () => { if (lastWrongIds.length > 0) { SWTApp.practice?.startRetrySet(lastWrongIds); SWTApp.app?.selectTab('tab-practice'); } });
      byId('bank-search-input')?.addEventListener('input', renderBank);
      byId('bank-topic-select')?.addEventListener('change', renderBank);
      byId('bank-status-select')?.addEventListener('change', renderBank);
      byId('bank-list')?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-practice-id]');
        if (btn) { SWTApp.practice?.openQuestion(Number(btn.dataset.practiceId)); SWTApp.app?.selectTab('tab-practice'); }
      });
      populateRangeSelectors();
      renderBank();
    },
    refreshBank: renderBank,
    startWithQuestions: startExamWithQuestions,
    onTabActivated(tabId) { if (tabId === 'tab-bank') renderBank(); },
    isActive: () => Boolean(SWTApp.utils.byId('exam-active') && !SWTApp.utils.byId('exam-active').hidden),
    selectByNumber(n) { const o = examQs[currentIdx]?.options?.[n - 1]; if (o) { selectExamOption(o.key); return true; } return false; },
    selectByLetter(c) { const o = examQs[currentIdx]?.options?.find((x) => x.key.toUpperCase() === c); if (o) { selectExamOption(o.key); return true; } return false; },
    step(d) { const n = currentIdx + d; if (n >= 0 && n < examQs.length) { currentIdx = n; renderExamActive(); } },
    toggleFlag() { const q = examQs[currentIdx]; if (!q) return; if (flagged.has(q.id)) flagged.delete(q.id); else flagged.add(q.id); renderExamActive(); }
  };
})();
