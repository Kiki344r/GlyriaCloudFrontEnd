// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/hints',
    '@nuxt/a11y'
  ],
  ssr: true,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/tailwind.css'],

  ui: {
    colorMode: false,
    experimental: {
      componentDetection: true
    }
  },

  compatibilityDate: '2025-01-15',

  vite: {
    server: {
      fs: { allow: ['..'] }, // Autorise l'accès aux node_modules
      allowedHosts: [
        'cloud.glyria.app'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
