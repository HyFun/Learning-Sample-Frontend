import Vue from 'vue/dist/vue.js'

new Vue({
  el: '#root',
  template: `<h3>{{message}}</h3>`,
  data: {
    message: `Hello Vue2!`
  }
})

enum CType {
  RED = 'red',
  BLUE = 'blue'
}

console.log('enum>>>', CType.RED === 'red')
