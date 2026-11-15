<h1 align="center">🎓 SC-300 Exam Simulator</h1>

<p align="center">
  <strong>A complete, offline study kit for Microsoft Exam SC-300: Identity and Access Administrator.</strong><br>
  60 scenario questions, an interactive exam engine, and a Pearson VUE–style score report.
</p>

<p align="center">
  <img alt="Questions: 60" src="https://img.shields.io/badge/questions-60-2563eb?style=flat-square">
  <img alt="Passing score: 700 of 1000" src="https://img.shields.io/badge/pass%20score-700%20%2F%201000-16a34a?style=flat-square">
  <img alt="Domains: 4" src="https://img.shields.io/badge/domains-4-7c3aed?style=flat-square">
  <img alt="Works offline" src="https://img.shields.io/badge/offline-ready-0ea5e9?style=flat-square">
  <img alt="License: MIT" src="https://img.shields.io/github/license/ChrisMunnPS/SC300Exam?style=flat-square&color=f59e0b">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/ChrisMunnPS/SC300Exam?style=flat-square">
</p>

---

## 📌 Executive summary

**SC300Exam** is a self-contained practice exam for the Microsoft SC-300 certification. It turns the SC-300T00 Microsoft Learn material into 60 exam-style scenario questions, then gives you two ways to use them: a printable Markdown exam with a full answer key, or a browser-based simulator that times you, scores you, and reports your result the way the real exam does.

- 🎯 **60 questions** weighted to the official blueprint across all four SC-300 domains.
- 🧠 **Real exam feel** — scenario stems, 21 multiple-answer items scored all-or-nothing, 90 seconds per question.
- 🖥️ **No install, no internet** — plain HTML, CSS, and JavaScript that runs from a double-click.
- 📊 **Actionable results** — scaled score out of 1,000, 700 to pass, per-section breakdown, and a review that explains every distractor.
- 🎛️ **Your attempt, your rules** — focus on specific sections, switch the timer off, or practise with instant feedback.

### Start here

| I want to… | Open this |
|---|---|
| Sit the exam in my browser | [`exam-sim/index.html`](exam-sim/index.html) |
| Read the questions on paper | [`01-PRACTICE-EXAM.md`](01-PRACTICE-EXAM.md) |
| Mark my answers and read explanations | [`02-ANSWER-KEY.md`](02-ANSWER-KEY.md) |
| See where I lost points and what to reread | [`03-SCORE-SHEET.md`](03-SCORE-SHEET.md) |
| Understand how the bank was built | [`00-EXAM-BLUEPRINT.md`](00-EXAM-BLUEPRINT.md) |

---

## 🚀 Quick start

1. Download or clone the repository.
2. Double-click **`exam-sim/index.html`**.
3. Pick your sections, choose Exam or Practice mode, and start.

That is the whole setup. There is no build step, no package manager, no server, and no network access. The app loads `questions.js` with a normal `<script>` tag, so it works from `file://` as well as from any static host.

**Optional local server** (if your browser restricts local files):

```powershell
npx serve exam-sim
```

**Browser support:** current Edge, Chrome, Firefox, and Safari. The layout is responsive, follows your OS light/dark preference, and honours reduced-motion settings.

---

## 🎯 Exam blueprint

The bank mirrors the published SC-300 skills outline so the score means something.

| # | Domain | Weight | Questions |
|---|--------|:------:|:---------:|
| 1 | Implement an identity management solution | 20–25% | 15 |
| 2 | Implement an authentication and access management solution | 25–30% | 18 |
| 3 | Implement access management for apps | 15–20% | 12 |
| 4 | Plan and implement an identity governance strategy | 20–25% | 15 |
| | **Total** | **100%** | **60** |

**Question mix:** 39 single-best-answer scenarios and 21 multiple-answer items (pick two or three). Multi-select is graded all-or-nothing — every required letter must be selected, and nothing else.

Every question is traceable to the Microsoft Learn unit it came from. The source module and unit are shown in the review, so a missed item tells you exactly what to reread.

---

