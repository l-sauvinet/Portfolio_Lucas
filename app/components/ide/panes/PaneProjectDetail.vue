<script setup lang="ts">
import { projects } from '~/data/projects'

const props = defineProps<{ slug: string }>()
const { openFile } = useIde()

const project = computed(() => projects.find((p) => p.slug === props.slug))
</script>

<template>
  <div v-if="project" class="mx-auto max-w-3xl">
    <button
      class="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-200"
      @click="openFile('projects')"
    >
      <Icon name="lucide:arrow-left" class="h-4 w-4" />
      Retour aux projets
    </button>

    <PaneHeader :path="`~/projects/${project.slug}.ts`" comment="// Détail du projet" />

    <div class="mb-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 class="font-display text-3xl font-semibold text-slate-100">{{ project.name }}</h1>
        <p class="mt-1 text-accent">{{ project.tagline }}</p>
      </div>
      <span
        v-if="project.status === 'in-progress'"
        class="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-amber-300"
      >
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
        En développement
      </span>
      <span
        v-else-if="project.demo"
        class="flex shrink-0 items-center gap-1.5 rounded-full border border-accent/30 px-2.5 py-1 text-[10px] uppercase tracking-wide text-accent"
      >
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        En ligne
      </span>
    </div>

    <div class="panel relative mb-8 flex h-56 items-center justify-center overflow-hidden sm:h-72">
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,230,160,0.14),transparent_60%)]" />
      <div class="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-[0.15]" />
      <span class="relative font-display text-6xl font-bold text-white/10 sm:text-8xl">{{ project.name.slice(0, 2).toUpperCase() }}</span>
      <span class="absolute bottom-3 right-4 text-[11px] text-slate-600">aperçu à venir</span>
    </div>

    <p class="text-base leading-relaxed text-slate-300">{{ project.longDescription }}</p>

    <div class="mt-8">
      <h2 class="mb-3 text-xs uppercase tracking-widest text-slate-500">Points clés</h2>
      <ul class="space-y-2.5">
        <li v-for="feature in project.features" :key="feature" class="flex items-start gap-2.5 text-sm text-slate-400">
          <Icon name="lucide:check" class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          {{ feature }}
        </li>
      </ul>
    </div>

    <div class="mt-8 flex flex-wrap gap-2">
      <span v-for="tech in project.stack" :key="tech" class="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
        {{ tech }}
      </span>
    </div>

    <div class="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-slate-100"
      >
        <Icon name="lucide:github" class="h-4 w-4" />
        Code
      </a>
      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-slate-100"
      >
        <Icon name="lucide:external-link" class="h-4 w-4" />
        Voir le site
      </a>
      <span v-if="!project.github && !project.demo" class="inline-flex items-center gap-1.5 text-sm text-slate-600">
        <Icon name="lucide:lock" class="h-4 w-4" />
        Projet privé
      </span>
    </div>
  </div>
</template>
