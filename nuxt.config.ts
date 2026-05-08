export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  pwa: {
    registerType: 'autoUpdate',

    manifest: {
      name: 'nieruchomości.pl',
      short_name: 'nieruchomości',
      description: 'Aplikacja PWA do przeglądania ofert nieruchomości.',
      theme_color: '#0F172A',
      background_color: '#F8FAFC',
      display: 'standalone',

      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})