// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint', // ,
  // '@nuxt/hints',
  // '@nuxt/a11y'
    '@nuxt/image', '@pinia/nuxt'],
  ssr: false,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
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
