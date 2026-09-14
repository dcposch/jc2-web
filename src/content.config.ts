import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entries = defineCollection({
  loader: glob({ base: './src/content/entries', pattern: '**/*.md' }),
  schema: z.object({
    /** Historical date of the work. Drives display order, display, and the feed. */
    date: z.coerce.date(),
    title: z.string(),
    /** One sentence for the index, the feed, and the page's meta description. */
    description: z.string(),
    /** Withheld from the index, the feed, and the sitemap until ready to read. */
    draft: z.boolean().default(false),
    /** Who did the work: a swarm name or a person. Credit follows this field. */
    author: z.string().default('swarmHQ'),
    /** Where the argument lives: a Lean directory, a lane report, its hostile review. */
    sources: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
  }),
});

export const collections = { entries };
