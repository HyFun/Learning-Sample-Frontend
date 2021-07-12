/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 10:32:00
 * @Description  : 入口文件
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 10:54:56
 */
import Vue from './vue/vue'

window.vm = new Vue({
  el: document.querySelector('#app')!,
  data() {
    return {
      message: '我是一条消息！',
      person: {
        name: '张三',
        age: 18,
        parents: ['张大三', '李小双']
      }
    }
  }
})

console.log(window.vm)
