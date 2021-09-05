import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>

          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </div>
    )
  }
}
