(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let lessons = [];
  let extra = null;
  let recallData = null;
  let query = '';
  let recallQuery = '';
  let recallLesson = 'all';

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
    remember.append(el('span', 'study-remember-label', 'Cần nhớ'), el('p', '', lesson.remember || ''));
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

  function init(courseCode) {
    const { byId, setText } = SWTApp.utils;
    const data = courseCode === 'SSG105'
      ? window.SSG105_STUDY
      : courseCode === 'PRJ301' ? window.PRJ301_STUDY : null;
    extra = courseCode === 'SSG105'
      ? window.SSG105_STUDY_EXTRA
      : courseCode === 'PRJ301' ? window.PRJ301_STUDY_EXTRA : null;
    recallData = courseCode === 'SSG105'
      ? window.SSG105_RECALL
      : courseCode === 'PRJ301' ? window.PRJ301_RECALL : null;
    lessons = data && Array.isArray(data.lessons) ? data.lessons : [];
    const available = lessons.length > 0;
    byId('study-content').hidden = !available;
    byId('study-unavailable').hidden = available;
    if (available) {
      query = '';
      recallQuery = '';
      recallLesson = 'all';
      const questionCount = data.meta?.questionCount || extra?.meta?.basedOnQuestions || '';
      setText('study-intro-title', data.meta?.title || 'Kiến thức trọng tâm');
      setText('study-intro-description', data.meta?.description || 'Khái niệm, dấu hiệu nhận diện và mẹo chọn đáp án.');
      setText('study-total-count', String(lessons.length));
      setText('study-source-label', data.meta?.source || 'Tài liệu môn học');
      setText('study-guide-title', questionCount ? 'Lộ trình làm chủ bộ ' + questionCount + ' câu' : 'Lộ trình ôn tập');
      setText('study-guide-description', data.meta?.guideDescription || 'Học khái niệm, nhận diện từ khóa, luyện câu hỏi và ôn lại lỗi sai.');
      setText('study-foundation-title', (extra?.foundationModules?.length || 0) + ' chuyên đề nền tảng cho bộ câu hỏi');
      setText('study-foundation-description', data.meta?.foundationDescription || 'Các nhóm kiến thức cần liên kết để xử lý câu hỏi tình huống và đoạn mã.');
      const lessonSearch = byId('study-search-input');
      const recallSearch = byId('study-recall-search');
      if (lessonSearch) {
        lessonSearch.value = '';
        lessonSearch.placeholder = data.meta?.searchPlaceholder || 'Tìm Lesson hoặc thuật ngữ...';
      }
      if (recallSearch) {
        recallSearch.value = '';
        recallSearch.placeholder = data.meta?.recallPlaceholder || 'Ví dụ: thuật ngữ, tình huống hoặc đáp án...';
      }
      const recallSelect = byId('study-recall-lesson');
      if (recallSelect) recallSelect.replaceChildren(new Option('Tất cả Lesson', 'all'));
      renderExtra();
      render();
    }

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

  SWTApp.study = { init };
})();
