<template lang="pug">
.flex.flex-col
  a.p-2(
    v-for="page in pages"
    :key= "page.link"
    :href="page.link"
  ) {{ page.title }}
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  pages: {
    type: Array,
    default: []
  }
});
</script>

<style scoped>
</style>