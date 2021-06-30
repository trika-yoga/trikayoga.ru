<template lang="pug">
.flex.flex-col.items-center
  .box
    .text-2xl.pb-4 {{ title }}
    audio.rounded-xl(
      controls
      :src="withBase(file)"
    )
</template>

<script setup>
import { defineProps } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  file: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.box {
  @apply shadow-xl p-4 rounded-xl bg-light-300 dark:bg-dark-200;
}
</style>