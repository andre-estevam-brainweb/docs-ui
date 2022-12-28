;(function () {
  'use strict'

  function toggle (element) {
    element.classList.toggle('imageblockexpanded')
  }

  Array.from(document.getElementsByClassName('imageblock') || []).forEach((element) =>
    element.addEventListener('click', () => {
      console.warn('hello')
      toggle(element)
    })
  )
})()
