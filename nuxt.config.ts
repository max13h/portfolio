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
  }
})
