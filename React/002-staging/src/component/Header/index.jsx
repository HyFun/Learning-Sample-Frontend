import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {

  onKeyUp = (e) =>{
    if(e.keyCode !== 13) return
    const value = e.target.value
    if(!value.trim()) {
      alert('输入不能为空')
      return
    }
    this.props.submit(value)
    e.target.value = ''
  }

  render() {
    return (
      <div className="header">
        <input
          type="text"
          placeholder="请输入内容"
          onKeyUp={this.onKeyUp}
        />
      </div>
    )
  }
}
