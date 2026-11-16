// Builds 08-CHEAT-SHEETS.html from the four Markdown cheat sheets.
// Run: node tools/build-cheat-sheets.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');

const files = [
  ['04-CHEAT-SHEET-IDENTITY.md', 'Identity management'],
  ['05-CHEAT-SHEET-AUTH.md', 'Authentication and access'],
  ['06-CHEAT-SHEET-APPS.md', 'Access management for apps'],
  ['07-CHEAT-SHEET-GOVERNANCE.md', 'Identity governance']
];

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inline(text) {
  return esc(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
}

function cells(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function convert(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith('# ')) {
      out.push('<h1>' + inline(trimmed.slice(2)) + '</h1>');
      i++;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      out.push('<h2>' + inline(trimmed.slice(3)) + '</h2>');
      i++;
      continue;
    }

    if (trimmed.startsWith('|')) {
      const block = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        block.push(lines[i].trim());
        i++;
      }
      const head = cells(block[0]);
      const body = block.slice(2).map(cells);
      out.push('<table><thead><tr>' + head.map((cell) => '<th>' + inline(cell) + '</th>').join('') + '</tr></thead><tbody>'
        + body.map((row) => '<tr>' + row.map((cell) => '<td>' + inline(cell) + '</td>').join('') + '</tr>').join('')
        + '</tbody></table>');
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      out.push('<ul>' + items.map((item) => '<li>' + inline(item) + '</li>').join('') + '</ul>');
      continue;
    }

    if (/^\*[^*].*\*$/.test(trimmed)) {
      out.push('<p class="note">' + inline(trimmed) + '</p>');
      i++;
      continue;
    }

    out.push('<p>' + inline(trimmed) + '</p>');
    i++;
  }

  return out.join('\n');
}

const sheets = files.map(([file, label], index) => {
  const markdown = readFileSync(join(root, file), 'utf8');
  const body = convert(markdown);
  return '<article class="sheet" id="sheet-' + (index + 1) + '" aria-label="' + esc(label) + '">\n'
    + body
    + '\n<footer>SC-300 cheat sheet ' + (index + 1) + ' of 4 &middot; unofficial study aid &middot; snapshot 2026-11</footer>\n</article>';
}).join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SC-300 cheat sheets - print pack</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #eef2f7;
    color: #14181f;
    font-family: "Segoe UI", system-ui, -apple-system, Arial, sans-serif;
  }
  .toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 12px 18px;
    background: #fff;
    border-bottom: 1px solid #d8dee9;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .toolbar strong { font-size: .95rem; }
  .toolbar span { font-size: .76rem; color: #4b5563; }
  .toolbar button {
    padding: 8px 14px;
    border: 0;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font: inherit;
    font-size: .84rem;
    font-weight: 650;
    cursor: pointer;
  }
  .toolbar button:hover { background: #1d4ed8; }
  .pack { padding: 18px; display: grid; gap: 18px; justify-content: center; }
  .sheet {
    width: 210mm;
    min-height: 297mm;
    padding: 8mm;
    background: #fff;
    box-shadow: 0 10px 30px -18px rgba(16, 24, 40, .55);
    border: 1px solid #e2e8f0;
    font-size: 6.8pt;
    line-height: 1.23;
    column-count: 2;
    column-gap: 6mm;
    column-fill: auto;
  }
  h1 {
    margin: 0 0 1.5mm;
    padding-bottom: 1mm;
    border-bottom: 1.4pt solid #2563eb;
    font-size: 12pt;
    line-height: 1.12;
    letter-spacing: -.01em;
    column-span: all;
  }
  h2 {
    margin: 0 0 .6mm;
    padding: 1mm 0 .6mm;
    border-bottom: .7pt solid #cbd5e1;
    font-size: 8.4pt;
    line-height: 1.15;
    color: #1d4ed8;
    break-after: avoid;
  }
  p { margin: 0 0 1.2mm; }
  p.note {
    margin: 1mm 0 1.5mm;
    font-size: 6pt;
    color: #4b5563;
  }
  code {
    font-family: "Cascadia Mono", Consolas, monospace;
    font-size: .92em;
    background: #eef2f9;
    padding: 0 .5mm;
    border-radius: 1mm;
  }
  table {
    width: 100%;
    margin: 0 0 1.4mm;
    border-collapse: collapse;
    table-layout: fixed;
  }
  thead { display: table-header-group; }
  th {
    padding: .7mm .95mm;
    background: #e8eefb;
    border: .5pt solid #c7d2e5;
    font-size: 6.3pt;
    font-weight: 700;
    letter-spacing: .03em;
    text-align: left;
    text-transform: uppercase;
    color: #1e3a8a;
  }
  td {
    padding: .6mm .9mm;
    border: .5pt solid #d7deea;
    vertical-align: top;
  }
  td:first-child { width: 27%; font-weight: 600; color: #0f172a; }
  tr { break-inside: avoid; }
  ul { margin: 0 0 1.2mm; padding-left: 3.4mm; }
  li { margin: 0 0 .4mm; }
  footer {
    column-span: all;
    margin-top: 1.2mm;
    padding-top: .8mm;
    border-top: .5pt solid #cbd5e1;
    font-size: 5.6pt;
    color: #6b7280;
  }
  @media print {
    body { background: #fff; }
    .toolbar { display: none; }
    .pack { display: block; padding: 0; }
    .sheet {
      width: auto;
      min-height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      box-shadow: none;
      break-after: page;
    }
    .sheet:last-of-type { break-after: auto; }
    @page { size: A4 portrait; margin: 8mm; }
  }
</style>
</head>
<body>
<header class="toolbar">
  <div><strong>SC-300 cheat sheets</strong> &middot; <span>four domains, one A4 page each</span></div>
  <button type="button" onclick="window.print()">Print all four sheets</button>
</header>
<main class="pack">
${sheets}
</main>
</body>
</html>
`;

writeFileSync(join(root, '08-CHEAT-SHEETS.html'), html, 'utf8');
console.log('Wrote 08-CHEAT-SHEETS.html');
