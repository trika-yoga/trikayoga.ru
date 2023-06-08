<script setup>
import { useRoute } from 'vitepress'
import { usePages, cleanLink } from 'vitepress-pages';
import { data } from '../../../../pages.data';
const route = useRoute()
const { children } = usePages(route, data)
</script>

<template lang="pug">
.flex.flex-wrap.max-w-60ch.mx-auto
  a.card(
    v-for="page in children"
    :key="page.url"
    :href="page.url"
    ) 
    img.rounded(
      style="margin:  1rem 0"
      v-if="page.frontmatter?.cover"
      :src="page.frontmatter?.cover"
    )
    .p-2.my-auto
      .text-xl.font-bold {{ page.frontmatter?.title }}
      .text-2xl.my-4.font-bold {{ page.frontmatter?.sans }}
      .text-xl.my-4.opacity-70 {{ page.frontmatter?.trans }}
      .text-sm {{ page.frontmatter?.description }}
</template>


<style scoped>
.card {
  scroll-snap-align: start;
  @apply flex flex-col rounded-lg bg-light-400 dark-bg-dark-100 transition-all duration-300 p-4 m-4 shadow-lg no-underline hover: shadow-2xl items-center;
  flex: 1 1 45%;
}
</style>