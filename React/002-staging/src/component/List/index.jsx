import React, { Component } from 'react'
import Item from '../Item/index'

export default class List extends Component {
  render() {
    const { list } = this.props
    return (
      <ul>
        {list.map((v) => {
          return <Item key={v.id} {...v} check={this.props.check} delete={this.props.delete}/>
        })}
      </ul>
    )
  }
}
