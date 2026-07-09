<script setup lang="ts">
import { profile } from '~/data/profile'

const { openFile } = useIde()

const highlights = [
  { icon: 'lucide:layers', text: 'Approche fullstack : du back-end à l’interface utilisateur' },
  { icon: 'lucide:briefcase', text: `Actuellement en poste chez ${profile.currentEmployer}` },
  { icon: 'lucide:graduation-cap', text: 'BTS SIO en alternance, licence professionnelle en développement à venir' },
]

const { display: lastNameDisplay, play: playScramble } = useScramble(profile.lastName, 600)
onMounted(() => playScramble(200))

const primaryCta = useMagnetic(0.25)
const secondaryCta = useMagnetic(0.25)
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <PaneHeader path="~/about.md" comment="// À propos de moi" />

    <h1 class="font-display text-3xl font-semibold text-slate-100 sm:text-4xl">
      Salut, je suis {{ profile.firstName }} <span class="text-accent">{{ lastNameDisplay }}</span>
    </h1>
    <p class="mt-2 text-lg text-slate-400">{{ profile.role }}</p>

    <p class="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
      {{ profile.bio }}
    </p>

    <ul class="mt-8 space-y-4">
      <li v-for="item in highlights" :key="item.text" class="flex items-start gap-3 text-slate-400">
        <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 text-accent">
          <Icon :name="item.icon" class="h-4 w-4" />
        </span>
        <span class="pt-1 text-sm sm:text-base">{{ item.text }}</span>
      </li>
    </ul>

    <div class="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-8">
      <button
        ref="primaryCta"
        class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-bright"
        @click="openFile('projects')"
      >
        Voir mes projets
      </button>
      <button
        ref="secondaryCta"
        class="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-slate-100"
        @click="openFile('contact')"
      >
        Me contacter
      </button>
    </div>
  </div>
</template>
