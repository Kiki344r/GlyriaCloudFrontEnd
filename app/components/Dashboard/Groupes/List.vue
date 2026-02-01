<template>
  <div>
    <h1>Liste des groupes</h1>
    <ul>
      <li
        v-for="group in groups"
        :key="group.UUID"
      >
        Nom: {{ group.name }} <br>
        OwnerId: {{ group.ownerId }}<br>
        UUID: {{ group.UUID }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { getGroups } = useGroups()
const groupsReq = await getGroups()
const groups = ref<{ UUID: string, name: string, ownerId: string }[]>([])

if (groupsReq) {
  groups.value = groupsReq
}
</script>
