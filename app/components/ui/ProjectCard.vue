<script setup lang="ts">
import gsap from 'gsap'
import type { Project } from '~/data/projects'

defineProps<{ project: Project; index: number }>()

const card = ref<HTMLElement | null>(null)
let enabled = false

onMounted(() => {
  enabled = !window.matchMedia('(pointer: coarse)').matches
})

function onMove(e: MouseEvent) {
  if (!enabled || !card.value) return
  const rect = card.value.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height

  gsap.to(card.value, {
    rotateX: (0.5 - py) * 10,
    rotateY: (px - 0.5) * 10,
    duration: 0.4,
    ease: 'power3.out',
    transformPerspective: 900,
  })
  card.value.style.setProperty('--gx', `${px * 100}%`)
  card.value.style.setProperty('--gy', `${py * 100}%`)
}

function onLeave() {
  if (!enabled || !card.value) return
  gsap.to(card.value, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
}
</script>

<template>
  <article
    ref="card"
    v-motion
    :initial="{ opacity: 0, y: 28 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
    class="group panel panel-hover relative flex cursor-pointer flex-col overflow-hidden p-5 will-change-transform"
    style="transform-style: preserve-3d"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div class="tilt-glare pointer-events-none absolute inset-0" />

    <div class="relative flex items-start justify-between gap-4">
      <div>
        <h3 class="font-display text-lg font-semibold text-slate-100">
          {{ project.name }}
        </h3>
        <p class="mt-0.5 text-sm text-accent">{{ project.tagline }}</p>
      </div>

      <span
        v-if="project.status === 'in-progress'"
        class="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-amber-300"
      >
        <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
        En dev
      </span>
    </div>

    <p class="relative mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
      {{ project.description }}
    </p>

    <div class="relative mt-4 flex flex-wrap gap-2">
      <span
        v-for="tech in project.stack"
        :key="tech"
        class="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
      >
        {{ tech }}
      </span>
    </div>

    <div class="relative mt-4 flex items-center gap-4 border-t border-white/[0.06] pt-4">
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-slate-100"
        @click.stop
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
        @click.stop
      >
        <Icon name="lucide:external-link" class="h-4 w-4" />
        Démo
      </a>
      <span
        v-if="!project.github && !project.demo"
        class="inline-flex items-center gap-1.5 text-sm text-slate-600"
      >
        <Icon name="lucide:lock" class="h-4 w-4" />
        Projet privé
      </span>

      <span class="ml-auto inline-flex items-center gap-1 text-sm text-slate-500 group-hover:text-accent">
        Voir le détail
        <Icon name="lucide:arrow-right" class="h-3.5 w-3.5" />
      </span>
    </div>
  </article>
</template>
