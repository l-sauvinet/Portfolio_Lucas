<script setup lang="ts">
import { files } from '~/data/files'
import { profile } from '~/data/profile'

const { activeTab } = useIde()

const label = computed(() => {
  if (!activeTab.value) return 'aucun fichier ouvert'
  const file = files.find((f) => f.id === activeTab.value)
  if (file) return file.lang === 'folder' ? activeTab.value : file.name
  return `${activeTab.value}.ts`
})
</script>

<template>
  <div class="flex h-7 shrink-0 items-center justify-between bg-accent px-3 text-[11px] font-medium text-ink-950">
    <div class="flex items-center gap-3">
      <span class="flex items-center gap-1">
        <Icon name="lucide:git-branch" class="h-3 w-3" />
        main
      </span>
      <span class="hidden sm:inline">{{ label }}</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="hidden items-center gap-1 sm:flex">
        <Icon name="lucide:briefcase" class="h-3 w-3" />
        {{ profile.currentEmployer }}
      </span>
      <span class="hidden md:inline">UTF-8</span>
      <span class="hidden md:inline">LF</span>
    </div>
  </div>
</template>
