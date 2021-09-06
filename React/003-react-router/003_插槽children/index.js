/*
 * @Author       : HyFun
 * @Date         : 2021-09-05 10:47:58
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-05 22:40:47
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'

import './index.css'
import App from './App'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)
