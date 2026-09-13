import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context) {
  const entries = (await getCollection('entries', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    // Match the site's canonical URL form; the helper adds a slash otherwise.
    trailingSlash: false,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      // Entry dates are historical; the feed uses them as written.
      pubDate: entry.data.date,
      link: `/entries/${entry.id}`,
    })),
    customData: '<language>en</language>',
  });
}
