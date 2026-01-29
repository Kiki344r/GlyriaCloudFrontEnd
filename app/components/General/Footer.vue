<template>
  <UFooter class="bg-dark px-10">
    <template #top>
      <UFooterColumns
        :columns="footerLinks"
      >
        <template #left>
          <div class="flex flex-col gap-3">
            <NuxtLink
              class="text-lg font-semibold text-white cursor-pointer"
              to="/"
            >
              Glyria Cloud
            </NuxtLink>
            <p class="text-sm text-gray-400 max-w-xs">
              Plateforme de formation Linux créée par des lycéens pour les lycéens et étudiants.
            </p>
          </div>
        </template>
      </UFooterColumns>
    </template>

    <template #bottom>
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>
          © {{ currentYear }} Glyria Cloud - Projet scolaire
        </p>
        <div class="flex gap-4">
          <NuxtLink
            to="/mentions-legales"
            class="hover:text-white transition-colors"
          >
            Mentions légales
          </NuxtLink>
          <NuxtLink
            to="/cgu"
            class="hover:text-white transition-colors"
          >
            CGU
          </NuxtLink>
        </div>
      </div>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    label: 'À propos',
    children: [
      {
        label: 'Le projet',
        to: '/a-propos'
      },
      {
        label: 'GitHub',
        to: 'https://github.com/Kiki344r/GlyriaCloudFrontEnd',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Formations',
    children: [
      {
        label: 'Parcours Linux',
        to: '/formations'
      },
      {
        label: 'Tutoriels',
        to: '/tutoriels'
      }
    ]
  },
  {
    label: 'Ressources',
    children: [
      {
        label: 'Documentation',
        to: '/docs'
      },
      {
        label: 'FAQ',
        to: '/faq'
      }
    ]
  },
  {
    label: 'Légal',
    children: [
      {
        label: 'Mentions légales',
        to: '/mentions-legales'
      },
      {
        label: 'CGU',
        to: '/cgu'
      }
    ]
  }
]
</script>
