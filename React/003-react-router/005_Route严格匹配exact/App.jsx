import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
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
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
