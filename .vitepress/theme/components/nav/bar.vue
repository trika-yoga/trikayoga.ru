<template lang="pug">
.flex.flex-wrap.items-center.justify-center
  nav-links
  a(href="/fav.html")
    la-star-solid(color="yellow")
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