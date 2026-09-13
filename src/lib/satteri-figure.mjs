/**
 * Inlines a generated SVG figure into the prose:
 *
 *   :::figure{src="shear-grid" label="Figure 1" alt="A grid and its image." wide}
 *   Caption, which may itself contain $\LaTeX$.
 *   :::
 *
 * The SVG is inlined rather than linked so its strokes and labels inherit the
 * page's colour tokens and follow the reader's light/dark theme. The caption
 * stays Markdown, so it goes through the same math and typography pipeline as
 * the body text.
 */
import fs from 'node:fs';
import path from 'node:path';
import { defineMdastPlugin } from 'satteri';

const FIGURE_DIR = path.resolve('src/figures');

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const satteriFigure = defineMdastPlugin({
  name: 'jc2-figure',
  containerDirective(node, ctx) {
    if (node.name !== 'figure') return;

    const { src, label, alt, wide } = node.attributes ?? {};
    const fail = (message) => ctx.report({ message, node, severity: 'error' });

    if (!src) return fail(':::figure is missing a src attribute.');
    if (!alt) return fail(`:::figure{src="${src}"} is missing alt text.`);

    const svgPath = path.join(FIGURE_DIR, `${src}.svg`);
    if (!fs.existsSync(svgPath)) {
      return fail(
        `:::figure{src="${src}"} has no figure at ${path.relative(process.cwd(), svgPath)}. ` +
          'Run: python3 scripts/figures.py',
      );
    }
    const svg = fs.readFileSync(svgPath, 'utf8').trim();
    // A bare attribute (`wide`) parses with a null value.
    const isWide = wide === null || wide === '' || wide === 'true';

    const open =
      `<figure class="figure${isWide ? ' wide' : ''}" role="figure" aria-label="${escape(alt)}">` +
      `<div class="figure__frame">${svg}</div>` +
      `<figcaption>${label ? `<b>${escape(label)}</b>` : ''}`;

    ctx.replaceNode(node, [
      { type: 'html', value: open },
      ...(node.children ?? []),
      { type: 'html', value: '</figcaption></figure>' },
    ]);
  },
});
