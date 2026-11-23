(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  const CLUSTER_SIZE = 10;
  const REQUIRED_RECALLS = 2;
  let allQuestions = [], filteredQuestions = [], clusterQuestions = [], deck = [], index = 0, customSubsetIds = null;
  let clusterIndex = 0, recallStreaks = {};
  let pickerClusterIndex = 0;
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

  function recallFor(id) {
    return Math.min(REQUIRED_RECALLS, Math.max(0, Number(recallStreaks[String(id)]) || 0));
  }

  function clusterSlotOf(questionId) {
    return clusterQuestions.findIndex((q) => q.id === questionId);
  }

  function clusterIsComplete() {
    return clusterQuestions.length > 0 && clusterQuestions.every((q) => recallFor(q.id) >= REQUIRED_RECALLS);
  }

  function totalClusters() {
    return Math.max(1, Math.ceil(filteredQuestions.length / CLUSTER_SIZE));
  }

  function setClusterIndex(nextIndex) {
    clusterIndex = Math.min(totalClusters() - 1, Math.max(0, Number(nextIndex) || 0));
    SWTApp.storage.setPracticeClusterIndex(clusterIndex);
  }

  function updateClusterProgress() {
    const { byId, el, setText } = SWTApp.utils;
    const items = clusterQuestions.length > 0 ? clusterQuestions : deck;
    const total = items.length;
    const mastered = items.filter((q) => recallFor(q.id) >= REQUIRED_RECALLS).length;
    const recalls = items.reduce((sum, q) => sum + recallFor(q.id), 0);
    const required = total * REQUIRED_RECALLS;
    const pct = required > 0 ? Math.round((recalls / required) * 100) : 0;
    const currentQId = deck[index]?.id;
    setText('practice-cluster-label', 'Cụm ' + (clusterIndex + 1) + '/' + totalClusters());
    setText('practice-cluster-range', total ? 'Câu ' + (clusterIndex * CLUSTER_SIZE + 1) + '–' + (clusterIndex * CLUSTER_SIZE + total) : 'Không có câu');
    setText('practice-cluster-mastered', 'Thuộc ' + mastered + '/' + total);
    setText('practice-cluster-recalls', 'Nhớ ' + recalls + '/' + required);
    const fill = byId('practice-cluster-progress-fill');
    if (fill) fill.style.inlineSize = pct + '%';
    const track = fill?.parentElement;
    if (track) track.setAttribute('aria-valuenow', String(pct));

    const steps = byId('practice-cluster-steps');
    if (steps) {
      steps.replaceChildren();
      items.forEach((q, slotIdx) => {
        const streak = recallFor(q.id);
        const stepNumber = slotIdx + 1;
        const globalNumber = clusterIndex * CLUSTER_SIZE + stepNumber;
        const isCurrent = q.id === currentQId;
        const step = el('button', 'cluster-step' + (streak === 1 ? ' is-learning' : streak >= 2 ? ' is-mastered' : ''), String(stepNumber));
        step.type = 'button';
        step.title = 'Câu ' + globalNumber + ' (#' + q.id + '): ' + streak + '/' + REQUIRED_RECALLS + ' lượt nhớ đúng';
        step.setAttribute('aria-label', step.title);
        step.setAttribute('aria-current', String(isCurrent));
        step.addEventListener('click', () => {
          const targetDeckIdx = deck.findIndex((item) => item.id === q.id);
          if (targetDeckIdx < 0) return;
          const currentSlotIdx = clusterSlotOf(currentQId);
          const direction = slotIdx - (currentSlotIdx >= 0 ? currentSlotIdx : targetDeckIdx);
          index = targetDeckIdx;
          resetTurn();
          renderPractice();
          if (direction) animatePracticeChange(direction);
          scrollQuestionIntoView();
        });
        steps.appendChild(step);
      });
    }
  }

  function questionsForCluster(targetIndex) {
    const start = Math.max(0, Number(targetIndex) || 0) * CLUSTER_SIZE;
    return filteredQuestions.slice(start, start + CLUSTER_SIZE);
  }

  function getClusterStats(questions) {
    const items = Array.isArray(questions) ? questions : [];
    const mastered = items.filter((question) => recallFor(question.id) >= REQUIRED_RECALLS).length;
    const learning = items.filter((question) => {
      const streak = recallFor(question.id);
      return streak > 0 && streak < REQUIRED_RECALLS;
    }).length;
    const studied = mastered + learning;
    const recalls = items.reduce((sum, question) => sum + recallFor(question.id), 0);
    const required = items.length * REQUIRED_RECALLS;
    const status = items.length > 0 && mastered === items.length
      ? 'completed'
      : recalls > 0 ? 'learning' : 'unstarted';
    return { total: items.length, mastered, learning, studied, recalls, required, status };
  }

  function clusterStatusLabel(status) {
    if (status === 'completed') return 'Đã hoàn thành';
    if (status === 'learning') return 'Đang học';
    return 'Chưa học';
  }

  function clusterStatusBadgeClass(status) {
    if (status === 'completed') return 'badge-success';
    if (status === 'learning') return 'badge-warning';
    return '';
  }

  function updateClusterFilterSummary() {
    const { byId, setText } = SWTApp.utils;
    const mode = byId('practice-filter-mode');
    const topic = byId('practice-filter-topic');
    const modeText = customSubsetIds ? 'Bộ câu luyện lại' : (mode?.selectedOptions?.[0]?.textContent || 'Tất cả câu hỏi');
    const topicText = topic?.selectedOptions?.[0]?.textContent || 'Tất cả chủ đề';
    setText('practice-cluster-filter-summary', modeText + ' · ' + topicText + ' · ' + filteredQuestions.length + ' câu');
  }

  function renderClusterPickerList() {
    const { byId, el, setText } = SWTApp.utils;
    const listView = byId('practice-cluster-picker-list-view');
    const detailView = byId('practice-cluster-detail-view');
    const list = byId('practice-cluster-picker-list');
    if (!list || !listView || !detailView) return;
    listView.hidden = false;
    detailView.hidden = true;
    list.replaceChildren();
    updateClusterFilterSummary();

    const clusters = [];
    if (filteredQuestions.length > 0) {
      for (let targetIndex = 0; targetIndex < Math.ceil(filteredQuestions.length / CLUSTER_SIZE); targetIndex += 1) {
        const questions = questionsForCluster(targetIndex);
        clusters.push({ targetIndex, questions, stats: getClusterStats(questions) });
      }
    }
    const counts = { completed: 0, learning: 0, unstarted: 0 };
    clusters.forEach((cluster) => { counts[cluster.stats.status] += 1; });
    setText('cluster-picker-completed-count', String(counts.completed));
    setText('cluster-picker-learning-count', String(counts.learning));
    setText('cluster-picker-unstarted-count', String(counts.unstarted));

    const statusFilter = byId('practice-cluster-status-filter')?.value || 'all';
    const visibleClusters = clusters.filter((cluster) => statusFilter === 'all' || cluster.stats.status === statusFilter);
    byId('practice-cluster-picker-empty').hidden = visibleClusters.length > 0;
    visibleClusters.forEach(({ targetIndex, stats }) => {
      const start = targetIndex * CLUSTER_SIZE + 1;
      const end = start + stats.total - 1;
      const button = el('button', 'cluster-picker-card status-' + stats.status + (targetIndex === clusterIndex ? ' is-current' : ''));
      button.type = 'button';
      button.dataset.clusterIndex = String(targetIndex);
      button.setAttribute('role', 'listitem');
      const heading = el('span', 'cluster-picker-card-heading');
      heading.append(
        el('strong', '', 'Cụm ' + (targetIndex + 1)),
        el('span', ('badge ' + clusterStatusBadgeClass(stats.status)).trim(), clusterStatusLabel(stats.status))
      );
      const range = el('span', 'cluster-picker-card-range', 'Câu ' + start + '–' + end);
      const progressText = el('span', 'cluster-picker-card-progress', stats.mastered + '/' + stats.total + ' hoàn thành · ' + stats.studied + '/' + stats.total + ' đã học · ' + stats.recalls + '/' + stats.required + ' lượt nhớ');
      const track = el('span', 'cluster-picker-card-track');
      const fill = el('span', 'cluster-picker-card-fill');
      fill.style.inlineSize = (stats.required > 0 ? Math.round((stats.recalls / stats.required) * 100) : 0) + '%';
      track.appendChild(fill);
      button.append(heading, range, progressText, track);
      list.appendChild(button);
    });
  }

  function renderClusterPickerDetail(targetIndex) {
    const { byId, el, setText } = SWTApp.utils;
    const questions = questionsForCluster(targetIndex);
    if (questions.length === 0) return;
    pickerClusterIndex = targetIndex;
    const stats = getClusterStats(questions);
    byId('practice-cluster-picker-list-view').hidden = true;
    byId('practice-cluster-detail-view').hidden = false;
    setText('practice-cluster-detail-title', 'Cụm ' + (targetIndex + 1));
    setText('practice-cluster-detail-summary', stats.mastered + '/' + stats.total + ' câu hoàn thành · ' + stats.studied + '/' + stats.total + ' câu đã học · ' + stats.recalls + '/' + stats.required + ' lượt nhớ');
    const statusBadge = byId('practice-cluster-detail-status');
    if (statusBadge) {
      statusBadge.className = ('badge ' + clusterStatusBadgeClass(stats.status)).trim();
      statusBadge.textContent = clusterStatusLabel(stats.status);
    }

    const list = byId('practice-cluster-question-list');
    list.replaceChildren();
    questions.forEach((question, questionIndex) => {
      const recall = recallFor(question.id);
      const completed = recall >= REQUIRED_RECALLS;
      const isLearning = recall > 0 && !completed;
      const item = el('article', 'cluster-question-item' + (completed ? ' is-completed' : isLearning ? ' is-learning' : ''));
      item.setAttribute('role', 'listitem');
      const heading = el('div', 'cluster-question-heading');
      heading.append(
        el('strong', '', 'Câu ' + (targetIndex * CLUSTER_SIZE + questionIndex + 1) + ' · #' + question.id),
        el('span', ('badge ' + (completed ? 'badge-success' : isLearning ? 'badge-warning' : '')).trim(), completed ? 'Hoàn thành 2/2' : isLearning ? 'Đang nhớ 1/2' : 'Chưa học 0/2')
      );
      const previewText = String(question.question || '').replace(/```[\s\S]*?```/g, '[Đoạn mã]').replace(/\s+/g, ' ').trim();
      const preview = el('p', 'cluster-question-preview', previewText);
      const openButton = el('button', 'btn btn-sm btn-secondary', 'Mở câu');
      openButton.type = 'button';
      openButton.dataset.clusterQuestionId = String(question.id);
      item.append(heading, preview, openButton);
      list.appendChild(item);
    });

    const useButton = byId('practice-cluster-use-btn');
    if (useButton) useButton.textContent = stats.status === 'completed' ? 'Ôn cụm này' : 'Học cụm này';
    const restartButton = byId('practice-cluster-restart-btn');
    if (restartButton) {
      restartButton.disabled = stats.status === 'unstarted';
      restartButton.title = stats.status === 'unstarted' ? 'Cụm này chưa có tiến độ để luyện lại.' : 'Đặt lượt nhớ của các câu trong cụm về 0/2 và học lại từ câu đầu.';
    }
  }

  function openClusterPicker() {
    const statusFilter = SWTApp.utils.byId('practice-cluster-status-filter');
    if (statusFilter) statusFilter.value = 'all';
    renderClusterPickerList();
    const dialog = SWTApp.utils.byId('practice-cluster-picker-dialog');
    if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
    else dialog?.setAttribute('open', '');
  }

  function usePickerCluster(resetProgress) {
    const questions = questionsForCluster(pickerClusterIndex);
    if (questions.length === 0) return;
    if (resetProgress) {
      SWTApp.storage.resetPracticeRecall(questions.map((question) => question.id));
      questions.forEach((question) => { recallStreaks[String(question.id)] = 0; });
    }
    setClusterIndex(pickerClusterIndex);
    index = 0;
    SWTApp.utils.byId('practice-cluster-picker-dialog')?.close();
    buildPracticeDeck(null, false);
    scrollQuestionIntoView();
  }

  function examPickerCluster() {
    const questions = questionsForCluster(pickerClusterIndex);
    if (questions.length === 0) return;
    const ids = questions.map((question) => question.id);
    if (!SWTApp.exam?.startWithQuestions(ids)) return;
    SWTApp.utils.byId('practice-cluster-picker-dialog')?.close();
    SWTApp.app?.selectTab('tab-exam');
  }

  function updateQuickControls(q) {
    const availableKeys = new Set((q?.options || []).map((option) => String(option.key).toUpperCase()));
    document.querySelectorAll('[data-practice-answer-key]').forEach((button) => {
      const key = button.dataset.practiceAnswerKey;
      button.hidden = !availableKeys.has(key);
      button.disabled = graded || !availableKeys.has(key);
      button.classList.toggle('is-selected', selectedKeys.has(key));
    });
  }

  function rebuildFilteredQuestions() {
    const { storage, utils } = SWTApp;
    const mode = utils.byId('practice-filter-mode')?.value || 'all';
    const topic = utils.byId('practice-filter-topic')?.value || 'all';
    filteredQuestions = allQuestions.filter((q) =>
      customSubsetIds ? customSubsetIds.has(q.id) : (topic === 'all' || q.topic === topic) && storage.matchesStatus(q.id, mode)
    );
  }

  function buildClusterDeck(cluster, avoidFirstId) {
    const { utils } = SWTApp;
    const items = Array.isArray(cluster) ? cluster.slice() : [];
    if (!utils.byId('practice-shuffle-questions')?.checked) return items;
    const unmastered = items.filter((q) => recallFor(q.id) < REQUIRED_RECALLS);
    const mastered = items.filter((q) => recallFor(q.id) >= REQUIRED_RECALLS);
    if (unmastered.length === 0) {
      const shuffledAll = utils.shuffle(items);
      if (avoidFirstId != null && shuffledAll.length > 1 && shuffledAll[0].id === avoidFirstId) {
        const tmp = shuffledAll[0];
        shuffledAll[0] = shuffledAll[1];
        shuffledAll[1] = tmp;
      }
      return shuffledAll;
    }
    const shuffledUnmastered = utils.shuffle(unmastered);
    if (avoidFirstId != null && shuffledUnmastered.length > 1 && shuffledUnmastered[0].id === avoidFirstId) {
      const tmp = shuffledUnmastered[0];
      shuffledUnmastered[0] = shuffledUnmastered[1];
      shuffledUnmastered[1] = tmp;
    }
    return shuffledUnmastered.concat(mastered);
  }

  function handleShuffleQuestionsToggle() {
    const { utils } = SWTApp;
    if (clusterQuestions.length === 0) {
      buildPracticeDeck(null, false);
      return;
    }
    const currentQ = deck[index];
    if (!utils.byId('practice-shuffle-questions')?.checked) {
      deck = clusterQuestions.slice();
      const foundIdx = currentQ ? deck.findIndex((q) => q.id === currentQ.id) : 0;
      index = foundIdx >= 0 ? foundIdx : 0;
    } else if (currentQ) {
      const others = clusterQuestions.filter((q) => q.id !== currentQ.id);
      const unmasteredOthers = utils.shuffle(others.filter((q) => recallFor(q.id) < REQUIRED_RECALLS));
      const masteredOthers = others.filter((q) => recallFor(q.id) >= REQUIRED_RECALLS);
      deck = [currentQ].concat(unmasteredOthers, masteredOthers);
      index = 0;
    } else {
      deck = buildClusterDeck(clusterQuestions);
      index = 0;
    }
    if (utils.byId('practice-prev-btn')) utils.byId('practice-prev-btn').disabled = index <= 0;
    if (utils.byId('practice-next-btn')) utils.byId('practice-next-btn').disabled = deck.length === 0;
    updateClusterProgress();
  }

  function buildPracticeDeck(preserveId, shouldRefilter) {
    if (shouldRefilter || filteredQuestions.length === 0) {
      rebuildFilteredQuestions();
    }
    if (preserveId != null) {
      let sourceIndex = filteredQuestions.findIndex((q) => q.id === preserveId);
      if (sourceIndex < 0) {
        rebuildFilteredQuestions();
        sourceIndex = filteredQuestions.findIndex((q) => q.id === preserveId);
      }
      if (sourceIndex >= 0) clusterIndex = Math.floor(sourceIndex / CLUSTER_SIZE);
    }
    setClusterIndex(clusterIndex);
    clusterQuestions = questionsForCluster(clusterIndex);
    deck = buildClusterDeck(clusterQuestions);
    if (preserveId != null) {
      const foundIdx = deck.findIndex((q) => q.id === preserveId);
      index = foundIdx >= 0 ? foundIdx : 0;
    } else {
      const firstUnmastered = deck.findIndex((q) => recallFor(q.id) < REQUIRED_RECALLS);
      index = firstUnmastered >= 0 ? firstUnmastered : 0;
    }
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
    updateClusterProgress();

    if (deck.length === 0) {
      setText('practice-counter', '0 / 0');
      setText('practice-slide-badge', 'Slide -');
      setText('practice-topic-badge', customSubsetIds ? 'Câu sai bài thi' : 'Trống');
      setText('practice-stem', 'Không có câu hỏi nào khớp bộ lọc hiện tại.');
      ['practice-multi-badge', 'practice-submit-multi-btn', 'practice-feedback'].forEach((id) => setHidden(id, true));
      setHidden('practice-flip-options-btn', true);
      optsEl.hidden = true;
      renderImages(byId('practice-images'), []);
      setDisabledList(actionIds, true);
      updateQuickControls(null);
      return;
    }

    setDisabledList(actionIds, false);
    const q = deck[index], rec = SWTApp.storage.getRecord(q.id), correctSet = new Set(q.correctKeys || []);
    const slotIdx = clusterSlotOf(q.id);
    const displayStep = (slotIdx >= 0 ? slotIdx : index) + 1;
    const totalSteps = clusterQuestions.length || deck.length;
    setText('practice-counter', displayStep + ' / ' + totalSteps);
    setText('practice-slide-badge', q.slideNumber ? 'Slide ' + q.slideNumber : '#' + q.id);
    setText('practice-topic-badge', q.topic || SWTApp.app?.getCourse().code || 'Môn học');
    setRichText('practice-stem', q.question);
    setHidden('practice-multi-badge', !q.isMulti);
    if (q.isMulti) setText('practice-multi-badge', 'Chọn ' + q.correctKeys.length + ' đáp án');

    const jump = byId('practice-jump-input');
    if (jump) { jump.max = String(totalSteps); jump.value = String(displayStep); }
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
    optsEl.hidden = false;
    const flipButton = byId('practice-flip-options-btn');
    if (flipButton) {
      flipButton.hidden = graded;
    }
    if (byId('practice-reveal-btn')) byId('practice-reveal-btn').disabled = graded;
    updateQuickControls(q);

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
        const recall = recallFor(q.id);
        const recallText = wasRevealed
          ? 'Đã xem đáp án — câu này cần nhớ lại từ đầu.'
          : lastCorrect
            ? recall >= REQUIRED_RECALLS ? 'Đã thuộc câu này: 2/2 lượt đúng liên tiếp.' : 'Đã nhớ lần 1/2 — hãy trả lời đúng thêm một vòng.'
            : 'Trả lời sai — chuỗi nhớ của câu này trở về 0/2.';
        fbEl.appendChild(el('span', 'practice-recall-feedback', recallText));
        if (q.explanation) fbEl.appendChild(el('p', 'feedback-explanation', q.explanation));
      }
    }

    if (byId('practice-prev-btn')) byId('practice-prev-btn').disabled = index <= 0;
    if (byId('practice-next-btn')) byId('practice-next-btn').disabled = false;
    updateClusterProgress();
  }

  function animatePracticeChange(direction) {
    const card = SWTApp.utils.byId('practice-question-card');
    if (!card || typeof card.animate !== 'function' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    card.getAnimations().forEach((animation) => animation.cancel());
    card.animate(
      [
        { opacity: 0.72, transform: 'translate3d(' + (direction > 0 ? '14px' : '-14px') + ', 0, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ],
      { duration: 160, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
  }

  function scrollQuestionIntoView() {
    const card = SWTApp.utils.byId('practice-question-card');
    if (!card) return;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.requestAnimationFrame(() => card.scrollIntoView({ block: 'start', behavior }));
  }

  function gradeCurrent() {
    if (graded || deck.length === 0 || selectedKeys.size === 0) return;
    const q = deck[index];
    const wasClusterComplete = clusterIsComplete();
    graded = true;
    wasRevealed = false;
    lastCorrect = SWTApp.utils.sameKeySet(selectedKeys, q.correctKeys);
    SWTApp.storage.recordAnswer(q.id, lastCorrect);
    const nextRecall = lastCorrect ? Math.min(REQUIRED_RECALLS, recallFor(q.id) + 1) : 0;
    recallStreaks[String(q.id)] = SWTApp.storage.setPracticeRecall(q.id, nextRecall);
    renderPractice();
    if (!wasClusterComplete && clusterIsComplete()) {
      window.setTimeout(showClusterReview, 180);
    } else if (lastCorrect && SWTApp.utils.byId('practice-instant-next')?.checked) {
      clearAutoNext();
      autoNextTimer = window.setTimeout(() => goPractice(1), 650);
    }
  }

  function flipPracticeCard() {
    if (deck.length === 0 || graded) return false;
    revealCurrent();
    return true;
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
    recallStreaks[String(deck[index].id)] = SWTApp.storage.setPracticeRecall(deck[index].id, 0);
    renderPractice();
  }

  function goPractice(delta) {
    if (deck.length === 0) return;
    if (delta < 0) {
      const prev = index + delta;
      if (prev < 0) return;
      index = prev;
    } else if (delta > 0) {
      if (clusterIsComplete()) {
        const next = index + delta;
        if (next >= deck.length) {
          showClusterReview();
          return;
        }
        index = next;
      } else {
        let nextUnmastered = -1;
        for (let i = index + 1; i < deck.length; i += 1) {
          if (recallFor(deck[i].id) < REQUIRED_RECALLS) {
            nextUnmastered = i;
            break;
          }
        }
        if (nextUnmastered >= 0) {
          index = nextUnmastered;
        } else {
          const currentId = deck[index]?.id;
          deck = buildClusterDeck(clusterQuestions, currentId);
          const firstUnmastered = deck.findIndex((q) => recallFor(q.id) < REQUIRED_RECALLS);
          index = firstUnmastered >= 0 ? firstUnmastered : 0;
        }
      }
    }
    resetTurn();
    renderPractice();
    animatePracticeChange(delta);
  }

  function getLearnedQuestions() {
    const hasClusterRecalls = allQuestions.some((question) => recallFor(question.id) > 0);
    return allQuestions.filter((question) => {
      if (recallFor(question.id) > 0) return true;
      const rec = SWTApp.storage.getRecord(question.id);
      return hasClusterRecalls ? rec.mastery === 2 : rec.mastery > 0;
    });
  }

  function openLearnedExamDialog() {
    const learned = getLearnedQuestions();
    const minutes = Math.min(60, Math.max(5, learned.length));
    SWTApp.utils.setText('practice-learned-exam-count', String(learned.length));
    SWTApp.utils.setText(
      'practice-learned-exam-message',
      learned.length > 0
        ? 'Tạo đề ' + learned.length + ' câu trong ' + minutes + ' phút và chuyển sang Thi thử.'
        : 'Chưa có câu đã học. Hãy trả lời đúng ít nhất một câu trong cụm trước.'
    );
    const confirmButton = SWTApp.utils.byId('practice-confirm-learned-exam-btn');
    if (confirmButton) confirmButton.disabled = learned.length === 0;
    const dialog = SWTApp.utils.byId('practice-learned-exam-dialog');
    if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
    else dialog?.setAttribute('open', '');
  }

  function initMobileControls() {
    const settingsButton = SWTApp.utils.byId('practice-mobile-settings-btn');
    const toolbar = SWTApp.utils.byId('practice-toolbar');
    settingsButton?.addEventListener('click', () => {
      const isOpen = toolbar?.classList.toggle('is-mobile-open') || false;
      settingsButton.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('#practice-learned-exam-btn, [data-learned-exam-trigger]').forEach((btn) => {
      btn.addEventListener('click', openLearnedExamDialog);
    });
    SWTApp.utils.byId('practice-confirm-learned-exam-btn')?.addEventListener('click', () => {
      const ids = getLearnedQuestions().map((question) => question.id);
      if (ids.length === 0 || !SWTApp.exam?.startWithQuestions(ids)) return;
      SWTApp.utils.byId('practice-learned-exam-dialog')?.close();
      SWTApp.app?.selectTab('tab-exam');
    });

    const card = SWTApp.utils.byId('practice-question-card');
    if (!card) return;
    let startX = 0, startY = 0, startTime = 0;
    card.addEventListener('touchstart', (event) => {
      if (event.touches.length !== 1 || document.querySelector('dialog[open]')) return;
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    }, { passive: true });
    card.addEventListener('touchend', (event) => {
      if (!startTime || event.changedTouches.length !== 1) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      const elapsed = Date.now() - startTime;
      startTime = 0;
      if (elapsed > 700 || Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
      event.preventDefault();
      goPractice(dx < 0 ? 1 : -1);
    }, { passive: false });
    card.addEventListener('touchcancel', () => { startTime = 0; }, { passive: true });

    const clusterSlot = SWTApp.utils.byId('practice-cluster-slot');
    const clusterPanel = SWTApp.utils.byId('practice-cluster-panel');
    const practicePanel = SWTApp.utils.byId('panel-practice');
    const mobileQuery = window.matchMedia('(max-width: 39.999em)');
    let pinFrame = 0;

    const unpinCluster = () => {
      clusterPanel?.classList.remove('is-mobile-fixed');
      if (clusterSlot) clusterSlot.style.blockSize = '';
    };
    const syncPinnedCluster = () => {
      pinFrame = 0;
      if (!clusterSlot || !clusterPanel || practicePanel?.hidden || !mobileQuery.matches) {
        unpinCluster();
        return;
      }
      const isFixed = clusterPanel.classList.contains('is-mobile-fixed');
      const shouldFix = clusterSlot.getBoundingClientRect().top <= 0;
      if (shouldFix && !isFixed) {
        clusterSlot.style.blockSize = clusterPanel.getBoundingClientRect().height + 'px';
        clusterPanel.classList.add('is-mobile-fixed');
      } else if (!shouldFix && isFixed) {
        unpinCluster();
      } else if (isFixed) {
        clusterSlot.style.blockSize = clusterPanel.getBoundingClientRect().height + 'px';
      }
    };
    const queuePinnedCluster = () => {
      if (!pinFrame) pinFrame = window.requestAnimationFrame(syncPinnedCluster);
    };
    window.addEventListener('scroll', queuePinnedCluster, { passive: true });
    window.addEventListener('resize', queuePinnedCluster, { passive: true });
    if (typeof mobileQuery.addEventListener === 'function') mobileQuery.addEventListener('change', queuePinnedCluster);
    else mobileQuery.addListener(queuePinnedCluster);
    if (typeof ResizeObserver === 'function' && clusterPanel) new ResizeObserver(queuePinnedCluster).observe(clusterPanel);
    queuePinnedCluster();
  }

  function renderClusterReview() {
    const { byId, el, setText, renderRichText, renderImages } = SWTApp.utils;
    const list = byId('practice-cluster-review-list');
    if (!list) return;
    list.replaceChildren();
    const items = clusterQuestions.length > 0 ? clusterQuestions : deck;
    setText('practice-cluster-review-title', 'Tổng ôn cụm ' + (clusterIndex + 1));
    setText('practice-cluster-review-summary', items.length + '/' + items.length + ' câu đã đạt 2 lượt đúng liên tiếp. Đọc nhanh câu hỏi và đáp án trước khi sang cụm mới.');

    items.forEach((q, idx) => {
      const item = el('article', 'cluster-review-item');
      const heading = el('div', 'cluster-review-heading');
      heading.append(
        el('span', 'counter-pill', 'Câu ' + (clusterIndex * CLUSTER_SIZE + idx + 1) + ' · #' + q.id),
        el('span', 'badge badge-success', 'Thuộc 2/2')
      );
      const stem = el('div', 'cluster-review-question');
      renderRichText(stem, q.question);
      const images = el('div', 'question-images cluster-review-images');
      renderImages(images, q.images);
      const answer = el('div', 'cluster-review-answer');
      const correct = (q.options || []).filter((option) => (q.correctKeys || []).includes(option.key));
      const answerText = correct.map((option) => option.key + '. ' + option.text).join(' · ') || (q.correctKeys || []).join(', ');
      renderRichText(answer, 'Đáp án: ' + answerText);
      item.append(heading, stem);
      if (!images.hidden) item.appendChild(images);
      item.appendChild(answer);
      if (q.explanation) item.appendChild(el('p', 'cluster-review-explanation', q.explanation));
      list.appendChild(item);
    });

    const nextButton = byId('practice-review-next-btn');
    if (nextButton) nextButton.textContent = clusterIndex < totalClusters() - 1 ? 'Sang cụm ' + (clusterIndex + 2) : 'Hoàn tất toàn bộ';
  }

  function showClusterReview() {
    const dialog = SWTApp.utils.byId('practice-cluster-review-dialog');
    if (!dialog || dialog.open || !clusterIsComplete()) return;
    renderClusterReview();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
  }

  function repeatCurrentCluster() {
    const items = clusterQuestions.length > 0 ? clusterQuestions : deck;
    SWTApp.storage.resetPracticeRecall(items.map((q) => q.id));
    items.forEach((q) => { recallStreaks[String(q.id)] = 0; });
    SWTApp.utils.byId('practice-cluster-review-dialog')?.close();
    buildPracticeDeck(null, false);
  }

  function advanceCluster() {
    const dialog = SWTApp.utils.byId('practice-cluster-review-dialog');
    dialog?.close();
    if (clusterIndex >= totalClusters() - 1) return;
    setClusterIndex(clusterIndex + 1);
    index = 0;
    buildPracticeDeck(null, false);
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
      const practiceState = SWTApp.storage.getPracticeState();
      recallStreaks = practiceState.recallStreaks;
      clusterIndex = practiceState.clusterIndex;
      [
        ['practice-shuffle-questions', 'shuffleQuestions', handleShuffleQuestionsToggle],
        ['practice-shuffle-options', 'shuffleOptions', () => { optionCache.clear(); renderPractice(); }],
        ['practice-instant-next', 'instantNext', null],
        ['fc-only-unmastered', 'fcOnlyUnmastered', buildFlashcardDeck]
      ].forEach(([id, key, fn]) => {
        const node = byId(id);
        if (!node) return;
        node.checked = Boolean(prefs[key]);
        node.addEventListener('change', () => { SWTApp.storage.setPref(key, node.checked); if (fn) fn(); });
      });

      byId('practice-filter-mode')?.addEventListener('change', (e) => { customSubsetIds = null; clusterIndex = 0; SWTApp.storage.setPracticeClusterIndex(0); SWTApp.storage.setPref('practiceFilterMode', e.target.value); buildPracticeDeck(null, true); });
      byId('practice-filter-topic')?.addEventListener('change', (e) => { customSubsetIds = null; clusterIndex = 0; SWTApp.storage.setPracticeClusterIndex(0); SWTApp.storage.setPref('practiceFilterTopic', e.target.value); buildPracticeDeck(null, true); });
      byId('practice-submit-multi-btn')?.addEventListener('click', gradeCurrent);
      byId('practice-prev-btn')?.addEventListener('click', () => goPractice(-1));
      byId('practice-next-btn')?.addEventListener('click', () => goPractice(1));
      byId('practice-reveal-btn')?.addEventListener('click', revealCurrent);
      byId('practice-flip-options-btn')?.addEventListener('click', flipPracticeCard);
      byId('practice-star-btn')?.addEventListener('click', () => this.toggleStar());
      document.querySelectorAll('[data-practice-answer-key]').forEach((button) => {
        button.addEventListener('click', () => selectOption(button.dataset.practiceAnswerKey));
      });
      byId('practice-review-repeat-btn')?.addEventListener('click', repeatCurrentCluster);
      byId('practice-review-next-btn')?.addEventListener('click', advanceCluster);
      byId('practice-open-cluster-picker-btn')?.addEventListener('click', openClusterPicker);
      byId('practice-cluster-status-filter')?.addEventListener('change', renderClusterPickerList);
      byId('practice-cluster-picker-list')?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-cluster-index]');
        if (button) renderClusterPickerDetail(Number(button.dataset.clusterIndex));
      });
      byId('practice-cluster-back-btn')?.addEventListener('click', renderClusterPickerList);
      byId('practice-cluster-question-list')?.addEventListener('click', (event) => {
        const button = event.target.closest('[data-cluster-question-id]');
        if (!button) return;
        byId('practice-cluster-picker-dialog')?.close();
        buildPracticeDeck(Number(button.dataset.clusterQuestionId), false);
        scrollQuestionIntoView();
      });
      byId('practice-cluster-use-btn')?.addEventListener('click', () => usePickerCluster(false));
      byId('practice-cluster-restart-btn')?.addEventListener('click', () => usePickerCluster(true));
      byId('practice-cluster-exam-btn')?.addEventListener('click', examPickerCluster);
      initMobileControls();
      const jumpEl = byId('practice-jump-input');
      const applyJump = () => {
        const n = parseInt(jumpEl?.value || '', 10);
        if (!Number.isNaN(n) && clusterQuestions.length > 0) {
          const targetQ = clusterQuestions[Math.min(clusterQuestions.length - 1, Math.max(0, n - 1))];
          const targetIdx = targetQ ? deck.findIndex((q) => q.id === targetQ.id) : -1;
          if (targetIdx >= 0) { index = targetIdx; resetTurn(); renderPractice(); }
        }
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
      buildPracticeDeck(null, true);
      buildFlashcardDeck();
    },
    refreshAll() {
      optionCache.clear();
      const practiceState = SWTApp.storage.getPracticeState();
      recallStreaks = practiceState.recallStreaks;
      clusterIndex = practiceState.clusterIndex;
      buildPracticeDeck(null, true);
      buildFlashcardDeck();
    },
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
      clusterIndex = 0;
      SWTApp.storage.setPracticeClusterIndex(0);
      index = 0;
      buildPracticeDeck(null, true);
    },
    openQuestion(id) {
      customSubsetIds = null;
      const { byId } = SWTApp.utils;
      if (!filteredQuestions.some((q) => q.id === id)) {
        if (byId('practice-filter-mode')) byId('practice-filter-mode').value = 'all';
        if (byId('practice-filter-topic')) byId('practice-filter-topic').value = 'all';
        rebuildFilteredQuestions();
      }
      buildPracticeDeck(id, false);
    },
    selectByNumber(num) {
      const key = ['A', 'B', 'C', 'D', 'E', 'F'][num - 1];
      const o = deck[index] && (deck[index].options || []).find((option) => String(option.key).toUpperCase() === key);
      if (o) { selectOption(o.key); return true; }
      return false;
    },
    selectByLetter(ch) { const o = deck[index] && getDisplayedOptions(deck[index]).find((x) => x.key.toUpperCase() === ch); if (o) { selectOption(o.key); return true; } return false; },
    submitOrNext() {
      if (!deck[index]) return false;
      if (!graded && deck[index].isMulti && selectedKeys.size > 0) { gradeCurrent(); return true; }
      if (!graded) return flipPracticeCard();
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
