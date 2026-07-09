import type { FileId } from '~/data/files'

export type TabId = FileId | string

export function useIde() {
  const openTabs = useState<TabId[]>('ide-open-tabs', () => [])
  const activeTab = useState<TabId | null>('ide-active-tab', () => null)
  const sidebarOpen = useState<boolean>('ide-sidebar-open', () => false)
  const projectsExpanded = useState<boolean>('ide-projects-expanded', () => false)

  function openFile(id: TabId) {
    if (!openTabs.value.includes(id)) openTabs.value = [...openTabs.value, id]
    activeTab.value = id
    sidebarOpen.value = false
  }

  function closeTab(id: TabId) {
    const idx = openTabs.value.indexOf(id)
    if (idx === -1) return
    const next = openTabs.value.filter((t) => t !== id)
    openTabs.value = next
    if (activeTab.value === id) {
      activeTab.value = next[idx - 1] ?? next[0] ?? null
    }
  }

  return {
    openTabs,
    activeTab,
    sidebarOpen,
    projectsExpanded,
    openFile,
    closeTab,
  }
}
