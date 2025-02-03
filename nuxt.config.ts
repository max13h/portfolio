// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-icon',
  ],
  imports: {
    dirs: ["stores",
      "types"
    ]
  },
  app: {
    head: {
      title: "Maxime Hmae's Portfolio",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Welcome to my portfolio ! " },
        { name: "theme-color", content: "#f7f6f9" }
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
      ]
    }
  },
  pinia: {
    autoImports: [
      "defineStore"
    ]
  },
  image: {
    screens: {
      'sm':	640,
      'md':	768,
      'lg':	1024,
      'xl':	1280
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/_ipx/_/citiz-website/website.png',
        '/_ipx/_/citiz-website/before.png',
        '/_ipx/_/minesweeper/loose.png',
        '/_ipx/_/minesweeper/win.png',
        '/_ipx/_/minesweeper/menu.png',
        '/_ipx/_/secretproject/sign_in.png',
        '/_ipx/_/secretproject/db.png',
        '/_ipx/_/the_favorite/common_pot.png',
        '/_ipx/_/the_favorite/competition.png',
        '/_ipx/_/the_favorite/events.png',
        '/_ipx/_/the_favorite/root.png',
      ]
    }
  }
})
