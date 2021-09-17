
import React from 'react'
import './App.less'
import Hello from './components/Hello'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'

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
