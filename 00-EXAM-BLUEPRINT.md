# SC-300 Practice Exam — Blueprint

Source material: Microsoft Learn SC-300T00 course archive (4 learning paths, 18 modules, 194 units),
snapshot 2026-11-06.

## Domain weighting

The official SC-300 skills outline weights the four functional groups roughly as below. The practice
exam mirrors those weights so your score is a meaningful predictor.

| # | Domain | Weight | Course modules | Questions |
|---|--------|--------|----------------|-----------|
| 1 | Implement an identity management solution | 20–25% | Initial config, identities, external identities, hybrid identity | 30 |
| 2 | Implement an authentication and access management solution | 25–30% | MFA, user authentication, Conditional Access, Identity Protection, Azure resources, Global Secure Access | 33 |
| 3 | Implement access management for apps | 15–20% | Enterprise apps/SSO, app registration, app platform, app governance | 23 |
| 4 | Plan and implement an identity governance strategy | 20–25% | Entitlement management, access reviews, PIM, monitoring | 27 |

**Total: 113 questions.**

## Question mix

The real exam is scenario-heavy and rarely asks for a bare definition. This bank follows suit.

| Format | Count | Notes |
|--------|-------|-------|
| Single-best-answer scenario | 79 | "You need to… Which configuration should you use?" |
| Multiple-answer (pick two or three) | 34 | Stated explicitly in the stem; all-or-nothing scoring |

Every item is followed in the answer key by the correct answer, the reasoning, why each remaining
option fails, and the course unit that covers it.

## How the simulator builds an attempt

The interactive exam does not simply serve all 113 items. It draws a random **50-question** paper
by default, allocating **13 identity / 15 authentication / 10 apps / 12 governance** with a
largest-remainder split of the blueprint weights. The **Questions** box on the start screen changes
the size of the draw; the same weighted split is applied, each selected domain gets at least one
question when the count allows, and a request larger than the pool returns the whole pool. Section
focus narrows the pool before the draw, and a retake of missed questions reuses the exact items.

**Drill presets** fill in the sections and count in one click: Full 50, Identity 10, Auth 12,
Apps 8, Governance 10, and Quick 10. They do not start the attempt; adjust the count or sections
afterwards if you want a different mix.

**Spaced review** tracks every question you miss (or leave unanswered). The item is due
immediately; a correct review moves it through intervals of 3, 7, 21, 45, and 90 days before it
graduates out of the queue. The queue lives in `localStorage` under `sc300-sim:srs`, so it persists
in the same browser and can be cleared from the start screen.

## Files

| File | Purpose |
|------|---------|
| `00-EXAM-BLUEPRINT.md` | This file |
| `01-PRACTICE-EXAM.md` | 113 questions, no answers |
| `02-ANSWER-KEY.md` | Answers, reasoning, why each distractor fails, source unit |
| `03-SCORE-SHEET.md` | Scoring by domain + remediation pointers |
| `04-CHEAT-SHEET-IDENTITY.md` | One-page identity management refresher |
| `05-CHEAT-SHEET-AUTH.md` | One-page authentication and access refresher |
| `06-CHEAT-SHEET-APPS.md` | One-page app access refresher |
| `07-CHEAT-SHEET-GOVERNANCE.md` | One-page governance refresher |

## How to use it

1. Read the cheat sheet for a domain before you drill it.
2. Sit `01-PRACTICE-EXAM.md` closed-book, 113 minutes (roughly one minute per question; the live exam runs closer to two).
3. Score with `02-ANSWER-KEY.md`. Do not read explanations for questions you got right until the end.
4. Fill in `03-SCORE-SHEET.md`. Any domain under 80% → re-read the mapped units, not the whole path.
5. Re-sit only the questions you missed after 48 hours, or use the simulator's spaced-review queue.
