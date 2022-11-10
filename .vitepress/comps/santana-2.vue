<template lang="pug">
.container
  santana.yantra(
    @click="clickHandler"
    :class="{ 'has-active': state.active }"
    )

  transition(name="fade")
    .overlay(v-show="state.active" @click="close()")
      .sans.big {{ state.info?.sans }}
      .trans {{ state.info?.trans }}
      .text-xl {{ state.info?.title }}
      .text-lg(v-html="state.info?.text")
</template>

<script setup>
import santana from './santana.svg?component'
import vishva from '#/composables/tattvas.js'

const state = reactive({
  active: false,
  info: {},
  svg: ref(),
  tattva: null
})

function clickHandler(ev) {
  state.tattva = ev.target
  if (!state.tattva.id) {
    for (let i = 0; i < 5; i++) {
      if (state.tattva.id) break
      state.tattva = state.tattva.parentElement
    }
  }
  state.tattva.classList.add('active')
  state.active = true
  state.info = vishva[state.tattva.id]
}

function close() {
  state.active = false
  state.tattva.classList.remove('active')
}
</script>

<style scoped>
.container {
  @apply flex flex-col items-center max-w-60ch shadow-xl mx-auto cursor-pointer relative my-8;
}

.yantra {
  @apply bg-light-100/30 dark: bg-light-100/10;
}

* {
  transition: opacity 300ms ease;
  cursor: pointer;
}

.active,
.active * {
  opacity: 1 !important;
}

.has-active :not(.active):not(g) {
  opacity: 0.05;
}

.overlay {
  @apply p-2 sm: p-8 md:p-16;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transition: opacity 300ms ease;
  max-height: 100%;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  color: #333;
}
</style>