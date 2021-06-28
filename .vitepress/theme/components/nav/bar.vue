<template lang="pug">
.nav-bar
  a.underline-3.underline-offset-8.mb-4.text-center(href="/")
    img.w-12rem.mb-4(src="/img/sadvidya.svg")
    .text-2xl Трика йога
  .flex.flex-wrap.items-center.justify-center
    nav-links
    state-dark
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
.nav-bar {
  @apply flex flex-col items-center p-2 border-b-1 m-2;
}
</style>