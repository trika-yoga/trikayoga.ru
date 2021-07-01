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
  .max-w-xl.mx-auto.sans.font-bold.mb-4.text-center {{ frontmatter.sans }}
  .max-w-xl.mx-auto.text-2xl.mb-4.text-center {{ frontmatter.trans }}
  .max-w-xl.mx-auto.text-xl.text-center {{ frontmatter.subtitle }}
  lang-toggle.mt-4(v-if="frontmatter.sans")
  content.content
  page-list(
    v-if="frontmatter.list"
  )
  page-footer
  scroll-top
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
  @apply px-3 sm:px-4 pb-16;
}
</style>