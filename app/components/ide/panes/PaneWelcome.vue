<script setup lang="ts">
import { profile } from '~/data/profile'

const { openFile } = useIde()

const shortcuts = [
  { id: 'about', name: 'about.md', desc: 'Qui je suis, en 30 secondes', icon: 'lucide:file-text', color: 'text-sky-400' },
  { id: 'skills', name: 'skills.json', desc: 'Les technologies que je maîtrise', icon: 'lucide:braces', color: 'text-amber-400' },
  { id: 'projects', name: 'projects/', desc: 'Ce que j’ai construit', icon: 'lucide:folder', color: 'text-accent' },
  { id: 'education', name: 'education.md', desc: 'Mon parcours de formation', icon: 'lucide:file-text', color: 'text-sky-400' },
  { id: 'contact', name: 'contact.ts', desc: 'Me contacter', icon: 'lucide:file-code-2', color: 'text-blue-400' },
]
</script>

<template>
  <div class="mx-auto flex max-w-2xl flex-col items-center py-10 text-center">
    <span class="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-bold text-ink-950">
      LS
    </span>

    <h1 class="mt-6 font-display text-2xl font-semibold text-slate-100 sm:text-3xl">
      Bienvenue sur le portfolio de {{ profile.firstName }} {{ profile.lastName }}
    </h1>
    <p class="mt-3 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
      Ce portfolio se présente comme un éditeur de code : cliquez sur un des fichiers ci-dessous
      (ou dans le menu de gauche) pour l'ouvrir dans un nouvel onglet.
    </p>

    <div class="mt-10 grid w-full gap-3 sm:grid-cols-2">
      <button
        v-for="s in shortcuts"
        :key="s.id"
        class="panel panel-hover flex items-center gap-3 px-4 py-4 text-left"
        @click="openFile(s.id)"
      >
        <Icon :name="s.icon" class="h-5 w-5 shrink-0" :class="s.color" />
        <span class="min-w-0">
          <span class="block text-sm font-medium text-slate-200">{{ s.name }}</span>
          <span class="block truncate text-xs text-slate-500">{{ s.desc }}</span>
        </span>
      </button>
    </div>
  </div>
</template>
