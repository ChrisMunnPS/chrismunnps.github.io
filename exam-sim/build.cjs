/**
 * Pre-renders the exam cards into index.html (for crawlers and no-JS visitors)
 * and regenerates sitemap.xml (robots.txt must live at the host root, so it is not generated here). Run after editing exams.json:
 *   npm install && npm run build
 * Needs jsdom (dev dependency only; the site itself has no dependencies).
 */
const fs = require("fs");
const { JSDOM } = require("jsdom");
const SITE = "https://chrismunnps.github.io/exam-sim";

const data = JSON.parse(fs.readFileSync("exams.json", "utf8"));
const dom = new JSDOM("<!doctype html><body></body>");
const { card } = require("./cards.js")(dom.window.document);
const wrap = dom.window.document.createElement("div");
data.exams.forEach(x => wrap.append(card(x)));

const re = /<!-- cards:start -->[\s\S]*?<!-- cards:end -->/;
let html = fs.readFileSync("index.html", "utf8");
if (!re.test(html)) throw new Error("cards:start / cards:end markers not found in index.html");
html = html.replace(re, () => "<!-- cards:start -->\n" + wrap.innerHTML + "\n<!-- cards:end -->");
fs.writeFileSync("index.html", html);

const today = new Date().toISOString().slice(0, 10);
const urls = [SITE + "/"].concat(data.exams.filter(x => x.status === "live").map(x => x.url));
fs.writeFileSync("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => "  <url><loc>" + u + "</loc><lastmod>" + today + "</lastmod></url>").join("\n") + "\n</urlset>\n");
console.log("Pre-rendered " + data.exams.length + " cards; sitemap lists " + urls.length + " URLs.");
