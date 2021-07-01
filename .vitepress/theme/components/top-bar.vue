<template lang="pug">
.flex.flex-col.items-center
  a.no-underline.mt-4.mb-4.text-center(:href="withBase('/')")
    img.w-12rem.mb-8(:src="withBase('/img/sadvidya.svg')")
    .text-3xl.font-bold Трика йога
</template>

<script setup>
import { defineProps } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps({

});
</script>

<style scoped>
</style>