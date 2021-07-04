<template lang="pug">
a(href="/fav.html")
  la-star-solid.star
</template>

<script setup>

import { watch, nextTick, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
const { frontmatter } = useData();
import favs from '../../composables/favs.js'

const route = useRoute();

onMounted(() => {
  watch([route, favs.value], r => {
    nextTick(() => {
      let hash = document.location.hash
      let block = document.getElementById(hash.slice(1))
      if (block) block.scrollIntoView()
      let nums = [...document.getElementsByClassName('num')]
      nums.forEach(num => {
        let link = route.path + '#' + num.id
        if (favs.value[link]) {
          num.classList.add('fav')
        } else {
          num.classList.remove('fav')
        }
        num.addEventListener('click', setFav)
      })
    })
  }, { immediate: true });
})

function setFav(event) {
  let parent = event.target.parentNode
  let content = parent ? parent.innerHTML : ''
  let fav = {
    title: frontmatter.value.title,
    stanza: event.target.innerText,
    link: route.path + '#' + event.target.id,
    content
  }
  if (favs.value[fav.link]) {
    delete favs.value[fav.link]
  } else {
    favs.value[fav.link] = fav
  }

}
</script>

<style scoped>
</style>