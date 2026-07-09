<script setup lang="ts">
import { profile } from '~/data/profile'

const { sidebarOpen } = useIde()
</script>

<template>
  <div class="flex h-11 shrink-0 items-center justify-between border-b border-white/10 bg-ink-900 px-3">
    <div class="flex items-center gap-3">
      <button
        class="flex h-7 w-7 items-center justify-center rounded text-slate-400 hover:bg-white/5 hover:text-slate-100 md:hidden"
        aria-label="Ouvrir l'explorateur"
        @click="sidebarOpen = !sidebarOpen"
      >
        <Icon name="lucide:menu" class="h-4 w-4" />
      </button>

      <div class="hidden items-center gap-1.5 sm:flex">
        <span class="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span class="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span class="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      </div>

      <span class="text-xs text-slate-500">
        portfolio — <span class="text-slate-300">lucas-sauvinet</span>
      </span>
    </div>

    <span class="text-xs text-slate-500">
      <Icon name="lucide:briefcase" class="mr-1 inline h-3.5 w-3.5 -translate-y-px" />
      Actuellement chez <span class="text-slate-300">{{ profile.currentEmployer }}</span>
    </span>
  </div>
</template>
