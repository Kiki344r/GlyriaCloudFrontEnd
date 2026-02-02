<template>
  <div class="bg-dark h-screen w-screen">
    <div v-if="$device.isMobileOrTablet">
      <h2 class="semi-bold text-center text-white text-3xl mt-20">
        Votre appareil est indisponible pour le moment. <br>Veuillez utiliser un ordinateur.
      </h2>
    </div>
    <UDashboardGroup v-else>
      <DashboardSidebar />
      <UDashboardPanel>
        <template #header>
          <DashboardNavbar />
        </template>
        <template #body>
          <NuxtPage />
        </template>
        <template #footer>
          <ModalGroupCode />
        </template>
      </UDashboardPanel>
    </UDashboardGroup>
  </div>
</template>

<script setup lang="ts">

</script>
