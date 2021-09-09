import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('Home-render:::', this.props)
    return <h3>我是home</h3>
  }
}
