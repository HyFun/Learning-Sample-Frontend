import React, { Component } from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'

import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <MyNavLink to="/home">首页</MyNavLink>
          <MyNavLink to="/about">关于</MyNavLink>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            {/* 表示没有匹配上的时候，默认跳转到哪个路由 */}
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
