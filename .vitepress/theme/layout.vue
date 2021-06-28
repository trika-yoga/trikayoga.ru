<template lang="pug">
.page
  nav-bar
  h1.text-4xl.font-bold.my-8.text-center {{ frontmatter.title }}
  .text-lg.text-center {{ frontmatter.subtitle }}
  content.content
  page-list(
    v-if="frontmatter.list"
    :pages="site.customData.pages[frontmatter.list]"
  )
</template>

<script setup>
import { useData } from 'vitepress'
const { site, frontmatter } = useData();

</script>

<style scoped>
.page {
  @apply p-3 sm:p-4 text-center;
}
</style>