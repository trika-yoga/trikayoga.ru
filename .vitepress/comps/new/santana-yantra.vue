<template lang="pug">
.flex.flex-col.max-w-60ch.mx-auto.relative.shadow-2xl.my-16
  article#santana-app
    object#santana-object(
      data="/img/santana.svg", 
      type="image/svg+xml", 
      @load="loaded()"
      height="100%"
      )
    #overlay
      article#info      
</template>

<script setup>
import { onMounted, ref } from 'vue'
import vishva from '@composables/tattvas.js'


let active = null
function loaded() {
  const svg = document.getElementById('santana-object')
  const svgDoc = svg.contentDocument
  const aham = svgDoc.getElementById('aham')
  const overlay = document.getElementById('overlay')
  const info = document.getElementById('info')
  setListeners(vishva)

  overlay.addEventListener('click', close)

  function close(e) {
    overlay.classList.remove('open')
    if (active) {
      active.classList.remove('active')
    }
    active = null
    aham.classList.remove('has-active')
  }

  function setListeners(obj) {
    for (let item in obj) {
      let el = svgDoc.getElementById(item)
      if (el) {
        el.addEventListener('click', click(item))
      }
    }
  }

  function click(item) {

    return (e) => {
      let el = svgDoc.getElementById(item)
      if (active) {
        active.classList.remove('active')
        if (active == el) {
          active = null
          aham.classList.remove('has-active')
          return
        }
      }
      active = el
      info.innerHTML = format(vishva[item])
      active.classList.add('active')
      aham.classList.add('has-active')
      overlay.classList.toggle('open')
    }
  }

  function format(item) {
    return /*html*/`
    <p class="sans big">${item.sans}</p>
    <p class="trans">${item.trans}</p>
    <h2>${item.title}</h2>
    <p>${item.text}</p>
  `
  }
}
</script>

<style scoped>
:root {
  --height: 90vh;
}

#santana > article {
  padding: 0;
}

#santana-object {
  max-height: var(--height);
  min-height: var(--height);
  min-width: 100%;
  cursor: pointer;
}

#santana-app {
  cursor: pointer;
  position: relative;
}

#overlay {
  display: none;
  flex-flow: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0;
  transition: opacity 300ms ease;
  max-height: 100%;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  color: #333;
}

#overlay article {
  font-family: "Noto sans", sans-serif;
  padding: 2em;
}

#overlay.open {
  display: flex;
  opacity: 1;
}

.sanskrt,
.sanskrit {
  font-weight: bold;
  font-size: 4em;
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