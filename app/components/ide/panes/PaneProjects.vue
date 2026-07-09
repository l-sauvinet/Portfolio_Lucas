<script setup lang="ts">
import { projects } from '~/data/projects'

const { openFile } = useIde()
</script>

<template>
  <div class="mx-auto max-w-5xl">
    <PaneHeader path="~/projects/" comment="// Ce que j'ai construit — cliquez une carte pour le détail" />

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      <ProjectCard
        v-for="(project, i) in projects"
        :key="project.slug"
        :project="project"
        :index="i"
        @click="openFile(project.slug)"
      />
    </div>
  </div>
</template>
