<template>
  <div class="bg-dark flex justify-center p-15">
    <div class="flex flex-col items-center gap-6 p-10 text-white bg-gradient-to-br from-secondary/40 to-primary/30 rounded-2xl shadow-xl shadow-cyan-50/10 max-w-[1000px] w-[100%]">
      <h2 class="text-5xl font-semibold text-center">
        Lancez-vous dès maintenant
      </h2>

      <p class="text-gray-400">
        Créez votre compte gratuitement et commencez votre parcours vers la maîtrise de Linux avec Glyria Cloud.
      </p>

      <UButton
        color="primary"
        variant="solid"
        label="Inscription gratuite"
        class="hover:scale-105 cursor-pointer transition duration-300 ease-in-out justify-center w-60 p-4 text-lg font-semibold rounded-lg shadow-xl shadow-cyan-50/10"
        to="/register"
      />

      <p class="text-center text-gray-400 mt-4">
        Aucune carte bancaire requise
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
