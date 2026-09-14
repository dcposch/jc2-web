/**
 * The one KaTeX configuration, used at build time by the Markdown pipeline
 * (satteri-math.mjs) and by the Math component on .astro pages. A macro added
 * here is available in both.
 */
export const KATEX_OPTIONS = {
  // Invalid LaTeX fails the build rather than shipping red error text.
  throwOnError: true,
  strict: 'ignore',
  macros: { '\\C': '\\mathbb{C}', '\\R': '\\mathbb{R}' },
};
