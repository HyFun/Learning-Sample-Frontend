import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  onClickDelete = (id) => {
    return (e) => {
      this.props.delete(id)
    }
  }

  onChangeCheck = (id) => {
    return (e) => {
      this.props.check(id, e.target.checked)
    }
  }
  render() {
    const { id, value, done } = this.props
    return (
      <li className="list_item">
        <input
          type="checkbox"
          checked={done}
          onChange={this.onChangeCheck(id)}
        />
        <span>{value}</span>
        <button onClick={this.onClickDelete(id)}>删除</button>
      </li>
    )
  }
}
