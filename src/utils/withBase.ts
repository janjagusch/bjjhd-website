// Prefix an absolute, site-internal path with Astro's configured base path
// (e.g. "/bjjhd-website/") so links and assets resolve when the site is served
// from a subpath such as GitHub Pages project pages.
//
// Pure same-page anchors (e.g. "#signup") are returned unchanged.
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
