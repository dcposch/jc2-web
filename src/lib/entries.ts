import { getCollection } from 'astro:content';

/** Every entry that is ready to read, oldest first. */
export async function publishedEntries() {
  const entries = await getCollection('entries', ({ data }) => !data.draft);
  return entries.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}
