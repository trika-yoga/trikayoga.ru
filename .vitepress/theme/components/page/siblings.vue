<script setup>
import { useRoute } from 'vitepress'
import { usePages, cleanLink } from 'vitepress-pages';
import { data } from '../../../../pages.data';

const { siblings, parents } = usePages(useRoute(), data)

</script>

<template lang="pug">
.flex.flex-wrap.items-center.max-w-60ch.mx-auto.items-stretch
  a.link(v-if="siblings.prev" :href="siblings.prev.url") 
    carbon-arrow-left.mr-1
    span {{ siblings.prev.frontmatter?.title }}
  a.link(v-if="parents[0]" :href="parents[0].url") 
    carbon-arrow-up.mr-1
    span {{ parents[0].frontmatter?.title }}
  a.link(v-if="siblings.next" :href="siblings.next.url") 
    carbon-arrow-right.mr-1
    span {{ siblings.next.frontmatter?.title }}
</template>


<style  scoped>
.link {
  @apply transition-all duration-500 no-underline flex-1 flex flex-col items-center p-6 m-2 bg-light-100/10 max-w-60ch mx-auto hover: (bg-light-100);
}
</style>