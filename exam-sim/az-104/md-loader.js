/* Interim Markdown loader for AZ-104.
   The release build compiles sources/*.md into questions.js; this loader lets the
   simulator run straight from the Markdown sources when the build host is missing.
   It needs http(s) or a browser that allows file:// fetch. */
(function () {
  'use strict';

  var SOURCES = [
    '../sources/sec1-identity.md',
    '../sources/sec2-storage.md',
    '../sources/sec3-compute.md',
    '../sources/sec4-network.md',
    '../sources/sec5-monitor.md',
    '../sources/sec6-cases.md'
  ];

  var CACHE_KEY = 'az104-sim:bank-v1';

  function readCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var bank = JSON.parse(raw);
      return bank && bank.questions && bank.questions.length ? bank : null;
    } catch (e) {
      return null;
    }
  }

  function fail(message) {
    setupPanel(message);
  }

  // A compiled questions.js always wins; the Markdown path is the fallback.
  if (window.QUESTIONS && window.QUESTIONS.length) {
    window.EXAM_DATA_READY = Promise.resolve({
      questions: window.QUESTIONS,
      cases: window.CASE_STUDIES || []
    });
    return;
  }

  var cached = readCache();
  if (cached) {
    window.QUESTIONS = cached.questions;
    window.CASE_STUDIES = cached.cases || [];
    window.EXAM_DATA_READY = Promise.resolve(cached);
    return;
  }

  function loadOne(path) {
    return fetch(path, { cache: 'no-store' }).then(function (res) {
      if (!res.ok) throw new Error(path + ' returned ' + res.status);
      return res.text();
    });
  }

  // Dropping the whole AZ-104 folder also picks up README examples and cheat
  // sheets, so keep only real exam items: four or more options, a marked
  // answer, and a full explanation.
  function cleanBank(bank) {
    var seen = Object.create(null);
    var questions = (bank.questions || []).filter(function (q) {
      if (!q || seen[q.id]) return false;
      if (!q.options || q.options.length < 4) return false;
      if (!q.answers || !q.answers.length) return false;
      if (!q.explanation || q.explanation.length < 200) return false;
      seen[q.id] = true;
      return true;
    });
    questions.sort(function (a, b) { return a.id - b.id; });

    var seenCase = Object.create(null);
    var cases = (bank.cases || []).filter(function (c) {
      if (!c || !c.id || seenCase[c.id]) return false;
      seenCase[c.id] = true;
      return true;
    });

    return { questions: questions, cases: cases };
  }

  function acceptBank(raw) {
    var bank = cleanBank(raw);
    if (!bank.questions.length) {
      setupPanel('Those files did not contain any exam questions.');
      return;
    }
    window.QUESTIONS = bank.questions;
    window.CASE_STUDIES = bank.cases;
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(bank)); } catch (e) { /* quota */ }
    var box = document.getElementById('boot-error');
    if (box) { box.hidden = true; box.innerHTML = ''; box.className = 'boot-error'; }
    if (document.body) document.body.classList.remove('is-firstrun');
    if (typeof window.EXAM_RELOAD === 'function') {
      window.EXAM_RELOAD(bank);
    } else {
      location.reload();
    }
  }

  function readPickedFiles(files) {
    var picked = Array.prototype.filter.call(files || [], function (f) {
      return /\.md$/i.test(f.name);
    });
    if (!picked.length) {
      setupPanel('No Markdown files were found. Drop the <code>sources</code> folder itself, not a single file.');
      return;
    }
    Promise.all(picked.map(function (f) { return f.text(); })).then(function (texts) {
      acceptBank(window.parseExamSources(texts.join('\n\n')));
    }).catch(function (err) {
      setupPanel('Could not read the dropped files: ' + esc(err.message));
    });
  }

  /* ------------------------------------------------------- first-run panel */

  var dropWired = false;

  function setupPanel(message) {
    var box = document.getElementById('boot-error');
    if (!box) return;
    if (document.body) document.body.classList.add('is-firstrun');
    box.hidden = false;
    box.className = 'boot-error is-setup';
    box.innerHTML = '<strong>Load the AZ-104 question bank.</strong> ' + message
      + '<br>Drop the <code>sources</code> folder anywhere on this page, or '
      + '<label class="boot-pick">choose the folder'
      + '<input type="file" id="boot-pick" webkitdirectory directory multiple accept=".md"></label>'
      + '<span class="boot-note">This is a one-time step: the bank is cached in this browser, so the next launch starts the exam straight away. Nothing is uploaded anywhere. '
      + 'To remove the step for good, close this tab and double-click <code>01-Build-Question-Bank.bat</code> once.</span>';

    var input = document.getElementById('boot-pick');
    if (input) {
      input.addEventListener('change', function () { readPickedFiles(input.files); });
    }
    wireDrop();
  }

  function wireDrop() {
    if (dropWired) return;
    dropWired = true;

    function panel() {
      var box = document.getElementById('boot-error');
      return box && !box.hidden ? box : null;
    }

    window.addEventListener('dragover', function (e) {
      if (!panel()) return;
      e.preventDefault();
      if (panel()) panel().classList.add('is-over');
    });
    window.addEventListener('dragleave', function (e) {
      if (e.relatedTarget) return;
      var box = panel();
      if (box) box.classList.remove('is-over');
    });
    window.addEventListener('drop', function (e) {
      if (!panel()) return;
      e.preventDefault();
      var box = panel();
      if (box) box.classList.remove('is-over');
      collectDropped(e.dataTransfer).then(readPickedFiles);
    });
  }

  function collectDropped(dt) {
    return new Promise(function (resolve) {
      if (!dt) { resolve([]); return; }
      var fallback = dt.files ? Array.prototype.slice.call(dt.files) : [];
      var items = dt.items;
      if (!items || !items.length || !items[0].webkitGetAsEntry) { resolve(fallback); return; }

      var out = [];
      var jobs = [];
      for (var i = 0; i < items.length; i++) {
        var entry = items[i].webkitGetAsEntry ? items[i].webkitGetAsEntry() : null;
        if (entry) jobs.push(walkEntry(entry, out));
      }
      if (!jobs.length) { resolve(fallback); return; }

      Promise.all(jobs).then(function () {
        resolve(out.length ? out : fallback);
      }, function () {
        resolve(out.length ? out : fallback);
      });
    });
  }

  function walkEntry(entry, out) {
    return new Promise(function (resolve) {
      if (entry.isFile) {
        entry.file(function (f) { out.push(f); resolve(); }, resolve);
        return;
      }
      if (!entry.isDirectory) { resolve(); return; }
      var reader = entry.createReader();
      var all = [];
      var readBatch = function () {
        reader.readEntries(function (batch) {
          if (!batch.length) {
            Promise.all(all.map(function (e) { return walkEntry(e, out); })).then(resolve, resolve);
            return;
          }
          all = all.concat(Array.prototype.slice.call(batch));
          readBatch();
        }, resolve);
      };
      readBatch();
    });
  }

  window.EXAM_DATA_READY = Promise.all(SOURCES.map(loadOne)).then(function (texts) {
    var bank = window.parseExamSources(texts.join('\n\n'));
    window.QUESTIONS = bank.questions;
    window.CASE_STUDIES = bank.cases;
    return bank;
  }).catch(function () {
    setupPanel('This browser does not let a double-clicked page read its own files.');
    return { questions: [], cases: [] };
  });

  /* ---------------------------------------------------------------- parser */

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  }

  function caseHtml(text) {
    var out = [];
    var list = null;

    function closeList() {
      if (list) { out.push('<ul>' + list.join('') + '</ul>'); list = null; }
    }

    String(text || '').replace(/\r\n/g, '\n').split('\n').forEach(function (line) {
      var t = line.trim();
      if (!t) { closeList(); return; }
      if (/^###\s+/.test(t)) {
        closeList();
        out.push('<h4>' + esc(t.replace(/^###\s+/, '')) + '</h4>');
        return;
      }
      if (/^[-*]\s+/.test(t)) {
        if (!list) list = [];
        list.push('<li>' + esc(t.replace(/^[-*]\s+/, '')) + '</li>');
        return;
      }
      closeList();
      out.push('<p>' + esc(t) + '</p>');
    });
    closeList();
    return out.join('');
  }

  function parseHeader(line) {
    var parts = line.replace(/^##/, '').split('|');
    var head = { token: parts.shift().trim() };
    parts.forEach(function (chunk) {
      var at = chunk.indexOf('=');
      if (at === -1) return;
      head[chunk.slice(0, at).trim()] = chunk.slice(at + 1).trim();
    });
    return head;
  }

  window.parseExamSources = function (text) {
    var lines = String(text || '').replace(/\r\n/g, '\n').split('\n');
    var questions = [];
    var cases = [];
    var i = 0;

    while (i < lines.length) {
      var line = lines[i];

      if (/^##CASE\s/.test(line)) {
        var meta = parseHeader(line);
        var id = meta.token.replace(/^CASE\s+/, '').trim();
        var body = [];
        i++;
        while (i < lines.length && !/^##ENDCASE/.test(lines[i])) {
          body.push(lines[i]);
          i++;
        }
        cases.push({ id: id, title: meta.title || id, html: caseHtml(body.join('\n')) });
        i++;
        continue;
      }

      if (/^##Q\d/.test(line)) {
        var q = parseHeader(line);
        var n = parseInt(q.token.replace(/^Q/, ''), 10);
        var block = [];
        i++;
        while (i < lines.length && !/^##A\d/.test(lines[i])) {
          block.push(lines[i]);
          i++;
        }
        var answer = [];
        i++;
        while (i < lines.length && !/^##Q\d/.test(lines[i]) && !/^##CASE\s/.test(lines[i])) {
          answer.push(lines[i]);
          i++;
        }
        var parsed = parseQuestion(n, q, block, answer);
        if (parsed) questions.push(parsed);
        continue;
      }

      i++;
    }

    questions.sort(function (a, b) { return a.id - b.id; });
    return { questions: questions, cases: cases };
  };

  function parseQuestion(n, head, block, answer) {
    var stemLines = [];
    var options = [];
    var current = null;

    block.forEach(function (raw) {
      var t = raw.trim();
      var opt = /^-\s+([A-E])\.\s+(.*)$/.exec(t);
      if (opt) {
        current = { letter: opt[1], text: opt[2].trim() };
        options.push(current);
        return;
      }
      if (current && t && !/^$/.test(t)) {
        current.text += ' ' + t;
        return;
      }
      if (!options.length) stemLines.push(raw);
    });

    while (stemLines.length && !stemLines[stemLines.length - 1].trim()) stemLines.pop();

    var correctLine = '';
    var sourceLine = '';
    var explanation = [];

    answer.forEach(function (raw) {
      var t = raw.trim();
      if (/^Correct:/.test(t)) { correctLine = t; return; }
      if (/^Source:/.test(t)) { sourceLine = t.replace(/^Source:\s*/, ''); return; }
      explanation.push(raw);
    });

    var answers = (correctLine.replace(/^Correct:\s*/, '').match(/[A-E]/g) || []);
    while (explanation.length && !explanation[explanation.length - 1].trim()) explanation.pop();

    var q = {
      id: n,
      domain: head.domain || 'identity',
      topic: head.topic || ('Question ' + n),
      stem: stemLines.join('\n').trim(),
      options: options,
      answers: answers,
      explanation: explanation.join('\n').trim(),
      source: sourceLine
    };
    if (head.diagram) q.diagram = head.diagram;
    if (head.case) q.case = head.case;
    return q.options.length ? q : null;
  }
})();
