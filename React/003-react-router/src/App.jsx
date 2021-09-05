import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import "./App.css"

import Home from './pages/Home'
import About from './pages/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/about">关于</NavLink>

          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </div>
    )
  }
}
