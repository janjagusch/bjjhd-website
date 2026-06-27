// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output is the default in Astro.
  output: 'static',

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
