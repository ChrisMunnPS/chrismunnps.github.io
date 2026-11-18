/**
 * Theme toggle, mobile nav, and exam cards rendered from exams.json.
 * CSP-safe: no inline styles/scripts, and all text is inserted with textContent.
 */
(function () {
  "use strict";

  const KEY = "practice-exams-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* storage blocked */ } }
  };
  const lightMq = window.matchMedia("(prefers-color-scheme: light)");

  function preferred() {
    const s = store.get();
    return s === "light" || s === "dark" ? s : lightMq.matches ? "light" : "dark";
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  apply(preferred());
  if (toggle) toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    store.set(next);
    apply(next);
  });
  lightMq.addEventListener("change", e => { if (!store.get()) apply(e.matches ? "light" : "dark"); });

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  if (navToggle && nav) {
    const setOpen = open => {
      nav.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    navToggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
  }

  // ---- Exam cards ----
  const NS = "http://www.w3.org/2000/svg";
  const SAFE = /^https:\/\/(github\.com|chrismunnps\.github\.io)\//;
  const GH = "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z";

  function h(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function s(tag, attrs) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function icon(size, mode, kids) {
    const a = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": "true" };
    if (mode === "fill") a.fill = "currentColor";
    else Object.assign(a, { fill: "none", stroke: "currentColor", "stroke-width": "2" });
    const v = s("svg", a);
    kids.forEach(k => v.append(s(k[0], k[1])));
    return v;
  }
  const ICONS = {
    clock: () => icon(14, "stroke", [["circle", { cx: 12, cy: 12, r: 10 }], ["path", { d: "M12 6v6l4 2" }]]),
    check: () => icon(14, "stroke", [["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }], ["polyline", { points: "22 4 12 14.01 9 11.01" }]]),
    github: () => icon(16, "fill", [["path", { d: GH }]]),
    arrow: () => icon(16, "stroke", [["path", { d: "M5 12h14M12 5l7 7-7 7" }]])
  };

  // Level badge: hexagon with 1/2/3 rising bars for Fundamentals/Associate/Expert.
  function badge(level) {
    const n = { fundamentals: 1, associate: 2, expert: 3 }[level.toLowerCase()] || 1;
    const v = s("svg", { class: "cert-badge", width: 56, height: 56, viewBox: "0 0 56 56", role: "img", "aria-label": "Microsoft Certified " + level });
    v.append(s("path", { d: "M28 4l20 11.5v23L28 50 8 38.5v-23z", fill: "currentColor", "fill-opacity": ".14", stroke: "currentColor", "stroke-width": "2", "stroke-linejoin": "round" }));
    for (let i = 0; i < n; i++) {
      const hgt = 8 + i * 6;
      v.append(s("rect", { x: 28 - n * 4.5 + i * 9 + 0.5, y: 38 - hgt, width: 7, height: hgt, rx: 1.5, fill: "currentColor" }));
    }
    return v;
  }
  function metaItem(title, text, name) {
    const m = h("span", "meta-item");
    m.title = title;
    m.append(ICONS[name](), document.createTextNode(" " + text));
    return m;
  }
  function link(href, cls, label, iconName, iconFirst) {
    if (!SAFE.test(href)) return null;
    const a = h("a", "card-link " + cls);
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const t = document.createTextNode(label);
    if (iconFirst) a.append(ICONS[iconName](), t); else a.append(t, ICONS[iconName]());
    return a;
  }
  function card(x) {
    const live = x.status === "live";
    const c = h("article", "exam-card");
    c.dataset.exam = x.slug;
    const wrap = h("div", "cert-badge-wrap");
    wrap.append(badge(x.level));
    const top = h("div", "card-top"), eb = h("div", "exam-badge"), meta = h("div", "exam-meta");
    eb.append(h("span", "exam-code", x.code), h("span", "exam-level", x.level));
    meta.append(metaItem("Exam duration", x.duration, "clock"), metaItem("Passing score", x.passing, "check"));
    top.append(eb, meta);
    const list = h("div", "domain-list");
    x.domains.forEach(d => {
      const row = h("div", "domain"), head = h("div", "domain-header"), bar = h("div", "domain-bar"), fill = h("div");
      head.append(h("span", null, d.name), h("span", "pct", d.range));
      fill.style.width = d.width + "%";
      bar.append(fill);
      row.append(head, bar);
      list.append(row);
    });
    const foot = h("div", "card-footer");
    if (live) {
      foot.append(...[link(x.repo, "secondary", "GitHub", "github", true), link(x.url, "primary", "Start practice exam", "arrow", false)].filter(Boolean));
    } else {
      const off = h("span", "card-link primary disabled", "Coming soon");
      off.setAttribute("aria-disabled", "true");
      foot.append(off);
    }
    c.append(wrap, top, h("h3", "exam-title", x.title), h("p", "exam-desc", x.desc), list,
      h("p", "card-status", live ? "Based on Microsoft Learn · No account required" : "In development · Based on Microsoft Learn"), foot);
    return c;
  }

  function reveal(cards) {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((entries) => {
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

  async function load() {
    const grid = document.getElementById("exam-grid");
    if (!grid) return;
    try {
      const r = await fetch("exams.json", { credentials: "omit" });
      if (!r.ok) throw new Error(r.status);
      const data = await r.json();
      const cards = data.exams.map(card);
      grid.replaceChildren(...cards);
      reveal(cards);
    } catch (e) {
      grid.replaceChildren(h("p", "grid-note", "Could not load the exam list. If you opened this file directly, serve the folder over http (for example python -m http.server 8080) or visit the live site."));
    }
  }
  load();
})();
