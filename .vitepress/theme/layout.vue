<template lang="pug">
.page(
  :class=`{
    'no-sans': !langs.sans,
    'no-trans': !langs.trans,
    'no-words': !langs.words,
    'no-text': !langs.text,
    'no-eng': !langs.eng,
  }`
) 
  .header
    top-bar
    nav-bar
  h1.text-4xl.font-bold.mb-8.text-center {{ frontmatter.title }}
  .max-w-xl.mx-auto.text-lg.text-center {{ frontmatter.subtitle }}
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
  @apply text-center;
}
.header {
  @apply bg-light-100 dark:bg-dark-600 pt-8 pb-4 mb-12 shadow-xl;
}
.content {
  @apply p-3 sm:p-4;
}
</style>