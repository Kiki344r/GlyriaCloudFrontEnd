<template>
  <div>
    <UModal
      v-model:open="modelOpen"
      :title="title"
      :description="description"
      :show="true"
      :dismissible="false"
      :close="{
        class: 'cursor-pointer',
        onClick: onClose,
        disabled: disableClose
      }"
    >
      <UButton
        :label="button.label"
        :color="button.color"
        :disabled="button.disabled"
        class="cursor-pointer"
      />
      <template #body>
        <UForm
          class="flex flex-col gap-4"
          :schema="zodSchema"
          :state="zodState"
          @submit="onSubmit"
        >
          <slot />
          <USeparator class="w-full p-0 m-0" />
          <div class="flex flex-row items-center gap-4 self-end">
            <UButton
              class="cursor-pointer"
              label="Cancel"
              color="neutral"
              variant="outline"
              :disabled="disableClose"
              @click="onClose"
            />
            <UButton
              class="cursor-pointer"
              label="Submit"
              color="neutral"
              type="submit"
              :loading="loading"
            />
          </div>
        </UForm>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import type * as z from 'zod'

const props = defineProps<{
  open: boolean
  loading: boolean
  disableClose: boolean
  title: string
  description: string
  button: {
    label: string
    color: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral' | undefined
    disabled: boolean
  }
  zodSchema: any
  zodState: any
}>()
type Schema = z.output<typeof props.zodSchema>

const emit = defineEmits<{
  (e: 'update:open' | 'update:loading' | 'update:disableClose', v: boolean): void
  (e: 'submit', event: FormSubmitEvent<Schema>): void
  (e: 'close'): void
}>()

const modelOpen = computed({
  get: () => props.open,
  set: (value: boolean) => emit('update:open', value)
})
const modelLoading = computed({
  get: () => props.loading,
  set: (value: boolean) => emit('update:loading', value)
})

const modelDisableClose = computed({
  get: () => props.disableClose,
  set: (value: boolean) => emit('update:disableClose', value)
})

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  emit('submit', event)
  modelLoading.value = true
  modelDisableClose.value = true
}

const onClose = () => {
  emit('close')
  modelOpen.value = false
}
</script>
