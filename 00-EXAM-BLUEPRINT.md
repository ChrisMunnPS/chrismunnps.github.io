# SC-300 Practice Exam — Blueprint

Source material: Microsoft Learn SC-300T00 course archive (4 learning paths, 18 modules, 194 units),
snapshot **2026-11-08**, reconciled to the **skills measured as of October 28, 2026**.

## Domain weighting

The official SC-300 skills outline weights the four functional groups as below. The practice exam
mirrors those weights so your score is a meaningful predictor.

| # | Domain | Weight | Course modules | Questions |
|---|--------|--------|----------------|-----------|
| 1 | Implement and manage user identities | 20–25% | Initial config, identities, external identities, hybrid identity | 38 |
| 2 | Implement authentication and access management | 25–30% | MFA, user authentication, Conditional Access, Identity Protection, Azure resources, Global Secure Access | 48 |
| 3 | Plan and implement workload identities | 20–25% | Managed identities, enterprise apps/SSO, app registration, app governance | 34 |
| 4 | Plan and automate identity governance | 20–25% | Entitlement management, access reviews, PIM, monitoring | 39 |

**Total: 159 questions**, including two case studies with seven shared-background questions each.

## What changed on October 28, 2026

Microsoft refreshed the English SC-300 outline. The four domains kept their ranges except that
workload identities rose from 15–20% to 20–25%; the change log marks user authentication,
Global Secure Access, and privileged access as **minor**. Most of the update is naming and emphasis:

- Domain names now read *Implement and manage user identities*, *Implement authentication and access
  management*, *Plan and implement workload identities*, and *Plan and automate identity governance*.
- Authentication-method examples no longer list OAuth 2.0 tokens. Certificate-based authentication,
  Temporary Access Pass, Microsoft Authenticator, and FIDO2 passkeys remain.
- Global Secure Access objectives use the current names: *Microsoft Entra Private Access*,
  *Microsoft Entra Internet Access*, and the *Microsoft traffic profile for Microsoft 365*.
- Privileged access now says *emergency access accounts* rather than *break-glass accounts*.

The bank and simulator use the new domain names, the new weight ranges, and a 12/14/12/12 default
draw (see below). The underlying features did not change; OAuth/OIDC material remains valid for
app authentication and API permissions.

## Coverage notes for the October 28 outline

The bank now covers every module in the current course archive. The November 8, 2026 refresh added
16 items for the objectives that were previously thin:

- Company branding, tenant-wide settings, and user/guest settings (Q114–115)
- Conditional Access optimization agent, workload identity risk, Defender for Identity,
  Identity Risk Management Agent, and Global Secure Access remote networks and traffic logs
  (Q116–120)
- OAuth app policies, risk-based step-up consent, application collections, and app governance
  (Q121–124)
- Per-user entitlements, Access Review Agent, PIM audit history, sign-in and audit log behavior,
  Microsoft Sentinel, and Identity Secure Score (Q125–129)

A second revision closed the largest realism gap: the live exam weighs **case studies** heavily
(roughly a quarter of the items), and the bank previously had none. This revision adds:

- **Case Study 1 – Tailwind Traders acquires Fabrikam** (Q130–136): cross-tenant synchronization,
  cross-tenant access and trust, passkey profiles, Temporary Access Pass, Application Proxy with
  Kerberos, app roles versus group claims, and access packages.
- **Case Study 2 – Woodgrove Financial** (Q137–143): pass-through authentication, Private Access
  remote networks and the compliant network, PIM role settings, admin consent workflow, workload
  identity federation, guest access reviews, and long-term log retention.
- **16 standalone case-study follow-ups** (Q144–159): passkey attestation and AAGUID enforcement,
  Temporary Access Pass limits, Entra sign-in for Azure VMs, compliant network enforcement,
  phishing-resistant methods, user risk remediation, Hard Deletion Protection, guest MFA trust,
  tenant restrictions v2, admin consent behavior, connector high availability, SCIM quarantine,
  lifecycle workflows, privileged role reviews, external user lifecycle, and Conditional Access
  troubleshooting.

The remaining topics are better served by hands-on practice than by more multiple-choice items:

- KQL queries in Log Analytics and the Entra workbooks
- Microsoft traffic profile for Microsoft 365 in Global Secure Access
- Managed service accounts compared with managed identities and service principals
- Entra Kerberos authentication for hybrid identities (cloud Kerberos trust)
- Effective permissions for Entra roles
- Bulk operations with PowerShell

## Question mix

The real exam is scenario-heavy and rarely asks for a bare definition. This bank follows suit.

| Format | Count | Notes |
|--------|-------|-------|
| Single-best-answer scenario | 100 | "You need to… Which configuration should you use?" |
| Multiple-answer (pick two or three) | 59 | Stated explicitly in the stem; all-or-nothing scoring |
| **Total** | **159** | |

Of those 159 items, **14 belong to the two case studies** (seven each). They are ordinary
single- or multiple-answer items, but each is tied to a shared business background: six of the
fourteen are multiple-answer.

Every item is followed in the answer key by the correct answer, the reasoning, why each remaining
option fails, and the course unit that covers it.

## How the simulator builds an attempt

The interactive exam does not simply serve all 159 items. It draws a random **50-question** paper
by default, allocating **12 user identities / 14 authentication / 12 workload identities / 12 governance**
with a largest-remainder split of the October 28, 2026 weight midpoints. The **Questions** box on the start screen changes
the size of the draw; the same weighted split is applied, each selected domain gets at least one
question when the count allows, and a request larger than the pool returns the whole pool. Section
focus narrows the pool before the draw, and a retake of missed questions reuses the exact items.

**Case study drills.** The start screen also offers one button per case study. A drill runs that
case's seven questions in order, forces shuffle off, and keeps the shared background pinned above
every question, which is closer to how the live exam presents a case block.

**Drill presets** fill in the sections and count in one click: Full 50, Identity 10, Auth 12,
Workload 8, Governance 10, and Quick 10. They do not start the attempt; adjust the count or sections
afterwards if you want a different mix.

**Spaced review** tracks every question you miss (or leave unanswered). The item is due
immediately; a correct review moves it through intervals of 3, 7, 21, 45, and 90 days before it
graduates out of the queue. The queue lives in `localStorage` under `sc300-sim:srs`, so it persists
in the same browser and can be cleared from the start screen.

## Files

| File | Purpose |
|------|---------|
| `00-EXAM-BLUEPRINT.md` | This file |
| `01-PRACTICE-EXAM.md` | 159 questions, no answers |
| `02-ANSWER-KEY.md` | Answers, reasoning, why each distractor fails, source unit |
| `03-SCORE-SHEET.md` | Scoring by domain + remediation pointers |
| `04-CHEAT-SHEET-IDENTITY.md` | One-page user identities refresher |
| `05-CHEAT-SHEET-AUTH.md` | One-page authentication and access refresher |
| `06-CHEAT-SHEET-APPS.md` | One-page workload identities refresher |
| `07-CHEAT-SHEET-GOVERNANCE.md` | One-page identity governance refresher |

## How to use it

1. Read the cheat sheet for a domain before you drill it.
2. Sit `01-PRACTICE-EXAM.md` closed-book, 159 minutes (roughly one minute per question; the live exam runs closer to two).
3. Score with `02-ANSWER-KEY.md`. Do not read explanations for questions you got right until the end.
4. Fill in `03-SCORE-SHEET.md`. Any domain under 80% → re-read the mapped units, not the whole path.
5. Re-sit only the questions you missed after 48 hours, or use the simulator's spaced-review queue.
