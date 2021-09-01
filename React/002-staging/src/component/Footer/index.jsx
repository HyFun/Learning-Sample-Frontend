import React, { Component } from 'react'

import './index.css'
export default class Footer extends Component {
  onChange = () => {
    const {list} = this.props
    const checkAll = list.some((v) => !v.done)
    // 设置全选
    this.props.checkAll(checkAll)
  }

  render() {
    const { list = [] } = this.props
    const doneCount = list.filter((v) => v.done).length
    const total = list.length
    return (
      <div className="footer">
        <input
          type="checkbox"
          checked={doneCount > 0 && doneCount === total}
          onChange={this.onChange}
        />
        <span>{`${doneCount}/${total}`}</span>
        <button onClick={this.props.all}>清除已完成</button>
      </div>
    )
  }
}
