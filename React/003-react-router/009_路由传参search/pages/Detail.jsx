import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
  render() {
    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))
    return (
      <div>
        <h3>{id}</h3>
        <p>{title}</p>
      </div>
    )
  }
}
