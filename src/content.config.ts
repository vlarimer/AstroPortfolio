// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    project: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const casestudy = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    project: z.string(),
    title: z.string(),
    description: z.string(),
    theme: z.string(),
    color: z.string(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { work, casestudy };