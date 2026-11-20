/**
 * Theme toggle, mobile nav, exam cards (from exams.json), search and filters.
 * CSP-safe: no inline styles/scripts; all text is inserted with textContent.
 */
(function () {
  "use strict";

  const $ = id => document.getElementById(id);
  const KEY = "practice-exams-theme";
  const root = document.documentElement;
  const toggle = $("themeToggle");
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };
  const lightMq = window.matchMedia("(prefers-color-scheme: light)");

  // ---- Theme ----
  function preferred() {
    const v = store.get(KEY);
    return v === "light" || v === "dark" ? v : lightMq.matches ? "light" : "dark";
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  apply(preferred());
  if (toggle) toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    store.set(KEY, next);
    apply(next);
  });
  lightMq.addEventListener("change", e => { if (!store.get(KEY)) apply(e.matches ? "light" : "dark"); });

  // ---- Mobile nav ----
  const navToggle = $("navToggle");
  const nav = $("primaryNav");
  if (navToggle && nav) {
    const setOpen = open => {
      nav.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    navToggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  }

  // ---- Last score saved by a simulator (same origin, stays on this device) ----
  // Contract: localStorage["exam-sim:<slug>:last"] = JSON {score, scoreMax, passed, date(ISO)}
  function lastScore(x) {
    try {
      const raw = store.get("exam-sim:" + x.slug + ":last");
      if (!raw) return null;
      const v = JSON.parse(raw);
      const max = Number.isFinite(v.scoreMax) && v.scoreMax > 0 ? v.scoreMax : 1000;
      if (!Number.isFinite(v.score) || v.score < 0 || v.score > max) return null;
      const d = v.date ? new Date(v.date) : null;
      return {
        score: Math.round(v.score), scoreMax: max,
        passed: typeof v.passed === "boolean" ? v.passed : v.score >= 700,
        date: d && !isNaN(d) ? d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) : ""
      };
    } catch (e) { return null; }
  }

  // ---- Card entrance animation (classes live in styles.css) ----
  function reveal(cards) {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        e.target.style.transitionDelay = i * 60 + "ms";
        e.target.classList.add("is-visible");
        e.target.addEventListener("transitionend", () => {
          e.target.classList.remove("reveal", "is-visible");
          e.target.style.transitionDelay = "";
        }, { once: true });
        io.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    cards.forEach(c => { c.classList.add("reveal"); io.observe(c); });
  }

  // ---- Search + filters ----
  function norm(t) { return t.toLowerCase().replace(/[^a-z0-9]/g, ""); }
  function setupFilters(data, cards) {
    const exams = data.exams;
    const q = $("exam-q"), clear = $("exam-clear"), count = $("exam-count"), box = $("exam-search");
    const fLive = $("f-live"), fSoon = $("f-soon");
    const levels = [...document.querySelectorAll("[data-level-filter]")];
    const empty = $("exam-empty"), msg = $("empty-msg"), act = $("empty-action"), req = $("empty-request");
    const reqLine = $("request-line"), reqLink = $("request-link");
    if (!q || !clear || !count || !box || !fLive || !fSoon || !empty || !msg || !act) return;

    // Matches inside the exam code (az900, 900) or at the start of a title/level word.
    // Two-letter tokens must match a whole word, so "az" finds AZ-xxx but not "Azure ...".
    // Tokens of 5+ letters may match inside a word ("security" finds "Cybersecurity").
    const codes = exams.map(x => norm(x.code));
    const words = exams.map(x => (x.title + " " + x.level).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
    const hit = (t, i) => codes[i].includes(t) || words[i].some(w => t.length === 2 ? w === t : t.length >= 5 ? w.includes(t) : w.startsWith(t));
    const nLive = exams.filter(x => x.status === "live").length;
    $("n-live").textContent = nLive;
    $("n-soon").textContent = exams.length - nLive;

    function requestHref(text) {
      const base = data.requestUrl || "";
      const u = base + "?title=" + encodeURIComponent("Exam request: " + text);
      return cards[0] && /^https:\/\/github\.com\//.test(base) ? u : "";
    }
    let action = null;

    function run() {
      const raw = q.value.trim();
      const toks = raw.split(/\s+/).map(norm).filter(Boolean);
      const lv = levels.filter(c => c.checked).map(c => c.value);
      let shown = 0, soonOnlyMatches = 0, liveOnlyMatches = 0;
      cards.forEach((c, i) => {
        const x = exams[i];
        const base = toks.every(t => hit(t, i)) && (!lv.length || lv.includes(x.level.toLowerCase()));
        const statusOk = x.status === "live" ? fLive.checked : fSoon.checked;
        c.hidden = !(base && statusOk);
        if (!c.hidden) shown++;
        else if (base && x.status !== "live") soonOnlyMatches++;
        else if (base) liveOnlyMatches++;
      });
      clear.hidden = !q.value;
      count.textContent = "Showing " + shown + " of " + exams.length + " exams";
      empty.hidden = shown > 0;
      if (shown > 0) return;

      const hiddenBy = !fLive.checked && !fSoon.checked ? "none" : soonOnlyMatches ? "soon" : liveOnlyMatches ? "live" : "";
      if (hiddenBy === "none") { msg.textContent = "Select Live or Coming soon to see exams."; action = null; act.hidden = true; }
      else if (hiddenBy) {
        const n = hiddenBy === "soon" ? soonOnlyMatches : liveOnlyMatches;
        msg.textContent = n + " " + (hiddenBy === "soon" ? "coming-soon" : "live") + " exam" + (n > 1 ? "s" : "") + " match your search.";
        act.textContent = hiddenBy === "soon" ? "Show coming soon" : "Show live";
        action = () => { (hiddenBy === "soon" ? fSoon : fLive).checked = true; run(); };
        act.hidden = false;
      } else {
        msg.textContent = "No exams match" + (raw ? " \u201c" + raw + "\u201d" : " these filters") + ".";
        act.textContent = "Clear search and filters";
        action = () => { q.value = ""; levels.forEach(c => { c.checked = false; }); fLive.checked = true; fSoon.checked = false; run(); };
        act.hidden = false;
      }
      const href = requestHref(raw || "new exam");
      if (req) { req.hidden = !href; if (href) req.href = href; }
    }

    act.addEventListener("click", () => { if (action) { action(); q.focus(); } });
    q.addEventListener("input", run);
    q.addEventListener("keydown", e => { if (e.key === "Escape" && q.value) { e.preventDefault(); q.value = ""; run(); } });
    clear.addEventListener("click", () => { q.value = ""; run(); q.focus(); });
    [fLive, fSoon, ...levels].forEach(c => c.addEventListener("change", run));

    const rh = requestHref("");
    if (reqLine && reqLink && rh) { reqLink.href = data.requestUrl + "?title=" + encodeURIComponent("Exam request: "); reqLine.hidden = false; }
    box.hidden = false;
    run();
  }

  async function load() {
    const grid = $("exam-grid");
    if (!grid || !window.ExamCards) return;
    try {
      const r = await fetch("exams.json", { credentials: "omit" });
      if (!r.ok) throw new Error(r.status);
      const data = await r.json();
      const cards = data.exams.map(x => window.ExamCards.card(x, x.status === "live" ? lastScore(x) : null));
      grid.replaceChildren(...cards);
      grid.removeAttribute("aria-live");
      setupFilters(data, cards);
      reveal(cards.filter(c => !c.hidden));
    } catch (e) {
      grid.replaceChildren(Object.assign(document.createElement("p"), { className: "grid-note", textContent: "Could not load the exam list. If you opened this file directly, serve the folder over http (for example python -m http.server 8080) or visit the live site." }));
    }
  }
  load();
})();
