
const vishva = {...tattvas, ...chakras, ...nadis}

let active = null

function app() {
  const svg = document.getElementById('santana-object')
  const svgDoc = svg.contentDocument
  const aham = svgDoc.getElementById('aham')
  const overlay = document.getElementById('overlay')
  const info = document.getElementById('info')
    
  setListeners(vishva)

  overlay.addEventListener('click', close)
  
  function close (e) {
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
}

function format(item) {
  return /*html*/`
    <p class="sanskrit">${item.sans}</p>
    <p class="transcript">${item.trans}</p>
    <h2>${item.title}</h2>
    <p>${item.text}</p>
  `
}