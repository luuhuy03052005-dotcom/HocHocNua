(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let lessons = [];
  let extra = null;
  let recallData = null;
  let studyMeta = {};
  let query = '';
  let recallQuery = '';
  let recallLesson = 'all';
  let distinctionsData = [];
  let distinctionsQuery = '';
  let distinctionsCategory = 'all';
  let distinctionsKind = 'all';
  let expandAllOptions = false;
  let swtChapters = [];
  let swtChapterFilter = 'all';
  let swtConceptsQuery = '';
  let swtRoteSheet = null;
  let swtRoteMode = 'anskw';
  let swtRoteQuery = '';
  let swtRoteChapter = 'all';
  let activeCourseCode = '';
  let listenersBound = false;

  function normalize(value) {
    return SWTApp.utils.normalizeText(value).replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function lessonMatches(lesson) {
    if (!query) return true;
    const supplement = extra?.lessonSupplements?.[String(lesson.number)] || {};
    const recallGroup = recallData?.groups?.find((group) => group.lesson === lesson.number);
    return normalize([
      lesson.number,
      lesson.title,
      lesson.summary,
      ...(lesson.points || []).flatMap((point) =>
        typeof point === 'string' ? [point] : [point.term, point.text]
      ),
      lesson.remember,
      ...(supplement.terms || []).flat(),
      ...(supplement.tips || []),
      ...(supplement.traps || []),
      ...(recallGroup?.rules || []).flatMap((rule) => [
        ...(rule.see || []), rule.ask, rule.remember, rule.choose, rule.avoid
      ])
    ].join(' ')).includes(query);
  }

  function createRecallRow(label, text, kind) {
    const { el } = SWTApp.utils;
    const row = el('div', 'study-recall-row study-recall-row-' + kind);
    row.append(el('strong', '', label), el('span', '', text || ''));
    return row;
  }

  function recallRuleMatches(group, rule) {
    if (recallLesson !== 'all' && String(group.lesson) !== recallLesson) return false;
    if (!recallQuery) return true;
    return normalize([
      group.lesson, group.title, ...(rule.see || []), rule.ask,
      rule.remember, rule.choose, rule.avoid
    ].join(' ')).includes(recallQuery);
  }

  function renderRecall() {
    const { byId, el, setText } = SWTApp.utils;
    const list = byId('study-recall-list');
    if (!list || !recallData) return;
    list.replaceChildren();
    let visibleRules = 0;

    (recallData.groups || []).forEach((group) => {
      const rules = (group.rules || []).filter((rule) => recallRuleMatches(group, rule));
      if (!rules.length) return;
      visibleRules += rules.length;

      const details = el('details', 'study-recall-group');
      if (recallQuery || recallLesson !== 'all' || list.childElementCount === 0) details.open = true;
      const summary = el('summary', 'study-recall-summary');
      summary.append(
        el('span', 'study-lesson-number', 'Lesson ' + group.lesson),
        el('strong', '', group.title),
        el('span', 'badge', rules.length + ' quy tắc')
      );

      const grid = el('div', 'study-recall-grid');
      rules.forEach((rule) => {
        const card = el('article', 'study-recall-card');
        const trigger = el('div', 'study-recall-trigger');
        trigger.appendChild(el('strong', '', 'Khi thấy'));
        const chips = el('div', 'study-recall-chips');
        (rule.see || []).forEach((keyword) => chips.appendChild(el('mark', '', keyword)));
        trigger.appendChild(chips);
        card.append(
          trigger,
          createRecallRow('Câu đang hỏi', rule.ask, 'ask'),
          createRecallRow('Nhớ ngay', rule.remember, 'remember'),
          createRecallRow('Chọn đáp án có', rule.choose, 'choose'),
          createRecallRow('Đừng nhầm', rule.avoid, 'avoid')
        );
        grid.appendChild(card);
      });
      details.append(summary, grid);
      list.appendChild(details);
    });

    setText('study-recall-count', visibleRules + ' quy tắc');
    byId('study-recall-empty').hidden = visibleRules !== 0;
  }

  function createTermList(items, className) {
    const { el } = SWTApp.utils;
    const list = el('div', className || 'study-term-list');
    (items || []).forEach((item) => {
      const term = Array.isArray(item) ? item[0] : item.term;
      const meaning = Array.isArray(item) ? item[1] : item.meaning;
      const row = el('div', 'study-term-row');
      row.append(el('strong', '', term), el('span', '', meaning));
      list.appendChild(row);
    });
    return list;
  }

  function createCoachingBlock(title, items, kind) {
    const { el } = SWTApp.utils;
    const section = el('section', 'study-coaching study-coaching-' + kind);
    section.appendChild(el('h4', '', title));
    const list = el('ul', 'study-coaching-list');
    (items || []).forEach((item) => list.appendChild(el('li', '', item)));
    section.appendChild(list);
    return section;
  }

  function createLessonCard(lesson, index) {
    const { el } = SWTApp.utils;
    const details = el('details', 'study-lesson');
    details.id = 'lesson-' + lesson.number;
    if (index === 0 || query) details.open = true;

    const summary = el('summary', 'study-lesson-summary');
    const number = el('span', 'study-lesson-number', 'Lesson ' + lesson.number);
    const heading = el('span', 'study-lesson-heading');
    heading.append(el('strong', '', lesson.title), el('span', '', lesson.summary));
    const pages = el('span', 'badge', lesson.badge || ('Trang ' + lesson.pages));
    summary.append(number, heading, pages);

    const body = el('div', 'study-lesson-body');
    const list = el('ul', 'study-point-list');
    (lesson.points || []).forEach((point) => {
      const item = el('li');
      if (typeof point === 'string') {
        item.textContent = point;
      } else {
        item.className = 'study-concept-point';
        item.append(
          el('mark', 'study-concept-mark', point.term || ''),
          el('span', '', point.text || '')
        );
      }
      list.appendChild(item);
    });
    const remember = el('div', 'study-remember');
    remember.append(el('span', 'study-remember-label', studyMeta.summaryLabel || 'Cần nhớ'), el('p', '', lesson.remember || ''));
    body.append(list, remember);

    const supplement = extra?.lessonSupplements?.[String(lesson.number)];
    if (supplement) {
      const supplementWrap = el('div', 'study-lesson-supplement');
      supplementWrap.appendChild(el('h3', '', 'Bám sát câu hỏi trắc nghiệm'));
      if (supplement.terms?.length) {
        supplementWrap.append(el('h4', 'study-subheading', 'Thuật ngữ Anh–Việt và dấu hiệu nhận diện'), createTermList(supplement.terms));
      }
      const coachingGrid = el('div', 'study-coaching-grid');
      if (supplement.tips?.length) coachingGrid.appendChild(createCoachingBlock('Mẹo chọn đáp án', supplement.tips, 'tip'));
      if (supplement.traps?.length) coachingGrid.appendChild(createCoachingBlock('Bẫy thường gặp', supplement.traps, 'trap'));
      if (coachingGrid.childElementCount) supplementWrap.appendChild(coachingGrid);
      body.appendChild(supplementWrap);
    }
    details.append(summary, body);
    return details;
  }

  function renderExtra() {
    const { byId, el } = SWTApp.utils;
    if (!extra) return;

    const path = byId('study-path-list');
    path?.replaceChildren(...(extra.studyPath || []).map((item) => el('li', '', item)));

    const tips = byId('study-exam-tip-list');
    if (tips) {
      tips.replaceChildren();
      (extra.examTips || []).forEach((tip, index) => {
        const card = el('article', 'study-exam-tip');
        card.append(el('span', 'study-tip-number', String(index + 1)), el('h3', '', tip.title), el('p', '', tip.text));
        tips.appendChild(card);
      });
    }

    const facts = byId('study-number-facts');
    if (facts) {
      facts.replaceChildren();
      (extra.numberFacts || []).forEach((fact) => {
        const item = el('div', 'study-number-fact');
        item.append(el('span', '', fact.label), el('strong', '', fact.value));
        const detail = recallData?.numberDetails?.[fact.label];
        if (detail) item.appendChild(el('small', '', detail));
        facts.appendChild(item);
      });
    }

    const foundations = byId('study-foundation-list');
    if (foundations) {
      foundations.replaceChildren();
      (extra.foundationModules || []).forEach((module, index) => {
        const details = el('details', 'study-foundation-item');
        if (index === 0) details.open = true;
        const summary = el('summary', 'study-foundation-summary');
        summary.append(el('span', 'study-foundation-number', String(index + 1)), el('span', 'study-foundation-title', module.title), el('span', 'study-foundation-short', module.summary));
        const body = el('div', 'study-foundation-body');
        body.appendChild(createTermList(module.terms));
        body.appendChild(createCoachingBlock('Mẹo ghi nhớ và nhận diện', module.tips, 'tip'));
        details.append(summary, body);
        foundations.appendChild(details);
      });
    }

    const sources = byId('study-source-list');
    if (sources) {
      sources.replaceChildren();
      (extra.sources || []).forEach((source) => {
        const link = el('a', 'study-source-link', source.title);
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        sources.appendChild(link);
      });
    }

    const recallSelect = byId('study-recall-lesson');
    if (recallSelect && recallSelect.options.length <= 1) {
      (recallData?.groups || []).forEach((group) => {
        const option = document.createElement('option');
        option.value = String(group.lesson);
        option.textContent = 'Lesson ' + group.lesson + ' — ' + group.title;
        recallSelect.appendChild(option);
      });
    }
    renderRecall();
  }

  function getDistinctionKind(group) {
    if (group.kind === 'same-options' || group.kind === 'similar-questions') return group.kind;
    return /đáp án|lựa chọn/i.test(group.badge || '') ? 'same-options' : 'similar-questions';
  }

  function distinctionMatches(group) {
    if (distinctionsKind !== 'all' && getDistinctionKind(group) !== distinctionsKind) return false;
    if (distinctionsCategory !== 'all' && group.category !== distinctionsCategory) return false;
    if (!distinctionsQuery) return true;
    const blob = [
      group.title,
      group.category,
      group.badge,
      group.rule,
      ...(group.items || []).flatMap((item) => [
        item.id, item.topic, item.tag, item.stemHtml, item.correctText, item.correctTextHtml
      ])
    ].join(' ');
    return normalize(blob).includes(distinctionsQuery);
  }

  function updateDistinctionFilterUI() {
    const { byId, setText } = SWTApp.utils;
    const total = distinctionsData.length;
    const sameCount = distinctionsData.filter((g) => getDistinctionKind(g) === 'same-options').length;
    const simCount = distinctionsData.filter((g) => getDistinctionKind(g) === 'similar-questions').length;

    setText('dist-kind-all', `Tất cả (${total})`);
    setText('dist-kind-same', `🎯 Các đáp án giống nhau (${sameCount})`);
    setText('dist-kind-similar', `🔍 Câu hỏi gần giống nhau (${simCount})`);

    setText('study-jump-same-options', `🎯 Các đáp án giống nhau (${sameCount})`);
    setText('study-jump-similar-questions', `🔍 Câu hỏi gần giống nhau (${simCount})`);
    setText('study-jump-all-distinctions', `📚 Tất cả câu dễ nhầm (${total})`);

    document.querySelectorAll('[data-dist-kind]').forEach((btn) => {
      const active = btn.getAttribute('data-dist-kind') === distinctionsKind;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    const expandBtn = byId('study-distinctions-expand-opts');
    if (expandBtn) {
      expandBtn.textContent = expandAllOptions
        ? 'Thu gọn bộ đáp án A/B/C/D'
        : 'Hiện tất cả bộ đáp án A/B/C/D';
    }
  }

  function renderDistinctions() {
    const { byId, el, setText } = SWTApp.utils;
    const section = byId('study-distinctions');
    const list = byId('study-distinctions-list');
    const empty = byId('study-distinctions-empty');
    if (!section || !list) return;

    if (!distinctionsData || !distinctionsData.length) {
      section.hidden = true;
      return;
    }
    section.hidden = false;
    updateDistinctionFilterUI();

    const qMap = new Map();
    const courseQuestions = SWTApp.app?.getQuestions?.() || [];
    courseQuestions.forEach((q) => qMap.set(q.id, q));

    // Populate category dropdown
    const catSelect = byId('study-distinctions-category');
    if (catSelect && catSelect.options.length <= 1) {
      const categories = Array.from(new Set(distinctionsData.map((d) => d.category)));
      categories.forEach((cat) => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        catSelect.appendChild(opt);
      });
    }

    const filtered = distinctionsData.filter(distinctionMatches);
    list.replaceChildren();

    filtered.forEach((group, index) => {
      const kind = getDistinctionKind(group);
      const card = el('article', 'distinction-card card');
      card.id = 'distinction-' + group.id;

      const header = el('div', 'distinction-header');
      const badgeWrap = el('div', 'distinction-badges');
      const kindLabel = kind === 'same-options' ? '🎯 Đáp án giống nhau' : '🔍 Câu hỏi gần giống nhau';
      badgeWrap.append(
        el('span', kind === 'same-options' ? 'badge badge-success' : 'badge badge-warning', kindLabel),
        el('span', 'badge badge-warning', group.badge || 'Phân biệt'),
        el('span', 'badge badge-accent', group.category),
        el('span', 'badge', (group.items?.length || 0) + ' câu')
      );
      header.append(badgeWrap, el('h3', 'distinction-title', (index + 1) + '. ' + group.title));
      const groupIds = Array.from(new Set((group.items || []).map((it) => Number(it.id)).filter(Boolean)));
      if (groupIds.length > 0) {
        const groupActions = el('div', 'distinction-group-actions');
        const drillBtn = el('button', 'btn btn-primary btn-sm', `▶ Luyện nhóm này (${groupIds.length} câu)`);
        drillBtn.type = 'button';
        drillBtn.addEventListener('click', () => {
          SWTApp.app?.selectTab('tab-practice');
          SWTApp.practice?.startCustomSet(groupIds, group.title);
        });
        const examGroupBtn = el('button', 'btn btn-secondary btn-sm', '📝 Thi thử nhóm này');
        examGroupBtn.type = 'button';
        examGroupBtn.addEventListener('click', () => {
          if (SWTApp.exam?.startWithQuestions(groupIds)) {
            SWTApp.app?.selectTab('tab-exam');
          }
        });
        groupActions.append(drillBtn, examGroupBtn);
        header.appendChild(groupActions);
      }
      card.appendChild(header);

      const ruleBox = el('div', 'distinction-rule');
      ruleBox.innerHTML = group.rule;
      card.appendChild(ruleBox);

      const grid = el('div', 'distinction-grid');
      (group.items || []).forEach((item) => {
        const itemEl = el('div', 'distinction-item');

        const itemHead = el('div', 'distinction-item-head');
        const qBadge = el('span', 'badge badge-contrast', 'Câu #' + item.id);
        const tagBadge = el('span', 'distinction-tag-badge', item.tag || item.topic);
        itemHead.append(qBadge, tagBadge);

        const stemBox = el('div', 'distinction-stem rich-text-prose');
        stemBox.innerHTML = item.stemHtml;

        const fullQ = qMap.get(item.id);
        let optsDetails = null;
        if (fullQ && Array.isArray(fullQ.options) && fullQ.options.length > 0) {
          optsDetails = el('details', 'distinction-opts-details');
          if (expandAllOptions) optsDetails.open = true;
          const optsSummary = el('summary', 'distinction-opts-summary', `Xem đủ ${fullQ.options.length} lựa chọn (${fullQ.options.map((o) => o.key).join('/')})`);
          const optsList = el('ul', 'distinction-opts-list');
          fullQ.options.forEach((opt) => {
            const isCorrect = (fullQ.correctKeys || item.correctKeys || []).includes(opt.key);
            const li = el('li', 'distinction-opt-row' + (isCorrect ? ' is-correct' : ''));
            li.append(
              el('strong', 'distinction-opt-key', opt.key + '.'),
              el('span', 'distinction-opt-text', opt.text)
            );
            optsList.appendChild(li);
          });
          optsDetails.append(optsSummary, optsList);
        }

        const ansBox = el('div', 'distinction-ans');
        const ansBadge = el('span', 'badge badge-success', 'Đáp án: ' + (item.correctKeys || []).join(', '));
        const ansText = el('div', 'distinction-ans-text');
        ansText.innerHTML = item.correctTextHtml;
        ansBox.append(ansBadge, ansText);

        const practiceBtn = el('button', 'btn btn-secondary btn-sm distinction-practice-btn', 'Luyện câu #' + item.id);
        practiceBtn.type = 'button';
        practiceBtn.addEventListener('click', () => {
          SWTApp.app?.selectTab('tab-practice');
          SWTApp.practice?.openQuestion(item.id);
        });

        if (optsDetails) {
          itemEl.append(itemHead, stemBox, optsDetails, ansBox, practiceBtn);
        } else {
          itemEl.append(itemHead, stemBox, ansBox, practiceBtn);
        }
        grid.appendChild(itemEl);
      });
      card.appendChild(grid);
      list.appendChild(card);
    });

    setText('study-distinctions-count', filtered.length + ' / ' + distinctionsData.length + ' chuyên đề');
    if (empty) empty.hidden = filtered.length !== 0;
  }

  function render() {
    const { byId, el, setText } = SWTApp.utils;
    const container = byId('study-lesson-list');
    const nav = byId('study-lesson-nav');
    if (!container || !nav) return;
    const filtered = lessons.filter(lessonMatches);
    container.replaceChildren();
    nav.replaceChildren();

    filtered.forEach((lesson, index) => {
      container.appendChild(createLessonCard(lesson, index));
      const link = el('a', 'study-nav-link', String(lesson.number));
      link.href = '#lesson-' + lesson.number;
      link.title = 'Lesson ' + lesson.number + ': ' + lesson.title;
      link.setAttribute('aria-label', link.title);
      nav.appendChild(link);
    });
    setText('study-result-count', filtered.length + ' / ' + lessons.length + ' Lesson');
    byId('study-empty').hidden = filtered.length !== 0;
  }

  function setAll(open) {
    document.querySelectorAll('#study-lesson-list details').forEach((item) => { item.open = open; });
  }

  function swtChapterMatches(ch) {
    if (swtChapterFilter !== 'all' && String(ch.number) !== swtChapterFilter) return false;
    if (!swtConceptsQuery) return true;
    const blob = [
      ch.number,
      ch.title,
      ch.flow,
      ...(ch.concepts || []).flatMap((c) => [c.term, c.what, ...(c.bullets || []), ...(c.qIds || [])]),
      ...(ch.questionPatterns || []).flatMap((p) => [p.type, p.cue, ...(p.qIds || [])])
    ].join(' ');
    return normalize(blob).includes(swtConceptsQuery);
  }

  function createQButtons(qIds) {
    const { el } = SWTApp.utils;
    const wrap = el('div', 'shortcut-q-links');
    (qIds || []).slice(0, 10).forEach((qid) => {
      const btn = el('button', 'shortcut-q-btn', '#' + qid);
      btn.type = 'button';
      btn.setAttribute('data-open-q', String(qid));
      btn.title = 'Mở câu #' + qid + ' trong Luyện nhanh';
      wrap.appendChild(btn);
    });
    return wrap;
  }

  function renderSwtConcepts() {
    const { byId, el } = SWTApp.utils;
    const section = byId('study-concepts-swt301');
    const pillsWrap = byId('swt-chapter-pills');
    const listWrap = byId('swt-concepts-list');
    const emptyEl = byId('swt-concepts-empty');
    if (!section || !listWrap || !pillsWrap) return;

    if (!swtChapters || !swtChapters.length) {
      section.hidden = true;
      return;
    }
    section.hidden = false;

    pillsWrap.replaceChildren();
    const allBtn = el('button', 'distinction-kind-btn' + (swtChapterFilter === 'all' ? ' is-active' : ''), 'Tất cả 6 chương');
    allBtn.type = 'button';
    allBtn.dataset.swtChapter = 'all';
    pillsWrap.appendChild(allBtn);

    swtChapters.forEach((ch) => {
      const pBtn = el(
        'button',
        'distinction-kind-btn' + (swtChapterFilter === String(ch.number) ? ' is-active' : ''),
        `Chương ${ch.number} (${ch.badge})`
      );
      pBtn.type = 'button';
      pBtn.dataset.swtChapter = String(ch.number);
      pillsWrap.appendChild(pBtn);
    });

    const filtered = swtChapters.filter(swtChapterMatches);
    listWrap.replaceChildren();

    filtered.forEach((ch, idx) => {
      const details = el('details', 'swt-chapter-card');
      details.id = 'swt-chapter-' + ch.number;
      if (idx === 0 || swtChapterFilter !== 'all' || swtConceptsQuery) details.open = true;

      const summary = el('summary', 'swt-chapter-summary');
      summary.append(
        el('span', 'study-lesson-number', 'Chương ' + ch.number),
        el('strong', 'swt-chapter-title', ch.title),
        el('span', 'badge badge-accent', ch.badge)
      );

      const body = el('div', 'swt-chapter-body');
      if (ch.flow) {
        const flowBox = el('div', 'swt-chapter-flow');
        flowBox.append(el('strong', '', '🧭 Sơ đồ cốt lõi: '), el('span', '', ch.flow));
        body.appendChild(flowBox);
      }

      if (ch.concepts?.length) {
        body.appendChild(el('h4', 'swt-subhead', '1. Giải thích bình dân dễ hiểu (Đọc 5 giây nắm ngay bản chất)'));
        const cGrid = el('div', 'swt-concept-grid');
        ch.concepts.forEach((c) => {
          const card = el('article', 'swt-concept-card');
          card.appendChild(el('h5', 'swt-concept-title', c.term));
          const whatLine = el('p', 'swt-concept-what');
          whatLine.append(el('strong', '', 'Hiểu nhanh: '), el('span', '', c.what));
          card.appendChild(whatLine);
          if (c.bullets?.length) {
            const ul = el('ul', 'swt-concept-bullets');
            c.bullets.forEach((b) => ul.appendChild(el('li', '', b)));
            card.appendChild(ul);
          }
          if (c.qIds?.length) card.appendChild(createQButtons(c.qIds));
          cGrid.appendChild(card);
        });
        body.appendChild(cGrid);
      }

      if (ch.questionPatterns?.length) {
        body.appendChild(el('h4', 'swt-subhead', '2. Mẹo bắt bài & Bẫy hay gặp trong chương'));
        const pGrid = el('div', 'swt-pattern-grid');
        ch.questionPatterns.forEach((p) => {
          const pCard = el('article', 'swt-pattern-card');
          pCard.appendChild(el('div', 'swt-pattern-type', '🎯 ' + p.type));
          pCard.appendChild(el('p', 'swt-pattern-cue', p.cue));
          if (p.qIds?.length) pCard.appendChild(createQButtons(p.qIds));
          pGrid.appendChild(pCard);
        });
        body.appendChild(pGrid);
      }

      details.append(summary, body);
      listWrap.appendChild(details);
    });

    if (emptyEl) emptyEl.hidden = filtered.length !== 0;
  }

  function renderSwtRote() {
    const { byId, el, setText } = SWTApp.utils;
    const section = byId('study-rote-swt301');
    const listWrap = byId('swt-rote-list');
    const emptyEl = byId('swt-rote-empty');
    const chapterSel = byId('swt-rote-chapter');
    if (!section || !listWrap) return;

    if (!swtRoteSheet || !Array.isArray(swtRoteSheet.rows)) {
      section.hidden = true;
      return;
    }
    section.hidden = false;

    document.querySelectorAll('#swt-rote-tabs [data-rote-mode]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-rote-mode') === swtRoteMode);
    });

    if (chapterSel) chapterSel.disabled = (swtRoteMode === 'traps' || swtRoteMode === 'sets' || swtRoteMode === 'anskw');

    listWrap.replaceChildren();

    if (swtRoteMode === 'anskw') {
      const groups = (swtRoteSheet.answerKeywords || []).map((g) => ({
        group: g.group,
        items: (g.items || []).filter((it) => {
          if (!swtRoteQuery) return true;
          return normalize([it.answer, ...(it.keywords || []), ...(it.qIds || [])].join(' ')).includes(swtRoteQuery);
        })
      })).filter((g) => g.items.length > 0);

      const totalItems = groups.reduce((acc, g) => acc + g.items.length, 0);
      setText('swt-rote-count', totalItems + ' mục');
      if (emptyEl) emptyEl.hidden = totalItems > 0;
      if (!totalItems) return;

      const stack = el('div', 'anskw-groups-stack');
      groups.forEach((g) => {
        const block = el('section', 'anskw-group-card');
        block.appendChild(el('h3', 'anskw-group-title', g.group));
        const wrap = el('div', 'table-wrapper');
        const table = el('table', 'data-table shortcut-table rote-table anskw-table');
        const thead = el('thead');
        const hr = el('tr');
        [
          ['Đáp án / Thuật ngữ', '28%'],
          ['Keyword có trong đề bài (Đọc thấy là khoanh!)', '54%'],
          ['Câu luyện', '18%']
        ].forEach(([lbl, w]) => {
          const th = el('th', '', lbl);
          th.style.inlineSize = w;
          hr.appendChild(th);
        });
        thead.appendChild(hr);

        const tbody = el('tbody');
        g.items.forEach((it) => {
          const tr = el('tr');
          const tdAns = el('td');
          tdAns.appendChild(el('mark', 'rote-chip rote-chip-pick', '✅ ' + it.answer));

          const tdKws = el('td');
          const kwWrap = el('div', 'anskw-chips-wrap');
          (it.keywords || []).forEach((kw) => {
            kwWrap.appendChild(el('span', 'rote-chip rote-chip-cue', kw));
          });
          tdKws.appendChild(kwWrap);

          const tdQs = el('td');
          const qAct = el('div', 'anskw-q-actions');
          if ((it.qIds || []).length >= 2) {
            const drillBtn = el('button', 'btn btn-secondary btn-sm anskw-drill-btn', '▶ Luyện (' + it.qIds.length + ')');
            drillBtn.type = 'button';
            drillBtn.addEventListener('click', () => {
              SWTApp.app?.selectTab('tab-practice');
              SWTApp.practice?.startCustomSet(it.qIds, it.answer);
            });
            qAct.appendChild(drillBtn);
          }
          qAct.appendChild(createQButtons(it.qIds));
          tdQs.appendChild(qAct);

          tr.append(tdAns, tdKws, tdQs);
          tbody.appendChild(tr);
        });
        table.append(thead, tbody);
        wrap.appendChild(table);
        block.appendChild(wrap);
        stack.appendChild(block);
      });
      listWrap.appendChild(stack);
      return;
    }

    if (swtRoteMode === 'sets' && !swtRoteQuery) {
      const sets = swtRoteSheet.optionSets || [];
      setText('swt-rote-count', sets.length + ' bộ đáp án');
      if (emptyEl) emptyEl.hidden = sets.length > 0;
      const grid = el('div', 'rote-sets-grid');
      sets.forEach((s) => {
        const card = el('article', 'rote-set-card');
        const head = el('div', 'rote-set-head');
        const setIds = Array.from(new Set((s.rules || []).flatMap((r) => r.qIds || []).map(Number).filter(Boolean)));
        const titleRow = el('div', 'rote-set-title-row');
        titleRow.appendChild(el('h3', 'rote-set-title', s.title));
        if (setIds.length > 0) {
          const setActions = el('div', 'rote-set-actions');
          const drillSetBtn = el('button', 'btn btn-primary btn-sm', `▶ Luyện bộ này (${setIds.length} câu)`);
          drillSetBtn.type = 'button';
          drillSetBtn.addEventListener('click', () => {
            SWTApp.app?.selectTab('tab-practice');
            SWTApp.practice?.startCustomSet(setIds, s.title);
          });
          const examSetBtn = el('button', 'btn btn-ghost btn-sm', '📝 Thi thử');
          examSetBtn.type = 'button';
          examSetBtn.addEventListener('click', () => {
            if (SWTApp.exam?.startWithQuestions(setIds)) {
              SWTApp.app?.selectTab('tab-exam');
            }
          });
          setActions.append(drillSetBtn, examSetBtn);
          titleRow.appendChild(setActions);
        }
        head.appendChild(titleRow);
        head.appendChild(el('div', 'rote-set-preview', 'Bộ đáp án: ' + s.optionsPreview));
        if (s.eliminate) {
          const elim = el('div', 'rote-set-elim');
          elim.append(
            el('span', 'rote-chip rote-chip-avoid', '❌ Gạch ngay: ' + s.eliminate)
          );
          head.appendChild(elim);
        }
        card.appendChild(head);

        const rulesWrap = el('div', 'rote-set-rules');
        (s.rules || []).forEach((r) => {
          const row = el('div', 'rote-set-rule-row');
          const left = el('div', 'rote-set-rule-main');
          const cueChip = el('span', 'rote-chip rote-chip-cue');
          cueChip.append(el('span', 'rote-chip-prefix', 'Đề có: '), el('strong', '', r.cue));
          const pickChip = el('mark', 'rote-chip rote-chip-pick', '✅ ' + r.pick);
          left.append(cueChip, el('span', 'rote-arrow', '→'), pickChip);
          row.append(left, createQButtons(r.qIds));
          rulesWrap.appendChild(row);
        });
        card.appendChild(rulesWrap);
        grid.appendChild(card);
      });
      listWrap.appendChild(grid);
      return;
    }

    if (swtRoteMode === 'traps') {
      const traps = (swtRoteSheet.zeroTraps || []).filter((t) => {
        if (!swtRoteQuery) return true;
        return normalize([t.bad, t.note, ...(t.qIds || [])].join(' ')).includes(swtRoteQuery);
      });
      setText('swt-rote-count', traps.length + ' bẫy');
      if (emptyEl) emptyEl.hidden = traps.length > 0;
      if (!traps.length) return;

      const wrap = el('div', 'table-wrapper');
      const table = el('table', 'data-table shortcut-table rote-table');
      const thead = el('thead');
      const hr = el('tr');
      [
        ['Cấm chọn đáp án này', '38%'],
        ['Lưu ý ngắn', '42%'],
        ['Xem câu', '20%']
      ].forEach(([lbl, w]) => {
        const th = el('th', '', lbl);
        th.style.inlineSize = w;
        hr.appendChild(th);
      });
      thead.appendChild(hr);

      const tbody = el('tbody');
      traps.forEach((t) => {
        const tr = el('tr');
        const tdBad = el('td');
        tdBad.appendChild(el('span', 'rote-chip rote-chip-avoid', '❌ ' + t.bad));
        const tdNote = el('td', '', t.note);
        const tdQs = el('td');
        tdQs.appendChild(createQButtons(t.qIds));
        tr.append(tdBad, tdNote, tdQs);
        tbody.appendChild(tr);
      });
      table.append(thead, tbody);
      wrap.appendChild(table);
      listWrap.appendChild(wrap);
      return;
    }

    const filtered = (swtRoteSheet.rows || []).filter((r) => {
      if (swtRoteChapter !== 'all' && String(r.chapter) !== swtRoteChapter) return false;
      if (swtRoteQuery) {
        return normalize([r.cue || '', r.pick, r.avoid || '', ...(r.qIds || [])].join(' ')).includes(swtRoteQuery);
      }
      if (swtRoteMode === 'all') return true;
      return r.mode === swtRoteMode;
    });

    setText('swt-rote-count', filtered.length + ' dòng');
    if (emptyEl) emptyEl.hidden = filtered.length > 0;
    if (!filtered.length) return;

    const wrap = el('div', 'table-wrapper');
    const table = el('table', 'data-table shortcut-table rote-table');
    const thead = el('thead');
    const hr = el('tr');
    [
      ['Điều kiện / Nhìn đề', '26%'],
      ['Chọn ngay', '34%'],
      ['Không chọn', '26%'],
      ['Mở câu', '14%']
    ].forEach(([lbl, w]) => {
      const th = el('th', '', lbl);
      th.style.inlineSize = w;
      hr.appendChild(th);
    });
    thead.appendChild(hr);

    const tbody = el('tbody');
    filtered.forEach((r) => {
      const tr = el('tr');

      const tdCue = el('td');
      if (r.mode === 'instant') {
        tdCue.appendChild(el('span', 'rote-chip rote-chip-instant', 'Khỏi nhìn đề'));
      } else if (r.mode === 'standalone') {
        tdCue.appendChild(el('span', 'rote-chip rote-chip-standalone', 'Đứng lẻ 1 mình'));
      } else {
        const cueEl = el('span', 'rote-chip rote-chip-cue');
        cueEl.append(el('span', 'rote-chip-prefix', 'Đề có: '), el('strong', '', r.cue || ''));
        tdCue.appendChild(cueEl);
      }

      const tdPick = el('td');
      tdPick.appendChild(el('mark', 'rote-chip rote-chip-pick', '✅ ' + r.pick));

      const tdAvoid = el('td');
      if (r.avoid) {
        tdAvoid.appendChild(el('span', 'rote-chip rote-chip-avoid', '❌ ' + r.avoid));
      }

      const tdQs = el('td');
      tdQs.appendChild(createQButtons(r.qIds));

      tr.append(tdCue, tdPick, tdAvoid, tdQs);
      tbody.appendChild(tr);
    });
    table.append(thead, tbody);
    wrap.appendChild(table);
    listWrap.appendChild(wrap);
  }

  function init(courseCode) {
    const { byId, setText } = SWTApp.utils;
    const data = courseCode === 'SSG105'
      ? window.SSG105_STUDY
      : courseCode === 'PRJ301'
      ? window.PRJ301_STUDY
      : courseCode === 'SWT301'
      ? window.SWT301_STUDY
      : null;
    extra = courseCode === 'SSG105'
      ? window.SSG105_STUDY_EXTRA
      : null;
    recallData = courseCode === 'SSG105'
      ? window.SSG105_RECALL
      : null;
    activeCourseCode = courseCode;
    studyMeta = data?.meta || {};
    lessons = data && Array.isArray(data.lessons) ? data.lessons : [];
    swtChapters = courseCode === 'SWT301' && Array.isArray(data?.chapters) ? data.chapters : [];
    swtChapterFilter = 'all';
    swtConceptsQuery = '';
    swtRoteSheet = courseCode === 'SWT301' && data?.roteSheet ? data.roteSheet : null;
    swtRoteMode = 'anskw';
    swtRoteQuery = '';
    swtRoteChapter = 'all';
    distinctionsData = data && Array.isArray(data.distinctions) ? data.distinctions : [];
    distinctionsQuery = '';
    distinctionsCategory = 'all';
    distinctionsKind = 'all';
    expandAllOptions = false;
    const hasStudy = lessons.length > 0 || courseCode === 'PRJ301' || courseCode === 'SWT301';
    byId('study-content').hidden = !hasStudy;
    byId('study-unavailable').hidden = hasStudy;

    const shortcutsPrj = byId('study-shortcuts-prj301') || byId('study-shortcuts');
    if (shortcutsPrj) shortcutsPrj.hidden = (courseCode !== 'PRJ301');

    const shortcutsSwt = byId('study-shortcuts-swt301');
    if (shortcutsSwt) shortcutsSwt.hidden = (courseCode !== 'SWT301');

    const roteSwt = byId('study-rote-swt301');
    if (roteSwt) roteSwt.hidden = (courseCode !== 'SWT301') || !swtRoteSheet;

    const conceptsSwt = byId('study-concepts-swt301');
    if (conceptsSwt) conceptsSwt.hidden = (courseCode !== 'SWT301') || !swtChapters.length;

    const familiesSwt = byId('study-word-families-swt301');
    if (familiesSwt) familiesSwt.hidden = (courseCode !== 'SWT301');

    const jumpAnsKwBtn = byId('study-jump-anskw');
    if (jumpAnsKwBtn) jumpAnsKwBtn.hidden = (courseCode !== 'SWT301');

    const jumpRoteBtn = byId('study-jump-rote');
    if (jumpRoteBtn) jumpRoteBtn.hidden = (courseCode !== 'SWT301');

    const jumpFamiliesBtn = byId('study-jump-families');
    if (jumpFamiliesBtn) jumpFamiliesBtn.hidden = (courseCode !== 'SWT301');

    const jumpConceptsBtn = byId('study-jump-concepts');
    if (jumpConceptsBtn) {
      jumpConceptsBtn.textContent = courseCode === 'SWT301'
        ? '📘 Khái niệm & Phân tích 6 chương'
        : '📘 Khái niệm cốt lõi (8 bài)';
    }

    const hasDistinctions = Boolean(distinctionsData && distinctionsData.length);
    const distSection = byId('study-distinctions');
    if (distSection) distSection.hidden = !hasDistinctions;
    const quickJump = byId('study-quick-jump');
    if (quickJump) quickJump.hidden = !hasDistinctions;

    if (hasStudy) {
      const knowledgeOnly = Boolean(studyMeta.knowledgeOnly) || courseCode === 'SWT301' || courseCode === 'PRJ301';
      [
        'study-guide-title',
        'study-exam-tips-title',
        'study-recall-title',
        'study-number-title',
        'study-foundation-title',
        'study-sources-title'
      ].forEach((id) => {
        const section = byId(id)?.closest('section');
        if (section) section.hidden = knowledgeOnly;
      });

      const lessonList = byId('study-lesson-list');
      const lessonToolbar = document.querySelector('.study-toolbar');
      const lessonNav = byId('study-lesson-nav');
      if (lessonToolbar) lessonToolbar.hidden = (lessons.length === 0);
      if (lessonNav) lessonNav.hidden = (lessons.length === 0);
      if (lessonList) lessonList.hidden = (lessons.length === 0);

      query = '';
      recallQuery = '';
      recallLesson = 'all';

      if (courseCode === 'SWT301') {
        setText('study-intro-title', 'Bảng Học Vẹt, Khái Niệm Dễ Hiểu & Mẹo Đánh Nhanh SWT301');
        setText('study-intro-description', 'Có gì chọn gì · Không chọn gì · Giải thích bình dân ngắn gọn và phân biệt các câu dễ nhầm.');
        setText('study-total-count', '367');
        const totalUnit = document.querySelector('.study-total-box span');
        if (totalUnit) totalUnit.textContent = 'câu hỏi';
        setText('study-source-label', 'Software Testing — Semester 5');
      } else {
        const questionCount = data?.meta?.questionCount || extra?.meta?.basedOnQuestions || '';
        setText('study-intro-title', data?.meta?.title || 'Kiến thức trọng tâm');
        setText('study-intro-description', data?.meta?.description || 'Khái niệm, dấu hiệu nhận diện và mẹo chọn đáp án.');
        setText('study-total-count', String(lessons.length));
        const totalUnit = document.querySelector('.study-total-box span');
        if (totalUnit) totalUnit.textContent = lessons.length > 0 ? 'Lesson' : 'câu hỏi';
        setText('study-source-label', data?.meta?.source || 'Tài liệu môn học');
        setText('study-guide-title', questionCount ? 'Lộ trình làm chủ bộ ' + questionCount + ' câu' : 'Lộ trình ôn tập');
        setText('study-guide-description', data?.meta?.guideDescription || 'Học khái niệm, nhận diện từ khóa, luyện câu hỏi và ôn lại lỗi sai.');
        setText('study-foundation-title', (extra?.foundationModules?.length || 0) + ' chuyên đề nền tảng cho bộ câu hỏi');
        setText('study-foundation-description', data?.meta?.foundationDescription || 'Các nhóm kiến thức cần liên kết để xử lý câu hỏi tình huống và đoạn mã.');
      }
      const lessonSearch = byId('study-search-input');
      const recallSearch = byId('study-recall-search');
      if (lessonSearch) {
        lessonSearch.value = '';
        lessonSearch.placeholder = data?.meta?.searchPlaceholder || 'Tìm Lesson hoặc thuật ngữ...';
      }
      if (recallSearch) {
        recallSearch.value = '';
        recallSearch.placeholder = data?.meta?.recallPlaceholder || 'Ví dụ: thuật ngữ, tình huống hoặc đáp án...';
      }
      const distSearch = byId('study-distinctions-search');
      if (distSearch) {
        distSearch.value = '';
        distSearch.placeholder = data?.meta?.distinctionsPlaceholder || 'Ví dụ: errorPage, isErrorPage, forward, redirect, doStartTag...';
      }
      const distCategory = byId('study-distinctions-category');
      if (distCategory) {
        distCategory.replaceChildren(new Option('Tất cả chuyên đề', 'all'));
      }
      const swtSearch = byId('swt-concepts-search');
      if (swtSearch) swtSearch.value = '';
      const roteSearch = byId('swt-rote-search');
      if (roteSearch) roteSearch.value = '';
      const roteChapterSel = byId('swt-rote-chapter');
      if (roteChapterSel) roteChapterSel.value = 'all';
      const recallSelect = byId('study-recall-lesson');
      if (recallSelect) recallSelect.replaceChildren(new Option('Tất cả Lesson', 'all'));
      renderSwtRote();
      renderSwtConcepts();
      renderDistinctions();
      renderExtra();
      render();
    }

    if (!listenersBound) {
      listenersBound = true;
      byId('swt-rote-tabs')?.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-rote-mode]');
        if (!btn) return;
        swtRoteMode = btn.getAttribute('data-rote-mode') || 'instant';
        renderSwtRote();
      });
      byId('swt-rote-search')?.addEventListener('input', (event) => {
        swtRoteQuery = normalize(event.target.value);
        renderSwtRote();
      });
      byId('swt-rote-chapter')?.addEventListener('change', (event) => {
        swtRoteChapter = event.target.value || 'all';
        renderSwtRote();
      });
      byId('swt-chapter-pills')?.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-swt-chapter]');
        if (!btn) return;
        swtChapterFilter = btn.getAttribute('data-swt-chapter') || 'all';
        renderSwtConcepts();
      });
      byId('swt-concepts-search')?.addEventListener('input', (event) => {
        swtConceptsQuery = normalize(event.target.value);
        renderSwtConcepts();
      });
      byId('swt-concepts-open-all')?.addEventListener('click', () => {
        document.querySelectorAll('#swt-concepts-list details').forEach((d) => { d.open = true; });
      });
      byId('swt-concepts-close-all')?.addEventListener('click', () => {
        document.querySelectorAll('#swt-concepts-list details').forEach((d) => { d.open = false; });
      });
      byId('study-distinctions-search')?.addEventListener('input', (event) => {
        distinctionsQuery = normalize(event.target.value);
        renderDistinctions();
      });
      byId('study-distinctions-category')?.addEventListener('change', (event) => {
        distinctionsCategory = event.target.value;
        renderDistinctions();
      });
      byId('study-distinctions-kind-bar')?.addEventListener('click', (event) => {
        const kindBtn = event.target.closest('[data-dist-kind]');
        if (kindBtn) {
          distinctionsKind = kindBtn.getAttribute('data-dist-kind') || 'all';
          renderDistinctions();
        }
      });
      byId('study-distinctions-expand-opts')?.addEventListener('click', () => {
        expandAllOptions = !expandAllOptions;
        document.querySelectorAll('#study-distinctions-list .distinction-opts-details').forEach((d) => {
          d.open = expandAllOptions;
        });
        updateDistinctionFilterUI();
      });
      byId('study-quick-jump')?.addEventListener('click', (event) => {
        const jumpBtn = event.target.closest('[data-study-jump]');
        if (!jumpBtn) return;
        const target = jumpBtn.getAttribute('data-study-jump');
        if (target === 'anskw') {
          swtRoteMode = 'anskw';
          renderSwtRote();
          byId('study-rote-swt301')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target === 'rote') {
          swtRoteMode = 'sets';
          renderSwtRote();
          byId('study-rote-swt301')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target === 'families') {
          byId('study-word-families-swt301')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target === 'concepts') {
          const elConcept = activeCourseCode === 'SWT301'
            ? byId('study-concepts-swt301')
            : byId('study-lesson-list');
          elConcept?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (target === 'shortcuts') {
          const elTarget = activeCourseCode === 'SWT301'
            ? byId('study-shortcuts-swt301')
            : (byId('study-shortcuts-prj301') || byId('study-shortcuts'));
          elTarget?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          distinctionsKind = target || 'all';
          renderDistinctions();
          byId('study-distinctions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      byId('study-search-input')?.addEventListener('input', (event) => {
        query = normalize(event.target.value);
        render();
      });
      byId('study-recall-search')?.addEventListener('input', (event) => {
        recallQuery = normalize(event.target.value);
        renderRecall();
      });
      byId('study-recall-lesson')?.addEventListener('change', (event) => {
        recallLesson = event.target.value;
        renderRecall();
      });
      byId('study-open-all-btn')?.addEventListener('click', () => setAll(true));
      byId('study-close-all-btn')?.addEventListener('click', () => setAll(false));
    }

    const studyContent = byId('study-content');
    if (studyContent && !studyContent.dataset.boundOpenQ) {
      studyContent.dataset.boundOpenQ = 'true';
      studyContent.addEventListener('click', (event) => {
        const drillBtn = event.target.closest('[data-drill-confusing]');
        if (drillBtn) {
          const mode = drillBtn.getAttribute('data-drill-confusing') || 'confusing-all';
          SWTApp.app?.selectTab('tab-practice');
          SWTApp.practice?.startConfusingMode(mode);
          return;
        }
        const examBtn = event.target.closest('[data-exam-confusing]');
        if (examBtn) {
          const mode = examBtn.getAttribute('data-exam-confusing') || 'confusing-all';
          const ids = SWTApp.conceptHelper?.getConfusingQuestionIds?.(mode) || [];
          if (ids.length > 0 && SWTApp.exam?.startWithQuestions(ids)) {
            SWTApp.app?.selectTab('tab-exam');
          }
          return;
        }
        const btn = event.target.closest('[data-open-q]');
        if (!btn) return;
        const qId = Number(btn.getAttribute('data-open-q'));
        if (qId && SWTApp.practice?.openQuestion) {
          SWTApp.app?.selectTab('tab-practice');
          SWTApp.practice.openQuestion(qId);
        }
      });
    }
  }

  SWTApp.study = { init };
})();
