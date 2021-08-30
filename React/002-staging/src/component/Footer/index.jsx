import React, { Component } from 'react'

import './index.css'
export default class Footer extends Component {
  render() {
    const { list } = this.props
    return (
      <div className="footer">
        <span>{`${list.filter((v) => v.done).length}/${list.length}`}</span>
        <button onClick={this.props.all}>全部完成</button>
      </div>
    )
  }
}
