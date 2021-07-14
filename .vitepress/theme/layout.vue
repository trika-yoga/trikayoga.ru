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


  transition(name="fade" mode="out-in" @after-enter="mount()")
    .content(:key="route.path")
      header.mb-8
        h1.text-4xl.font-bold.mb-8.text-center {{ frontmatter.title }}
        .max-w-xl.mx-auto.sans.font-bold.mb-4.text-center {{ frontmatter.sans }}
        .max-w-xl.mx-auto.text-2xl.mb-4.text-center {{ frontmatter.trans }}
        .max-w-xl.mx-auto.text-xl.text-center {{ frontmatter.subtitle }}
      content
      page-list(
        v-if="frontmatter.list"
      )
      page-parents
  page-footer
  panel-dock
</template>

<script setup>
import { useData, useRoute } from 'vitepress'
const { site, frontmatter } = useData();
import { langs } from './composables/langs.js'
import { useFav } from './composables/favs.js'

const { favs, mount } = useFav()

const route = useRoute();
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