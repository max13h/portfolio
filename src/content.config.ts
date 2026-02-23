import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const meSchema = z.object({
  title: z.string(),
})

const me_fr = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/fr" }),
  schema: meSchema,
})

const me_en = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/en" }),
  schema: meSchema,
})

export const collections = { me_fr, me_en }
