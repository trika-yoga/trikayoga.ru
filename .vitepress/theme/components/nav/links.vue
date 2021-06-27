<template lang="pug">
.flex.flex-wrap
  a.p-2(
    v-for="page in site.customData.pages.main"
    :key= "page.link"
    :href="page.link"
  ) {{ page.title }}
</template>

<script setup>
import { useData } from 'vitepress'
const { site, frontmatter } = useData();
</script>
  
  <style scoped>
</style>