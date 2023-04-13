import Vue from 'vue'
import jump from 'jump.js'

function doJump(e) {
  e.preventDefault()

  if (!e.target.identifier.length) {
    return
  }

  e.target.style.pointerEvents = 'none'

  jump(`#${e.target.identifier}`, {
    duration: e.target.duration,
    offset: e.target.offset,
    callback: () => {
      e.target.style.pointerEvents = 'auto'
    }
  })

  return false
}

Vue.directive('jump', {
  bind: (el, binding) => {
    el.identifier = binding.value.id
    el.duration = binding.value.duration
    el.offset = binding.value.offset

    el.addEventListener('click', doJump)
  },
  update(el, binding) {
    el.identifier = binding.value.id
    el.duration = binding.value.duration
    el.offset = binding.value.offset
  },
  unbind: (el) => {
    el.removeEventListener('click', doJump)
  }
})
