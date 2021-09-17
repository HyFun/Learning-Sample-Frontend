/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-17 10:42:13
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-17 11:13:29
 */
import React from 'react'
import './App.css'
import Hello from './components/Hello'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Hello />
      </div>
    </ConfigProvider>
  )
}

export default App
