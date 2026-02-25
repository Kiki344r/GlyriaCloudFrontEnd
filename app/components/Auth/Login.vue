<template>
  <div>
    <UPageCard class="w-full max-w-md bg-dark text-white p-5">
      <UAuthForm
        :schema="schema"
        title="Connexion"
        description="Entrez vos identifiants pour vous connecter."
        icon="i-lucide-user"
        :fields="fields"
        :submit="{
          label: 'Se connecter',
          color: 'primary',
          variant: 'subtle',
          class: 'cursor-pointer',
          loading: loginLoading
        }"
        separator="Ou"
        :ui="{
          separator: 'text-white'
        }"
        @submit="onSubmit"
      >
        <template #description>
          Vous n'avez pas de compte? <ULink
            to="/register"
            class="text-primary font-medium"
          >Créer un compte</ULink>.
          <br>
          <ULink
            to="/"
            class="text-primary font-medium"
          >Retour à l'acceuil</ULink>
        </template>
        <template #password-hint>
          <ModalForgotPassword />
        </template>
        <template #validation>
          <UAlert
            v-if="loginError"
            color="error"
            icon="i-lucide-info"
            :title="loginError"
          />
        </template>
        <template #footer>
          En vous connectant vous acceptez nos <ULink
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
import type { FormSubmitEvent, AuthFormField, ButtonProps } from '@nuxt/ui'

const { Login } = useAuth()
const toast = useToast()

const loginError = ref('')
const loginLoading = ref(false)

const schema = z.object({
  email: z.email('Email invalide.'),
  password: z.string('Mot de passe requis').min(8, 'La longueur doit être de 8caractères minimum.'),
  remember: z.boolean().optional()
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  loginLoading.value = true
  const res = await Login(payload.data)
  if (res === false) {
    loginLoading.value = false
  }
}

const fields: AuthFormField[] = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Entrez votre email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Entrez votre mot de passe',
  required: true
}, {
  name: 'remember',
  label: 'Se rappeler de moi',
  type: 'checkbox'
}]

const providers = [{
  label: 'Google',
  icon: 'i-simple-icons-google',
  color: 'secondary',
  type: 'button',
  variant: 'soft',
  class: 'cursor-pointer',
  onClick: () => {
    toast.add({ title: 'Google', description: 'Login with Google' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  color: 'secondary',
  type: 'button',
  variant: 'soft',
  class: 'cursor-pointer',
  onClick: () => {
    toast.add({ title: 'GitHub', description: 'Login with GitHub' })
  }
}] as ButtonProps[]
</script>
