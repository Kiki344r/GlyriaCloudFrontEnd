<template>
  <div class="flex flex-col gap-5 p-5">
    <h1 class="text-3xl font-semibold">
      Liste des groupes
    </h1>

    <UCard v-if="groups.length === 0">
      <UEmpty
        title="Aucun groupe rejoint"
        description="Pour rejoindre un groupe, cliquez sur le bouton ci-dessous."
        icon="ic:round-groups"
        :actions="[
          {
            icon: 'mdi-plus',
            label: 'Rejoindre un groupe',
            color: 'primary',
            variant: 'outline',
            class: 'cursor-pointer',
            onClick: () => {
              console.log('Clicked')
              storeRef.open.value = true
            }
          }
        ]"
      />
    </UCard>

    <div
      v-else
      class="rounded-lg overflow-hidden bg-default ring ring-default divide-y divide-default grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5"
    >
      <UCard
        v-for="group in groups"
        :key="group.UUID"
      >
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-semibold">
            {{ group.name }}
          </h3>
          <p>
            Propriétaire: {{ group.owner.firstName + ' ' + group.owner.lastName }}
          </p>
          <ModalValidGroupLeave :uuid="group.UUID" />
        </div>
      </UCard>

      <UEmpty
        title="Vous trouvez pas votre groupe ?"
        description="Pour rejoindre un groupe, cliquez sur le bouton ci-dessous."
        icon="ic:round-groups"
        :actions="[
          {
            icon: 'mdi-plus',
            label: 'Rejoindre un groupe',
            color: 'primary',
            variant: 'outline',
            class: 'cursor-pointer',
            onClick: () => {
              console.log('Clicked')
              storeRef.open.value = true
            }
          }
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { getGroupsRef } = useGroups()
const groups = getGroupsRef()

const store = useGroupCodeStore()
const storeRef = storeToRefs(store)
</script>
