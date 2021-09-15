import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // props.children 就相当于 插槽，react会默认把组件的内容作为children参数传到props里。
    return <NavLink activeClassName="activeClass" {...this.props} />
  }
}
