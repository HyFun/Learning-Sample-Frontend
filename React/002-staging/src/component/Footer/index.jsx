import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { list } = this.props
    return <div>{`${list.filter((v) => v.done).length}/${list.length}`}</div>
  }
}
