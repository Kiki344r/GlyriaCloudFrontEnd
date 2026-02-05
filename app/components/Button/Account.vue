<template>
  <div>
    <div v-if="account !== null">
      <UDropdownMenu
        :items="LoginDropdownMenuItems"
        :ui="{
          content: 'w-48'
        }"
        class="flex flex-row"
      >
        <UUser
          :name="account.firstName + ' ' + account.lastName"
          :avatar="{ src: '' }"
          class="sm:flex hidden sm:flex-row cursor-pointer"
        />
      </UDropdownMenu>
    </div>
    <div v-else>
      <UButton
        color="primary"
        variant="solid"
        size="lg"
        label="Se connecter"
        class="cursor-pointer"
        to="/login"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/components/DropdownMenu.vue'

const router = useRouter()
const { Account, LogOut } = useAuth()

const account = Account().ref()
await Account().update()

console.log(account)

const LoginDropdownMenuItems = computed(() => [
  [
    {
      label: account.value?.firstName + ' ' + account.value?.lastName,
      // avatar: {
      //  src: account.value?.avatar
      // },
      type: 'label',
      disabled: !account.value
    }
  ],
  [
    {
      label: 'Dashboard',
      icon: 'lucide:layout-dashboard',
      to: `/dashboard`,
      disabled: !account.value
    },
    {
      label: 'Settings',
      icon: 'i-lucide-cog',
      to: `/dashboard`,
      disabled: !account.value
    }
  ],
  [
    {
      label: account ? 'Se deconnecter' : 'Se connecter',
      icon: account ? 'i-lucide-log-out' : 'i-lucide-log-in',
      class: 'cursor-pointer',
      async onSelect() {
        if (account.value !== null) {
          await LogOut()
        } else {
          router.push('/login')
        }
      }
    }
  ]
] satisfies DropdownMenuItem[])
</script>
