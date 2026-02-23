// @ts-check
import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import icon from "astro-icon"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: "https://hmae.fr",
  integrations: [
    vue(),
    icon({
      iconDir: resolve(__dirname, "../../packages/ui/src/assets/icons"),
    }),
  ],
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
})
