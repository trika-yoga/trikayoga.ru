<template lang="pug">
.panel
  client-only
    panel-fav.btn
    panel-dark.btn
    panel-scroll.btn
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({

});
</script>

<style scoped>
.panel {
  @apply flex p-1 flex-col shadow items-center duration-300 fixed right-4 bottom-2  rounded-full transition-all opacity-50 bg-dark-900/30 dark:bg-dark-900 hover:(shadow-xl opacity-100);
}
.btn {
  @apply outline-none duration-100 px-4 py-4 rounded-full transition-all transform  bg-light-100/10  hover:(bg-opacity-70);
}
</style>