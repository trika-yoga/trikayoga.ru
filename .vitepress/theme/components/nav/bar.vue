<template lang="pug">
.nav-bar
  a(href="/")
    img.max-w-8rem(src="/img/sadvidya.svg")
    .text-2xl Трика йога
  nav-links
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