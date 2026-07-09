<template>
  <div class="flex h-[100dvh] flex-col overflow-hidden bg-ink-950 text-slate-300">
    <TitleBar />
    <div class="flex min-h-0 flex-1">
      <SidebarExplorer />
      <div class="flex min-w-0 flex-1 flex-col">
        <TabBar />
        <PaneContent />
      </div>
    </div>
    <StatusBar />
  </div>
</template>
