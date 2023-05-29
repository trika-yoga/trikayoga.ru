<script setup>
import { useRoute } from 'vitepress'
import { pages } from '@theme/composables/pages'
const route = useRoute()
const list = computed(() => pages[route.path]);
</script>

<template lang="pug">
.flex.flex-wrap.max-w-60ch.mx-auto
  a.card(
    v-for="page in list"
    :key="page.path"
    :href="page.path"
  ) 
    img.rounded(
      style="margin:  1rem 0"
      v-if="page.cover"
      :src="page.cover"
    )
    .p-2.my-auto
      .text-xl.font-bold {{ page.title }}
      .text-2xl.my-4.font-bold {{ page.sans }}
      .text-xl.my-4.opacity-70 {{ page.trans }}
      .text-sm {{ page.description }}
</template>


<style scoped>
.card {
  scroll-snap-align: start;
  @apply flex flex-col rounded-lg bg-light-400 dark-bg-dark-100 transition-all duration-300 p-4 m-4 shadow-lg no-underline hover: shadow-2xl items-center;
  flex: 1 1 45%;
}
</style>