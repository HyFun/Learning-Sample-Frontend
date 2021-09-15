import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <h3>{id}</h3>
        <p>我是detail页面哦~</p>
      </div>
    )
  }
}
