/**
 * Renders `$…$` and `$$…$$` to KaTeX markup at build time, so pages ship no
 * math JavaScript and no raw TeX ever flashes on screen.
 *
 * Invalid LaTeX fails the build rather than shipping red error text — on a
 * mathematics site a broken formula is a broken page.
 */
import katex from 'katex';
import { defineMdastPlugin } from 'satteri';

const OPTIONS = {
  throwOnError: true,
  strict: 'ignore',
  macros: { '\\C': '\\mathbb{C}', '\\R': '\\mathbb{R}' },
};

function render(value, displayMode, ctx, node) {
  try {
    return katex.renderToString(value, { ...OPTIONS, displayMode });
  } catch (err) {
    ctx.report({
      message: `KaTeX could not render ${displayMode ? 'display' : 'inline'} math: ${value.trim()}\n  ${err.message}`,
      node,
      severity: 'error',
    });
    return '';
  }
}

export const satteriMath = defineMdastPlugin({
  name: 'jc2-katex',
  math(node, ctx) {
    ctx.replaceNode(node, { type: 'html', value: render(node.value, true, ctx, node) });
  },
  inlineMath(node, ctx) {
    ctx.replaceNode(node, { type: 'html', value: render(node.value, false, ctx, node) });
  },
});
