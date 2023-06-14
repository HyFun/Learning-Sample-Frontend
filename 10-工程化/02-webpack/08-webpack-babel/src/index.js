import './index.less'

import add from './calculate'
console.log(add(1, 2))

new Promise((resolve) => {
  setTimeout(() => {
    resolve(`promise`)
  }, 1000)
}).then((res) => {
  console.log(res)
})

const list = [1, 2, 3, 4, 5]
console.log(list.map((v) => v * 2))
