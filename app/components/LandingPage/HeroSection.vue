<template>
  <div class="bg-black">
    <div class="flex min-h-screen grid-background items-center justify-center">
      <span class="absolute bottom-0 right-0" />
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
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
