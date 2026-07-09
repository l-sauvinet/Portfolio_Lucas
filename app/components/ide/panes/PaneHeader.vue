<script setup lang="ts">
defineProps<{ path: string; comment: string }>()
</script>

<template>
  <div class="mb-8">
    <p class="font-mono text-xs text-slate-600">{{ path }}</p>
    <p class="mt-2 font-mono text-sm text-slate-600">{{ comment }}</p>
  </div>
</template>
