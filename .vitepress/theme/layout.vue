<template lang="pug">
.page(
  :class=`{
    'no-sans': !langs.sans,
    'no-trans': !langs.trans,
    'no-words': !langs.words,
    'no-text': !langs.text,
    'no-eng': !langs.eng,
  }`
) 
  .header
    top-bar
    nav-bar
  transition-group(name="fade")
    h1.text-4xl.font-bold.mb-8.text-center {{ frontmatter.title }}
    .max-w-xl.mx-auto.sans.font-bold.mb-4.text-center {{ frontmatter.sans }}
    .max-w-xl.mx-auto.text-2xl.mb-4.text-center {{ frontmatter.trans }}
    .max-w-xl.mx-auto.text-xl.text-center {{ frontmatter.subtitle }}
  lang-toggle.mt-4(v-if="frontmatter.sans && !frontmatter.nolangs")
  content.content
  page-list(
    v-if="frontmatter.list"
  )
  page-parents
  page-footer
  scroll-top
</template>

<script setup>
import { watch, nextTick } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
const { site, frontmatter } = useData();
import { langs } from './composables/langs.js'
import favs from './composables/favs.js'

const route = useRoute();

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

function setFav(event) {
  let fav = {
    title: frontmatter.value.title,
    stanza: event.target.innerText,
    link: route.path + '#' + event.target.id,
  }
  if (favs.value[fav.link]) {
    delete favs.value[fav.link]
  } else {
    favs.value[fav.link] = fav
  }

}

</script>

<style scoped>
.page {
  @apply text-center;
}
.header {
  @apply bg-light-100 dark:bg-dark-600 pt-8 pb-4 mb-12 shadow-xl;
}
.content {
  @apply px-3 sm:px-4 pb-16;
}
</style>