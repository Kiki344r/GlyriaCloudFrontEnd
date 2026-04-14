<template>
  <div class="min-h-screen flex items-center justify-center p-8">
    <div class="max-w-md w-full text-center space-y-6">
      <!-- Icône -->
      <div class="size-16 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-center mx-auto">
        <UIcon
          name="i-heroicons-computer-desktop"
          class="size-8 text-gray-700 dark:text-gray-300"
        />
      </div>

      <!-- Texte -->
      <div class="space-y-2">
        <p class="text-xs font-medium tracking-widest text-gray-400 uppercase">
          Glyria Cloud
        </p>
        <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Application de bureau requise
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Cette interface n'est pas accessible depuis un navigateur. Télécharge l'application de bureau pour accéder à ta plateforme, gérer tes VMs et te connecter à ton groupe.
        </p>
      </div>

      <!-- Actions -->
      <div class="space-y-2">
        <UButton
          label="Télécharger l'application"
          icon="i-heroicons-arrow-down-tray"
          size="md"
          block
          :href="downloadUrl"
          target="_blank"
        />
      </div>

      <p class="text-xs text-gray-400">
        Déjà installée ? Lance l'app et connecte-toi avec tes identifiants.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const downloadUrl = computed(() => config.public.downloadUrl ?? 'https://github.com/Kiki344r/GlyriaCloudApp/releases/latest/download/GlyriaCloud_x64-setup.exe')
</script>
