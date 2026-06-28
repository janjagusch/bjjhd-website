# SEO Improvements

Prioritized backlog to improve search ranking for **BJJ Heidelberg**. Ordered
by impact — nothing else ranks meaningfully until the 🔴 items are done.

## 🔴 Critical

- [ ] **Fix the canonical domain.** `astro.config.mjs` uses
      `site: 'https://janjagusch.github.io'` + `base: '/bjjhd-website'`, but the
      real domain is `bjjheidelberg.de`. Set up the custom domain
      (`public/CNAME` → `www.bjjheidelberg.de`), change to
      `site: 'https://www.bjjheidelberg.de'`, and remove `base`. Everything
      below (sitemap, canonical, OG links) depends on this being correct.
- [x] **Add structured data (JSON-LD).** `SportsActivityLocation` schema in
      `src/components/StructuredData.astro`, rendered on the homepage. Pulls
      name, address, email, sport and opening hours (derived from the training
      schedule) from `config.ts`. TODO: add exact venue `geo` coordinates for
      better map placement (placeholder left in the component).
- [x] **Add `sitemap.xml`** via `@astrojs/sitemap` (pinned to `3.2.1` for Astro
      4 compatibility). Generates `sitemap-index.xml` at build.
- [x] **Add `robots.txt`** — dynamic route at `src/pages/robots.txt.ts` that
      derives the `Sitemap:` URL from `site` + base, so it stays correct when
      the domain changes.
- [ ] **Submit the site in Google Search Console** and request indexing.

## 🟠 High impact

- [x] **Address the language mismatch.** Full bilingual site added.
  - German is now the **default**, served at the root with localized slugs
    (`/`, `/ueber-uns`, `/regeln`, `/mitglied-werden`). English moved under
    `/en` (`/en`, `/en/about`, `/en/rules`, `/en/signup`).
  - `hreflang` alternates + `x-default` and `canonical` emitted from
    `BaseLayout` via the page `routeKey` (see `src/i18n.ts` route map).
  - Shared UI strings live in `src/i18n.ts`; structured content in `config.ts`
    is now `Localized`; page bodies are shared `src/components/content/*`
    components rendered per-locale. A language switch (EN/DE) is in the header.
  - German keyword-rich titles/descriptions on every page.
  - Legal pages (`impressum`, `datenschutz`, `documents`) intentionally remain
    German-only.
  - TODO (later): consider translating the legal pages' footer targets / an
    English Impressum if you want full English-side parity.
- [ ] **Add missing meta / social tags** in `BaseLayout.astro`:
  - [ ] `<link rel="canonical">`
  - [ ] `og:image` (preview image for WhatsApp / Instagram shares)
  - [ ] `og:url`
  - [ ] Twitter card tags
- [ ] **Give the homepage an explicit, keyword-rich title + description.**
      Currently falls back to the generic default. e.g. *"Brazilian Jiu-Jitsu
      in Heidelberg | BJJ Heidelberg — Free Trial Class"* with a location +
      "trial class" description.

## 🟡 Worth doing

- [x] **Add substantive homepage content.** Added a bilingual beginner's guide
      (`/einsteiger`, `/en/beginners`) covering what BJJ is, its history, rules,
      health & safety, hygiene and equipment, with a nav entry and sitemap /
      hreflang coverage. The homepage now opens with a "What is BJJ?" intro
      section that links into the guide. Content adapted from the
      [kimono.guru beginners guide](https://github.com/janjagusch/kimono.guru/blob/main/docs/beginners.md).
- [ ] **Replace SVG placeholder images with real photos.** Use descriptive
      filenames (`coach-ben-black-belt-heidelberg.jpg`) and good `alt` text for
      image-search traffic and credibility.
- [ ] **Create / claim a Google Business Profile** and link it to the site.
      Highest off-site ROI for a local gym; pairs with the JSON-LD to drive the
      map pack.
- [ ] **Add an FAQ section** ("Do I need a Gi?", "What's the minimum age?")
      to capture long-tail queries and become eligible for FAQ rich results.
