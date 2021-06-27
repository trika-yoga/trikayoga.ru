<template lang="pug">
.nav-bar
  .text-2xl Трика йога
  .flex-1
  state-dark
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
.nav-bar {
  @apply flex flex-wrap p-2;
}
</style>