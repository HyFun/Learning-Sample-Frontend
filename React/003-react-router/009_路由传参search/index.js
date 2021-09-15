/*
 * @Author       : HyFun
 * @Date         : 2021-09-05 10:47:58
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 23:04:27
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
