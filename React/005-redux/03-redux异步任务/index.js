/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-18 14:30:54
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-23 12:07:32
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