## 🧮 Scoring

| Setting | Value |
|---|---|
| **Scaled score** | `correct ÷ total × 1000`, rounded |
| **Passing score** | **700** (the published SC-300 pass mark) |
| **Time** | 90 seconds per question — 90 minutes for the full 60-question exam |
| **Partial credit** | None. Multi-select items are all-or-nothing |
| **Unanswered** | Scored as zero |

The real exam weights items and may score differently, so treat the scaled score as a readiness signal rather than a guarantee. Section-focused attempts keep the same 90-second pace, which keeps the number comparable.

---

## 🖥️ The interactive simulator

### 🎛️ Two modes
- **Exam** hides all feedback until you submit, like the real thing.
- **Practice** reveals the explanation as you answer and offers a **Check answer** step on multi-select items.

### 🗂️ Focus on specific sections
Tick any combination of the four domains to build a shorter attempt. The question count, time limit, and section count update live. **All** and **None** buttons make it quick, and **Start exam** stays disabled until at least one section is selected.

### ⏱️ Optional timer, as a checkbox
Leave **Timer** ticked for a countdown that auto-submits at zero, or untick it to work untimed — the header then shows elapsed time instead. No surprise submissions when you are studying.

### 🗺️ Question map and flags
Jump to any question, see what is answered, and flag items to revisit. The review can be filtered to **Incorrect** or **Flagged** only.

### 📊 A score report that looks familiar
After submitting you get a report modelled on the Pearson VUE layout:

- Microsoft Certified header, exam title, date, attempt, and time used
- A large **PASS** or **FAIL** verdict
- **Your score** beside the **700** passing score and the 1–1,000 scale note
- **Performance by exam section** — one bar per domain with its weight, your correct count and percentage, and a marker at the 700 point
- The "score is based on points you earned" footnote from Microsoft's own score report
- A **Practice detail** card with correct / incorrect / unanswered counts and every next action

### 🔍 Review every question
Correct answer, your answer, the full explanation, why each distractor fails, and the source module. Multi-select items show every letter that was required.

### 🖨️ Print, both ways
- **Print score report** (or `Ctrl+P` on the results screen) prints just the one-page report.
- **Print full review** builds a 60-question answer key with explanations.

Print styles force light colours, hide the app chrome, and clean up after the dialog closes, so a dark-mode desktop still produces a readable paper report.

### 💾 Autosave and resume
Progress is written to `localStorage` as you go. Close the tab, come back later, and the start screen offers to **resume** or **discard**. A submitted attempt can be reopened as a score report.

### ♿ Accessibility
- Full keyboard operation and visible focus states
- Semantic headings, labelled groups, and radio/checkbox roles for answer options
- Live status announcements for submissions, discards, and retakes
- Light and dark themes with WCAG AA contrast
- Lighthouse accessibility score of **100** on the start, exam, and score-report screens

### ⌨️ Keyboard shortcuts

| Key | Action |
|---|---|
| `A`–`E` or `1`–`5` | Select an answer |
| `←` / `→` or `P` / `N` | Previous / next question |
| `F` | Flag or unflag the current question |
| `Esc` | Close a dialog |

---

## 📁 Repository layout

```text
SC300Exam/
├── README.md                 ← you are here
├── LICENSE                   ← MIT
├── 00-EXAM-BLUEPRINT.md      ← domain weights, question mix, how to use the kit
├── 01-PRACTICE-EXAM.md       ← 60 questions, no answers
├── 02-ANSWER-KEY.md          ← answers, reasoning, distractor analysis, sources
├── 03-SCORE-SHEET.md         ← per-domain scoring and remediation map
└── exam-sim/
    ├── index.html            ← simulator shell
    ├── styles.css            ← layout, themes, print styles
    ├── app.js                ← state, timer, scoring, review, persistence
    ├── questions.js          ← generated bank (window.QUESTIONS)
    └── README.md             ← simulator-specific notes
```

---

## 📚 The Markdown study kit

The four numbered documents are the paper version of the exam and still work on their own.

