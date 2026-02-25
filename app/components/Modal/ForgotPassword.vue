<template>
  <div>
    <ModalDefault
      v-model:open="open"
      v-model:loading="loading"
      v-model:disable-close="disableClose"
      title="Mot de passe oublié"
      description="Veuillez saisir l'adresse mail de votre compte afin de recevoir un lien de renitialisation de mot de passe."
      :button="{ label: 'Mot de passe oublié?', color: 'primary', variant: 'ghost', disabled: false }"
      :zod-schema="zodSchema"
      :zod-state="zodState"
      @submit="onSubmit"
      @close="onClose"
    >
      <template #default>
        <UFormField
          label="Email"
          name="email"
        >
          <UInput v-model="zodState.email" />
        </UFormField>
      </template>
    </ModalDefault>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const open = ref(false)
const loading = ref(false)
const disableClose = ref(false)

const { ForgotPassword } = useAuth()

const zodSchema = z.object({
  email: z.email('Email invalide.')
})
type Schema = z.output<typeof zodSchema>
const zodState = reactive({
  email: undefined
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log('Data', event)
  const status = await ForgotPassword({ email: event.data.email })
  loading.value = false
  disableClose.value = false
  if (status) {
    open.value = false
    zodState.email = undefined
  }
}
const onClose = () => {
  console.log('Modal closed')
  zodState.email = undefined
}
</script>
