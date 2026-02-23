// @ts-check
import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  site: "https://hmae.fr",
  integrations: [vue()],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
})
