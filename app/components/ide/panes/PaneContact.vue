<script setup lang="ts">
import { profile } from '~/data/profile'

const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // clipboard API unavailable — ignore silently
  }
}

const socialLinks = computed(() =>
  [
    { key: 'github', label: 'GitHub', icon: 'lucide:github', href: profile.social.github },
    { key: 'linkedin', label: 'LinkedIn', icon: 'lucide:linkedin', href: profile.social.linkedin },
  ].filter((link) => link.href)
)
</script>

<template>
  <div class="mx-auto max-w-2xl">
    <PaneHeader path="~/contact.ts" comment="// Me contacter" />

    <div class="panel p-8 text-center sm:p-12">
      <h2 class="font-display text-2xl font-semibold text-slate-100 sm:text-3xl">Me contacter</h2>
      <p class="mx-auto mt-3 max-w-md text-sm text-slate-400 sm:text-base">
        Une question, envie d'échanger ? N'hésitez pas à m'écrire.
      </p>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          :href="`mailto:${profile.email}`"
          class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-bright"
        >
          <Icon name="lucide:mail" class="h-4 w-4" />
          {{ profile.email }}
        </a>
        <button
          class="panel panel-hover inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-slate-200"
          @click="copyEmail"
        >
          <Icon :name="copied ? 'lucide:check' : 'lucide:copy'" class="h-4 w-4" />
          {{ copied ? 'Copié !' : 'Copier' }}
        </button>
      </div>

      <div v-if="socialLinks.length" class="mt-6 flex items-center justify-center gap-4">
        <a
          v-for="link in socialLinks"
          :key="link.key"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/25 hover:text-slate-100"
          :aria-label="link.label"
        >
          <Icon :name="link.icon" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
</template>
