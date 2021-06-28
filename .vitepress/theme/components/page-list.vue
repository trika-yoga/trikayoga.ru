<template lang="pug">
.flex.flex-col
  a.p-2(
    v-for="page in site.customData.pages[frontmatter.list]"
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