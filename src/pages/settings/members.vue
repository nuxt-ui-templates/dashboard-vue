<script setup lang="ts">
import { computed, ref } from 'vue'
import { useFetch } from '@vueuse/core'
import type { Member } from '../../types'

const { data: members } = useFetch<Member[]>('https://dashboard-template.nuxt.dev/api/members', { initialData: [] }).json<Member[]>()

const q = ref('')

const filteredMembers = computed(() => {
  const search = q.value.toLowerCase()

  return members.value?.filter(member => member.name.toLowerCase().includes(search) || member.username.toLowerCase().includes(search)) ?? []
})
</script>

<template>
  <div>
    <UPageCard
      title="Members"
      description="Invite new members by email address."
      variant="naked"
      orientation="horizontal"
      class="mb-4"
    >
      <UButton
        label="Invite people"
        color="neutral"
        class="w-fit lg:ms-auto"
      />
    </UPageCard>

    <UPageCard variant="subtle" :ui="{ container: 'p-0 sm:p-0 gap-y-0', wrapper: 'items-stretch', header: 'p-4 mb-0 border-b border-default' }">
      <template #header>
        <UInput
          v-model="q"
          icon="i-lucide-search"
          placeholder="Search members"
          autofocus
          class="w-full"
        />
      </template>

      <SettingsMembersList :members="filteredMembers" />
    </UPageCard>
  </div>
</template>
