<script setup lang="ts">
import { education } from '~/data/education'
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <PaneHeader path="~/education.md" comment="// Formation" />

    <ol class="relative space-y-8 border-l border-white/10 pl-8">
      <li v-for="item in education" :key="item.title" class="relative">
        <span class="absolute -left-[calc(2rem+5px)] top-1.5 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center">
          <span class="h-2.5 w-2.5 rounded-full" :class="item.status === 'done' ? 'bg-slate-600' : 'border border-accent/60 bg-transparent'" />
          <span v-if="item.status === 'in-progress'" class="absolute h-2.5 w-2.5 animate-ping rounded-full bg-accent" />
        </span>

        <div class="panel panel-hover p-5 sm:p-6">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h3 class="font-display text-lg font-semibold text-slate-100">{{ item.title }}</h3>
            <span
              class="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wide"
              :class="item.status === 'done' ? 'border-white/10 text-slate-500' : 'border-accent/30 text-accent'"
            >
              {{ item.period }}
            </span>
          </div>
          <p class="mt-1 text-sm text-slate-500">{{ item.place }}</p>
          <p class="mt-3 text-sm leading-relaxed text-slate-400">{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>
