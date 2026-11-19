# 🎓 Microsoft Practice Exams

> **Executive summary:** A static, framework-free landing site for free Microsoft certification practice exams, published as the `exam-sim/` subfolder of the portfolio site at <https://chrismunnps.github.io/exam-sim/>. Exam cards come from one data file (`exams.json`) and are also pre-rendered into `index.html`, so search engines and visitors without JavaScript see them. Visitors can search, filter by status and level, and see their last score on each live exam. Exams without a finished simulator show a disabled "Coming soon" button instead of a broken link. The page makes no third-party requests and ships with a strict Content-Security-Policy.

## ✨ Features
- 🔎 Search by exam code, title or level (`az900`, `az 900` and `AZ-900` all match; Esc clears)
- ☑️ Status checkboxes (**Live** is on by default, **Coming soon** is off) and Fundamentals / Associate / Expert filters
- 🧭 If a search matches only hidden exams, the page says so and offers a one-click "Show coming soon"
- 🏅 Last score on live cards, with a "Retake exam" button (stored on the visitor's device only)
- 💬 "Request an exam" link that opens a pre-filled GitHub issue
- 🌗 Dark and light themes that follow the system setting
- 🔒 Self-hosted fonts, inline SVG badges, no external requests

## 📚 Exams
| Exam | Title | Level | Status |
|------|-------|-------|--------|
| AZ-900 | Microsoft Azure Fundamentals | Fundamentals | 🛠️ Coming soon |
| AB-900 | Microsoft 365 Copilot and Agent Administration Fundamentals | Fundamentals | 🛠️ Coming soon |
| SC-900 | Security, Compliance, and Identity Fundamentals | Fundamentals | 🛠️ Coming soon |
| AI-901 | Azure AI Fundamentals | Fundamentals | 🛠️ Coming soon |
| DP-900 | Microsoft Azure Data Fundamentals | Fundamentals | 🛠️ Coming soon |
| AZ-104 | Microsoft Azure Administrator | Associate | 🛠️ Coming soon |
| AI-200 | Developing AI Cloud Solutions on Azure | Associate | 🛠️ Coming soon |
| AZ-802 | Administering Windows Server | Associate | 🛠️ Coming soon |
| SC-200 | Microsoft Security Operations Analyst | Associate | 🛠️ Coming soon |
| SC-300 | Microsoft Identity and Access Administrator | Associate | ✅ Live: [Launch](https://chrismunnps.github.io/exam-sim/sc-300) |
| MD-102 | Endpoint Administrator | Associate | 🛠️ Coming soon |
| DP-700 | Implementing Data Engineering Solutions Using Microsoft Fabric | Associate | 🛠️ Coming soon |
| AB-650 | Administering Microsoft 365 and AI Services | Associate | 🛠️ Coming soon |
| DP-600 | Implementing Analytics Solutions Using Microsoft Fabric | Associate | 🛠️ Coming soon |
| AZ-305 | Designing Microsoft Azure Infrastructure Solutions | Expert | 🛠️ Coming soon |
| SC-100 | Microsoft Cybersecurity Architect | Expert | 🛠️ Coming soon |
| AZ-400 | Designing and Implementing Microsoft DevOps Solutions | Expert | 🛠️ Coming soon |

### 🔄 Retired exams replaced (checked 18 Nov 2026)
| Retired or retiring | Replaced by | Notes |
|---|---|---|
| AI-900 | AI-901 | AI-900 retired in 2026 |
| AZ-204 | AI-200 | AZ-204 retired 31 Jul 2026 |
| MS-102 | AB-650 | MS-102 retires 30 Nov 2026 |
| DP-203 | DP-700 | DP-203 retired 31 Mar 2025 |
| DP-500 | DP-600 | DP-500 retired in early 2025 |

Skill weightings come from Microsoft's published study guides. AB-650 and AI-200 durations came from third-party summaries, not Microsoft's study guides, so confirm them before you rely on them.

## ➕ Add an exam or mark one live
1. Edit `exams.json`: copy an entry, set `"slug"` to the simulator's folder name (its URL is `https://chrismunnps.github.io/exam-sim/<slug>`).
2. When the simulator is published, change `"status"` from `"soon"` to `"live"`.
3. Run `npm install` once, then `npm run build`. This pre-renders the cards into `index.html` and regenerates `sitemap.xml`. Commit the results.

## 🏅 Showing a score on a card
Same-origin simulators can save the last result and the landing page will display it. Add this where the simulator shows the final score:
```js
try {
  localStorage.setItem("exam-sim:sc-300:last", JSON.stringify({
    score: 780, scoreMax: 1000, passed: true, date: new Date().toISOString()
  }));
} catch (e) { /* storage blocked */ }
```
Use the exam's own slug in the key. The value never leaves the visitor's browser, and invalid values are ignored.

## 🔒 Security
- ✅ Content-Security-Policy (`<meta>`): scripts, styles, fonts, images and fetches from this origin only; no inline scripts or styles
- ✅ Content is inserted with `textContent`, and card links are checked against an allowlist (`github.com`, `chrismunnps.github.io`)
- ✅ External links use `rel="noopener noreferrer"`
- ⚠️ GitHub Pages cannot set HTTP headers, so `frame-ancestors`, HSTS and `X-Content-Type-Options` are not available there

## 📍 Where it lives
This site is the `exam-sim/` folder inside the `chrismunnps.github.io` repo, so it is served at `/exam-sim/`. Each simulator lives in its own folder beside `index.html` (for example `exam-sim/sc-300/`). The "Request an exam" link opens an issue on the `chrismunnps.github.io` repo, so **Issues must be enabled there** (Settings → General → Features).

Search engines only read `robots.txt` at the host root. If your portfolio repo has one, add this line to it:
```
Sitemap: https://chrismunnps.github.io/exam-sim/sitemap.xml
```

## 🛠️ Local development
Serve the folder, because browsers block `fetch` and CSP `'self'` on `file://` pages:
```bash
python -m http.server 8080
# or
npx serve .
```

## 📁 Files
| File | Purpose |
|---|---|
| `index.html` | Page shell, CSP, pre-rendered cards between the `cards:start`/`cards:end` markers |
| `exams.json` | Exam data and the request-an-exam URL |
| `cards.js` | Card builders shared by the browser and the build script |
| `script.js` | Theme, nav, search, filters, last scores |
| `build.cjs`, `package.json` | Pre-render and sitemap build (jsdom is a dev dependency only) |
| `og-image.png` | Link-preview image (1200×630) |
| `sitemap.xml` | Generated by the build |
| `fonts/` | Self-hosted Instrument Sans and JetBrains Mono (SIL OFL licences included) |

## 🔗 Links
- GitHub: [github.com/chrismunnps](https://github.com/chrismunnps)
- Creator site: [chrismunnps.github.io](https://chrismunnps.github.io/)

Not affiliated with Microsoft.
