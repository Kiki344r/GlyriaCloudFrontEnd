<template>
  <div class="fixed z-100 top-0 left-0 w-full h-16 bg-dark shadow-xl shadow-cyan-50/10 flex items-center justify-around text-white">
    <a
      class="flex items-center gap-4 hover:rotate-2 hover:scale-110 transition duration-300 ease-in-out"
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
      <NuxtLink
        to="#terminal"
        class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
      >
        Terminal
      </NuxtLink>
      <NuxtLink
        to="#fonctionnalites"
        class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
      >
        Fonctionnalités
      </NuxtLink>
      <NuxtLink
        to="#pourquoi-nous"
        class="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
      >
        Pourquoi nous
      </NuxtLink>

      <ButtonAccount />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
