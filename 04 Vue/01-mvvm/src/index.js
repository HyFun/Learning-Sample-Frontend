/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 16:45:15
 * @Description  : 入口
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 18:17:11
 */
import Vue from './vue'

var app = new Vue({
  el: '#app',
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

console.log(app)
