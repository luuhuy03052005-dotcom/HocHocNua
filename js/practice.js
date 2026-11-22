(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let allQuestions = [], deck = [], index = 0, customSubsetIds = null;
  let selectedKeys = new Set(), graded = false, wasRevealed = false, lastCorrect = false;
  let optionCache = new Map(), autoNextTimer = null, fcDeck = [], fcIndex = 0;

  function clearAutoNext() {
    if (autoNextTimer) { window.clearTimeout(autoNextTimer); autoNextTimer = null; }
  }

  function resetTurn() {
    clearAutoNext();
    selectedKeys = new Set();
    graded = wasRevealed = lastCorrect = false;
  }

  function setDisabledList(ids, disabled) {
    ids.forEach((id) => { const n = SWTApp.utils.byId(id); if (n) n.disabled = disabled; });
  }

  function getDisplayedOptions(q) {
    const { byId, shuffle } = SWTApp.utils;
    if (!q || !Array.isArray(q.options)) return [];
    if (!byId('practice-shuffle-options')?.checked) return q.options;
    if (!optionCache.has(q.id)) optionCache.set(q.id, shuffle(q.options));
    return optionCache.get(q.id);
  }

  function buildPracticeDeck(preserveId) {
    const { storage, utils } = SWTApp;
    const mode = utils.byId('practice-filter-mode')?.value || 'all';
    const topic = utils.byId('practice-filter-topic')?.value || 'all';
    const list = allQuestions.filter((q) =>
      customSubsetIds ? customSubsetIds.has(q.id) : (topic === 'all' || q.topic === topic) && storage.matchesStatus(q.id, mode)
    );
    deck = utils.byId('practice-shuffle-questions')?.checked ? utils.shuffle(list) : list;
    if (preserveId != null) index = Math.max(0, deck.findIndex((q) => q.id === preserveId));
    else if (index >= deck.length) index = 0;
    resetTurn();
    renderPractice();
  }

  function renderPractice() {
    const { byId, el, setText, setRichText, setHidden, renderImages, createOptionBtn } = SWTApp.utils;
    const optsEl = byId('practice-options');
    const fbEl = byId('practice-feedback');
    if (!optsEl) return;
    optsEl.replaceChildren();
    const actionIds = ['practice-prev-btn', 'practice-next-btn', 'practice-reveal-btn', 'practice-star-btn'];

    if (deck.length === 0) {
      setText('practice-counter', '0 / 0');
      setText('practice-slide-badge', 'Slide -');
      setText('practice-topic-badge', customSubsetIds ? 'Câu sai bài thi' : 'Trống');
      setText('practice-stem', 'Không có câu hỏi nào khớp bộ lọc hiện tại.');
      ['practice-multi-badge', 'practice-submit-multi-btn', 'practice-feedback'].forEach((id) => setHidden(id, true));
      renderImages(byId('practice-images'), []);
      setDisabledList(actionIds, true);
      return;
    }

    setDisabledList(actionIds, false);
    const q = deck[index], rec = SWTApp.storage.getRecord(q.id), correctSet = new Set(q.correctKeys || []);
    setText('practice-counter', index + 1 + ' / ' + deck.length);
    setText('practice-slide-badge', q.slideNumber ? 'Slide ' + q.slideNumber : '#' + q.id);
    setText('practice-topic-badge', q.topic || SWTApp.app?.getCourse().code || 'Môn học');
    setRichText('practice-stem', q.question);
    setHidden('practice-multi-badge', !q.isMulti);
    if (q.isMulti) setText('practice-multi-badge', 'Chọn ' + q.correctKeys.length + ' đáp án');

    const jump = byId('practice-jump-input');
    if (jump) { jump.max = String(deck.length); jump.value = String(index + 1); }
    const starBtn = byId('practice-star-btn');
    if (starBtn) {
      starBtn.setAttribute('aria-pressed', String(rec.starred));
      starBtn.classList.toggle('is-starred', rec.starred);
      starBtn.classList.toggle('is-active', rec.starred);
    }
    renderImages(byId('practice-images'), q.images);
    getDisplayedOptions(q).forEach((opt) =>
      optsEl.appendChild(createOptionBtn(opt, { selected: selectedKeys.has(opt.key), graded, isCorrectKey: correctSet.has(opt.key), disabled: graded }, () => selectOption(opt.key)))
    );

    const submitBtn = byId('practice-submit-multi-btn');
    if (submitBtn) { submitBtn.hidden = !q.isMulti || graded; submitBtn.disabled = selectedKeys.size === 0; }

    if (fbEl) {
      fbEl.replaceChildren();
      fbEl.hidden = !graded;
      fbEl.classList.toggle('is-correct', graded && !wasRevealed && lastCorrect);
      fbEl.classList.toggle('is-wrong', graded && (!lastCorrect || wasRevealed));
      if (graded) {
        const ans = (q.correctKeys || []).join(', ');
        const msg = wasRevealed ? 'Đáp án đúng: ' + ans : lastCorrect ? 'Chính xác (' + ans + ')' : 'Chưa đúng — Đáp án đúng: ' + ans;
        fbEl.appendChild(el('strong', 'feedback-title', msg));
        if (q.explanation) fbEl.appendChild(el('p', 'feedback-explanation', q.explanation));
      }
    }

    if (byId('practice-prev-btn')) byId('practice-prev-btn').disabled = index <= 0;
    if (byId('practice-next-btn')) byId('practice-next-btn').disabled = index >= deck.length - 1;
  }

  function gradeCurrent() {
    if (graded || deck.length === 0 || selectedKeys.size === 0) return;
    const q = deck[index];
    graded = true;
    wasRevealed = false;
    lastCorrect = SWTApp.utils.sameKeySet(selectedKeys, q.correctKeys);
    SWTApp.storage.recordAnswer(q.id, lastCorrect);
    renderPractice();
    if (lastCorrect && SWTApp.utils.byId('practice-instant-next')?.checked && index < deck.length - 1) {
      clearAutoNext();
      autoNextTimer = window.setTimeout(() => goPractice(1), 650);
    }
  }

  function selectOption(key) {
    if (graded || deck.length === 0) return;
    if (deck[index].isMulti) {
      if (selectedKeys.has(key)) selectedKeys.delete(key); else selectedKeys.add(key);
      renderPractice();
    } else {
      selectedKeys = new Set([key]);
      gradeCurrent();
    }
  }

  function revealCurrent() {
    if (graded || deck.length === 0) return;
    graded = wasRevealed = true;
    lastCorrect = false;
    SWTApp.storage.markRevealed(deck[index].id);
    renderPractice();
  }

  function goPractice(delta) {
    const next = index + delta;
    if (deck.length === 0 || next < 0 || next >= deck.length) return;
    index = next;
    resetTurn();
    renderPractice();
  }

  const isFlipped = () => SWTApp.utils.byId('fc-card')?.dataset.flipped === 'true';
  const setFlipped = (val) => { const c = SWTApp.utils.byId('fc-card'); if (c) c.dataset.flipped = val ? 'true' : 'false'; };

  function buildFlashcardDeck() {
    const { byId } = SWTApp.utils;
    const topic = byId('fc-filter-topic')?.value || 'all', onlyUnmastered = Boolean(byId('fc-only-unmastered')?.checked);
    fcDeck = allQuestions.filter((q) => (topic === 'all' || q.topic === topic) && (!onlyUnmastered || SWTApp.storage.getRecord(q.id).mastery < 2));
    fcIndex = 0;
    setFlipped(false);
    renderFlashcard();
  }

  function renderFlashcard() {
    const { byId, el, setText, setRichText, renderRichText, renderImages } = SWTApp.utils;
    const preview = byId('fc-options-preview'), ansBox = byId('fc-answer-box');
    if (!preview || !ansBox) return;
    preview.replaceChildren();
    ansBox.replaceChildren();
    const btns = ['fc-flip-btn', 'fc-grade-hard', 'fc-grade-good', 'fc-grade-easy'];

    if (fcDeck.length === 0) {
      setText('fc-counter', '0 / 0');
      setText('fc-stem', 'Đã thuộc hết các thẻ trong bộ lọc hiện tại. Tắt "Chỉ câu chưa thuộc" để ôn lại toàn bộ.');
      renderImages(byId('fc-images'), []);
      setDisabledList(btns, true);
      return;
    }

    setDisabledList(btns, false);
    if (fcIndex >= fcDeck.length) fcIndex = 0;
    const q = fcDeck[fcIndex];
    const correctSet = new Set(q.correctKeys || []);
    const tag = preview.tagName === 'UL' || preview.tagName === 'OL' ? 'li' : 'div';
    setText('fc-counter', fcIndex + 1 + ' / ' + fcDeck.length);
    setRichText('fc-stem', (q.slideNumber ? '[Slide ' + q.slideNumber + '] ' : '') + q.question);
    renderImages(byId('fc-images'), q.images);

    (q.options || []).forEach((opt) => {
      const optLine = el(tag, 'fc-option-line');
      renderRichText(optLine, opt.key + '. ' + opt.text);
      preview.appendChild(optLine);
      if (correctSet.has(opt.key)) {
        const correctLine = el('div', 'fc-correct-line is-correct');
        renderRichText(correctLine, opt.key + '. ' + opt.text);
        ansBox.appendChild(correctLine);
      }
    });
    if (q.explanation) ansBox.appendChild(el('p', 'fc-explanation', q.explanation));
  }

  function gradeCard(level) {
    if (fcDeck.length === 0) return;
    const card = fcDeck[fcIndex];
    SWTApp.storage.gradeFlashcard(card.id, level);
    if (level === 'hard') {
      fcDeck.splice(fcIndex, 1);
      fcDeck.splice(Math.min(fcDeck.length, fcIndex + 3), 0, card);
    } else if (level === 'good') {
      fcDeck.splice(fcIndex, 1);
      fcDeck.push(card);
    } else if (SWTApp.utils.byId('fc-only-unmastered')?.checked) fcDeck.splice(fcIndex, 1);
    else fcIndex = (fcIndex + 1) % Math.max(1, fcDeck.length);
    if (fcIndex >= fcDeck.length) fcIndex = 0;
    setFlipped(false);
    renderFlashcard();
  }

  SWTApp.practice = {
    init(questions) {
      allQuestions = Array.isArray(questions) ? questions : [];
      const { byId } = SWTApp.utils;
      const prefs = SWTApp.storage.getPrefs();
      [
        ['practice-shuffle-questions', 'shuffleQuestions', buildPracticeDeck],
        ['practice-shuffle-options', 'shuffleOptions', () => { optionCache.clear(); renderPractice(); }],
        ['practice-instant-next', 'instantNext', null],
        ['fc-only-unmastered', 'fcOnlyUnmastered', buildFlashcardDeck]
      ].forEach(([id, key, fn]) => {
        const node = byId(id);
        if (!node) return;
        node.checked = Boolean(prefs[key]);
        node.addEventListener('change', () => { SWTApp.storage.setPref(key, node.checked); if (fn) fn(); });
      });

      byId('practice-filter-mode')?.addEventListener('change', (e) => { customSubsetIds = null; SWTApp.storage.setPref('practiceFilterMode', e.target.value); buildPracticeDeck(); });
      byId('practice-filter-topic')?.addEventListener('change', (e) => { customSubsetIds = null; SWTApp.storage.setPref('practiceFilterTopic', e.target.value); buildPracticeDeck(); });
      byId('practice-submit-multi-btn')?.addEventListener('click', gradeCurrent);
      byId('practice-prev-btn')?.addEventListener('click', () => goPractice(-1));
      byId('practice-next-btn')?.addEventListener('click', () => goPractice(1));
      byId('practice-reveal-btn')?.addEventListener('click', revealCurrent);
      byId('practice-star-btn')?.addEventListener('click', () => this.toggleStar());
      const jumpEl = byId('practice-jump-input');
      const applyJump = () => {
        const n = parseInt(jumpEl?.value || '', 10);
        if (!Number.isNaN(n) && deck.length > 0) { index = Math.min(deck.length - 1, Math.max(0, n - 1)); resetTurn(); renderPractice(); }
      };
      jumpEl?.addEventListener('change', applyJump);
      jumpEl?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); applyJump(); jumpEl.blur(); } });
      byId('fc-filter-topic')?.addEventListener('change', (e) => { SWTApp.storage.setPref('fcFilterTopic', e.target.value); buildFlashcardDeck(); });
      const blurPointer = (e) => { if (e.detail > 0) e.currentTarget?.blur(); };
      byId('fc-flip-btn')?.addEventListener('click', (e) => { blurPointer(e); setFlipped(!isFlipped()); });
      byId('fc-card')?.addEventListener('click', (e) => { if (!e.target.closest('button, a')) setFlipped(!isFlipped()); });
      [['fc-grade-hard', 'hard'], ['fc-grade-good', 'good'], ['fc-grade-easy', 'easy']].forEach(([id, lv]) =>
        byId(id)?.addEventListener('click', (e) => { blurPointer(e); gradeCard(lv); })
      );
      buildPracticeDeck();
      buildFlashcardDeck();
    },
    refreshAll() { optionCache.clear(); buildPracticeDeck(); buildFlashcardDeck(); },
    onTabActivated(tabId) {
      if (tabId === 'tab-practice') renderPractice();
      else if (tabId === 'tab-flashcard') {
        if (fcDeck.length === 0) buildFlashcardDeck();
        else if (SWTApp.utils.byId('fc-only-unmastered')?.checked) {
          fcDeck = fcDeck.filter((q) => SWTApp.storage.getRecord(q.id).mastery < 2);
          if (fcIndex >= fcDeck.length) fcIndex = 0;
          renderFlashcard();
        }
      }
    },
    startRetrySet(ids) {
      if (!Array.isArray(ids) || ids.length === 0) return;
      customSubsetIds = new Set(ids);
      const { byId } = SWTApp.utils;
      if (byId('practice-filter-mode')) byId('practice-filter-mode').value = 'mistakes';
      if (byId('practice-filter-topic')) byId('practice-filter-topic').value = 'all';
      index = 0;
      buildPracticeDeck();
    },
    openQuestion(id) {
      customSubsetIds = null;
      const { byId } = SWTApp.utils;
      if (!deck.some((q) => q.id === id)) {
        if (byId('practice-filter-mode')) byId('practice-filter-mode').value = 'all';
        if (byId('practice-filter-topic')) byId('practice-filter-topic').value = 'all';
      }
      buildPracticeDeck(id);
    },
    selectByNumber(num) { const o = deck[index] && getDisplayedOptions(deck[index])[num - 1]; if (o) { selectOption(o.key); return true; } return false; },
    selectByLetter(ch) { const o = deck[index] && getDisplayedOptions(deck[index]).find((x) => x.key.toUpperCase() === ch); if (o) { selectOption(o.key); return true; } return false; },
    submitOrNext() {
      if (!deck[index]) return false;
      if (!graded && deck[index].isMulti && selectedKeys.size > 0) { gradeCurrent(); return true; }
      if (graded) { goPractice(1); return true; }
      return false;
    },
    step: goPractice,
    reveal: revealCurrent,
    toggleStar() { if (deck[index]) { SWTApp.storage.toggleStar(deck[index].id); renderPractice(); } },
    flipCard() { if (fcDeck.length > 0) setFlipped(!isFlipped()); },
    isCardFlipped: isFlipped,
    gradeCard,
    stepCard(d) { if (fcDeck.length > 0) { fcIndex = Math.min(fcDeck.length - 1, Math.max(0, fcIndex + d)); setFlipped(false); renderFlashcard(); } },
    toggleCardStar() { if (fcDeck[fcIndex]) SWTApp.storage.toggleStar(fcDeck[fcIndex].id); }
  };
})();
