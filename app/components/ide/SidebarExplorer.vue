<script setup lang="ts">
import { profile } from '~/data/profile'
import { files, projectFiles, langColor, langIcon } from '~/data/files'

const { activeTab, openFile, projectsExpanded, sidebarOpen } = useIde()
</script>

<template>
  <div>
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-30 bg-black/60 md:hidden"
      @click="sidebarOpen = false"
    />

    <aside
      class="fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 -translate-x-full flex-col border-r border-white/10 bg-ink-900 transition-transform duration-300 md:static md:z-0 md:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : ''"
    >
      <div class="flex items-center gap-3 border-b border-white/10 px-4 py-5">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink-950">
          LS
        </span>
        <div class="min-w-0">
          <p class="truncate text-sm font-medium text-slate-100">{{ profile.firstName }} {{ profile.lastName }}</p>
          <p class="truncate text-xs text-slate-500">{{ profile.role }}</p>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto px-2 py-4">
        <p class="px-2 pb-2 text-[11px] font-medium uppercase tracking-widest text-slate-600">Explorateur</p>

        <nav class="space-y-0.5">
          <template v-for="file in files" :key="file.id">
            <button
              v-if="file.lang !== 'folder'"
              class="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors"
              :class="activeTab === file.id ? 'bg-white/[0.06] text-slate-100' : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'"
              @click="openFile(file.id)"
            >
              <Icon :name="langIcon[file.lang]" class="h-4 w-4 shrink-0" :class="langColor[file.lang]" />
              {{ file.name }}
            </button>

            <div v-else>
              <button
                class="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left text-sm transition-colors"
                :class="activeTab === 'projects' ? 'bg-white/[0.06] text-slate-100' : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'"
                @click="projectsExpanded = !projectsExpanded; openFile('projects')"
              >
                <Icon
                  :name="projectsExpanded ? 'lucide:chevron-down' : 'lucide:chevron-right'"
                  class="h-3.5 w-3.5 shrink-0 text-slate-600"
                />
                <Icon name="lucide:folder" class="h-4 w-4 shrink-0 text-accent" />
                {{ file.name }}
              </button>

              <div v-if="projectsExpanded" class="ml-5 space-y-0.5 border-l border-white/10 pl-3">
                <button
                  v-for="p in projectFiles"
                  :key="p.id"
                  class="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm transition-colors"
                  :class="activeTab === p.id ? 'bg-white/[0.06] text-slate-100' : 'text-slate-500 hover:bg-white/[0.04] hover:text-slate-200'"
                  @click="openFile(p.id)"
                >
                  <Icon name="lucide:file-code-2" class="h-3.5 w-3.5 shrink-0 text-blue-400" />
                  {{ p.name }}
                </button>
              </div>
            </div>
          </template>
        </nav>
      </div>

      <div class="border-t border-white/10 p-4">
        <a
          :href="`mailto:${profile.email}`"
          class="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-bright"
        >
          <Icon name="lucide:mail" class="h-4 w-4" />
          Me contacter
        </a>
      </div>
    </aside>
  </div>
</template>
