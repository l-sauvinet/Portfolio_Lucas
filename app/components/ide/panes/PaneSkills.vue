<script setup lang="ts">
import { skills, skillCategories } from '~/data/skills'
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <PaneHeader path="~/skills.json" comment="// Stack technique" />

    <div class="space-y-10">
      <div v-for="category in skillCategories" :key="category.key">
        <h3 class="mb-4 text-xs uppercase tracking-widest text-slate-500">{{ category.label }}</h3>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            v-for="skill in skills.filter((s) => s.category === category.key)"
            :key="skill.name"
            class="panel panel-hover group relative flex items-center gap-3 px-4 py-3.5"
          >
            <Icon :name="skill.icon" class="h-6 w-6 shrink-0 transition-transform group-hover:scale-110" />
            <span class="text-sm font-medium text-slate-300 group-hover:text-slate-100">{{ skill.name }}</span>

            <div
              role="tooltip"
              class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 translate-y-1 rounded-lg border border-white/10 bg-ink-800 px-3 py-2.5 text-xs leading-relaxed text-slate-300 opacity-0 shadow-xl shadow-black/40 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {{ skill.description }}
              <span class="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1 rotate-45 border-b border-r border-white/10 bg-ink-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
