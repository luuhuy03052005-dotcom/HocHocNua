(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});

  function getCourseCode() {
    return SWTApp.app?.getCourse?.()?.code || 'SWT301';
  }

  function lessonNum(topic) {
    const m = String(topic || '').match(/^\s*(\d+)/);
    return m ? Number(m[1]) : 0;
  }

  function getSwtConcepts(q) {
    const bank = window.SWT301_STUDY?.conceptBank;
    if (!q || !Array.isArray(bank)) return [];

    const qId = Number(q.id);
    const stemLow = String(q.question || '').toLowerCase();
    const optTextsLow = (q.options || []).map((o) => String(o.text || '').toLowerCase());
    const hasShortOpts = optTextsLow.some((t) => {
      const words = t.trim().split(/\s+/).filter(Boolean);
      return words.length >= 1 && words.length <= 6;
    });

    const scored = [];
    bank.forEach((concept, idx) => {
      const explicit = Array.isArray(concept.qIds) && concept.qIds.includes(qId);
      let stemHit = false;
      let optHitPos = null;

      (concept.triggers || []).forEach((trig) => {
        const tl = String(trig || '').toLowerCase();
        if (!tl) return;
        if (stemLow.includes(tl)) stemHit = true;
        optTextsLow.forEach((ot, oi) => {
          if (ot.includes(tl) && (optHitPos === null || oi < optHitPos)) {
            optHitPos = oi;
          }
        });
      });

      if (explicit || stemHit || optHitPos !== null) {
        const rank = [
          hasShortOpts && optHitPos !== null ? 0 : 1,
          explicit ? 0 : 1,
          stemHit ? 0 : 1,
          optHitPos !== null ? optHitPos : 99,
          idx
        ];
        scored.push({ rank, concept });
      }
    });

    scored.sort((a, b) => {
      for (let i = 0; i < a.rank.length; i += 1) {
        if (a.rank[i] !== b.rank[i]) return a.rank[i] - b.rank[i];
      }
      return 0;
    });

    return scored.slice(0, 5).map((s) => ({
      term: s.concept.term,
      what: s.concept.what,
      points: s.concept.points || []
    }));
  }

  function getPrjConcepts(q) {
    const data = window.PRJ301_STUDY;
    if (!q || !data) return [];
    const { normalizeText } = SWTApp.utils;
    const norm = (v) => normalizeText(v).replace(/[^a-z0-9]+/g, ' ').trim();
    const blob = ' ' + norm([q.question, ...(q.options || []).map((o) => o.text)].join(' ')) + ' ';

    const lNum = lessonNum(q.topic);
    const lesson = (data.lessons || []).find((l) => Number(l.number) === lNum);
    const results = [];

    const matchedK = (data.questionKnowledge || [])
      .map((item) => {
        const score = (item.keywords || []).reduce((acc, kw) => {
          const nkw = norm(kw);
          return nkw && blob.includes(' ' + nkw + ' ') ? acc + 2 : acc;
        }, Number(item.lesson) === lNum ? 1 : 0);
        return { item, score };
      })
      .filter((x) => x.score > 1)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    matchedK.forEach(({ item }) => {
      results.push({
        term: item.term,
        what: item.text,
        points: lesson?.remember ? [lesson.remember] : []
      });
    });

    if (!results.length && lesson) {
      (lesson.points || []).slice(0, 4).forEach((pt) => {
        results.push({
          term: pt.term || lesson.title,
          what: pt.text || String(pt),
          points: []
        });
      });
    }
    return results;
  }

  function getSsgConcepts(q) {
    const data = window.SSG105_STUDY;
    const extra = window.SSG105_STUDY_EXTRA;
    if (!q || !data) return [];
    const lNum = lessonNum(q.topic);
    const lesson = (data.lessons || []).find((l) => Number(l.number) === lNum) || (data.lessons || [])[0];
    if (!lesson) return [];

    const supp = extra?.lessonSupplements?.[String(lesson.number)];
    const { normalizeText } = SWTApp.utils;
    const blob = normalizeText([q.question, ...(q.options || []).map((o) => o.text)].join(' '));

    const results = [];
    if (supp?.terms?.length) {
      const scoredTerms = supp.terms.map((pair) => {
        const tName = Array.isArray(pair) ? pair[0] : pair.term;
        const tMean = Array.isArray(pair) ? pair[1] : pair.meaning;
        const hit = blob.includes(normalizeText(tName.split('(')[0].trim())) ? 2 : 0;
        return { term: tName, what: tMean, score: hit };
      }).sort((a, b) => b.score - a.score);

      scoredTerms.slice(0, 3).forEach((t) => {
        results.push({ term: t.term, what: t.what, points: [] });
      });
    }

    results.push({
      term: 'Lesson ' + lesson.number + ': ' + lesson.title,
      what: lesson.summary || '',
      points: (lesson.points || []).slice(0, 3).map((p) => (typeof p === 'string' ? p : p.term + ': ' + p.text))
    });

    return results.slice(0, 4);
  }

  function getConceptsForQuestion(q) {
    const code = getCourseCode();
    if (code === 'SWT301') return getSwtConcepts(q);
    if (code === 'PRJ301') return getPrjConcepts(q);
    if (code === 'SSG105') return getSsgConcepts(q);
    return [];
  }

  function getDistinctionForQuestion(q) {
    if (!q) return null;
    const code = getCourseCode();
    const studyData = code === 'SWT301'
      ? window.SWT301_STUDY
      : code === 'PRJ301'
      ? window.PRJ301_STUDY
      : code === 'SSG105'
      ? window.SSG105_STUDY
      : null;
    if (!studyData?.distinctions) return null;
    for (const group of studyData.distinctions) {
      const matched = (group.items || []).find((it) => Number(it.id) === Number(q.id));
      if (matched) return { group, matched };
    }
    return null;
  }

  function cleanPointText(text) {
    return String(text || '').replace(/\s*\((?:—\s*)?#[0-9,\s&#a-zA-Z-]+\)/g, '').trim();
  }

  function renderBoxContent(box, button, q, opts) {
    const { el } = SWTApp.utils;
    if (!box || !q) return;
    box.replaceChildren();

    const head = el('div', 'q-concept-head');
    const titleWrap = el('div', 'q-concept-title-wrap');
    titleWrap.append(
      el('span', 'q-concept-badge', '? Kiến thức câu #' + q.id),
      el('span', 'q-concept-topic', q.topic || getCourseCode())
    );
    const closeBtn = el('button', 'btn btn-ghost btn-sm q-concept-close', 'Thu gọn ×');
    closeBtn.type = 'button';
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetConceptBox(button, box);
    });
    head.append(titleWrap, closeBtn);
    box.appendChild(head);

    const concepts = getConceptsForQuestion(q);
    if (concepts.length > 0) {
      const list = el('div', 'q-concept-list');
      concepts.forEach((item) => {
        const card = el('div', 'q-concept-item');
        const termEl = el('div', 'q-concept-term', '• ' + item.term);
        const whatEl = el('div', 'q-concept-what');
        whatEl.append(el('strong', '', 'Là gì: '), el('span', '', cleanPointText(item.what)));
        card.append(termEl, whatEl);

        if (item.points && item.points.length > 0) {
          const ul = el('ul', 'q-concept-points');
          item.points.forEach((pt) => {
            ul.appendChild(el('li', '', cleanPointText(pt)));
          });
          card.appendChild(ul);
        }
        list.appendChild(card);
      });
      box.appendChild(list);
    }

    if (opts && opts.showDistinction) {
      const dist = getDistinctionForQuestion(q);
      if (dist) {
        const trap = el('div', 'q-concept-trap');
        trap.appendChild(el('div', 'q-concept-trap-title', '⚠️ Bẫy dễ nhầm: ' + dist.group.title));
        const rule = el('div', 'q-concept-trap-rule');
        rule.innerHTML = dist.group.rule;
        trap.appendChild(rule);
        box.appendChild(trap);
      }
    }
  }

  function resetConceptBox(button, box) {
    if (box) {
      box.hidden = true;
      box.replaceChildren();
    }
    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.classList.remove('is-active');
    }
  }

  function toggleConceptBox({ button, box, question, showDistinction }) {
    if (!box || !question) return false;
    const willOpen = box.hidden;
    if (!willOpen) {
      resetConceptBox(button, box);
      return false;
    }
    renderBoxContent(box, button, question, { showDistinction: Boolean(showDistinction) });
    box.hidden = false;
    if (button) {
      button.setAttribute('aria-expanded', 'true');
      button.classList.add('is-active');
    }
    return true;
  }

  function refreshIfOpen({ button, box, question, showDistinction }) {
    if (!box || box.hidden || !question) return;
    renderBoxContent(box, button, question, { showDistinction: Boolean(showDistinction) });
  }

  SWTApp.conceptHelper = {
    getConceptsForQuestion,
    getDistinctionForQuestion,
    toggleConceptBox,
    resetConceptBox,
    refreshIfOpen
  };
})();
