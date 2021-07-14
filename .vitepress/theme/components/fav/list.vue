<template lang="pug">
.flex.flex-col.items-stretch.max-w-50ch.mx-auto.mt-8(v-if="Object.keys(favs).length > 0")
  transition-group(name="fade" mode="out-in")
    .row(v-for="fav in favs" :key="fav") 
      .flex.flex-col.flex-1
        a.card.bg(:href="fav.link")
          .p-4.text-left
            .text-lg {{ fav.title }} 
            .text-sm.mt-1 {{ fav.subtitle }}
          .flex-1
          .p-2.font-bold.min-w-4rem.border-l-1 {{ fav.stanza }}
      button.button.bg.pl-6(@click="removeFav(fav.link)" ref="star" )
        fluent-star-off-24-regular
.p-8.text-2xl.opacity-50(v-else) Добавляйте строфы в избранное, нажимая на цифру в верхнем правом углу их карточек.
</template>

<script setup>
import { favs, removeFav } from '../../composables/favs.js'


</script>

<style scoped>
.row {
  @apply break-all rounded flex flex-wrap my-2 items-stretch gap-4;
}
.card {
  @apply rounded-lg text-xl flex items-center no-underline px-2;
}
.bg {
  @apply transition-all duration-250 shadow-lg bg-light-100/50 dark:(bg-dark-100) hover:(bg-opacity-30);
}
.button {
  @apply p-3 outline-none rounded-lg ease-in  cursor-pointer opacity-70 hover:opacity-100;
}
</style>