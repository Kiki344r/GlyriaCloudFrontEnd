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

const { Login } = useAuth()
const toast = useToast()

const registerError = ref('')
const registerLoading = ref(false)

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters'),
  confirm_password: z.string('Password is required').min(8, 'Must be at least 8 characters')
}).refine(data => data.password === data.confirm_password, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirm_password']
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  registerLoading.value = true
  console.log(payload)
}

const fields: AuthFormField[] = [{
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
  name: 'confirm_password',
  label: 'Confirmer le mot de passe',
  type: 'password',
  placeholder: 'Confirmer le mot de passe',
  required: true
}]
</script>
