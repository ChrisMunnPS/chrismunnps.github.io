'use strict';
const SAFE = /^https:\/\/(github\.com|chrismunnps\.github\.io)\//;
const grid = document.getElementById('grid');

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
function link(href, label, cls, newTab, aria) {
  if (!SAFE.test(href)) return el('span', cls + ' off', label);
  const a = el('a', cls, label);
  a.href = href;
  a.rel = 'noopener noreferrer';
  if (newTab) a.target = '_blank';
  if (aria) a.setAttribute('aria-label', aria);
  return a;
}
function bubbles(d) {
  const row = el('span', 'bubbles');
  const full = Math.round(d.min / 5), part = Math.round((d.max - d.min) / 5);
  for (let i = 0; i < full; i++) row.append(el('span', 'b full'));
  for (let i = 0; i < part; i++) row.append(el('span', 'b range'));
  row.setAttribute('role', 'img');
  row.setAttribute('aria-label', `${d.min} to ${d.max} percent`);
  return row;
}
function card(x, cfg) {
  const c = el('article', 'card');
  const stub = el('div', 'stub');
  stub.append(el('p', 'code', x.code), el('p', 'level', x.level + ' · ' + x.product));
  const body = el('div', 'body');
  body.append(el('h3', null, x.title), el('p', 'cert', x.certification), el('p', null, x.summary));
  const facts = el('dl', 'facts');
  [['Time', x.durationMinutes + ' min'], ['To pass', x.passingScore + ' / ' + x.scoreMax]].forEach(([k, v]) => {
    const g = el('div');
    g.append(el('dt', null, k), el('dd', null, v));
    facts.append(g);
  });
  const dl = el('dl', 'domains');
  x.domains.forEach(d => {
    const row = el('div');
    row.append(el('dt', null, d.name), el('dd'));
    row.lastChild.append(bubbles(d), el('span', 'pct', d.min + '–' + d.max + '%'));
    dl.append(row);
  });
  const live = x.status === 'live';
  const actions = el('div', 'actions');
  actions.append(
    link(x.repo || cfg.repo, 'GitHub', 'btn ghost', true, `${x.code} on GitHub (opens in a new tab)`),
    link(x.url || `${cfg.site}/${x.slug}`, live ? 'Start practice exam' : 'Coming soon', 'btn go', false)
  );
  body.append(facts, el('h4', null, 'Skills measured'), dl, actions);
  c.append(stub, body);
  return c;
}
async function load() {
  try {
    const r = await fetch('exams.json', { credentials: 'omit' });
    if (!r.ok) throw new Error(r.status);
    const cfg = await r.json();
    grid.replaceChildren(...cfg.exams.map(x => card(x, cfg)));
  } catch (e) {
    grid.replaceChildren(el('p', 'note', 'Could not load the exam list. If you opened this file directly, serve it over http (for example python -m http.server) or visit the live site.'));
  }
}
const modes = ['auto', 'light', 'dark'];
const btn = document.getElementById('theme');
function applyTheme(m) {
  if (m === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.dataset.theme = m;
  btn.textContent = 'Theme: ' + m;
  try { localStorage.setItem('theme', m); } catch (e) { /* storage unavailable */ }
}
let saved = 'auto';
try { saved = localStorage.getItem('theme') || 'auto'; } catch (e) { /* ignore */ }
applyTheme(modes.includes(saved) ? saved : 'auto');
btn.addEventListener('click', () => applyTheme(modes[(modes.indexOf(document.documentElement.dataset.theme || 'auto') + 1) % 3]));
load();
