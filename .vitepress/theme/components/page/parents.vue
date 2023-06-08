<script setup>
import { useRoute } from 'vitepress'
import { useParents, cleanLink } from 'vitepress-pages';
import { data } from '../../../../pages.data';

const route = useRoute()

const parents = useParents(route, data)
</script>

<template lang="pug">
.inline-flex.flex-wrap.justify-start.items-stretch
  a.link(v-for="page in parents", :key="page.url" :href="page.url") 
    carbon-chevron-right.mr-1
    span {{ page.frontmatter?.title }}
</template>



<style  scoped>
.link {
  @apply transition-all duration-500 no-underline text-sm flex-1 flex items-center p-2 bg-light-100/10 max-w-60ch mx-auto hover: (bg-light-100);
  flex: 1 1 auto;
}
</style>