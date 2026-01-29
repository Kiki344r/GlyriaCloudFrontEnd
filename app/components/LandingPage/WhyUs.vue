<template>
  <div class="bg-dark grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 lg:flex-row lg:items-center gap-6 px-40 py-10 text-white">
    <div class="flex flex-col gap-6 text-white">
      <h2 class="text-start text-3xl font-semibold">
        Pourquoi choisir Glyria Cloud ?
      </h2>
      <p class="text-start text-gray-400 md:w-2/3">
        Conçu pour les étudiants et professionnels souhaitant développer leurs compétences en administration système Linux, Glyria Cloud offre un environnement d'apprentissage complet et sécurisé.
      </p>

      <div>
        <div>
          <div class="flex flex-row items-center gap-2">
            <UIcon
              name="teenyicons:tick-circle-outline"
            />
            <p>Formation pratique</p>
          </div>
          <p class="text-gray-400  ml-6">
            Apprenez en manipulant de vraies machines virtuelles Linux
          </p>
        </div>
      </div>

      <div>
        <div>
          <div class="flex flex-row items-center gap-2">
            <UIcon
              name="teenyicons:tick-circle-outline"
            />
            <p>Authentification sécurisée</p>
          </div>
          <p class="text-gray-400  ml-6">
            Connexion protégée avec authentification à deux facteurs (A2F)
          </p>
        </div>
      </div>

      <div>
        <div>
          <div class="flex flex-row items-center gap-2">
            <UIcon
              name="teenyicons:tick-circle-outline"
            />
            <p>Projet pédagogique</p>
          </div>
          <p class="text-gray-400 ml-6">
            Développé pour le Bac Pro CIEL et WorldSkills
          </p>
        </div>
      </div>
    </div>
    <div class="gap-6 p-10 text-white bg-dark/10 grid lg:grid-cols-2 lg:grid-rows-2 grid-cols-2">
      <div class="flex flex-col items-center justify-center bg-linear-120 from-primary/60 to-primary/50 border border-primary rounded-lg p-5 gap-2">
        <UIcon
          name="solar:cpu-linear"
          class="size-8"
        />
        <p>Illimité</p>
        <p class="text-gray-300">
          Machines virtuelles
        </p>
      </div>

      <div class="flex flex-col items-center justify-center bg-linear-120 from-secondary/60 to-secondary/50 border border-secondary rounded-lg p-5 gap-2">
        <UIcon
          name="typcn:flow-merge"
          class="size-8"
        />
        <p>100%</p>
        <p class="text-gray-300">
          Temps d'activité
        </p>
      </div>

      <div class="flex flex-col items-center justify-center bg-linear-120 from-info/60 to-info/40 border border-info rounded-lg p-5 gap-2">
        <UIcon
          name="solar:code-2-bold"
          class="size-8"
        />
        <p>50+</p>
        <p class="text-gray-300">
          Exercices
        </p>
      </div>

      <div class="flex flex-col items-center justify-center bg-linear-120 from-success/60 to-success/50 border border-success rounded-lg p-5 gap-2">
        <UIcon
          name="mdi:source-branch"
          class="size-8"
        />
        <p>24/7</p>
        <p class="text-gray-300">
          Accès
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
