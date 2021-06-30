<template lang="pug">
a.p-2.no-underline(
  v-for="page in site.customData.pages.main"
  :key= "page.link"
  :href="withBase(page.link)"
) {{ page.title }}
</template>

<script setup>
import { useData, withBase } from 'vitepress'
const { site, frontmatter } = useData();
</script>
  
  <style scoped>
</style>