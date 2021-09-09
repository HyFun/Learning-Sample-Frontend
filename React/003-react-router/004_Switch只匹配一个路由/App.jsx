import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'

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
            <Route path="/about" component={Test}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
