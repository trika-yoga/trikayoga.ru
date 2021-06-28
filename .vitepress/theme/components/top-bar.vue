<template lang="pug">
.flex.flex-col.items-center
  a.underline-3.underline-offset-8.mb-4.text-center(:href="withBase('/')")
    img.w-12rem.mb-4(src="/img/sadvidya.svg")
    .text-2xl Трика йога
</template>

<script setup>
import { defineProps } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps({

});
</script>

<style scoped>
</style>