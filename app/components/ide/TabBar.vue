<script setup lang="ts">
import { files, langColor, langIcon } from '~/data/files'

const { openTabs, activeTab, openFile, closeTab } = useIde()

function metaOf(id: string) {
  const file = files.find((f) => f.id === id)
  if (file) return { name: file.name, icon: langIcon[file.lang], color: langColor[file.lang] }
  return { name: `${id}.ts`, icon: langIcon.ts, color: langColor.ts }
}

const draggedId = ref<string | null>(null)
const dragOverId = ref<string | null>(null)

function onDragStart(id: string, e: DragEvent) {
  draggedId.value = id
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', id)
  }
}

function onDragEnter(id: string) {
  if (!draggedId.value || draggedId.value === id) return
  dragOverId.value = id

  const tabs = [...openTabs.value]
  const from = tabs.indexOf(draggedId.value)
  const to = tabs.indexOf(id)
  if (from === -1 || to === -1 || from === to) return

  tabs.splice(from, 1)
  tabs.splice(to, 0, draggedId.value)
  openTabs.value = tabs
}

function onDragEnd() {
  draggedId.value = null
  dragOverId.value = null
}
</script>

<template>
  <div v-if="openTabs.length" class="flex h-10 shrink-0 items-center overflow-x-auto border-b border-white/10 bg-ink-950" role="tablist">
    <button
      v-for="id in openTabs"
      :key="id"
      role="tab"
      :aria-selected="activeTab === id"
      draggable="true"
      class="group flex h-full shrink-0 cursor-default items-center gap-2 border-r border-white/10 px-3.5 text-sm transition-colors"
      :class="[
        activeTab === id
          ? 'border-b-2 border-b-accent bg-white/[0.04] text-slate-100'
          : 'text-slate-500 hover:bg-white/[0.02] hover:text-slate-300',
        draggedId === id ? 'opacity-40' : '',
      ]"
      @click="openFile(id)"
      @mousedown.middle.prevent="closeTab(id)"
      @dragstart="onDragStart(id, $event)"
      @dragenter.prevent="onDragEnter(id)"
      @dragover.prevent
      @dragend="onDragEnd"
    >
      <Icon :name="metaOf(id).icon" class="h-3.5 w-3.5 shrink-0" :class="metaOf(id).color" />
      {{ metaOf(id).name }}
      <span
        class="ml-1 flex h-4 w-4 items-center justify-center rounded text-slate-600 opacity-0 transition-opacity hover:bg-white/10 hover:text-slate-200 group-hover:opacity-100"
        @click.stop="closeTab(id)"
      >
        <Icon name="lucide:x" class="h-3 w-3" />
      </span>
    </button>
  </div>
</template>
