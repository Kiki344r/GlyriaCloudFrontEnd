<template>
  <div class="bg-dark flex flex-col gap-6 p-10 text-white">
    <div>
      <h2 class="text-center text-3xl font-semibold">
        Fonctionnalités puisssantes
      </h2>
      <p class="text-center text-gray-400 text-lg">
        Tout ce dont vous avez besoin de pour devenir un expert Linux
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10">
        <UIcon
          name="mdi:server"
          class="text-secondary text-4xl"
        />
        <h3 class="mt-3 text-lg font-semibold text-white">
          VMs Linux complètes
        </h3>
        <p class="mt-2 text-sm text-white/70">
          Accédez à des machines virtuelles Linux complètes avec distributions Debian, Ubuntu et CentOS.
        </p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>30 GB de stockage SSD</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>4 GB de RAM</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Accès SSH via le dashboard</span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10">
        <UIcon
          name="mdi:school"
          class="text-secondary text-4xl"
        />
        <h3 class="mt-3 text-lg font-semibold text-white">
          Cours structurés
        </h3>
        <p class="mt-2 text-sm text-white/70">
          Suivez des parcours de formation progressifs du débutant à l’expert avec exercices pratiques.
        </p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Parcours personnalisés</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Exercices pratiques</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Validation des acquis</span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10">
        <UIcon
          name="mdi:certificate"
          class="text-secondary text-4xl"
        />
        <h3 class="mt-3 text-lg font-semibold text-white">
          Examen et certification
        </h3>
        <p class="mt-2 text-sm text-white/70">
          Évaluez vos compétences grâce à des examens pratiques et obtenez une certification interne attestant de votre niveau.
        </p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Examens pratiques en conditions réelles</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Score détaillé et feedback</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Certificat numérique vérifiable</span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10">
        <UIcon
          name="mdi:account-group"
          class="text-secondary text-4xl"
        />
        <h3 class="mt-3 text-lg font-semibold text-white">
          Système de classes
        </h3>
        <p class="mt-2 text-sm text-white/70">
          Rejoignez une classe virtuelle pour apprendre en groupe et suivre votre progression dans un cadre scolaire.
        </p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Appartenance à une classe</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Suivi de progression par classe</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Accès aux contenus communs</span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10">
        <UIcon
          name="mdi:chart-line"
          class="text-secondary text-4xl"
        />
        <h3 class="mt-3 text-lg font-semibold text-white">
          Suivi de progression
        </h3>
        <p class="mt-2 text-sm text-white/70">
          Visualisez votre avancement dans les cours et identifiez vos points forts et axes d’amélioration.
        </p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Statistiques par module</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Historique des résultats</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Objectifs personnalisés</span>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10">
        <UIcon
          name="mdi:shield-lock"
          class="text-secondary text-4xl"
        />
        <h3 class="mt-3 text-lg font-semibold text-white">
          Sécurité maximale
        </h3>
        <p class="mt-2 text-sm text-white/70">
          Authentification à deux facteurs, connexions chiffrées et environnement sécurisé.
        </p>
        <div class="mt-4 space-y-2">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Authentification A2F</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Connexions SSL/TLS</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <span class="size-1.5 rounded-full bg-secondary" />
            <span>Sauvegardes quotidiennes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
