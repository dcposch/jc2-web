import rss from '@astrojs/rss';
import { publishedEntries } from '../lib/entries';
import { SITE } from '../consts';

export async function GET(context) {
  const entries = (await publishedEntries()).toReversed();
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
