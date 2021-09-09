import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import MyNavLink from '../components/MyNavLink'

// 页面
import AboutMe from './AboutMe'
import AboutOther from './AboutOther'
export default class About extends Component {
  render() {
    console.log('Home-render:::', this.props)
    return (
      <div>
        <MyNavLink to="/about/me">我</MyNavLink>
        <MyNavLink to="/about/other">其他</MyNavLink>

        <Switch>
          <Route path="/about/me" component={AboutMe} />
          <Route path="/about/other" component={AboutOther} />
          <Redirect to="/about/me" />
        </Switch>
      </div>
    )
  }
}
