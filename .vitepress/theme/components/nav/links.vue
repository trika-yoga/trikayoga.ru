<template lang="pug">
a.p-2.no-underline.transition-all.duration-300(
  v-for="page in theme?.pages?.main"
  :key= "page.link"
  :href="page.link"
  :class="{ active: route.path.includes(page.link) }"
) {{ page.title }} 
</template>

<script setup>
import { useData, useRoute } from 'vitepress'
const { theme, frontmatter } = useData();

const route = useRoute();
</script>
  
<style scoped>
.active {
  @apply bg-light-900/50 rounded;
}
</style>