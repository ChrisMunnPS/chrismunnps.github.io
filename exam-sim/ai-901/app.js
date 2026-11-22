/* Exam simulator - UI logic (plain script, works from file://) */
(function () {
  'use strict';

  var CONFIG = window.EXAM_CONFIG || {};
  var QUESTIONS = [];
  var BY_ID = new Map();
  var CASE_LIST = [];
  var CASE_BY_ID = new Map();

  // A hand-built or script-generated bank can arrive with a single answer
  // serialized as a string instead of an array; normalise before use.
  function normalizeQuestions(list) {
    var seen = Object.create(null);
    var out = [];
    (list || []).forEach(function (q) {
      if (!q || typeof q !== 'object') return;
      if (typeof q.answers === 'string') q.answers = q.answers.match(/[A-E]/g) || [];
      if (!Array.isArray(q.answers)) q.answers = [];
      if (!Array.isArray(q.options)) q.options = [];
      if (!q.answers.length) return;
      if (seen[q.id]) return;
      seen[q.id] = true;
      out.push(q);
    });
    return out;
  }

  // Questions and cases may arrive after this script loads (window.EXAM_DATA_READY),
  // so the engine adopts data at boot instead of capturing it at parse time.
  function adoptData(payload) {
    var data = payload || {};
    QUESTIONS = normalizeQuestions((data.questions || window.QUESTIONS || []).slice());
    CASE_LIST = (data.cases || window.CASE_STUDIES || []).slice();
    BY_ID = new Map(QUESTIONS.map(function (q) { return [q.id, q]; }));
    CASE_BY_ID = new Map(CASE_LIST.map(function (c) { return [c.id, c]; }));
  }
  var PASS_MARK = CONFIG.passMark || 700;
  var STORAGE_PREFIX = CONFIG.storagePrefix || 'sc300-sim';
  var SAVE_KEY = STORAGE_PREFIX + ':attempt';
  var SETTINGS_KEY = STORAGE_PREFIX + ':settings';
  var SRS_KEY = STORAGE_PREFIX + ':srs';
  var DAY_MS = 86400000;
  var SRS_DAYS = [3, 7, 21, 45, 90];
  var LETTERS = ['A', 'B', 'C', 'D', 'E'];
  var EXAM_CODE = CONFIG.code || 'SC-300';
  var EXAM_TITLE = CONFIG.title || 'SC-300 exam simulator';
  var EXAM_CERT = CONFIG.certName || 'Identity and Access Administrator';
  var SECONDS_PER_QUESTION = CONFIG.secondsPerQuestion || 90;

  /* ----------------------------------------------------------------- theme */
  /* The inline script in index.html picks the first theme before paint; this
     code installs the switch, remembers an explicit choice, and keeps following
     the OS while no choice has been made. */

  var THEME_KEY = STORAGE_PREFIX + ':theme';
  var THEME_ICON = {
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A8.6 8.6 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8Z"/></svg>',
    dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/></svg>'
  };

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function savedTheme() {
    try { return localStorage.getItem(THEME_KEY) || ''; } catch (e) { return ''; }
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || systemTheme();
  }

  function applyTheme(theme) {
    var dark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = dark ? THEME_ICON.dark : THEME_ICON.light;
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    var label = dark ? 'Switch to light theme' : 'Switch to dark theme';
    btn.setAttribute('aria-label', label);
    btn.title = label;
  }

  function setTheme(theme, remember) {
    applyTheme(theme);
    if (!remember) return;
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* no storage */ }
  }

  function installThemeButton() {
    var bar = document.querySelector('.topbar');
    if (!bar || document.getElementById('theme-toggle')) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'theme-toggle';
    btn.className = 'theme-btn';
    btn.setAttribute('data-act', 'theme');
    btn.innerHTML = THEME_ICON.light;
    bar.appendChild(btn);
  }

  function watchSystemTheme() {
    if (!window.matchMedia) return;
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var sync = function () { if (!savedTheme()) applyTheme(systemTheme()); };
    if (mq.addEventListener) mq.addEventListener('change', sync);
    else if (mq.addListener) mq.addListener(sync);
  }

  var DOMAINS = CONFIG.domains || {
    identity: {
      label: 'User identities',
      full: 'Implement and manage user identities',
      weight: '20-25%',
      color: '#4f46e5'
    },
    auth: {
      label: 'Authentication & access',
      full: 'Implement authentication and access management',
      weight: '25-30%',
      color: '#0891b2'
    },
    apps: {
      label: 'Workload identities',
      full: 'Plan and implement workload identities',
      weight: '20-25%',
      color: '#b45309'
    },
    governance: {
      label: 'Identity governance',
      full: 'Plan and automate identity governance',
      weight: '20-25%',
      color: '#be185d'
    }
  };
  var DOMAIN_ORDER = CONFIG.domainOrder || ['identity', 'auth', 'apps', 'governance'];
  // Midpoints of the skills-measured ranges as of October 28, 2026:
  // 20-25 / 25-30 / 20-25 / 20-25. A 50-question draw yields 12/14/12/12.
  var DOMAIN_WEIGHT = CONFIG.domainWeight || { identity: 22.5, auth: 27.5, apps: 22.5, governance: 22.5 };
  var DEFAULT_COUNT = CONFIG.defaultCount || 50;

  var PRESETS = CONFIG.presets || [
    { key: 'full', label: 'Full 50', count: 50, domains: DOMAIN_ORDER.slice() },
    { key: 'identity', label: 'Identity 10', count: 10, domains: ['identity'] },
    { key: 'auth', label: 'Auth 12', count: 12, domains: ['auth'] },
    { key: 'apps', label: 'Workload 8', count: 8, domains: ['apps'] },
    { key: 'governance', label: 'Governance 10', count: 10, domains: ['governance'] },
    { key: 'quick', label: 'Quick 10', count: 10, domains: DOMAIN_ORDER.slice() }
  ];

  var state = null;
  var phase = 'start';
  var reviewFilter = 'all';
  var savedRecord = null;
  var ticker = null;
  var toastTimer = null;

  /* ------------------------------------------------------------------ utils */

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function inline(markdown) {
    var text = esc(markdown);
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return text;
  }

  function md(markdown) {
    var lines = String(markdown || '').replace(/\r\n/g, '\n').split('\n');
    var out = [];
    var list = null;

    function closeList() {
      if (list) {
        list.push('</ul>');
        out.push(list.join(''));
        list = null;
      }
    }

    lines.forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) {
        closeList();
        return;
      }
      var bullet = /^[-*]\s+(.*)$/.exec(trimmed);
      if (bullet) {
        if (!list) list = ['<ul>'];
        list.push('<li>' + inline(bullet[1]) + '</li>');
        return;
      }
      closeList();
      out.push('<p>' + inline(trimmed) + '</p>');
    });
    closeList();
    return out.join('');
  }

  function fmtClock(seconds) {
    var sec = Math.max(0, Math.round(seconds || 0));
    var h = Math.floor(sec / 3600);
    var m = Math.floor((sec % 3600) / 60);
    var s = sec % 60;
    var mm = String(m).padStart(2, '0');
    var ss = String(s).padStart(2, '0');
    return h > 0 ? h + ':' + mm + ':' + ss : m + ':' + ss;
  }

  function shuffled(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function toast(message) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 3000);
  }

  /* ---------------------------------------------------------- persistence */

  function persist() {
    if (!state) return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ v: 2, savedAt: Date.now(), state: state }));
    } catch (err) { /* storage unavailable - run stateless */ }
  }

  function readSave() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      var rec = JSON.parse(raw);
      if (!rec || !rec.state || !Array.isArray(rec.state.order) || !rec.state.order.length) return null;
      return rec;
    } catch (err) {
      return null;
    }
  }

  function clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (err) { /* ignore */ }
    savedRecord = null;
  }

  function loadSettings() {
    var defaults = { timer: true, instant: false, shuffle: false, count: DEFAULT_COUNT, domains: DOMAIN_ORDER.slice() };
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      if (!raw) return defaults;
      var parsed = JSON.parse(raw);
      var domains = DOMAIN_ORDER.filter(function (key) {
        return Array.isArray(parsed.domains) && parsed.domains.indexOf(key) !== -1;
      });
      if (!domains.length) domains = DOMAIN_ORDER.slice();
      var count = parseInt(parsed.count, 10);
      return {
        timer: parsed.timer !== false,
        instant: parsed.instant === true,
        shuffle: parsed.shuffle === true,
        count: count > 0 ? count : DEFAULT_COUNT,
        domains: domains
      };
    } catch (err) {
      return defaults;
    }
  }

  function storeSettings(settings) {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (err) { /* ignore */ }
  }

  /* ------------------------------------------------ spaced review queue */

  function loadSrs() {
    try {
      var raw = localStorage.getItem(SRS_KEY);
      if (!raw) return { items: {} };
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.items || typeof parsed.items !== 'object') {
        return { items: {} };
      }
      return { items: parsed.items };
    } catch (err) {
      return { items: {} };
    }
  }

  function storeSrs(items) {
    try { localStorage.setItem(SRS_KEY, JSON.stringify({ v: 1, items: items })); } catch (err) { /* ignore */ }
  }

  function srsSummary(now) {
    var items = loadSrs().items;
    var when = now || Date.now();
    var due = [];
    var total = 0;
    var next = null;

    Object.keys(items).forEach(function (key) {
      var id = Number(key);
      var entry = items[key];
      if (!entry || !BY_ID.has(id)) return;
      total++;
      if (!entry.due || entry.due <= when) due.push(id);
      else if (next === null || entry.due < next) next = entry.due;
    });

    due.sort(function (a, b) { return a - b; });
    return { due: due, total: total, next: next };
  }

  function recordSrs(st) {
    var items = loadSrs().items;
    var now = Date.now();
    var changed = false;

    st.order.forEach(function (id) {
      var q = BY_ID.get(id);
      if (!q) return;
      var entry = items[id];

      if (!isCorrectWith(st, q)) {
        items[id] = { box: 0, due: now, seen: (entry ? entry.seen || 0 : 0) + 1 };
        changed = true;
        return;
      }

      if (!entry) return;
      var box = (entry.box || 0) + 1;
      if (box > SRS_DAYS.length) {
        delete items[id];
        changed = true;
        return;
      }
      items[id] = { box: box, due: now + SRS_DAYS[box - 1] * DAY_MS, seen: (entry.seen || 0) + 1 };
      changed = true;
    });

    if (changed) storeSrs(items);
  }

  function dueLabel(ms) {
    var days = Math.max(1, Math.ceil((ms - Date.now()) / DAY_MS));
    return days === 1 ? 'tomorrow' : 'in ' + days + ' days';
  }

  function checkedDomains() {
    return Array.prototype.slice.call(document.querySelectorAll('input[name="domain"]:checked'))
      .map(function (el) { return el.value; });
  }

  function readSettingsFromForm() {
    var timerEl = document.getElementById('opt-timer');
    var shuffleEl = document.getElementById('opt-shuffle');
    var countEl = document.getElementById('opt-count');
    var modeEl = document.querySelector('input[name="mode"]:checked');
    var domains = checkedDomains();
    var settings = {
      timer: timerEl ? timerEl.checked : true,
      instant: modeEl ? modeEl.value === 'practice' : false,
      shuffle: shuffleEl ? shuffleEl.checked : false,
      count: countEl ? Math.max(1, parseInt(countEl.value, 10) || DEFAULT_COUNT) : DEFAULT_COUNT,
      domains: domains.length ? domains : DOMAIN_ORDER.slice()
    };
    storeSettings(settings);
    return settings;
  }

  function storeSetup() {
    var domains = checkedDomains();
    var previous = loadSettings();
    var timerEl = document.getElementById('opt-timer');
    var shuffleEl = document.getElementById('opt-shuffle');
    var countEl = document.getElementById('opt-count');
    var modeEl = document.querySelector('input[name="mode"]:checked');
    var count = countEl ? parseInt(countEl.value, 10) : NaN;
    storeSettings({
      timer: timerEl ? timerEl.checked : previous.timer,
      instant: modeEl ? modeEl.value === 'practice' : previous.instant,
      shuffle: shuffleEl ? shuffleEl.checked : previous.shuffle,
      count: count > 0 ? count : previous.count,
      domains: domains.length ? domains : previous.domains
    });
  }

  /* --------------------------------------------------------------- grading */

  function selection(id) {
    if (!state || !state.answers) return [];
    return state.answers[id] || [];
  }

  function isCorrectWith(st, q) {
    var sel = (st.answers && st.answers[q.id]) || [];
    if (!sel.length || sel.length !== q.answers.length) return false;
    return q.answers.every(function (letter) { return sel.indexOf(letter) !== -1; });
  }

  function isCorrect(q) {
    return isCorrectWith(state, q);
  }

  function gradeOf(st) {
    var per = {};
    DOMAIN_ORDER.forEach(function (key) { per[key] = { correct: 0, total: 0 }; });
    var correct = 0;
    st.order.forEach(function (id) {
      var q = BY_ID.get(id);
      if (!q) return;
      if (per[q.domain]) per[q.domain].total++;
      if (isCorrectWith(st, q)) {
        correct++;
        if (per[q.domain]) per[q.domain].correct++;
      }
    });
    var total = st.order.length;
    var scaled = total ? Math.round((correct / total) * 1000) : 0;
    return {
      correct: correct,
      total: total,
      per: per,
      pct: total ? Math.round((correct / total) * 100) : 0,
      scaled: scaled,
      pass: scaled >= PASS_MARK
    };
  }

  function answeredCount() {
    if (!state) return 0;
    return state.order.filter(function (id) { return selection(id).length > 0; }).length;
  }

  function currentQ() {
    if (!state || !state.order || !state.order.length) return null;
    return BY_ID.get(state.order[state.index]) || null;
  }

  function isRevealed(q) {
    if (phase === 'review') return true;
    return phase === 'exam' && !!state.settings.instant && !!state.checked[q.id];
  }

  function reviewIndices() {
    if (!state) return [];
    var indices = [];
    state.order.forEach(function (id, index) {
      var q = BY_ID.get(id);
      if (!q) return;
      if (reviewFilter === 'wrong' && isCorrectWith(state, q)) return;
      if (reviewFilter === 'flagged' && !state.flags[id]) return;
      indices.push(index);
    });
    return indices;
  }

  /* --------------------------------------------------------------- runtime */

  function startTicker() {
    stopTicker();
    ticker = setInterval(tick, 1000);
  }

  function stopTicker() {
    if (ticker) {
      clearInterval(ticker);
      ticker = null;
    }
  }

  function tick() {
    if (!state || state.submitted || phase !== 'exam') return;

    var now = Date.now();
    if (!state.lastTick) state.lastTick = now;
    var delta = Math.floor((now - state.lastTick) / 1000);
    if (delta <= 0) return;

    state.lastTick += delta * 1000;
    state.used = (state.used || 0) + delta;

    if (state.settings.timer) {
      state.remaining = Math.max(0, state.remaining - delta);
      if (state.remaining === 0) {
        updateTimer();
        doSubmit(true);
        return;
      }
    }

    updateTimer();
    state.ticks = (state.ticks || 0) + 1;
    if (state.ticks % 10 === 0) persist();
  }

  function updateTimer() {
    var el = document.getElementById('timer');
    if (!el || !state) return;
    var seconds = state.settings.timer ? state.remaining : state.used;
    var strong = el.querySelector('strong');
    if (strong) strong.textContent = fmtClock(seconds);
    el.classList.toggle('is-low', !!state.settings.timer && state.remaining <= 300);
  }

  function requestedCount() {
    var el = document.getElementById('opt-count');
    if (!el) return DEFAULT_COUNT;
    var value = parseInt(el.value, 10);
    return isNaN(value) ? 0 : Math.max(0, value);
  }

  function poolForDomains(domains) {
    return QUESTIONS.filter(function (q) { return domains.indexOf(q.domain) !== -1; });
  }

  function caseIdsFor(caseId) {
    return QUESTIONS.filter(function (q) { return q.case === caseId; }).map(function (q) { return q.id; });
  }

  function casePanelHTML(q) {
    if (!q || !q.case) return '';
    var study = CASE_BY_ID.get(q.case);
    if (!study) return '';
    var count = caseIdsFor(q.case).length;
    return '<details class="case-study" open>'
      + '<summary>'
      + '<span class="case-tag">Case study</span>'
      + '<span class="case-title">' + esc(study.title) + '</span>'
      + '<span class="case-count">' + count + ' questions</span>'
      + '</summary>'
      + '<div class="case-body">' + study.html + '</div>'
      + '</details>';
  }

  function diagramHTML(q) {
    if (!q || !q.diagram) return '';
    var lib = window.EXAM_DIAGRAMS || {};
    var entry = lib[q.diagram];
    if (!entry) return '';
    var svg = typeof entry === 'string' ? entry : entry.svg;
    var label = (typeof entry === 'object' && entry.label) || 'Architecture diagram';
    if (!svg) return '';
    return '<figure class="qdiagram">'
      + '<figcaption>' + esc(label) + '</figcaption>'
      + svg
      + '</figure>';
  }

  function startCase(caseId) {
    var ids = caseIdsFor(caseId);
    if (!ids.length) {
      toast('No questions found for that case study.');
      return;
    }
    var settings = readSettingsFromForm();
    settings.shuffle = false;
    settings.domains = ids.map(function (id) { return BY_ID.get(id).domain; })
      .filter(function (key, i, arr) { return arr.indexOf(key) === i; });
    startExam({ ids: ids, settings: settings });
  }

  function allocateQuotas(pool, domains, requested) {
    var available = {};
    var ids = {};
    domains.forEach(function (key) {
      available[key] = 0;
      ids[key] = [];
    });
    pool.forEach(function (q) {
      if (ids[q.domain]) {
        available[q.domain]++;
        ids[q.domain].push(q.id);
      }
    });

    var totalAvailable = pool.length;
    var wanted = Math.max(0, Math.min(requested, totalAvailable));
    var quotas = {};
    domains.forEach(function (key) { quotas[key] = 0; });
    if (!wanted) return { quotas: quotas, ids: ids, total: totalAvailable };

    var weightSum = domains.reduce(function (sum, key) { return sum + DOMAIN_WEIGHT[key]; }, 0);
    var shares = domains.map(function (key) {
      return { key: key, exact: wanted * DOMAIN_WEIGHT[key] / weightSum };
    });

    var assigned = 0;
    shares.forEach(function (share) {
      var quota = Math.min(Math.floor(share.exact), available[share.key]);
      quotas[share.key] = quota;
      assigned += quota;
    });

    if (wanted >= domains.length) {
      domains.forEach(function (key) {
        if (!quotas[key] && available[key]) {
          quotas[key] = 1;
          assigned++;
        }
      });
    }

    while (assigned > wanted) {
      var largest = domains.filter(function (key) { return quotas[key] > 1; })
        .sort(function (a, b) { return quotas[b] - quotas[a]; })[0];
      if (!largest) break;
      quotas[largest]--;
      assigned--;
    }

    var remaining = wanted - assigned;
    var byRemainder = shares.slice().sort(function (a, b) {
      return (b.exact - Math.floor(b.exact)) - (a.exact - Math.floor(a.exact));
    });
    var guard = 0;
    while (remaining > 0 && guard < 1000) {
      var placed = false;
      for (var i = 0; i < byRemainder.length && remaining > 0; i++) {
        var key = byRemainder[i].key;
        if (quotas[key] < available[key]) {
          quotas[key]++;
          remaining--;
          placed = true;
        }
      }
      if (!placed) break;
      guard++;
    }

    return { quotas: quotas, ids: ids, total: totalAvailable };
  }

  function sampleExam(pool, domains, requested) {
    var alloc = allocateQuotas(pool, domains, requested);
    var picked = [];
    DOMAIN_ORDER.forEach(function (key) {
      if (!alloc.ids[key]) return;
      picked = picked.concat(shuffled(alloc.ids[key]).slice(0, alloc.quotas[key]));
    });
    return picked;
  }

  function startExam(opts) {
    opts = opts || {};
    var settings = opts.settings || readSettingsFromForm();
    var domains = opts.domains || settings.domains || DOMAIN_ORDER.slice();
    var requested = opts.ids ? 0 : (opts.count != null ? opts.count : (settings.count || DEFAULT_COUNT));
    var pool = opts.ids ? [] : poolForDomains(domains);
    var order = opts.ids ? opts.ids.slice() : sampleExam(pool, domains, requested);
    if (!order.length) {
      toast('Choose at least one section and a question count.');
      return;
    }
    if (settings.shuffle) order = shuffled(order);
    var limit = order.length * SECONDS_PER_QUESTION;

    state = {
      settings: {
        timer: !!settings.timer,
        instant: !!settings.instant,
        shuffle: !!settings.shuffle,
        domains: domains.slice()
      },
      order: order,
      limit: limit,
      answers: {},
      flags: {},
      checked: {},
      index: 0,
      remaining: limit,
      used: 0,
      startedAt: Date.now(),
      lastTick: Date.now(),
      ticks: 0,
      submitted: false
    };
    phase = 'exam';
    reviewFilter = 'all';
    persist();
    startTicker();
    render();
  }

  function resumeSaved() {
    var rec = readSave();
    if (!rec) {
      toast('No saved attempt found.');
      render();
      return;
    }
    state = rec.state;
    if (!state.settings) state.settings = { timer: true, instant: false, shuffle: false };
    if (!state.answers) state.answers = {};
    if (!state.flags) state.flags = {};
    if (!state.checked) state.checked = {};
    if (!state.limit) state.limit = state.order.length * SECONDS_PER_QUESTION;
    if (typeof state.remaining !== 'number' || state.remaining > state.limit) state.remaining = state.limit;
    phase = state.submitted ? 'results' : 'exam';
    reviewFilter = 'all';
    state.lastTick = Date.now();
    if (phase === 'exam') startTicker();
    render();
  }

  function goHome() {
    stopTicker();
    if (state && !state.submitted) persist();
    phase = 'start';
    render();
  }

  /* --------------------------------------------------------------- actions */

  function chooseOption(letter) {
    var q = currentQ();
    if (!q || phase !== 'exam' || isRevealed(q)) return;
    if (!q.options.some(function (opt) { return opt.letter === letter; })) return;

    var multi = q.answers.length > 1;
    var sel = selection(q.id).slice();

    if (multi) {
      var at = sel.indexOf(letter);
      if (at === -1) sel.push(letter);
      else sel.splice(at, 1);
      sel.sort();
    } else {
      sel = [letter];
    }

    if (sel.length) state.answers[q.id] = sel;
    else delete state.answers[q.id];

    if (!multi && state.settings.instant) state.checked[q.id] = true;

    persist();
    render({ keepScroll: true });
    var btn = document.querySelector('.option[data-letter="' + letter + '"]');
    if (btn) btn.focus({ preventScroll: true });
  }

  function checkAnswer() {
    var q = currentQ();
    if (!q || phase !== 'exam') return;
    if (!selection(q.id).length) return;
    state.checked[q.id] = true;
    persist();
    render({ keepScroll: true });
  }

  function toggleFlag() {
    var q = currentQ();
    if (!q) return;
    if (state.flags[q.id]) delete state.flags[q.id];
    else state.flags[q.id] = true;
    persist();
    render({ keepScroll: true });
  }

  function gotoIndex(index) {
    if (!state) return;
    if (index < 0 || index >= state.order.length) return;
    state.index = index;
    persist();
    render();
  }

  function navigate(direction) {
    if (!state) return;

    if (phase === 'review') {
      var set = reviewIndices();
      if (!set.length) return;
      var pos = set.indexOf(state.index);
      var next;
      if (pos === -1) next = set[0];
      else next = set[Math.min(set.length - 1, Math.max(0, pos + direction))];
      state.index = next;
      render();
      return;
    }

    var max = state.order.length - 1;
    state.index = Math.min(max, Math.max(0, state.index + direction));
    persist();
    render();
  }

  function openSubmitModal() {
    if (!state || phase !== 'exam') return;
    closeModal();

    var total = state.order.length;
    var unanswered = total - answeredCount();
    var auto = state.settings.timer ? '<p class="modal-line">Time left: <strong>' + fmtClock(state.remaining) + '</strong></p>' : '';

    var warning = unanswered > 0
      ? '<p class="modal-line warn"><strong>' + unanswered + ' unanswered question' + (unanswered === 1 ? '' : 's') + '</strong> will score zero.</p>'
      : '<p class="modal-line">You answered all ' + total + ' questions. Nothing is left blank.</p>';

    var host = document.createElement('div');
    host.className = 'modal-backdrop';
    host.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">'
      + '<h2 id="modal-title">Submit your exam?</h2>'
      + '<p class="modal-sub">Once submitted, answers lock and the full review unlocks.</p>'
      + warning + auto
      + '<div class="modal-actions">'
      + '<button class="btn btn-ghost" data-act="modal-close">Keep working</button>'
      + '<button class="btn btn-primary" data-act="submit-confirm">Submit exam</button>'
      + '</div></div>';

    host.addEventListener('click', function (event) {
      if (event.target === host) closeModal();
    });
    document.body.appendChild(host);

    var confirmBtn = host.querySelector('[data-act="submit-confirm"]');
    if (confirmBtn) confirmBtn.focus();
  }

  function closeModal() {
    var el = document.querySelector('.modal-backdrop');
    if (el) el.remove();
  }

  function doSubmit(auto) {
    if (!state || state.submitted) return;
    closeModal();
    stopTicker();
    state.submitted = true;
    state.finishedAt = Date.now();
    phase = 'results';
    reviewFilter = 'all';
    var passed = gradeOf(state).pass;
    recordSrs(state);
    persist();
    render();
    if (passed) launchFireworks();
    if (auto) toast('Time is up - your exam was submitted automatically.');
  }

  function launchFireworks() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (document.querySelector('.fireworks')) return;

    var host = document.createElement('div');
    host.className = 'fireworks';
    host.setAttribute('aria-hidden', 'true');
    var canvas = document.createElement('canvas');
    host.appendChild(canvas);
    document.body.appendChild(host);

    var ctx = canvas.getContext('2d');
    if (!ctx) {
      host.remove();
      return;
    }

    var dpr = Math.min(2, window.devicePixelRatio || 1);
    function sizeCanvas() {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    sizeCanvas();

    var colors = ['#f43f5e', '#f59e0b', '#22c55e', '#38bdf8', '#a855f7', '#facc15', '#fb7185'];
    var particles = [];
    var startedAt = Date.now();
    var lastBurst = 0;

    function burst(x, y) {
      var color = colors[Math.floor(Math.random() * colors.length)];
      var count = 70 + Math.floor(Math.random() * 40);
      for (var i = 0; i < count; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = 1.2 + Math.random() * 5.4;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.007 + Math.random() * 0.011,
          color: color,
          size: 1.8 + Math.random() * 2.8
        });
      }
      if (particles.length > 2200) particles.splice(0, particles.length - 2200);
    }

    var raf = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };

    burst(window.innerWidth * 0.24, window.innerHeight * 0.3);
    burst(window.innerWidth * 0.5, window.innerHeight * 0.2);
    burst(window.innerWidth * 0.76, window.innerHeight * 0.34);

    function frame() {
      var now = Date.now();
      if (now - startedAt >= 5000) {
        host.remove();
        return;
      }

      var w = window.innerWidth;
      var h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';

      if (now - lastBurst > 220) {
        lastBurst = now;
        burst(w * (0.08 + Math.random() * 0.84), h * (0.08 + Math.random() * 0.58));
      }

      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.045;
        p.vx *= 0.995;
        p.vy *= 0.995;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = 'source-over';
      raf(frame);
    }

    raf(frame);
    setTimeout(function () {
      if (host.parentNode) host.remove();
    }, 5400);
  }

  function startReview() {
    if (!state) return;
    phase = 'review';
    reviewFilter = 'all';
    var wrong = state.order.findIndex(function (id) { return !isCorrectWith(state, BY_ID.get(id)); });
    state.index = wrong === -1 ? 0 : wrong;
    render();
  }

  function applyFilter(filter) {
    reviewFilter = filter;
    var set = reviewIndices();
    if (set.length && set.indexOf(state.index) === -1) state.index = set[0];
    render();
  }

  function retakeMissed() {
    if (!state) return;
    var missed = state.order.filter(function (id) { return !isCorrectWith(state, BY_ID.get(id)); });
    if (!missed.length) {
      toast('Nothing to retake - every question was correct.');
      return;
    }
    var settings = state.settings;
    startExam({ ids: missed, settings: settings });
    toast('Retaking ' + missed.length + ' missed question' + (missed.length === 1 ? '' : 's') + '.');
  }

  function startSrs() {
    var summary = srsSummary();
    if (!summary.due.length) {
      toast(summary.total
        ? 'Nothing is due yet. Next review ' + (summary.next ? dueLabel(summary.next) : 'soon') + '.'
        : 'The review queue is empty. Missed questions are added automatically.');
      return;
    }
    var ids = summary.due.slice();
    var settings = loadSettings();
    startExam({
      ids: ids,
      settings: { timer: false, instant: true, shuffle: settings.shuffle, domains: DOMAIN_ORDER.slice() }
    });
    toast('Reviewing ' + ids.length + ' question' + (ids.length === 1 ? '' : 's') + ' from the queue.');
  }

  function clearSrs() {
    if (!window.confirm('Clear the spaced-review queue? Questions you miss in future attempts will still be added.')) return;
    storeSrs({});
    render();
    toast('Review queue cleared.');
  }

  /* ------------------------------------------------------------ print view */

  function printCardHTML(q, index) {
    var sel = selection(q.id);
    var ok = isCorrectWith(state, q);
    var options = q.options.map(function (opt) {
      var cls = q.answers.indexOf(opt.letter) !== -1 ? 'ok' : '';
      if (sel.indexOf(opt.letter) !== -1) cls += ' sel';
      return '<li class="' + cls + '"><strong>' + opt.letter + '.</strong> ' + inline(opt.text) + '</li>';
    }).join('');

    return '<article class="print-card">'
      + '<header><span>Question ' + (index + 1) + '</span><span class="' + (ok ? 'ok' : 'no') + '">' + (ok ? 'Correct' : 'Incorrect') + '</span></header>'
      + '<h3>' + esc(q.topic) + '</h3>'
      + diagramHTML(q)
      + '<div class="md">' + md(q.stem) + '</div>'
      + '<ul class="print-opts">' + options + '</ul>'
      + '<p class="print-ans">Correct: <strong>' + q.answers.join(', ') + '</strong> &middot; Your answer: <strong>' + (sel.length ? sel.join(', ') : 'none') + '</strong></p>'
      + '<div class="md print-exp">' + md(q.explanation) + '</div>'
      + (q.source ? '<p class="print-src">Source: ' + esc(q.source) + '</p>' : '')
      + '</article>';
  }

  function beginPrint(area, html) {
    area.innerHTML = html;

    var cleaned = false;
    function cleanup() {
      if (cleaned) return;
      cleaned = true;
      area.innerHTML = '';
      document.body.classList.remove('printing');
      window.removeEventListener('afterprint', cleanup);
    }

    window.addEventListener('afterprint', cleanup);
    document.body.classList.add('printing');
    window.print();
    setTimeout(cleanup, 300000);
  }

  function printReview() {
    var area = document.getElementById('print-area');
    if (!area || !state) return;
    var g = gradeOf(state);
    var head = '<header class="print-head"><h1>' + esc(EXAM_CODE) + ' practice exam - answer review</h1>'
      + '<p>' + g.correct + ' of ' + g.total + ' correct &middot; ' + g.pct + '% &middot; '
      + g.scaled + '/1000 scaled &middot; ' + (g.pass ? 'Pass' : 'Below the 700 pass mark') + '</p></header>';

    var seenCase = {};
    var cards = state.order.map(function (id, index) {
      var q = BY_ID.get(id);
      var intro = '';
      if (q.case && !seenCase[q.case]) {
        seenCase[q.case] = true;
        var study = CASE_BY_ID.get(q.case);
        if (study) intro = '<section class="print-case"><h2>' + esc(study.title) + '</h2>' + study.html + '</section>';
      }
      return intro + printCardHTML(q, index);
    }).join('');

    beginPrint(area, head + cards);
  }

  function printScoreReport() {
    var area = document.getElementById('print-area');
    var report = document.querySelector('.report');
    if (!area || !report) return;
    beginPrint(area, '<div class="print-report">' + report.outerHTML + '</div>');
  }

  /* -------------------------------------------------------------- rendering */

  function render(opts) {
    opts = opts || {};
    var keep = opts.keepScroll ? window.scrollY : 0;
    var hud = document.getElementById('hud');
    var view = document.getElementById('view');

    if (!QUESTIONS.length) {
      view.innerHTML = '<div class="fatal"><h1>Question data missing</h1><p>Could not load <code>questions.js</code>. Make sure it sits next to <code>index.html</code>.</p></div>';
      hud.innerHTML = '';
      return;
    }

    hud.innerHTML = hudHTML();

    if (phase === 'start') {
      savedRecord = readSave();
      view.innerHTML = startHTML();
    } else if (phase === 'exam' && state) {
      view.innerHTML = examHTML();
    } else if (phase === 'results' && state) {
      view.innerHTML = resultsHTML();
    } else if (phase === 'review' && state) {
      view.innerHTML = reviewHTML();
    } else {
      phase = 'start';
      savedRecord = readSave();
      view.innerHTML = startHTML();
    }

    updateTimer();
    if (phase === 'start') syncPresets();

    if (keep) {
      window.scrollTo(0, keep);
    } else {
      window.scrollTo(0, 0);
      if (view.focus) view.focus({ preventScroll: true });
    }
  }

  function hudHTML() {
    if (phase === 'exam' && state) {
      var timerLabel = state.settings.timer ? 'Time left' : 'Elapsed';
      var timerValue = fmtClock(state.settings.timer ? state.remaining : state.used);
      var low = state.settings.timer && state.remaining <= 300;
      return '<div class="hud-status">' + answeredCount() + ' of ' + state.order.length + ' answered</div>'
        + '<div class="timer' + (low ? ' is-low' : '') + '" id="timer"><span>' + timerLabel + '</span><strong>' + timerValue + '</strong></div>'
        + '<button class="btn btn-primary btn-sm" data-act="submit">' + (state.settings.instant ? 'Finish' : 'Submit exam') + '</button>';
    }
    if (phase === 'results' && state) {
      var g = gradeOf(state);
      return '<div class="hud-status">Score report &middot; ' + (g.pass ? 'Pass' : 'Fail') + ' &middot; ' + g.scaled + '</div>'
        + '<button class="btn btn-ghost btn-sm" data-act="review">Review answers</button>'
        + '<button class="btn btn-ghost btn-sm" data-act="home">Start screen</button>';
    }
    if (phase === 'review' && state) {
      return '<div class="hud-status">Answer review</div>'
        + '<button class="btn btn-ghost btn-sm" data-act="results">Back to results</button>'
        + '<button class="btn btn-ghost btn-sm" data-act="home">Start screen</button>';
    }
    return '<div class="hud-note">' + QUESTIONS.length + ' questions in the bank &middot; pass at ' + PASS_MARK + '</div>';
  }

  function startHTML() {
    var settings = loadSettings();
    var counts = {};
    DOMAIN_ORDER.forEach(function (key) { counts[key] = 0; });
    QUESTIONS.forEach(function (q) {
      if (counts[q.domain] != null) counts[q.domain]++;
    });

    var sections = DOMAIN_ORDER.map(function (key) {
      var d = DOMAINS[key];
      var on = settings.domains.indexOf(key) !== -1;
      return '<label class="dsec">'
        + '<input type="checkbox" name="domain" value="' + key + '" data-setup' + (on ? ' checked' : '') + '>'
        + '<span class="dsec-body">'
        + '<span class="dsec-name"><i class="swatch ' + key + '"></i>' + esc(d.label) + '</span>'
        + '<span class="dsec-meta">' + counts[key] + ' questions &middot; ' + d.weight + '</span>'
        + '</span></label>';
    }).join('');

    var selectedCount = settings.domains.reduce(function (sum, key) { return sum + (counts[key] || 0); }, 0);
    var requested = settings.count || DEFAULT_COUNT;
    var planned = Math.min(requested, selectedCount);
    if (selectedCount && planned < 1) planned = 1;
    var minutes = Math.round(planned * SECONDS_PER_QUESTION / 60);

    return '<div class="start">'
      + '<div class="start-main">'
      + '<section class="hero">'
      + '<p class="eyebrow">Microsoft Certified &middot; ' + esc(EXAM_CERT) + '</p>'
      + '<h1>' + esc(EXAM_CODE) + ' exam simulator</h1>'
      + '<p class="lede">' + esc(CONFIG.lede || ('A full-length practice exam built from the Microsoft Learn ' + EXAM_CODE + ' learning paths. Run the whole exam, or focus on the sections you want to drill, then get a score report that mirrors the real one.')) + '</p>'
      + '<dl class="facts">'
      + '<div><dt>Questions</dt><dd id="fact-questions">' + planned + '</dd></div>'
      + '<div><dt>Time limit</dt><dd id="fact-minutes">' + (settings.timer ? minutes + ' min' : 'off') + '</dd></div>'
      + '<div><dt>Pass score</dt><dd>' + PASS_MARK + '</dd></div>'
      + '<div><dt>Sections</dt><dd id="fact-sections">' + settings.domains.length + '</dd></div>'
      + '</dl>'
      + '<p class="hero-note">Every question links back to its source module in the review, so a missed item tells you exactly what to reread.</p>'
      + '</section>'
      + caseStartHTML()
      + '</div>'
      + '<div class="start-side">'
      + '<section class="panel">'
      + '<h2>Start an attempt</h2>'
      + '<div class="field">'
      + '<span class="field-label">Feedback</span>'
      + '<div class="segmented" role="radiogroup" aria-label="Feedback mode">'
      + '<label><input type="radio" name="mode" value="exam"' + (settings.instant ? '' : ' checked') + '><span><strong>Exam</strong><small>Score at the end</small></span></label>'
      + '<label><input type="radio" name="mode" value="practice"' + (settings.instant ? ' checked' : '') + '><span><strong>Practice</strong><small>Feedback as you go</small></span></label>'
      + '</div>'
      + '</div>'
      + '<div class="field">'
      + '<div class="field-head"><span class="field-label">Sections</span>'
      + '<span class="mini-actions"><button type="button" class="linkbtn" data-act="sections-all">All</button>'
      + '<button type="button" class="linkbtn" data-act="sections-none">None</button></span></div>'
      + '<div class="sections">' + sections + '</div>'
      + '</div>'
      + '<div class="field">'
      + '<div class="field-head"><label class="field-label" for="opt-count">Questions</label>'
      + '<span class="count-max" id="count-max">' + selectedCount + ' available</span></div>'
      + '<div class="count-row">'
      + '<input type="number" id="opt-count" data-setup min="1" step="1" inputmode="numeric" value="' + requested + '"' + (selectedCount ? ' max="' + selectedCount + '"' : '') + '>'
      + '<span class="count-hint">Random draw, weighted by section</span>'
      + '</div>'
      + '</div>'
      + '<div class="field">'
      + '<div class="field-head"><span class="field-label">Drill presets</span></div>'
      + '<div class="presets" role="group" aria-label="Drill presets">'
      + PRESETS.map(function (preset) {
        return '<button type="button" class="chip" data-act="preset" data-preset="' + preset.key + '" aria-pressed="false">' + esc(preset.label) + '</button>';
      }).join('')
      + '</div>'
      + '<p class="presets-note">Fills in the sections and question count. Adjust either one afterwards for a custom mix.</p>'
      + '</div>'
      + '<label class="check-row"><input type="checkbox" id="opt-timer" data-setup' + (settings.timer ? ' checked' : '') + '>'
      + '<span><strong>Timer</strong><small id="timer-note">' + (settings.timer ? minutes + '-minute countdown, auto-submits at zero' : 'No time limit') + '</small></span></label>'
      + '<label class="check-row"><input type="checkbox" id="opt-shuffle"' + (settings.shuffle ? ' checked' : '') + '>'
      + '<span><strong>Shuffle questions</strong><small>Mix the order within the selected sections</small></span></label>'
      + '<button class="btn btn-primary btn-lg btn-block" data-act="start" id="start-btn">Start exam</button>'
      + '<p class="hint" id="start-hint">Answers save in this browser automatically. Leave at any time and resume where you stopped.</p>'
      + resumeHTML(savedRecord)
      + '</section>'
      + '</div>'
      + srsHTML()
      + '</div>';
  }

  function caseStartHTML() {
    if (!CASE_LIST.length) return '';
    return '<section class="panel case-start" aria-labelledby="case-title">'
      + '<h2 id="case-title">Case study drills</h2>'
      + '<p class="case-note">The live exam opens with a long scenario and then asks several questions against it. Each drill below walks one case in order and keeps the background pinned above every question.</p>'
      + CASE_LIST.map(function (study, i) {
        var count = caseIdsFor(study.id).length;
        return '<div class="case-row">'
          + '<div class="case-row-text"><strong>' + esc(study.title) + '</strong>'
          + '<span>' + count + ' questions &middot; shared background</span></div>'
          + '<button class="btn btn-sm" data-act="case" data-case="' + esc(study.id) + '">Start case ' + (i + 1) + '</button>'
          + '</div>';
      }).join('')
      + '</section>';
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function updateSetup() {
    var boxes = Array.prototype.slice.call(document.querySelectorAll('input[name="domain"]'));
    if (!boxes.length) return;

    var chosen = boxes.filter(function (box) { return box.checked; });
    var available = QUESTIONS.filter(function (q) {
      return chosen.some(function (box) { return box.value === q.domain; });
    }).length;
    var requested = requestedCount();
    var count = Math.min(requested, available);
    var minutes = Math.round(count * SECONDS_PER_QUESTION / 60);
    var timerEl = document.getElementById('opt-timer');
    var timerOn = timerEl ? timerEl.checked : true;

    var input = document.getElementById('opt-count');
    if (input) {
      if (available) input.setAttribute('max', String(available));
      else input.removeAttribute('max');
    }
    setText('count-max', available + ' available');
    setText('fact-questions', String(count));
    setText('fact-minutes', timerOn ? (count ? minutes + ' min' : '--') : 'off');
    setText('fact-sections', String(chosen.length));
    setText('timer-note',
      !available ? 'Select at least one section'
        : !requested ? 'Enter the number of questions'
          : timerOn ? minutes + '-minute countdown, auto-submits at zero'
            : 'No time limit - work at your own pace');

    var button = document.getElementById('start-btn');
    if (button) button.disabled = count === 0;

    var hint = document.getElementById('start-hint');
    if (hint) {
      if (!available) hint.textContent = 'Choose at least one section to start.';
      else if (!requested) hint.textContent = 'Enter how many questions you want to answer.';
      else if (requested > available) hint.textContent = 'Only ' + available + ' questions are available in the selected sections, so the exam will use all ' + available + '.';
      else hint.textContent = 'Answers save in this browser automatically. Leave at any time and resume where you stopped.';
    }

    syncPresets();
  }

  function setSections(on) {
    Array.prototype.forEach.call(document.querySelectorAll('input[name="domain"]'), function (box) {
      box.checked = on;
    });
    updateSetup();
    storeSetup();
  }

  function setupSignature(count, domains) {
    return count + ':' + domains.slice().sort().join(',');
  }

  function activePresetKey() {
    var signature = setupSignature(requestedCount(), checkedDomains());
    var match = '';
    PRESETS.some(function (preset) {
      if (setupSignature(preset.count, preset.domains) === signature) {
        match = preset.key;
        return true;
      }
      return false;
    });
    return match;
  }

  function syncPresets() {
    var active = activePresetKey();
    Array.prototype.forEach.call(document.querySelectorAll('.chip[data-preset]'), function (chip) {
      var on = chip.dataset.preset === active;
      chip.classList.toggle('is-active', on);
      chip.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function applyPreset(key) {
    var preset = null;
    PRESETS.forEach(function (item) {
      if (item.key === key) preset = item;
    });
    if (!preset) return;

    Array.prototype.forEach.call(document.querySelectorAll('input[name="domain"]'), function (box) {
      box.checked = preset.domains.indexOf(box.value) !== -1;
    });
    var input = document.getElementById('opt-count');
    if (input) input.value = String(preset.count);

    updateSetup();
    storeSetup();
    toast(preset.label + ' preset applied.');
  }

  function resumeHTML(rec) {
    if (!rec || !rec.state) return '';
    var st = rec.state;
    if (st.submitted) {
      var g = gradeOf(st);
      return '<div class="resume">'
        + '<div class="resume-text"><strong>Last attempt</strong><p>' + g.correct + '/' + g.total + ' correct &middot; ' + g.scaled + '/1000</p></div>'
        + '<div class="resume-actions"><button class="btn btn-sm" data-act="resume">Open results</button>'
        + '<button class="btn btn-ghost btn-sm" data-act="discard">Discard</button></div>'
        + '</div>';
    }
    var answered = st.order.filter(function (id) { return (st.answers[id] || []).length > 0; }).length;
    var time = st.settings && st.settings.timer
      ? fmtClock(st.remaining) + ' left'
      : fmtClock(st.used || 0) + ' elapsed';
    return '<div class="resume">'
      + '<div class="resume-text"><strong>Attempt in progress</strong><p>Question ' + (st.index + 1) + ' of ' + st.order.length
      + ' &middot; ' + answered + ' answered &middot; ' + time + '</p></div>'
      + '<div class="resume-actions"><button class="btn btn-primary btn-sm" data-act="resume">Resume</button>'
      + '<button class="btn btn-ghost btn-sm" data-act="discard">Discard</button></div>'
      + '</div>';
  }

  function srsHTML() {
    var summary = srsSummary();
    var due = summary.due.length;
    var note;

    if (!summary.total) {
      note = 'Miss a question and it lands here. Correct reviews push it further out, so your time goes to the items you actually got wrong.';
    } else if (due) {
      note = 'Questions you missed are ready for another pass. Answer them correctly and the next review moves further into the future.';
    } else {
      note = 'Nothing is due right now. The next review comes up ' + (summary.next ? dueLabel(summary.next) : 'soon') + '.';
    }

    return '<section class="panel srs" aria-labelledby="srs-title">'
      + '<div class="srs-head">'
      + '<h2 id="srs-title">Spaced review</h2>'
      + '<span class="srs-badge' + (due ? ' is-due' : '') + '">' + (due ? due + ' due' : 'up to date') + '</span>'
      + '</div>'
      + '<p class="srs-note">' + note + '</p>'
      + '<dl class="srs-stats">'
      + '<div><dt>Due now</dt><dd>' + due + '</dd></div>'
      + '<div><dt>Tracked</dt><dd>' + summary.total + '</dd></div>'
      + '<div><dt>Next review</dt><dd>' + (summary.next ? dueLabel(summary.next) : due ? 'now' : '--') + '</dd></div>'
      + '</dl>'
      + '<div class="srs-actions">'
      + '<button class="btn btn-primary btn-sm" data-act="srs-start"' + (due ? '' : ' disabled') + '>Review ' + (due || 'queue') + (due ? ' due' : '') + '</button>'
      + (summary.total ? '<button class="btn btn-ghost btn-sm" data-act="srs-clear">Clear queue</button>' : '')
      + '</div>'
      + '</section>';
  }

  function queueNoteHTML() {
    var summary = srsSummary();
    if (!summary.total) {
      return '<p class="queue-note">Missed questions join the spaced-review queue on the start screen.</p>';
    }
    return '<p class="queue-note"><strong>' + summary.due.length + ' due now</strong> in the spaced-review queue &middot; '
      + summary.total + ' tracked' + (summary.next ? ' &middot; next ' + dueLabel(summary.next) : '') + '.</p>';
  }

  function optionsHTML(q, sel, revealed) {
    var isMulti = q.answers.length > 1;
    return q.options.map(function (opt) {
      var chosen = sel.indexOf(opt.letter) !== -1;
      var correct = q.answers.indexOf(opt.letter) !== -1;
      var cls = ['option'];
      if (chosen) cls.push('selected');
      if (revealed) {
        if (correct) cls.push('is-correct');
        else if (chosen) cls.push('is-wrong');
        if (!chosen && correct) cls.push('missed');
      }
      var locked = revealed;
      var mark = '';
      if (revealed && correct) mark = '<span class="mark ok" aria-hidden="true">&#10003;</span>';
      else if (revealed && chosen) mark = '<span class="mark no" aria-hidden="true">&#10005;</span>';

      return '<button type="button" class="' + cls.join(' ') + '" data-act="option" data-letter="' + opt.letter + '"'
        + ' role="' + (isMulti ? 'checkbox' : 'radio') + '" aria-checked="' + chosen + '"'
        + (locked ? ' aria-disabled="true"' : '') + '>'
        + '<span class="letter" aria-hidden="true">' + opt.letter + '</span>'
        + '<span class="otext">' + inline(opt.text) + '</span>'
        + mark
        + '</button>';
    }).join('');
  }

  function checkRowHTML(q, sel, revealed) {
    if (revealed) return '';
    if (!(phase === 'exam' && state.settings.instant && q.answers.length > 1)) return '';
    var need = q.answers.length;
    var ready = sel.length === need;
    return '<div class="checkrow">'
      + '<button class="btn btn-check" data-act="check"' + (ready ? '' : ' disabled') + '>Check answer</button>'
      + '<span>' + sel.length + ' of ' + need + ' selected</span>'
      + '</div>';
  }

  function feedbackHTML(q, sel, revealed) {
    if (!revealed) return '';
    var ok = isCorrect(q);
    var detail = 'Correct answer: <b>' + q.answers.join(', ') + '</b>';
    if (phase === 'review') detail += ' &middot; Your answer: <b>' + (sel.length ? sel.join(', ') : 'none') + '</b>';

    return '<div class="feedback ' + (ok ? 'ok' : 'no') + '">'
      + '<div class="fbhead"><span class="fbmark" aria-hidden="true">' + (ok ? '&#10003;' : '&#10005;') + '</span>'
      + '<strong>' + (ok ? 'Correct' : 'Incorrect') + '</strong>'
      + '<span class="fbdetail">' + detail + '</span></div>'
      + '<div class="md fbtext">' + md(q.explanation) + '</div>'
      + (q.source ? '<p class="fbsrc">Source: ' + esc(q.source) + '</p>' : '')
      + '</div>';
  }

  function questionCardHTML(q) {
    var total = state.order.length;
    var sel = selection(q.id);
    var revealed = isRevealed(q);
    var flagged = !!state.flags[q.id];
    var multi = q.answers.length > 1;

    return '<div class="qmeta">'
      + '<span class="badge ' + q.domain + '">' + esc(DOMAINS[q.domain].label) + '</span>'
      + '<span class="qcount">Question ' + (state.index + 1) + ' <span>of ' + total + '</span></span>'
      + '<button class="flagbtn' + (flagged ? ' on' : '') + '" data-act="flag" aria-pressed="' + flagged + '">'
      + '<span aria-hidden="true">&#9873;</span><span>' + (flagged ? 'Flagged' : 'Flag for review') + '</span></button>'
      + '</div>'
      + casePanelHTML(q)
      + diagramHTML(q)
      + '<div class="stem md">' + md(q.stem) + '</div>'
      + '<p class="selecthint">' + (multi ? 'Select ' + q.answers.length + ' answers. Every choice must be correct.' : 'Select one answer.') + '</p>'
      + '<div class="options" role="' + (multi ? 'group' : 'radiogroup') + '" aria-label="Answer choices">' + optionsHTML(q, sel, revealed) + '</div>'
      + checkRowHTML(q, sel, revealed)
      + feedbackHTML(q, sel, revealed)
      + '<div class="qnav">'
      + '<button class="btn btn-ghost" data-act="prev"' + (state.index === 0 ? ' disabled' : '') + '>&#8592; Previous</button>'
      + '<span class="kbdhint">A-E answer &middot; &#8592; &#8594; move &middot; F flag</span>'
      + '<button class="btn btn-primary" data-act="next">' + (state.index === total - 1 ? 'Finish' : 'Next &#8594;') + '</button>'
      + '</div>';
  }

  function paletteHTML(id, index) {
    var q = BY_ID.get(id);
    var cls = ['pbtn'];
    if (phase === 'review') {
      cls.push(isCorrectWith(state, q) ? 'ok' : 'no');
    } else if (selection(id).length) {
      cls.push('answered');
    }
    if (state.flags[id]) cls.push('flagged');
    if (index === state.index) cls.push('current');

    var disabled = '';
    if (phase === 'review' && reviewIndices().indexOf(index) === -1) {
      cls.push('dim');
      disabled = ' disabled';
    }

    var label = 'Question ' + (index + 1)
      + (selection(id).length ? ', answered' : ', not answered')
      + (state.flags[id] ? ', flagged' : '')
      + (phase === 'review' ? (isCorrectWith(state, q) ? ', correct' : ', incorrect') : '');

    return '<button class="' + cls.join(' ') + '" data-act="goto" data-index="' + index + '"' + disabled + ' aria-label="' + label + '">' + (index + 1) + '</button>';
  }

  function sideHTML() {
    var total = state.order.length;
    var answered = answeredCount();
    var pct = total ? Math.round((answered / total) * 100) : 0;

    return '<div class="side-inner">'
      + '<div class="side-head"><h2>Question map</h2><span>' + answered + '/' + total + '</span></div>'
      + '<div class="palette">' + state.order.map(function (id, i) { return paletteHTML(id, i); }).join('') + '</div>'
      + '<div class="legend">'
      + '<span><i class="lg current"></i>Current</span>'
      + '<span><i class="lg answered"></i>Answered</span>'
      + '<span><i class="lg flagged"></i>Flagged</span>'
      + '</div>'
      + '<div class="prog"><div style="width:' + pct + '%"></div></div>'
      + '<button class="btn btn-primary btn-block" data-act="submit">' + (state.settings.instant ? 'Finish attempt' : 'Submit exam') + '</button>'
      + '<p class="side-note">' + (state.settings.timer ? 'The timer stops when you submit.' : 'No timer - work at your own pace.') + '</p>'
      + '</div>';
  }

  function examHTML() {
    return '<div class="exam">'
      + '<section class="qcard">' + questionCardHTML(currentQ()) + '</section>'
      + '<aside class="side">' + sideHTML() + '</aside>'
      + '</div>';
  }

  function filterBtn(value, label, count) {
    return '<button class="filterbtn' + (reviewFilter === value ? ' on' : '') + '" data-act="filter" data-filter="' + value + '">'
      + label + ' <span>' + count + '</span></button>';
  }

  function reviewSideHTML() {
    var counts = { all: state.order.length, wrong: 0, flagged: 0 };
    state.order.forEach(function (id) {
      if (!isCorrectWith(state, BY_ID.get(id))) counts.wrong++;
      if (state.flags[id]) counts.flagged++;
    });

    var answered = answeredCount();
    var pct = state.order.length ? Math.round((answered / state.order.length) * 100) : 0;

    return '<div class="side-inner">'
      + '<div class="side-head"><h2>Filter review</h2></div>'
      + '<div class="filters">'
      + filterBtn('all', 'All', counts.all)
      + filterBtn('wrong', 'Incorrect', counts.wrong)
      + filterBtn('flagged', 'Flagged', counts.flagged)
      + '</div>'
      + '<div class="palette review-palette">' + state.order.map(function (id, i) { return paletteHTML(id, i); }).join('') + '</div>'
      + '<div class="legend"><span><i class="lg ok"></i>Correct</span><span><i class="lg no"></i>Incorrect</span><span><i class="lg flagged"></i>Flagged</span></div>'
      + '<div class="prog"><div style="width:' + pct + '%"></div></div>'
      + '<button class="btn btn-ghost btn-block" data-act="results">Back to results</button>'
      + '<button class="btn btn-primary btn-block" data-act="print">Print full review</button>'
      + '</div>';
  }

  function reviewHTML() {
    var set = reviewIndices();
    if (!set.length) {
      return '<div class="exam"><section class="qcard empty">'
        + '<h1>Nothing to show</h1>'
        + '<p>No questions match this filter.</p>'
        + '<button class="btn btn-primary" data-act="filter" data-filter="all">Show all answers</button>'
        + '</section><aside class="side">' + reviewSideHTML() + '</aside></div>';
    }

    var q = currentQ();
    var pos = set.indexOf(state.index);
    var atStart = pos <= 0;
    var atEnd = pos === -1 || pos >= set.length - 1;
    var sel = selection(q.id);
    var ok = isCorrect(q);

    return '<div class="exam">'
      + '<section class="qcard">'
      + '<div class="qmeta">'
      + '<span class="badge ' + q.domain + '">' + esc(DOMAINS[q.domain].label) + '</span>'
      + '<span class="qcount">Question ' + (state.index + 1) + ' <span>of ' + state.order.length + '</span></span>'
      + '<span class="pill ' + (ok ? 'ok' : 'no') + '">' + (ok ? 'Correct' : 'Incorrect') + '</span>'
      + '</div>'
      + casePanelHTML(q)
      + '<h1 class="qtopic">' + esc(q.topic) + '</h1>'
      + diagramHTML(q)
      + '<div class="stem md">' + md(q.stem) + '</div>'
      + '<p class="selecthint">Correct: <b>' + q.answers.join(', ') + '</b> &middot; Your answer: <b>' + (sel.length ? sel.join(', ') : 'none') + '</b></p>'
      + '<div class="options" role="' + (q.answers.length > 1 ? 'group' : 'radiogroup') + '" aria-label="Answer choices">' + optionsHTML(q, sel, true) + '</div>'
      + feedbackHTML(q, sel, true)
      + '<div class="qnav">'
      + '<button class="btn btn-ghost" data-act="prev"' + (atStart ? ' disabled' : '') + '>&#8592; Previous</button>'
      + '<span class="kbdhint">' + set.length + ' question' + (set.length === 1 ? '' : 's') + ' in this filter</span>'
      + '<button class="btn btn-primary" data-act="next"' + (atEnd ? ' disabled' : '') + '>Next &#8594;</button>'
      + '</div>'
      + '</section>'
      + '<aside class="side">' + reviewSideHTML() + '</aside>'
      + '</div>';
  }

  function reportDate() {
    var when = state.finishedAt || Date.now();
    try {
      return new Date(when).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (err) {
      return '';
    }
  }

  function sectionRowsHTML(g) {
    return DOMAIN_ORDER.filter(function (key) {
      return g.per[key] && g.per[key].total > 0;
    }).map(function (key) {
      var d = g.per[key];
      var pct = Math.round((d.correct / d.total) * 100);
      return '<li class="report-row">'
        + '<div class="report-row-top">'
        + '<span class="report-row-name"><i class="swatch ' + key + '"></i>' + esc(DOMAINS[key].label) + '</span>'
        + '<span class="report-row-weight">' + esc(DOMAINS[key].weight) + '</span>'
        + '<span class="report-row-score">' + d.correct + '/' + d.total + ' &middot; ' + pct + '%</span>'
        + '</div>'
        + '<div class="report-bar"><div class="report-fill" style="width:' + pct + '%;background:' + DOMAINS[key].color + '"></div>'
        + '<i class="report-target" aria-hidden="true"></i></div>'
        + '</li>';
    }).join('');
  }

  function studyHTML(g) {
    var answered = answeredCount();
    var wrong = Math.max(0, answered - g.correct);
    var blank = Math.max(0, g.total - answered);
    var queue = srsSummary();

    return '<section class="card study" aria-labelledby="study-title">'
      + '<h2 id="study-title">Practice detail</h2>'
      + '<p class="study-note">The score report above is shaped like the Pearson VUE one. These are the raw numbers behind it.</p>'
      + '<dl class="study-facts">'
      + '<div><dt>Questions</dt><dd>' + g.total + '</dd></div>'
      + '<div><dt>Correct</dt><dd class="ok">' + g.correct + '</dd></div>'
      + '<div><dt>Incorrect</dt><dd class="no">' + wrong + '</dd></div>'
      + '<div><dt>Unanswered</dt><dd>' + blank + '</dd></div>'
      + '<div><dt>Raw score</dt><dd>' + g.pct + '%</dd></div>'
      + '<div><dt>Time used</dt><dd>' + fmtClock(state.used) + '</dd></div>'
      + '</dl>'
      + '<div class="stack">'
      + '<button class="btn btn-primary btn-block" data-act="review">Review all answers</button>'
      + '<button class="btn btn-ghost btn-block" data-act="retake-missed"' + (g.total - g.correct ? '' : ' disabled') + '>Retake missed (' + (g.total - g.correct) + ')</button>'
      + (queue.due.length ? '<button class="btn btn-ghost btn-block" data-act="srs-start">Review queue (' + queue.due.length + ')</button>' : '')
      + '<button class="btn btn-ghost btn-block" data-act="print-report">Print score report</button>'
      + '<button class="btn btn-ghost btn-block" data-act="print">Print full review</button>'
      + '<button class="btn btn-ghost btn-block" data-act="home">Start a new attempt</button>'
      + '</div>'
      + queueNoteHTML()
      + '<p class="fineprint">Practice explanations name the module each fact came from. Multi-select items are scored all-or-nothing, like the live exam.</p>'
      + '</section>';
  }

  function resultsHTML() {
    var g = gradeOf(state);
    var verdict = g.pass ? 'Pass' : 'Fail';
    var sectionCount = DOMAIN_ORDER.filter(function (key) {
      return g.per[key] && g.per[key].total > 0;
    }).length;
    var sectionTotal = DOMAIN_ORDER.filter(function (key) {
      return state.settings.domains && state.settings.domains.indexOf(key) !== -1;
    }).length || DOMAIN_ORDER.length;

    return '<div class="results">'
      + '<section class="report" aria-labelledby="report-title">'
      + '<header class="report-head">'
      + '<p class="report-brand"><span class="ms-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Microsoft Certified</p>'
      + '<h1 id="report-title">Exam ' + esc(EXAM_CODE) + ': ' + esc(EXAM_CERT) + '</h1>'
      + '<p class="report-kicker">Score report</p>'
      + '</header>'
      + '<dl class="report-meta">'
      + '<div><dt>Date</dt><dd>' + esc(reportDate()) + '</dd></div>'
      + '<div><dt>Attempt</dt><dd>Practice exam</dd></div>'
      + '<div><dt>Sections</dt><dd>' + sectionCount + ' of ' + sectionTotal + '</dd></div>'
      + '<div><dt>Time used</dt><dd>' + fmtClock(state.used) + '</dd></div>'
      + '</dl>'
      + '<div class="report-verdict ' + (g.pass ? 'ok' : 'no') + '">'
      + '<span class="report-verdict-label">Result</span>'
      + '<strong>' + verdict + '</strong>'
      + '</div>'
      + '<div class="report-scores">'
      + '<div class="report-score"><span>Your score</span><strong>' + g.scaled + '</strong></div>'
      + '<div class="report-score"><span>Passing score</span><strong>' + PASS_MARK + '</strong></div>'
      + '<p class="report-scale">Scores are reported on a scale of 1 to 1,000.</p>'
      + '</div>'
      + '<section class="report-sections" aria-labelledby="report-sections-title">'
      + '<h2 id="report-sections-title">Performance by exam section</h2>'
      + '<ul class="report-list">' + sectionRowsHTML(g) + '</ul>'
      + '<p class="report-legend"><i class="report-target sample" aria-hidden="true"></i>The marker shows where the 700 pass mark sits on each bar.</p>'
      + '</section>'
      + '<p class="report-note">Your score is based on the number of points you earned for each question. You need a score of 700 or greater to pass. Scores are reported on a scale of 1 to 1,000. This practice report estimates a scaled score from your raw percentage; the live exam may weight items and score differently.</p>'
      + '</section>'
      + studyHTML(g)
      + '</div>';
  }

  /* ---------------------------------------------------------------- events */

  function onClick(event) {
    var el = event.target.closest ? event.target.closest('[data-act]') : null;
    if (!el) return;
    if (el.tagName === 'A') event.preventDefault();
    if (el.hasAttribute('disabled')) return;

    var act = el.dataset.act;

    switch (act) {
      case 'start':
        startExam({});
        break;
      case 'resume':
        resumeSaved();
        break;
      case 'discard':
        if (window.confirm('Discard the saved attempt?')) {
          clearSave();
          toast('Saved attempt discarded.');
          render();
        }
        break;
      case 'home':
        goHome();
        break;
      case 'theme':
        setTheme(currentTheme() === 'dark' ? 'light' : 'dark', true);
        break;
      case 'option':
        chooseOption(el.dataset.letter);
        break;
      case 'check':
        checkAnswer();
        break;
      case 'flag':
        toggleFlag();
        break;
      case 'prev':
        navigate(-1);
        break;
      case 'next':
        if (phase === 'exam' && state.index === state.order.length - 1) openSubmitModal();
        else navigate(1);
        break;
      case 'goto':
        gotoIndex(Number(el.dataset.index));
        break;
      case 'submit':
        openSubmitModal();
        break;
      case 'submit-confirm':
        doSubmit(false);
        break;
      case 'modal-close':
        closeModal();
        break;
      case 'results':
        phase = 'results';
        render();
        break;
      case 'review':
        startReview();
        break;
      case 'filter':
        applyFilter(el.dataset.filter);
        break;
      case 'retake-missed':
        retakeMissed();
        break;
      case 'sections-all':
        setSections(true);
        break;
      case 'sections-none':
        setSections(false);
        break;
      case 'preset':
        applyPreset(el.dataset.preset);
        break;
      case 'case':
        startCase(el.dataset.case);
        break;
      case 'srs-start':
        startSrs();
        break;
      case 'srs-clear':
        clearSrs();
        break;
      case 'print-report':
        printScoreReport();
        break;
      case 'print':
        printReview();
        break;
      default:
        break;
    }
  }

  function onChange(event) {
    var el = event.target;
    if (!el || el.nodeType !== 1 || !el.matches) return;
    if (phase !== 'start') return;
    if (!el.matches('input[name="domain"], #opt-timer, #opt-shuffle, #opt-count, input[name="mode"]')) return;
    updateSetup();
    storeSetup();
  }

  function onCountInput(event) {
    var el = event.target;
    if (!el || el.id !== 'opt-count' || phase !== 'start') return;
    updateSetup();
    storeSetup();
  }

  function onKey(event) {
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (!state) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.querySelector('.modal-backdrop')) return;

    var tag = (event.target && event.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (phase !== 'exam' && phase !== 'review') return;

    var key = event.key;

    if (phase === 'exam') {
      if (key.length === 1) {
        var upper = key.toUpperCase();
        if (LETTERS.indexOf(upper) !== -1) {
          event.preventDefault();
          chooseOption(upper);
          return;
        }
        if (/^[1-5]$/.test(key)) {
          var byNumber = LETTERS[Number(key) - 1];
          var q = currentQ();
          if (q && q.options.some(function (opt) { return opt.letter === byNumber; })) {
            event.preventDefault();
            chooseOption(byNumber);
          }
          return;
        }
      }
    }

    if (key === 'ArrowRight' || key === 'n' || key === 'N') {
      event.preventDefault();
      navigate(1);
    } else if (key === 'ArrowLeft' || key === 'p' || key === 'P') {
      event.preventDefault();
      navigate(-1);
    } else if (key === 'f' || key === 'F') {
      event.preventDefault();
      toggleFlag();
    }
  }

  /* ------------------------------------------------------------------ boot */

  function boot() {
    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('input', onCountInput);
    document.addEventListener('keydown', onKey);

    window.addEventListener('beforeunload', function () {
      if (state && !state.submitted && phase === 'exam') persist();
    });
    document.addEventListener('visibilitychange', function () {
      if (!state || state.submitted || phase !== 'exam') return;
      if (document.hidden) {
        persist();
        stopTicker();
      } else {
        state.lastTick = Date.now();
        startTicker();
      }
    });

    var view = document.getElementById('view');
    if (view) view.tabIndex = -1;

    installThemeButton();
    applyTheme(currentTheme());
    watchSystemTheme();

    // A pack that finishes loading after boot (local file picker, late fetch)
    // can re-adopt its data and repaint from the start screen.
    window.EXAM_RELOAD = function (payload) {
      adoptData(payload);
      phase = 'start';
      state = null;
      reviewFilter = 'all';
      savedRecord = readSave();
      render();
    };

    render();
  }

  function bootWhenReady() {
    var ready = window.EXAM_DATA_READY;
    if (ready && typeof ready.then === 'function') {
      ready.then(function (payload) {
        adoptData(payload);
        boot();
      }, function () {
        adoptData();
        boot();
      });
      return;
    }
    adoptData();
    boot();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootWhenReady);
  else bootWhenReady();
})();
