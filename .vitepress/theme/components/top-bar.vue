<template lang="pug">
header
  a.no-underline.mt-4.mb-4.text-center(href="/")
    img.w-12rem.mb-8(src="/img/sadvidya.svg")
    .text-3xl.font-bold Трика йога
</template>

<script setup>

</script>

<style scoped>
header {
  @apply flex flex-col items-center;
  scroll-snap-align: start;
}
</style>