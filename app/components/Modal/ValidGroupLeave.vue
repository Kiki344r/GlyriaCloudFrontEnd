<template>
  <div>
    <ModalDefault
      v-model:open="open"
      v-model:loading="loading"
      v-model:disable-close="disableClose"
      title="Confirmer votre départ du groupe"
      description="Veuillez confirmer que vous souhaitez quitter ce groupe. Vous aurez besoin du code du groupe pour le rejoindre à nouveau."
      :button="{ label: 'Quitter le groupe', class: 'mt-2 w-full max-w-[200px]', variant: 'outline', color: 'error', disabled: false }"
      :zod-schema="zodSchema"
      :zod-state="zodState"
      @submit="onSubmit"
      @close="onClose"
    >
      <template #default>
        <UFormField
          label="Tapez 'QUITTER' pour confirmer que vous quittez le groupe."
          name="confirmLeave"
        >
          <UInput v-model="zodState.confirmLeave" />
        </UFormField>
      </template>
    </ModalDefault>
  </div>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { leaveGroup, updateGroups } = useGroups()
const toast = useToast()

const props = defineProps<{ uuid: string }>()

const open = ref(false)
const loading = ref(false)
const disableClose = ref(false)

watch(open, (val) => {
  if (val) {
    loading.value = false
    disableClose.value = false
    zodState.confirmLeave = undefined
  }
})

const zodSchema = z.object({
  confirmLeave: z.string('Veuillez saisir \'QUITTER\' pour confirmer que vous quittez le groupe.')
})
type Schema = z.output<typeof zodSchema>
const zodState = reactive({
  confirmLeave: undefined
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log('Data', event)
  if (event.data.confirmLeave !== 'QUITTER') {
    open.value = false
    disableClose.value = false
    loading.value = false
    toast.add({
      title: 'Annulation',
      description: 'Le texte saisi est incorrect. Tapez \'QUITTER\' pour confirmer que vous quittez le groupe.'
    })
  } else {
    const group = await leaveGroup(props.uuid)
    if (group) {
      toast.add({
        title: 'Départ réussi',
        description: 'Vous avez quitté le groupe avec succès !'
      })
      console.log('Leaved group')
      await updateGroups()
      open.value = false
      loading.value = false
    } else {
      console.log('Failed to leave group')
      loading.value = false
      toast.add({
        title: 'Erreur',
        description: 'Impossible de quitter le groupe. Veuillez réessayer.'
      })
    }
  }
}

const onClose = () => {
  console.log('Modal closed')
  loading.value = false
  toast.add({
    title: 'Annulation',
    description: 'Vous avez annulé le départ du groupe.'
  })
}
</script>
