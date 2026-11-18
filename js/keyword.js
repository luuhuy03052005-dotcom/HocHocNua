(function () {
  'use strict';

  const SWTApp = (window.SWTApp = window.SWTApp || {});
  let allQuestions = [];
  let keywordRecords = [];
  let tokenDocumentFrequency = new Map();
  let visibleKeywordCount = 0;

  const STOP_WORDS = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'been', 'being', 'but', 'by', 'can', 'choose', 'could',
    'did', 'do', 'does', 'each', 'following', 'for', 'from', 'had', 'has', 'have', 'how', 'if', 'in',
    'into', 'is', 'it', 'its', 'may', 'might', 'most', 'of', 'on', 'one', 'or', 'our', 'shall', 'should',
    'such', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'this', 'those', 'to', 'two', 'under',
    'used', 'using', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'who', 'will', 'with', 'would',
    'you', 'your', 'answer', 'answers', 'correct', 'statement', 'statements', 'type', 'types'
  ]);

  const NEGATION_PATTERNS = [
    { term: 'NOT', expression: /\bNOT\b/ },
    { term: 'EXCEPT', expression: /\bEXCEPT\b/ },
    { term: 'least', expression: /\bleast\b/i },
    { term: 'incorrect', expression: /\bincorrect\b/i },
    { term: 'False', expression: /\bfalse\b/i }
  ];

  const DOMAIN_TERMS = [
    'acceptance test-driven development', 'requirements-based testing', 'configuration management',
    'equivalence partitioning', 'equivalence partitions', 'boundary value analysis', 'statement coverage', 'decision coverage',
    'branch coverage', 'condition coverage', 'path coverage', 'cyclomatic complexity',
    'state transition testing', 'decision table testing', 'use case testing', 'exploratory testing',
    'experience-based testing', 'error guessing', 'checklist-based testing', 'black-box testing',
    'white-box testing', 'non-functional testing', 'functional testing', 'performance testing',
    'load testing', 'stress testing', 'usability testing', 'compatibility testing', 'security testing',
    'regression testing', 'regression test', 'confirmation testing', 'maintenance testing', 'component testing',
    'integration testing', 'system testing', 'acceptance testing', 'alpha testing', 'beta testing',
    'static analysis', 'static testing', 'dynamic testing', 'formal review', 'informal review',
    'technical review', 'walkthrough', 'inspection', 'review meeting', 'entry criteria', 'exit criteria',
    'test planning', 'test monitoring', 'test control', 'test analysis', 'test design',
    'test implementation', 'test execution', 'test completion', 'test process', 'test basis',
    'test condition', 'test case', 'test procedure', 'test suite', 'test oracle', 'test harness',
    'test environment', 'test data', 'testware', 'test management', 'defect management',
    'incident management', 'risk-based testing', 'product risk', 'project risk', 'residual risk',
    'quality assurance', 'quality control', 'verification', 'validation', 'debugging', 'root cause',
    'defect density', 'defect report', 'incident report', 'test summary report', 'test plan',
    'V-model', 'waterfall model', 'incremental model', 'iterative model', 'agile development',
    'software development lifecycle', 'software development life cycle', 'test automation',
    'capture/playback', 'record and playback', 'requirements management tool', 'test management tool',
    'static analysis tool', 'coverage measurement tool', 'performance testing tool',
    'data-driven testing', 'keyword-driven testing', 'continuous integration', 'shift-left',
    'pesticide paradox', 'exhaustive testing', 'defect clustering', 'early testing',
    'independence of testing', 'fundamental test process', 'IEEE 829', 'ISO 9126', 'PDCA',
    'cause-effect graphing', 'orthogonal array testing', 'all-pairs testing', 'pairwise testing',
    'control flow', 'data flow', 'dead code', 'memory leak', 'driver', 'stub', 'severity', 'priority',
    'reliability', 'maintainability', 'portability', 'efficiency', 'functionality', 'testability',
    'decision directions', 'development phases', 'psychological conflict', 'mutual respect', 'clear objectives',
    'defect resolution', 'process flows', 'behind schedule', 'delivery date', 'quality standards',
    'traceability', 'coverage', 'risk', 'quality', 'defect', 'failure', 'error', 'fault'
  ].sort((a, b) => b.length - a.length);

  const SHORT_EXPLANATION_OVERRIDES = new Map([
    [1, 'Alpha testing diễn ra tại nơi phát triển; Beta testing do người dùng thực hiện trong môi trường thực tế.'],
    [2, 'Configuration và compatibility testing cần nhiều môi trường nên thường phù hợp để thuê ngoài.'],
    [3, 'Driver mô phỏng thành phần gọi để điều khiển và truyền dữ liệu vào phần mềm đang kiểm thử.'],
    [4, 'Ghi nhận defect giúp sửa lỗi, báo cáo trạng thái và cải tiến quy trình phát triển.'],
    [5, 'Exhaustive testing gần như không khả thi vì số tổ hợp đầu vào và đường đi quá lớn.'],
    [6, 'Mô tả này gần với Quality Control; Quality Assurance tập trung phòng ngừa lỗi bằng cải tiến quy trình.'],
    [7, 'Verification hỏi “xây sản phẩm đúng cách chưa?”, còn Validation hỏi “có đúng sản phẩm cần xây không?”.'],
    [8, 'Cyclomatic complexity cho biết số đường đi độc lập, dùng làm cơ sở xác định số test cần thiết.'],
    [9, 'Tester cần phát hiện defect sớm và xác nhận bản sửa đã loại bỏ defect đó.'],
    [351, 'Test case lấy từ use case đặc biệt hữu ích để tìm defect trong luồng nghiệp vụ thực tế.']
  ]);

  function tokenize(text) {
    return String(text || '').match(/[A-Za-z][A-Za-z'/-]*|\d+(?:\.\d+)?/g) || [];
  }

  function buildDocumentFrequency(questions) {
    const frequency = new Map();
    questions.forEach((q) => {
      const correctTexts = (q.options || [])
        .filter((option) => q.correctKeys.includes(option.key))
        .map((option) => option.text)
        .join(' ');
      const uniqueTokens = new Set(tokenize(q.question + ' ' + correctTexts).map((token) => token.toLowerCase()));
      uniqueTokens.forEach((token) => frequency.set(token, (frequency.get(token) || 0) + 1));
    });
    return frequency;
  }

  function containsPhrase(text, phrase) {
    return String(text || '').toLowerCase().includes(phrase.toLowerCase());
  }

  function originalPhrase(text, phrase) {
    const source = String(text || '');
    const index = source.toLowerCase().indexOf(phrase.toLowerCase());
    return index >= 0 ? source.slice(index, index + phrase.length) : phrase;
  }

  function findDomainTerms(text, limit) {
    const found = [];
    DOMAIN_TERMS.forEach((term) => {
      if (found.length >= limit || !containsPhrase(text, term)) return;
      const overlaps = found.some((existing) =>
        existing.toLowerCase().includes(term.toLowerCase()) || term.toLowerCase().includes(existing.toLowerCase())
      );
      if (!overlaps) found.push(originalPhrase(text, term));
    });
    return found;
  }

  function bestScoredPhrase(text, maxWords) {
    const source = String(text || '');
    const matches = Array.from(source.matchAll(/[A-Za-z][A-Za-z'/-]*|\d+(?:\.\d+)?/g));
    if (matches.length === 0) return source.trim().slice(0, 40);
    let best = null;
    for (let start = 0; start < matches.length; start += 1) {
      for (let size = 1; size <= maxWords && start + size <= matches.length; size += 1) {
        const slice = matches.slice(start, start + size);
        const meaningful = slice.filter((match) => {
          const token = match[0].toLowerCase();
          return !STOP_WORDS.has(token) && (token.length > 2 || /\d/.test(token));
        });
        if (meaningful.length === 0) continue;
        const score = meaningful.reduce((sum, match) => {
          const token = match[0].toLowerCase();
          const df = tokenDocumentFrequency.get(token) || 0;
          const rarity = Math.log((allQuestions.length + 1) / (df + 1));
          return sum + rarity + Math.min(token.length, 12) / 12;
        }, 0) - (size - meaningful.length) * 0.35 - Math.max(0, size - 3) * 0.2;
        if (!best || score > best.score) {
          const first = slice[0];
          const last = slice[slice.length - 1];
          best = {
            score,
            text: source.slice(first.index, last.index + last[0].length)
          };
        }
      }
    }
    return best ? best.text.trim() : matches[0][0];
  }

  function questionKeywords(question) {
    const keywords = [];
    NEGATION_PATTERNS.forEach(({ term, expression }) => {
      if (expression.test(question)) keywords.push(originalPhrase(question, term));
    });
    findDomainTerms(question, 2).forEach((term) => keywords.push(term));
    if (keywords.length === 0 || (keywords.length === 1 && NEGATION_PATTERNS.some(({ term }) => term.toLowerCase() === keywords[0].toLowerCase()))) {
      keywords.push(bestScoredPhrase(question, 4));
    }
    return Array.from(new Set(keywords.filter(Boolean))).slice(0, 3);
  }

  function answerKeywords(answerText) {
    const domainTerms = findDomainTerms(answerText, 2);
    if (/^(true|false)$/i.test(String(answerText).trim())) return [String(answerText).trim()];
    const bestPhrase = bestScoredPhrase(answerText, 5);
    if (domainTerms.length === 0) return [bestPhrase].filter(Boolean);
    const contextualPhrase = domainTerms.some((term) =>
      bestPhrase.toLowerCase().includes(term.toLowerCase()) && bestPhrase.toLowerCase() !== term.toLowerCase()
    ) ? bestPhrase : '';
    if (contextualPhrase) {
      const remainingTerms = domainTerms.filter((term) => !contextualPhrase.toLowerCase().includes(term.toLowerCase()));
      return [contextualPhrase, ...remainingTerms].slice(0, 2);
    }
    return domainTerms;
  }

  function firstShortSentence(text, maxLength) {
    const clean = String(text || '')
      .replace(/\s+/g, ' ')
      .replace(/^['“”]+|['“”]+$/g, '')
      .trim();
    if (!clean) return '';
    const sentenceMatch = clean.match(/^(.{35,}?[.!?])(?:\s|$)/);
    const sentence = sentenceMatch ? sentenceMatch[1] : clean;
    return sentence.length <= maxLength ? sentence : sentence.slice(0, maxLength - 1).trimEnd() + '…';
  }

  function compactExplanation(question, qKeywords, correctAnswers) {
    if (SHORT_EXPLANATION_OVERRIDES.has(question.id)) return SHORT_EXPLANATION_OVERRIDES.get(question.id);
    const raw = String(question.explanation || '').trim();
    let explanation = '';
    const explanationMatch = raw.match(/Giải thích\s*:\s*([\s\S]+)/i);
    if (explanationMatch) explanation = firstShortSentence(explanationMatch[1], 190);
    else if (raw) {
      const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const candidate = lines.length > 1 ? lines[lines.length - 1] : raw;
      const normalizedCandidate = SWTApp.utils.normalizeText(candidate);
      const repeatsQuestion = normalizedCandidate.startsWith(SWTApp.utils.normalizeText(question.question).slice(0, 55));
      const onlyRestatesQuestion = /\?\s*$/.test(candidate);
      if (!repeatsQuestion && !onlyRestatesQuestion) explanation = firstShortSentence(candidate, 190);
    }
    if (explanation) return explanation;

    const answerTerms = correctAnswers.flatMap((answer) => answer.keywords).join(' / ');
    return 'Ghi nhớ: “' + qKeywords.join(' + ') + '” tương ứng với “' + answerTerms + '”.';
  }

  function makeKeywordRecord(question) {
    const qKeywords = questionKeywords(question.question);
    const correctAnswers = (question.options || [])
      .filter((option) => question.correctKeys.includes(option.key))
      .map((option) => ({ key: option.key, text: option.text, keywords: answerKeywords(option.text) }));
    return {
      question,
      qKeywords,
      correctAnswers,
      explanation: compactExplanation(question, qKeywords, correctAnswers)
    };
  }

  function appendHighlightedText(parent, text, keywords, className) {
    const source = String(text || '');
    const terms = Array.from(new Set((keywords || []).filter(Boolean))).sort((a, b) => b.length - a.length);
    if (terms.length === 0) {
      parent.appendChild(document.createTextNode(source));
      return;
    }
    const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const expression = new RegExp('(' + escaped.join('|') + ')', 'gi');
    let cursor = 0;
    source.replace(expression, (match, _capture, offset) => {
      if (offset > cursor) parent.appendChild(document.createTextNode(source.slice(cursor, offset)));
      const mark = document.createElement('mark');
      mark.className = className;
      mark.textContent = match;
      parent.appendChild(mark);
      cursor = offset + match.length;
      return match;
    });
    if (cursor < source.length) parent.appendChild(document.createTextNode(source.slice(cursor)));
  }

  function createKeywordCard(record) {
    const { el } = SWTApp.utils;
    const q = record.question;
    const card = el('article', 'keyword-card');
    const main = el('div', 'keyword-main');
    const meta = el('div', 'question-meta');
    meta.append(
      el('span', 'counter-pill', 'Câu ' + q.id),
      el('span', 'badge', q.slideNumber ? 'Slide ' + q.slideNumber : 'SWT301'),
      el('span', 'badge', q.topic)
    );
    if (q.isMulti) meta.appendChild(el('span', 'badge badge-accent', 'Nhiều đáp án'));

    const stem = el('div', 'keyword-question');
    appendHighlightedText(stem, q.question, record.qKeywords, 'keyword-mark keyword-question-mark');

    const options = el('div', 'keyword-options');
    (q.options || []).forEach((option) => {
      const correct = q.correctKeys.includes(option.key);
      const row = el('div', 'keyword-option' + (correct ? ' is-correct' : ''));
      row.appendChild(el('span', 'option-key', option.key));
      const text = el('span', 'option-text');
      const answerRecord = record.correctAnswers.find((answer) => answer.key === option.key);
      if (correct && answerRecord) {
        appendHighlightedText(text, option.text, answerRecord.keywords, 'keyword-mark keyword-answer-mark');
      } else {
        text.textContent = option.text;
      }
      row.appendChild(text);
      if (correct) row.appendChild(el('span', 'keyword-correct-badge', 'ĐÚNG'));
      options.appendChild(row);
    });
    main.append(meta, stem, options);

    const note = el('aside', 'keyword-note');
    note.appendChild(el('div', 'keyword-note-label', 'Cặp keyword cần nhớ'));
    const pair = el('div', 'keyword-pair');
    const questionTerm = el('span', 'keyword-pair-question', record.qKeywords.join(' + '));
    const arrow = el('span', 'keyword-pair-arrow', '→');
    arrow.setAttribute('aria-hidden', 'true');
    const answerTerm = el('span', 'keyword-pair-answer', record.correctAnswers.map((answer) => answer.keywords.join(' + ')).join(' / '));
    pair.append(questionTerm, arrow, answerTerm);
    note.append(pair, el('p', 'keyword-explanation', record.explanation));
    card.append(main, note);
    return card;
  }

  function keywordBatchSize() {
    return window.matchMedia && window.matchMedia('(max-width: 48em)').matches ? 25 : 60;
  }

  function renderKeywordPage(resetVisibleCount) {
    const { byId, normalizeText, setText, el } = SWTApp.utils;
    const list = byId('keyword-list');
    if (!list) return;
    if (resetVisibleCount || visibleKeywordCount === 0) visibleKeywordCount = keywordBatchSize();
    const searchTokens = normalizeText(byId('keyword-search-input')?.value || '').split(' ').filter(Boolean);
    const topic = byId('keyword-topic-select')?.value || 'all';
    const matched = keywordRecords.filter((record) => {
      const q = record.question;
      if (topic !== 'all' && q.topic !== topic) return false;
      if (searchTokens.length === 0) return true;
      const searchable = normalizeText([
        q.id, q.topic, q.question, (q.options || []).map((option) => option.text).join(' '),
        record.qKeywords.join(' '), record.correctAnswers.flatMap((answer) => answer.keywords).join(' '), record.explanation
      ].join(' '));
      return searchTokens.every((token) => searchable.includes(token));
    });

    setText('keyword-total-count', String(allQuestions.length));
    setText('keyword-result-count', matched.length + ' / ' + allQuestions.length + ' câu');
    list.replaceChildren();
    if (matched.length === 0) {
      list.appendChild(el('div', 'card keyword-empty', 'Không tìm thấy câu hỏi hoặc keyword phù hợp.'));
      const loadMoreWrap = byId('keyword-load-more-wrap');
      if (loadMoreWrap) loadMoreWrap.hidden = true;
      return;
    }
    const fragment = document.createDocumentFragment();
    matched.slice(0, visibleKeywordCount).forEach((record) => fragment.appendChild(createKeywordCard(record)));
    list.appendChild(fragment);

    const renderedCount = Math.min(visibleKeywordCount, matched.length);
    const loadMoreWrap = byId('keyword-load-more-wrap');
    const loadMoreBtn = byId('keyword-load-more-btn');
    if (loadMoreWrap) loadMoreWrap.hidden = renderedCount >= matched.length;
    if (loadMoreBtn) loadMoreBtn.textContent = 'Hiển thị thêm ' + Math.min(keywordBatchSize(), matched.length - renderedCount) + ' câu · Đang xem ' + renderedCount + '/' + matched.length;
  }

  SWTApp.keyword = {
    init(questions) {
      allQuestions = Array.isArray(questions) ? questions : [];
      tokenDocumentFrequency = buildDocumentFrequency(allQuestions);
      keywordRecords = allQuestions.map(makeKeywordRecord);
      SWTApp.utils.byId('keyword-search-input')?.addEventListener('input', () => renderKeywordPage(true));
      SWTApp.utils.byId('keyword-topic-select')?.addEventListener('change', () => renderKeywordPage(true));
      SWTApp.utils.byId('keyword-load-more-btn')?.addEventListener('click', () => {
        visibleKeywordCount += keywordBatchSize();
        renderKeywordPage(false);
      });
      renderKeywordPage(true);
    },
    onTabActivated(tabId) {
      if (tabId === 'tab-keyword') renderKeywordPage(false);
    }
  };
})();
