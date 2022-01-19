import Vue from 'vue/dist/vue.js'
import '@/styles/index.less'

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
    <button @click="handleLazy">懒加载1</button>
    <p>date: {{date}}</p>
    <button @click="handlePrefetchLazy">懒加载2</button>
  </div>`,
  data: {
    message: `Hello Vue!`,
    count: 0,
    date: ''
  },
  methods: {
    handleLazy() {
      import(/* webpackChunkName: 'calculate' */ '@/utils/calculate').then(
        (res) => {
          const add = res.default
          // eslint-disable-next-line
          // @ts-ignore # 忽视本行代码的小错误
          this.count = add(1, 2)
        }
      )
    },
    handlePrefetchLazy() {
      import(
        /* webpackChunkName: 'date', webpackPrefetch: true */ '@/utils/date'
      ).then((res) => {
        const getDate = res.default
        // eslint-disable-next-line
        // @ts-ignore # 忽视本行代码的小错误
        this.date = getDate()
      })
    }
  }
})
