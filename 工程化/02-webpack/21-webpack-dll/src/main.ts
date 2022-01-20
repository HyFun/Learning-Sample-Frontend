import Vue from 'vue'
import '@/styles/index.less'

import add from '@/utils/calculate'
import getDate from '@/utils/date'

// promise
new Promise((resolve) => {
  setTimeout(() => {
    resolve(`promise`)
  }, 1000)
}).then((res) => {
  console.log(res)
})

const list = [1, 2, 3, 4, 5]
console.log(list.map((v) => v * 2))

window.addEventListener('DOMContentLoaded', () => {
  console.log(`DOMContentLoaded`)

  const img1 = document.createElement('img')
  img1.src = require('./assets/1.png')
  img1.width = 200
  img1.height = 200
  const img2 = document.createElement('img')
  img2.src = require('./assets/2.png')
  img2.width = 200
  img2.height = 200

  const box = document.querySelector('.images')
  box?.appendChild(img1)
  box?.appendChild(img2)
})

console.log(123)

new Vue({
  el: '#app',
  template: `
  <div>
    <h3>{{message}}</h3>
    <p>count: {{count}}</p>
    <p>date: {{date}}</p>
  </div>`,
  data: {
    message: `Hello Vue!`,
    count: add(1, 2),
    date: getDate()
  }
})
