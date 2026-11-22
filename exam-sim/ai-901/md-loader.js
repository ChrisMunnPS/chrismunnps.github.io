/* AI-901 data bootstrap.
   The compiled questions.js always ships with this kit, so the offline build never
   needs to fetch anything. Keeping this file means the shared engine still receives
   window.EXAM_DATA_READY, and a hand-edited bank can reuse the same contract. */
(function () {
  'use strict';

  if (!window.QUESTIONS || !window.QUESTIONS.length) {
    var box = document.getElementById('boot-error');
    if (box) {
      box.hidden = false;
      box.className = 'boot-error is-setup';
      box.innerHTML = '<strong>The AI-901 question bank did not load.</strong> '
        + 'Check that <code>questions.js</code> sits next to <code>index.html</code>, then reload the page.';
    }
    return;
  }

  window.EXAM_DATA_READY = Promise.resolve({
    questions: window.QUESTIONS,
    cases: window.CASE_STUDIES || []
  });
}());
