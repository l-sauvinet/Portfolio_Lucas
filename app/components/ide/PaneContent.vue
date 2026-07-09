<script setup lang="ts">
import PaneWelcome from '~/components/ide/panes/PaneWelcome.vue'
import PaneAbout from '~/components/ide/panes/PaneAbout.vue'
import PaneSkills from '~/components/ide/panes/PaneSkills.vue'
import PaneProjects from '~/components/ide/panes/PaneProjects.vue'
import PaneProjectDetail from '~/components/ide/panes/PaneProjectDetail.vue'
import PaneEducation from '~/components/ide/panes/PaneEducation.vue'
import PaneContact from '~/components/ide/panes/PaneContact.vue'
import { projects } from '~/data/projects'

const { activeTab } = useIde()

const staticPanes: Record<string, unknown> = {
  about: PaneAbout,
  skills: PaneSkills,
  projects: PaneProjects,
  education: PaneEducation,
  contact: PaneContact,
}

const current = computed(() => {
  if (!activeTab.value) return { component: PaneWelcome, props: {} }
  if (staticPanes[activeTab.value]) return { component: staticPanes[activeTab.value], props: {} }
  if (projects.some((p) => p.slug === activeTab.value)) {
    return { component: PaneProjectDetail, props: { slug: activeTab.value } }
  }
  return { component: PaneWelcome, props: {} }
})
</script>

<template>
  <div class="w-full min-w-0 flex-1 overflow-x-hidden overflow-y-auto px-6 py-10 sm:px-10">
    <Transition
      mode="out-in"
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <component :is="current.component" v-bind="current.props" :key="activeTab ?? 'welcome'" />
    </Transition>
  </div>
</template>
