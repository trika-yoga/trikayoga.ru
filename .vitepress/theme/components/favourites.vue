<template lang="pug">
.flex.flex-col.items-center(v-if="Object.keys(favs).length > 0")
  .row(
    v-for="fav in favs"
    :key="fav"

  ) 
    .p-4.cursor-pointer(
      @click="removeFav(fav.link)" 
      )
      la-star-solid(color="yellow")
    a.flex.items-center.no-underline(
      :href="fav.link"
    )
      .p-4.text-2xl {{ fav.title }} 
      .p-4 {{ fav.stanza }}

.p-8.text-2xl.opacity-50(v-else) Добавляйте строфы в избранное, нажимая на цифру в верхнем правом углу их карточек.
</template>

<script setup>
import { defineProps } from 'vue'
import favs from '../composables/favs.js'

function removeFav(link) {
  if (favs.value[link]) {
    delete favs.value[link]
  }
}

</script>

<style scoped>
.row {
  @apply px-4 shadow-xl rounded flex flex-wrap m-4 items-center bg-light-100 dark:bg-dark-100;
}
</style>