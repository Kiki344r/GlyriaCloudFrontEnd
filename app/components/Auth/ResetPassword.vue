<template>
  <div>
    <UPageCard class="w-full max-w-md bg-dark text-white p-5">
      <UAuthForm
        :schema="schema"
        title="Mot de passe oublié"
        icon="mdi:lock-reset"
        :fields="fields"
        :submit="{
          label: 'Réinitialiser le mot de passe',
          color: 'primary',
          variant: 'subtle',
          class: 'cursor-pointer',
          loading: resetPasswordLoading
        }"
        :ui="{
          separator: 'text-white'
        }"
        @submit="onSubmit"
      >
        <template #description>
          <p>Entrez votre nouveau mot de passe pour le rénitialiser.</p>
          <ULink
            to="/"
            class="text-primary font-medium"
          >Retour à l'acceuil</ULink>
        </template>
        <template #validation>
          <UAlert
            v-if="resetPasswordError"
            color="error"
            icon="i-lucide-info"
            :title="resetPasswordError"
          />
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const { ResetPassword, CheckPasswordCode } = useAuth()
const toast = useToast()

const router = useRouter()
const route = useRoute()
const code = route.query.code as string

const PasswordCodeStatus = await CheckPasswordCode({ code: code || '' })
if (!PasswordCodeStatus) {
  toast.add({
    title: 'Lien invalide',
    description: 'Le lien de rénitialisation de mot de passe est expiré ou inexistant.',
    color: 'error'
  })
  router.push('/')
}

const resetPasswordError = ref('')
const resetPasswordLoading = ref(false)

const schema = z.object({
  password: z.string('Mot de passe requis')
    .min(8, 'La longueur doit être de 8 caractères minimum.'),
  confirmPassword: z.string('Confirmation du mot de passe requise')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  resetPasswordLoading.value = true
  const res = await ResetPassword({
    code: code,
    password: payload.data.password
  })
  if (!res) {
    resetPasswordLoading.value = false
  } else {
    return router.push('/login')
  }
}

const fields: AuthFormField[] = [{
  name: 'password',
  type: 'password',
  label: 'Nouveau mot de passe',
  placeholder: 'Entrez votre nouveau mot de passe',
  required: true
}, {
  name: 'confirmPassword',
  label: 'Confirmer le mot de passe',
  type: 'password',
  placeholder: 'Confirmer votre mot de passe',
  required: true
}]
</script>
