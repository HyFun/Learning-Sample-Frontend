import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('Home-render:::', this.props)
    return <h3>我是About</h3>
  }
}
