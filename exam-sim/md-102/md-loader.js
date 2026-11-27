/* MD-102 data bootstrap.
   questions.js is compiled ahead of time so the page works from file://.
   This loader just promotes the globals into the contract app.js expects. */
(function () {
  'use strict';

  function fail(message) {
    var box = document.getElementById('boot-error');
    if (!box) return;
    box.hidden = false;
    box.className = 'boot-error';
    box.innerHTML = '<strong>The MD-102 question bank did not load.</strong> ' + message
      + ' Make sure <code>questions.js</code> sits next to <code>index.html</code>, then reload.';
  }

  if (!window.QUESTIONS || !window.QUESTIONS.length) {
    fail('It is missing or empty.');
    return;
  }

  window.EXAM_DATA_READY = Promise.resolve({
    questions: window.QUESTIONS,
    cases: window.CASE_STUDIES || []
  });
})();
