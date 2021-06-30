<template lang="pug">
section.holder.max-w-60ch.mx-auto.my-16
  .sans.big {{ info.sans }}
  .trans {{ info.trans }}
  .text-2xl.font-bold.mb-4 {{ info.title }}
  .text-xl.my-8 {{ info.text }}
  .relative
    object#object.shadow-2xl(
      ref="object", 
      :data="withBase('/img/' + name + '.svg')", 
      type="image/svg+xml", 
      @load="mount()"
      )
    .overlay(
      @click="close()", 
      :class="{ 'open': state.active }"
      )
      .info(ref="info", v-html="state.text")
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'
import { withBase } from 'vitepress'
import vishva from '@composables/tattvas.js'
const props = defineProps(['name', 'info']);

const state = reactive({
  active: true,
  text: format(props.info),
  main: null,
  svg: null,
})

const object = ref();

function mount() {
  state.svg = object.value.contentDocument
  state.main = state.svg.getElementById('main')
  setListeners()
}

function setListeners() {
  for (let item in vishva) {
    let el = state.svg.getElementById(item)
    if (el instanceof Element) {
      el.addEventListener('click', click(item))
    }
  }
}

function click(item) {
  return (e) => {
    let el = state.svg.getElementById(item)
    if (state.active instanceof Element) {
      state.active.classList.remove('active')
      if (state.active == el) {
        state.active = null
        state.main.classList.remove('has-active')
        return
      }
    }
    state.active = el
    state.text = format(vishva[item])
    state.active.classList.add('active')
    state.main.classList.add('has-active')
  }
}

function close() {
  if (state.active instanceof Element) {
    state.active.classList.remove('active')
  }
  state.active = null
  state.main.classList.remove('has-active')
}

function format(item) {
  return /*html*/`
    <p class="sans big">${item.sans}</p>
    <p class="text-2xl">${item.trans}</p>
    <h2>${item.title}</h2>
    <p>${item.text}</p>
  `
}

</script>

<style scoped>
:root {
  --size: 100%;
}

object {
  max-width: var(--size);
  min-width: var(--size);
}

object svg {
  cursor: pointer;
}

#yantra-app > section {
  position: relative;
  cursor: pointer;
}

.overlay {
  display: none;
  color: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 300ms ease;
  max-height: 100%;
  overflow-y: scroll;
  background-color: hsla(0, 0%, 100%, 0.5);
}

.overlay .info {
  padding: 2em;
}

.overlay.open {
  display: block;
  opacity: 1;
}

.sanskrt,
.sanskrit {
  font-weight: 500;
  font-size: 2em;
  margin: 12px 0;
  line-height: 1.42;
  font-family: "Mukta";
}

.transcript {
  font-size: 1.2em;
  color: #999;
  margin: 12px 0;
}
</style>

