<script setup>
import { useSiblings, useParents } from '@theme/composables/pages'
import { useRoute } from 'vitepress'

const route = useRoute()

const siblings = computed(() => useSiblings(route.path))
const parents = computed(() => useParents(route.path))
</script>

<template lang="pug">
.flex.flex-wrap.items-center.max-w-60ch.mx-auto.items-stretch
  a.link(v-if="siblings.prev" :href="siblings.prev.path") 
    carbon-arrow-left.mr-1
    span {{ siblings.prev.title }}
  a.link(v-if="parents[0]" :href="parents[0].path") 
    carbon-arrow-up.mr-1
    span {{ parents[0].title }}
  a.link(v-if="siblings.next" :href="siblings.next.path") 
    carbon-arrow-right.mr-1
    span {{ siblings.next.title }}
</template>


<style  scoped>
.link {
  @apply transition-all duration-500 no-underline  flex-1 flex flex-col items-center p-6 m-2 bg-light-100/10 max-w-60ch mx-auto hover:(bg-light-100);
}
</style>