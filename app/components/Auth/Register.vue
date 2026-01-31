<template>
  <div>
    <UPageCard class="w-full max-w-md bg-dark text-white p-5">
      <UAuthForm
        :schema="schema"
        title="Créer un compte"
        icon="i-lucide-user"
        :fields="fields"
        :submit="{
          label: 'Créer un compte',
          color: 'primary',
          variant: 'subtle',
          class: 'cursor-pointer',
          loading: registerLoading
        }"
        separator="Ou"
        :ui="{
          separator: 'text-white'
        }"
        @submit="onSubmit"
      >
        <template #description>
          Vous avez déjà un compte? <ULink
            to="/login"
            class="text-primary font-medium"
          >Connectez-vous.</ULink>
          <br>
          <ULink
            to="/"
            class="text-primary font-medium"
          >Retour à l'acceuil</ULink>
        </template>
        <template #validation>
          <UAlert
            v-if="registerError"
            color="error"
            icon="i-lucide-info"
            :title="registerError"
          />
        </template>
        <template #footer>
          En créant votre compte vous acceptez nos <ULink
            to="#"
            class="text-primary font-medium"
          >CGU</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const { Register } = useAuth()

const registerError = ref('')
const registerLoading = ref(false)

const schema = z.object({
  firstName: z.string('First name is required'),
  lastName: z.string('Last name is required'),
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters'),
  confirmPassword: z.string('Password is required').min(8, 'Must be at least 8 characters')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  registerLoading.value = true
  const res = await Register(payload.data)
  if (res === false) {
    registerLoading.value = false
  }
}

const fields: AuthFormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'Prénom',
    placeholder: 'Prénom',
    required: true
  }, {
    name: 'lastName',
    type: 'text',
    label: 'Nom de famille',
    placeholder: 'Nom de famille',
    required: true
  }, {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Adresse e-mail',
    required: true
  }, {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Mot de passe',
    required: true
  }, {
    name: 'confirmPassword',
    label: 'Confirmer le mot de passe',
    type: 'password',
    placeholder: 'Confirmer le mot de passe',
    required: true
  }]
</script>
