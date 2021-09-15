import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
  render() {
    console.log(this.props)
    const { id, title } = this.props.location.state
    return (
      <div>
        <h3>{id}</h3>
        <p>{title}</p>
      </div>
    )
  }
}
