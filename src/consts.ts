export const SITE = {
  title: 'jc2.fun',
  tagline: 'Exploring the plane Jacobian conjecture',
  description:
    'An open, collaborative campaign to settle the plane Jacobian conjecture, publishing partial results, connections, new ideas, and failed approaches as they come.',
  x: 'https://x.com/dcposch',
  github: 'https://github.com/dcposch/jc2-web',
} as const;

/**
 * The site's one canonical URL form: no `.html`, no trailing slash.
 *
 * `build.format: 'file'` means Astro.url.pathname carries a `.html` at build
 * time, so canonical tags, og:url and the feed would otherwise disagree with
 * the links the site actually serves.
 */
export function canonicalPath(pathname: string): string {
  const p = pathname.replace(/index\.html$/, '').replace(/\.html$/, '').replace(/\/+$/, '');
  return p || '/';
}

/**
 * Entry dates are historical and shown as written, without timezone drift.
 * The same ISO form serves the display and the datetime attribute: it is
 * unambiguous, sorts naturally, and sets like a stamp rather than a byline.
 */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
