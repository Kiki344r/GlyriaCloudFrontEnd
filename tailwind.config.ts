import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {
      height: {
        '114': '28.5rem',
        '130': '32.5rem'
      },
      width: {
        '180': '45rem'
      },
      zIndex: {
        '100': '100'
      },
      backgroundImage: {
        'linear-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'linear-120': 'linear-gradient(120deg, var(--tw-gradient-stops))'
      }
    }
  },
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
} satisfies Config
