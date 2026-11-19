(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let lessons = [];
  let extra = null;
  let query = '';

  function normalize(value) {
    return SWTApp.utils.normalizeText(value).replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function lessonMatches(lesson) {
    if (!query) return true;
    const supplement = extra?.lessonSupplements?.[String(lesson.number)] || {};
    return normalize([
      lesson.number,
      lesson.title,
      lesson.summary,
      ...(lesson.points || []),
      lesson.remember,
      ...(supplement.terms || []).flat(),
      ...(supplement.tips || []),
      ...(supplement.traps || [])
    ].join(' ')).includes(query);
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
    const pages = el('span', 'badge', 'Trang ' + lesson.pages);
    summary.append(number, heading, pages);

    const body = el('div', 'study-lesson-body');
    const list = el('ul', 'study-point-list');
    (lesson.points || []).forEach((point) => list.appendChild(el('li', '', point)));
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
    const data = courseCode === 'SSG105' ? window.SSG105_STUDY : null;
    extra = courseCode === 'SSG105' ? window.SSG105_STUDY_EXTRA : null;
    lessons = data && Array.isArray(data.lessons) ? data.lessons : [];
    const available = lessons.length > 0;
    byId('study-content').hidden = !available;
    byId('study-unavailable').hidden = available;
    if (available) {
      setText('study-total-count', String(lessons.length));
      setText('study-source-label', data.meta?.source || 'Tài liệu môn học');
      renderExtra();
      render();
    }

    byId('study-search-input')?.addEventListener('input', (event) => {
      query = normalize(event.target.value);
      render();
    });
    byId('study-open-all-btn')?.addEventListener('click', () => setAll(true));
    byId('study-close-all-btn')?.addEventListener('click', () => setAll(false));
  }

  SWTApp.study = { init };
})();
