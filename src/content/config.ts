/**
 * Content collections.
 *
 * The `blog` collection holds the club's blog posts as Markdown files in
 * `src/content/blog/`. Posts are written in English (see README → Blog).
 */
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    /** Post headline shown in the list, on the post page and in the browser tab. */
    title: z.string(),
    /** One or two sentences used for previews and social/search descriptions. */
    description: z.string(),
    /** Publication date, e.g. 2026-01-31. Posts are sorted newest first. */
    pubDate: z.coerce.date(),
    /**
     * Cover image path relative to /public, e.g. "/images/blog/my-post.jpg".
     * Also used as the social-share thumbnail (use a 1200×630 JPG/PNG).
     */
    cover: z.string(),
    /** Alt text describing the cover image for screen readers. */
    coverAlt: z.string(),
    /** Set to true to hide the post from the site (work in progress). */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
