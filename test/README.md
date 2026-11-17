# 🎓 Exam Sim

> **Executive summary:** Exam Sim is a static, dependency-free landing site for Microsoft certification practice exams, hosted on GitHub Pages at <https://chrismunnps.github.io/exam-sim/>. Each exam appears as a card generated from a single JSON file, with links to the GitHub repo and the live simulator. Adding an exam means adding one JSON entry and one folder.

## 🚀 Deploy
1. Copy these files to the root of the `ChrisMunnPS/exam-sim` repo.
2. In **Settings → Pages**, set the source to the `main` branch, `/ (root)`.
3. Tick **Enforce HTTPS**.

## ➕ Add an exam
1. Put the simulator in a folder named after the slug, for example `az-104/`.
2. Add an entry to `exams.json` (copy the SC-300 one). The card and the live link (`/exam-sim/<slug>`) are built automatically.
3. Set `"status": "soon"` to show a disabled button until the simulator is ready.

## 🔒 Security
- ✅ No frameworks, build step, CDNs or third-party requests.
- ✅ Content-Security-Policy via `<meta>`: scripts, styles, images and fetches from this origin only.
- ✅ Content is rendered with `textContent` and links are checked against an HTTPS allowlist.
- ✅ External links use `rel="noopener noreferrer"`.
- ⚠️ GitHub Pages cannot set HTTP headers, so `frame-ancestors`, HSTS and `X-Content-Type-Options` are not available. Put the site behind Cloudflare, or similar, if you need them.
- 📬 `/.well-known/security.txt` lists the reporting contact.

## ♿ Accessibility
Semantic HTML, a skip link, visible focus, AA contrast in both themes, reduced-motion support, and bubbles that carry text alternatives.

## 📁 Files
| File | Purpose |
|---|---|
| `index.html` | Page shell and CSP |
| `exams.json` | Exam data |
| `assets/` | Styles, script, favicon |
| `.nojekyll` | Serve files as-is |

## ⚖️ Disclaimer
Independent study project, not affiliated with or endorsed by Microsoft. Confirm skill weightings on Microsoft Learn before booking.
