<template>
  <div>
    <ModalDefault
      v-model:open="store.open"
      v-model:loading="store.loading"
      v-model:disable-close="store.disableClose"
      title="Code de groupe"
      description="Veuillez saisir un code de groupe afin de rejoindre un groupe et acceder à des cours et examens. Ce code est fournie par votre formateur et est à usage unique."
      :button="{ label: 'Rejoindre un groupe', color: 'primary', variant: 'outline', disabled: false, class: 'hidden' }"
      :zod-schema="zodSchema"
      :zod-state="zodState"
      @submit="onSubmit"
      @close="onClose"
    >
      <template #default>
        <UFormField
          label="Code de groupe"
          name="groupCode"
        >
          <UInput v-model="zodState.groupCode" />
        </UFormField>
      </template>
    </ModalDefault>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { joinGroup, getGroupsRef, updateGroups } = useGroups()
const store = useGroupCodeStore()

await updateGroups()
const groups = getGroupsRef()

if (groups && groups.length < 1) {
  store.open = true
  store.disableClose = false
}

const zodSchema = z.object({
  groupCode: z.string('Code de groupe obligatoire').length(8, 'Code de groupe incorrect')
})
type Schema = z.output<typeof zodSchema>
const zodState = reactive({
  groupCode: undefined
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log('Data', event)
  const group = await joinGroup(event.data.groupCode)
  store.loading = false
  zodState.groupCode = undefined
  if (group) {
    console.log('Joined group', group)
    await updateGroups()
    store.open = false
    store.disableClose = false
  } else {
    console.log('Failed to join group')
    store.disableClose = true
  }
}
const onClose = () => {
  console.log('Modal closed')
  zodState.groupCode = undefined
}
</script>
