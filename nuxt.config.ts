// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/motion/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  components: [
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components/ide', pathPrefix: false },
    { path: '~/components/ide/panes', pathPrefix: false },
  ],

  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  app: {
    head: {
      title: 'Lucas Sauvinet — Développeur Fullstack',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio de Lucas Sauvinet, développeur fullstack — Vue.js, Firebase, PHP/Symfony. Actuellement chez Thomyris.',
        },
        { name: 'theme-color', content: '#050505' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
