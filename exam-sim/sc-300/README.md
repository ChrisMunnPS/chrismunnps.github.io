# SC-300 Exam Simulator

An offline, single-page practice exam for Microsoft SC-300, built from the 159-question
bank in the parent folder.

## Run it

Double-click `index.html`. That is all — no server, no build step, no internet.

Everything is plain HTML, CSS, and JavaScript loaded with `<script src>`, so it works
straight from `file://`.

## Features

- **159 questions** with the official domain mix in the bank: user identities 38, authentication 48, workload identities 34, governance 39.
- **Two case studies** with a shared background. Case Study 1 (Tailwind Traders, Q130–136) and Case Study 2 (Woodgrove Financial, Q137–143) each run as a guided drill from the start screen. The background is stored once in `window.CASE_STUDIES`, is pinned above every question in the case, appears in the answer review, and prints once before the first question of the case.
- **Random 50-question draw by default.** Each attempt samples the bank in blueprint proportion (12 user identities, 14 authentication, 12 workload identities, 12 governance) using the October 28, 2026 weights. Retakes of missed questions skip the sampling.
- **Choose your own question count.** The *Questions* box accepts 1 through the size of the selected pool; the mix stays weighted and the time limit recalculates as you type. The number is saved with your other settings.
- **Focus on specific sections.** Tick any of the four exam domains on the start screen to build a shorter attempt; the question count and time limit update as you choose. *All* and *None* buttons speed up the selection.
- **Drill presets.** Full 50, Identity 10, Auth 12, Workload 8, Governance 10, and Quick 10 fill in the sections and count without starting the attempt. The active preset highlights when the current settings match.
- **Spaced review queue.** Missed or unanswered questions are due immediately; a correct review advances through 3, 7, 21, 45, and 90-day intervals and then graduates. Start or clear the queue from the start screen, or review due items from the score report.
- **Two modes.** *Exam* hides all feedback until you submit. *Practice* reveals the explanation as you answer, plus a "Check answer" step for multi-select items.
- **Optional timer, as a checkbox.** Leave *Timer* ticked for a 90-second-per-question countdown that auto-submits at zero, or untick it to work untimed. The default 50-question attempt gets 75 minutes.
- **Question map** with answered and flagged states, jump-to-question, and a flag-for-review filter.
- **Scoring like the live exam.** Multi-select is all-or-nothing. The raw score is converted to a 1–1000 scaled score with a pass mark of 700.
- **Score report shaped like the Pearson VUE one.** Exam title and date, a PASS/FAIL result, your score next to the 700 passing score, and a "Performance by exam section" bar chart with the domain weights and a 700 marker. A separate practice-detail card keeps the raw counts and actions.
- **Retake** only the missed questions, and review every item: correct answer, your answer, the reasoning behind each distractor, and the source module.
- **Print** the score report on its own or the entire answer review, with explanations.
- **Pass fireworks.** A passing score plays a five-second full-screen fireworks display, skipped automatically when reduced motion is requested.
- **Autosave** to `localStorage`. Close the tab and resume later; the start screen offers to continue or discard. The review queue uses its own key, `sc300-sim:srs`.
- Keyboard: `A`–`E` or `1`–`5` to answer, `←`/`→` to move, `F` to flag, `Esc` to close dialogs.

## Local storage keys

| Key | Contents |
|---|---|
| `sc300-sim:attempt` | Saved attempt: question order, answers, flags, timer state, submitted score report |
| `sc300-sim:settings` | Timer, feedback mode, shuffle, question count, selected sections |
| `sc300-sim:srs` | Spaced-review queue: item id, box (0–5), due timestamp, times seen |

Clearing site data resets all three. The review queue survives new attempts until you clear it.

## Score report

After you submit, the results screen reproduces the layout Microsoft and Pearson VUE use:
exam title and date, Result PASS/FAIL, *Your score* beside *Passing score 700*, then
**Performance by exam section** with one bar per domain you attempted and a marker at the
700 point. The score scale and the "score is based on the number of points you earned"
footnote match the published wording; the bar values are your raw correct counts.

Ctrl+P on the results screen prints just that report. The *Print score report* button does
the same, and *Print full review* builds a full answer key. Both buttons hide the app
chrome while printing and clean up after the dialog closes.

## Scoring caveat

The scaled score is `correct ÷ total × 1000`. The real exam weights items and may score
differently; 700 is the published passing score. Use the number as a rough readiness signal,
not a guarantee. Section-focused attempts keep the same 90-second-per-question pace, so the
scaled score stays comparable.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell |
| `styles.css` | All styling, including dark mode, responsive layout, and print |
| `app.js` | Exam engine: state, timer, scoring, review, persistence |
| `questions.js` | Question bank (`window.CASE_STUDIES` + `window.QUESTIONS`) |

## Editing questions

`questions.js` is generated from the Markdown question sources, then checked for stem/answer
consistency. Each entry looks like:

```js
{
  id: 1,
  domain: 'identity',          // identity | auth | apps | governance
  case: 'tailwind-traders',    // optional; references window.CASE_STUDIES
  topic: 'Administrative units',
  stem: 'Scenario text…\n\nWhat should you create?',
  options: [{ letter: 'A', text: '…' }, …],
  answers: ['A'],              // every letter here must be selected
  explanation: 'Markdown with **bold** and `code`…',
  source: 'LP3 Module 1.5 …'
}
```

You can edit the file directly. Keep `answers` consistent with the stem ("Choose two" means
two letters), because multi-select scoring compares the selection length to `answers.length`
before checking the letters.

Case-study backgrounds live in `window.CASE_STUDIES` at the top of the same file. A question
joins a case by setting `case` to that case's `id`; the app looks the background up by id, so
the long scenario text is never duplicated per question.
