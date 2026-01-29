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

  tailwindcss: {
    config: {
      content: [
        './app/components/**/*.{js,vue,ts}',
        './app/layouts/**/*.vue',
        './app/pages/**/*.vue',
        './app/plugins/**/*.{js,ts}',
        './app/app.vue',
        './app/**/*.{js,vue,ts}',
        './node_modules/@nuxt/ui/dist/**/*.{js,vue,ts}'
      ],
      safelist: [
        'bg-linear-to-l',
        'bg-linear-120',
        'from-primary',
        'to-secondary',
        'from-primary/60',
        'to-primary/50',
        'from-secondary/60',
        'to-secondary/50',
        'from-info/60',
        'to-info/40',
        'from-success/60',
        'to-success/50',
        'border-primary',
        'border-secondary',
        'border-info',
        'border-success',
        'text-primary',
        'text-secondary',
        'bg-dark',
        'shadow-cyan-50/10',
        'grid-background'
      ]
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
