import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    featured: z.boolean().default(false),
    links: z
      .object({
        github: z.string().url().optional(),
        writeup: z.string().url().optional(),
        demo: z.string().url().optional(),
        paper: z.string().url().optional(),
      })
      .optional(),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  writing,
};
