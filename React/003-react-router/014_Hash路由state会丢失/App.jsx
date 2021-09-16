import React, { Component } from 'react'
import { Switch, Route, Redirect,withRouter } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'

import MyNavLink from './components/MyNavLink'

 class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            <MyNavLink to="/home">首页</MyNavLink>
            <MyNavLink to="/about">关于</MyNavLink>
          </p>
          <button
            onClick={() => {
              this.props.history.goBack()
            }}
          >
            后退
          </button>
          <button
            onClick={() => {
              this.props.history.goForward()
            }}
          >
            前进
          </button>
          <hr />
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

export default withRouter(App)