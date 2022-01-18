import Vue from 'vue/dist/vue.js'

new Vue({
  el: '#root',
  template: `<h3>{{message}}</h3>`,
  data: {
    message: `Hello Vue2!`
  }
})

type IC = 123344

enum CType {
  RED = 'red',
  BLUE = 'blue'
}

const name:IC = 123344
console.log(name);




console.log(CType.RED === 'red');
