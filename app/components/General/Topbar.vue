<template>
  <div class="fixed z-100 top-0 left-0 w-full h-16 bg-dark shadow-xl shadow-cyan-50/10 flex items-center justify-around text-white">
    <a
      class="flex items-center gap-4"
      href="/"
    >
      <lazy-nuxt-img
        src="/glyria-logo.png"
        alt="Glyria Logo"
        class="h-12 w-12 rounded-2xl"
        draggable="false"
      />
      <h2><b>Glyria Cloud</b></h2>
    </a>
    <div class="flex items-center gap-4">
      <a href="">Fonctionnalités</a>
      <a href="">Tarif</a>
      <a href="">Formation</a>
      <UButton
        color="primary"
        variant="solid"
        size="lg"
        *
        label="Se connecter"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
