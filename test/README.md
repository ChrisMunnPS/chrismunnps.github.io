# 🎓 Microsoft Practice Exams

> **Executive summary:** A static, framework-free landing site for free Microsoft certification practice exams, published at <https://chrismunnps.github.io/>. Exam cards are generated from a single data file (`exams.json`), so adding an exam or marking one as live is a one-line edit. Exams without a finished simulator show a disabled "Coming soon" button instead of a broken link. The page has no third-party requests and ships with a strict Content-Security-Policy.

## ✨ Features
- 📱 Responsive, accessible design with dark and light themes (follows the system setting)
- 🔎 Live search: filters cards by exam code, title or level (`az900`, `az 900` and `AZ-900` all match; Esc clears)
- 🃏 One card per exam with duration, passing score and skill-area weightings
- 🚦 Per-exam status: `live` shows GitHub and simulator links, `soon` shows "Coming soon"
- 🔒 Self-hosted fonts, inline SVG badges, no external requests
- 🧱 No frameworks and no build step

## 📚 Current exams
| Exam | Title | Level | Status |
|------|-------|-------|--------|
| AZ-900 | Microsoft Azure Fundamentals | Fundamentals | 🛠️ Coming soon |
| AB-900 | Microsoft 365 Copilot and Agent Administration Fundamentals | Fundamentals | 🛠️ Coming soon |
| SC-900 | Security, Compliance, and Identity Fundamentals | Fundamentals | 🛠️ Coming soon |
| AI-900 | Microsoft Azure AI Fundamentals | Fundamentals | 🛠️ Coming soon |
| DP-900 | Microsoft Azure Data Fundamentals | Fundamentals | 🛠️ Coming soon |
| AZ-104 | Microsoft Azure Administrator | Associate | 🛠️ Coming soon |
| AZ-204 | Developing Solutions for Microsoft Azure | Associate | 🛠️ Coming soon |
| AZ-802 | Administering Windows Server | Associate | 🛠️ Coming soon |
| SC-200 | Microsoft Security Operations Analyst | Associate | 🛠️ Coming soon |
| SC-300 | Microsoft Identity and Access Administrator | Associate | ✅ Live: [Launch](https://chrismunnps.github.io/exam-sim/sc-300) |
| MD-102 | Endpoint Administrator | Associate | 🛠️ Coming soon |
| DP-203 | Data Engineering on Microsoft Azure | Associate | 🛠️ Coming soon |
| MS-102 | Microsoft 365 Administrator | Expert | 🛠️ Coming soon |
| AZ-305 | Designing Microsoft Azure Infrastructure Solutions | Expert | 🛠️ Coming soon |
| SC-100 | Microsoft Cybersecurity Architect | Expert | 🛠️ Coming soon |
| AZ-400 | Designing and Implementing Microsoft DevOps Solutions | Expert | 🛠️ Coming soon |
| DP-500 | Designing and Implementing Enterprise-Scale Analytics Solutions | Expert | 🛠️ Coming soon |

## ➕ Add an exam or mark one live
1. Open `exams.json` and copy an existing entry for a new exam.
2. Set `"slug"` to the simulator's folder name (its URL is `https://chrismunnps.github.io/exam-sim/<slug>`).
3. When the simulator is published, change `"status"` from `"soon"` to `"live"`.

## 🔒 Security
- ✅ Content-Security-Policy (`<meta>`): scripts, styles, fonts, images and fetches from this origin only
- ✅ Content is inserted with `textContent`, and card links are checked against an allowlist (`github.com`, `chrismunnps.github.io`)
- ✅ External links use `rel="noopener noreferrer"`
- ⚠️ GitHub Pages cannot set HTTP headers, so `frame-ancestors`, HSTS and `X-Content-Type-Options` are not available there

## 🛠️ Local development
Serve the folder, because the browser blocks `fetch` and CSP `'self'` on `file://` pages:
```bash
python -m http.server 8080
# or
npx serve .
```

## 🔤 Fonts
Instrument Sans and JetBrains Mono are self-hosted in `fonts/` under the SIL Open Font License (licence files included).

## 🔗 Links
- GitHub: [github.com/chrismunnps](https://github.com/chrismunnps)
- Creator site: [chrismunnps.github.io](https://chrismunnps.github.io/)

Not affiliated with Microsoft.
