<template lang="pug">
a.p-2.no-underline.transition-all.duration-300(
  v-for="page in pages['/']"
  :key="page.path"
  :href="page.path"
  :class="{ active: route.path.includes(page.path) }"
) {{ page.title }} 
</template>

<script setup>
import { useRoute } from 'vitepress'
import { pages } from '@theme/composables/pages'

const route = useRoute();
</script>
  
<style scoped>
.active {
  @apply bg-light-900/50 rounded;
}
</style>