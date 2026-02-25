<template>
  <UDashboardSidebar
    class="dark"
    resizable
    collapsible
    :min-size="10"
    :default-size="15"
    :max-size="20"
    :collapsed-size="0"
  >
    <template
      #header="{ collapsed }"
    >
      <ULink
        v-if="!collapsed"
        class="flex flex-row gap-3 items-center cursor-pointer w-full"
        to="/"
      >
        <lazy-nuxt-img
          src="/glyria-logo.png"
          alt="Glyria Logo"
          class="h-10 w-10 rounded-2xl"
          draggable="false"
        />
        <h2 class="font-semibold text-white">
          Glyria Cloud
        </h2>
      </ULink>
      <div
        v-else
        class="flex flex-col justify-center items-center w-full"
      >
        <ULink
          class="flex flex-col justify-center items-center"
          to="/"
        >
          <lazy-nuxt-img
            src="/glyria-logo.png"
            alt="Glyria Logo"
            class="h-8 w-8 rounded-2xl"
            draggable="false"
          />
        </ULink>
      </div>
    </template>

    <template #default="{ collapsed }">
      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[0]"
        orientation="vertical"
      />

      <UNavigationMenu
        :collapsed="collapsed"
        :items="items[1]"
        orientation="vertical"
        class="mt-auto"
      />
    </template>
    <template #footer="{ collapsed }">
      <ButtonAccount />
    </template>
  </UDashboardSidebar>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[][] = [[{
  label: 'Dashboard',
  icon: 'i-lucide-house',
  to: '/dashboard'
}, {
  label: 'Inbox',
  icon: 'i-lucide-inbox',
  badge: {
    color: 'primary',
    variant: 'solid',
    label: '2'
  }
}, {
  label: 'Groupes',
  to: '/dashboard/groupes',
  icon: 'i-lucide-users'
}, {
  label: 'Parametres',
  icon: 'i-lucide-settings',
  defaultOpen: false,
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}], [{
  label: 'Feedback',
  icon: 'i-lucide-message-circle',
  to: 'https://github.com/nuxt-ui-templates/dashboard',
  target: '_blank'
}, {
  label: 'Help & Support',
  icon: 'i-lucide-info',
  to: 'https://github.com/nuxt/ui',
  target: '_blank'
}]]
</script>
