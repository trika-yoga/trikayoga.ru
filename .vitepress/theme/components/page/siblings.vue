<template lang="pug">
.flex.flex-wrap.items-center.my-8.max-w-60ch.mx-auto.items-stretch
  a.link(v-if="prev" :href="prev.link") 
    carbon-arrow-left.mr-1
    span {{ prev.title }}
  a.link(v-if="parents[0]" :href="parents[0].link") 
    carbon-arrow-up.mr-1
    span {{ parents[0].title }}
  a.link(v-if="next" :href="next.link") 
    carbon-arrow-right.mr-1
    span {{ next.title }}
</template>

<script setup>
import { useSiblings, useParents } from '../../composables/links.js'

const { next, prev } = useSiblings();
const parents = useParents();
</script>

<style  scoped>
.link {
  @apply transition-all duration-500 no-underline text-sm flex-1 flex flex-col items-center p-4 m-2 bg-light-100/10 max-w-60ch mx-auto hover:(bg-light-100);
}
</style>