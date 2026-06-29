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
  // Set `site` to your final URL.
  //  - Custom domain (recommended, see public/CNAME): https://www.bjjheidelberg.de
  //  - Project page without custom domain:            https://<user>.github.io
  //    In that case ALSO set `base: '/<repo-name>'`.
  site: 'https://janjagusch.github.io',
  base: '/bjjhd-website',

  // Trailing slashes keep links consistent on GitHub Pages.
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
