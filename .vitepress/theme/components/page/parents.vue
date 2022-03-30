<script setup>
import { useRoute } from 'vitepress'
import { useParents } from '@theme/composables/pages'

const route = useRoute()

const parents = computed(() => useParents(route.path))
</script>

<template lang="pug">
.inline-flex.flex-wrap.justify-start.items-stretch
  a.link(v-for="page in parents", :key="page.title" :href="page.path") 
    carbon-chevron-right.mr-1
    span {{ page.title }}
</template>



<style  scoped>
.link {
  @apply transition-all duration-500 no-underline text-sm flex-1 flex items-center p-2 bg-light-100/10 max-w-60ch mx-auto hover:(bg-light-100);
  flex: 1 1 auto;
}
</style>