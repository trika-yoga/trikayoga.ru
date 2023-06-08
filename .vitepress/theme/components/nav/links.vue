<script setup>
import { useRoute } from 'vitepress'
import { data } from '../../../../pages.data';
import { usePages, cleanLink } from 'vitepress-pages';

const route = useRoute()

const { children } = usePages({ path: '/' }, data)
</script>

<template lang="pug">
a.p-2.no-underline.transition-all.duration-300(
  v-for="page in children"
  :key="page.url"
  :href="page.url"
  :class="{ active: route.path.includes(cleanLink(page.url)) }"
) {{ page.frontmatter?.title }} 
</template>


  
<style scoped>
.active {
  @apply bg-light-900/50 rounded;
}
</style>