| File | What it is for |
|---|---|
| **`00-EXAM-BLUEPRINT.md`** | The blueprint: domain weights, question counts, source snapshot, and a four-step study method. |
| **`01-PRACTICE-EXAM.md`** | All 60 questions, numbered and grouped by domain, with no answers. Print it or read it closed-book. |
| **`02-ANSWER-KEY.md`** | The correct letter(s), the reasoning, why each remaining option fails, and the Microsoft Learn unit to review. |
| **`03-SCORE-SHEET.md`** | A fill-in sheet that turns your raw score into a per-domain percentage with a remediation list. |

A sensible loop: sit `01` closed-book in 90 minutes → mark it with `02` → fill in `03` → reread only the units behind the domains under 80% → retry the missed questions after 48 hours.

---

## 🛠️ Editing or regenerating questions

`exam-sim/questions.js` is generated from `01-PRACTICE-EXAM.md` and `02-ANSWER-KEY.md`, but it is plain data and can be edited directly. Each entry looks like this:

```js
{
  id: 1,
  domain: 'identity',          // identity | auth | apps | governance
  topic: 'Administrative units',
  stem: 'Scenario text…\n\nWhat should you create?',
  options: [{ letter: 'A', text: '…' }, …],
  answers: ['A'],              // every letter here must be selected
  explanation: 'Markdown with **bold** and `code`…',
  source: 'LP3 Module 1.5 …'
}
```

Keep `answers` consistent with the stem: "Choose two" must have exactly two letters, because scoring compares the selection length to `answers.length` before checking the letters. The review, score report, and print output all read from this same file.

---

## 🌐 Hosting it (optional)

The simulator is static, so it can live on GitHub Pages. Because the entry point is inside `exam-sim/`, either:

- publish the contents of `exam-sim/` at the site root, or
- copy `index.html`, `styles.css`, `app.js`, and `questions.js` into a `/docs` folder and set **Settings → Pages → Deploy from a branch → main / docs**.

No environment variables, APIs, or secrets are involved.

---

## ✅ Quality notes

This kit was checked rather than assumed:

- Every answer key entry cross-checked against its stem and option list
- Lighthouse **100** for accessibility, best practices, and SEO on the start, exam, and results screens
- Full walkthrough: start → answer → flag → submit → score → review → retake
- Section filters, empty-filter state, shuffle, resume/discard, and auto-submit at zero all exercised
- Print verified for both the score report and the 60-question review
- Keyboard-only pass and light/dark visual checks

---

## 🧭 Roadmap

Ideas for the next revision of the bank, grouped by the SC-300 objective they strengthen:

- [ ] Temporary Access Pass and authentication strength policies
- [ ] AAGUID, attestation, and Windows Hello for Business key/certificate trust
- [ ] Conditional Access device filters and policy evaluation order
- [ ] Purge protection and soft-delete recovery for groups and apps
- [ ] Password writeback and hybrid identity troubleshooting
- [ ] Workload identity federation for app registrations
- [ ] More question-level timer and per-domain drill presets in the simulator

Contributions, corrections, and new questions are welcome — please keep the stem, answer key, and `questions.js` entry consistent.

---

## ⚠️ Disclaimer

This is an unofficial study tool. It is **not affiliated with, endorsed by, or sponsored by Microsoft**. Question wording is original and based on publicly available Microsoft Learn content; screenshots of the product are not reproduced. Microsoft, Azure, Microsoft Entra, and SC-300 are trademarks of Microsoft Corporation.

Exam objectives and product behaviour change. Always confirm details against the current Microsoft Learn documentation and the official study guide.

The scaled score is an estimate produced from your raw percentage. The live exam may weight items differently; **700** is the published passing score.

---

## 📜 License

Released under the [MIT License](https://github.com/ChrisMunnPS/SC300Exam/blob/main/LICENSE). Use it, fork it, adapt it for your own certification track.

---

<p align="center">
  <sub>Built from the Microsoft Learn SC-300T00 archive · 4 learning paths · 18 modules · 194 units · snapshot 2026-11-06</sub>
</p>
