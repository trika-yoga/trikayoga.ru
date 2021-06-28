<template lang="pug">
.page(
  :class=`{
    'no-sans': !langs.sans,
    'no-trans': !langs.trans,
    'no-words': !langs.words,
    'no-text': !langs.text,
  }`
) 
  top-bar
  nav-bar
  h1.text-4xl.font-bold.my-8.text-center {{ frontmatter.title }}
  .text-lg.text-center {{ frontmatter.subtitle }}
  lang-toggle.mt-4(v-if="frontmatter.langs")
  content.content
  page-list(
    v-if="frontmatter.list"
  )
</template>

<script setup>
import { useData } from 'vitepress'
const { site, frontmatter } = useData();
import { langs } from './composables/langs.js'

</script>

<style scoped>
.page {
  @apply p-3 sm:p-4 text-center;
}
</style>