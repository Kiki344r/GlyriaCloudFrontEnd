<template>
  <div class="bg-dark">
    <div class="absolute top-1/10 right-1/5 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
    <div class="absolute bottom-1/10 left-1/5 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />

    <div class="flex flex-col min-h-screen grid-background items-center justify-center gap-4">
      <h1 class="text-4xl w-xl max-w-screen text-center text-white slide-up">
        Apprends Linux simplement avec <span class="bg-linear-to-l from-primary to-secondary bg-clip-text text-transparent text-5xl font-semibold">Glyria Cloud</span>.
      </h1>
      <div class="flex gap-4">
        <UButton
          color="neutral"
          label="Commencer gratuitement"
          variant="subtle"
          size="xl"
          class="cursor-pointer"
        />
        <UButton
          color="secondary"
          label="Explorer la plateforme"
          variant="soft"
          size="xl"
          class="cursor-pointer"
        />
      </div>
      <div class="flex gap-4 mt-8 flex-wrap justify-center">
        <div class="flex flex-col gap-2 bg-gray-950/50 w-52 border-1 border-white/30 rounded-lg h-20 justify-center items-center text-center">
          <h2 class="text-white">
            <span class="text-pink-500 text-xl">100%</span> <br> <span class="">Gratuit</span>
          </h2>
        </div>
        <div class="flex flex-col gap-2 bg-gray-950/50 w-52 border-1 border-white/30 rounded-lg h-20 justify-center items-center text-center">
          <h2 class="text-white">
            <span class="text-pink-500 text-xl">∞</span> <br> <span class="">VMs</span>
          </h2>
        </div>
        <div class="flex flex-col gap-2 bg-gray-950/50 w-52 border-1 border-white/30 rounded-lg h-20 justify-center items-center text-center">
          <h2 class="text-white">
            <span class="text-pink-500 text-xl">24/7</span> <br> <span class="">Support</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@layer utilities {
  .grid-background {
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 100px 100px;
    animation: grid-move 20s linear infinite;
  }

  .slide-up {
    display: inline-block;
    overflow: hidden;              /* cache ce qui sort */
    transform: translateY(30px);   /* commence un peu en bas */
    opacity: 0;                     /* invisible au départ */
    animation: slideUp 1s ease forwards;
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);   /* remonte à sa position */
      opacity: 1;                  /* devient visible */
    }
  }

  @keyframes grid-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100px 100px;
    }
  }
}
</style>
