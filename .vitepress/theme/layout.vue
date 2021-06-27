<template lang="pug">
.page
  nav-bar
  content
  page-list(
    v-if="frontmatter.list"
    :pages="site.customData.pages[frontmatter.list]"
  )
</template>

<script setup>
import { useData } from 'vitepress'
import { defineProps } from 'vue'

const { site, frontmatter } = useData();
</script>

<style scoped>
.page {
  @apply bg-dark-200 p-4;
}
</style>