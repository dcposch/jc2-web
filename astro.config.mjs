// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { satteriMath } from './src/lib/satteri-math.mjs';
import { satteriFigure } from './src/lib/satteri-figure.mjs';

export default defineConfig({
  site: 'https://jc2.fun',
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: {
    processor: satteri({
      features: {
        math: true,
        directive: true,
        smartPunctuation: true,
      },
      mdastPlugins: [satteriMath, satteriFigure],
    }),
  },
});
