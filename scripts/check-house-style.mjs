/**
 * House style, enforced at build time.
 *
 * No em dashes in rendered prose. They are easy to reach for and they make a
 * sentence look considered while hiding a missing clause; a comma, a colon or
 * a full stop is almost always clearer. En dashes stay: they are correct in
 * compound names such as Jung–van der Kulk and Riemann–Hurwitz.
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';

function* htmlFiles(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(full);
    else if (e.name.endsWith('.html')) yield full;
  }
}

const offences = [];
for (const file of htmlFiles(DIST)) {
  const html = fs.readFileSync(file, 'utf8');
  let i = -1;
  while ((i = html.indexOf('—', i + 1)) !== -1) {
    offences.push(`${file}: …${html.slice(Math.max(0, i - 60), i + 60).replace(/\s+/g, ' ')}…`);
  }
}

if (offences.length) {
  console.error(`\nHouse style: ${offences.length} em dash(es) in the built output.`);
  console.error('Rewrite with a comma, a colon, or a full stop.\n');
  for (const o of offences) console.error(`  ${o}`);
  process.exit(1);
}
console.log('House style: no em dashes in rendered output.');
