<template lang="pug">
.flex.flex-wrap.mx-auto.max-w-md.justify-center
  button(
    v-for="(lang,key) in langs" 
    :key="key"
    :class="{ active: lang }"
    @click="langs[key] = !langs[key]"
    ) {{ langNames[key] }}

</template>

<script setup>
import { defineProps } from 'vue'
import { langs } from '../composables/langs.js'
const props = defineProps({

});

const langNames = {
  sans: 'Санскрит',
  trans: 'Транскрипция',
  words: 'Слова',
  text: 'Перевод',
};


</script>

<style scoped>
button {
  @apply opacity-50 text-sm m-1 py-1 px-2 shadow bg-light-900 rounded-xl;
  &.active {
    @apply opacity-100 bg-light-500;
  }
}
</style>