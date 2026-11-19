(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let lessons = [];
  let query = '';

  function normalize(value) {
    return SWTApp.utils.normalizeText(value);
  }

  function lessonMatches(lesson) {
    if (!query) return true;
    return normalize([
      lesson.number,
      lesson.title,
      lesson.summary,
      ...(lesson.points || []),
      lesson.remember
    ].join(' ')).includes(query);
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
    details.append(summary, body);
    return details;
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
    lessons = data && Array.isArray(data.lessons) ? data.lessons : [];
    const available = lessons.length > 0;
    byId('study-content').hidden = !available;
    byId('study-unavailable').hidden = available;
    if (available) {
      setText('study-total-count', String(lessons.length));
      setText('study-source-label', data.meta?.source || 'Tài liệu môn học');
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
