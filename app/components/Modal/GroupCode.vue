<template>
  <div>
    <ModalDefault
      v-model:open="open"
      v-model:loading="loading"
      v-model:disable-close="disableClose"
      title="Code de groupe"
      description="Veuillez saisir un code de groupe afin d'acceder à la plateforme. Ce code est fournie par votre formateur et est à usage unique."
      :button="{ label: 'Button label', color: 'info', disabled: false }"
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

const { Account } = useAuth()
const { fetch: fetchUser } = Account()
const user = await fetchUser()
const { joinGroup } = useGroups()

const open = ref(false)
const loading = ref(false)
const disableClose = ref(false)

if (user && user.groups.length < 1) {
  open.value = true
  disableClose.value = true
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
  if (group) {
    console.log('Joined group', group)
    open.value = false
    loading.value = false
    disableClose.value = true
  } else {
    console.log('Failed to join group')
    loading.value = false
    disableClose.value = true
  }
}
const onClose = () => {
  console.log('Modal closed')
}
</script>
