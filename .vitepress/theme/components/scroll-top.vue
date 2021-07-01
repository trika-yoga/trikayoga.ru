<template lang="pug">
.scroller(@click="scroll()")
  la-arrow-up
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});

function scroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
.scroller {
  @apply cursor-pointer transition-all duration-300 fixed right-2 bottom-2 p-2 rounded-full transform -translate-y-0 bg-light-100 dark:bg-dark-100 hover:(shadow-xl -translate-y-1);
}
</style>