import type { APIRoute } from 'astro';

// Generated at build time so the Sitemap URL always matches `site` in
// astro.config.mjs — no need to touch this when the final domain is set.
export const GET: APIRoute = ({ site }) => {
  // `site` has no base path, so join in BASE_URL to match where the sitemap
  // is actually served (e.g. /bjjhd-website/ on GitHub Pages project pages).
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemapUrl = new URL(`${base}/sitemap-index.xml`, site);
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
