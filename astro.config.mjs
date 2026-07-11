// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Static output is the default in Astro.
  output: 'static',

  // Generates sitemap-index.xml + sitemap-0.xml at build time using `site`.
  // Update `site` below to the final domain so the URLs are correct.
  integrations: [
    sitemap({
      // Keep the (noindex) confirmation pages out of the sitemap.
      filter: (page) =>
        !/\/(danke|en\/thank-you)\/?$/.test(page),
    }),
  ],

  // === GitHub Pages configuration =========================================
  // Served under the custom apex domain (see public/CNAME).
  site: 'https://bjjheidelberg.de',

  // Trailing slashes keep links consistent on GitHub Pages.
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
