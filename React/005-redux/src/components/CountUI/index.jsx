import React, { Component } from 'react'

import styles from './index.module.css'

export default class index extends Component {
  get count() {
    return this.props.count
  }

  getSelectValue = () => {
    return +this.select.value
  }

  increment = (e) => {
    this.props.jia(this.getSelectValue())
  }

  decrement = (e) => {
    this.props.jian(this.getSelectValue())
  }

  ride = (e) => {
    this.props.chen(this.getSelectValue())
  }

  divide = (e) => {
    this.props.chu(this.getSelectValue())
  }

  asyncIncrement = () => {
    this.props.jiaAsync(this.getSelectValue(), 1000)
  }

  render() {
    // const { count } = this.state
    return (
      <div className={styles.count}>
        <hr />
        <h3>当前和为：{this.count}</h3>
        <select ref={(c) => (this.select = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.ride}>×</button>
        <button onClick={this.divide}>÷</button>
        <button onClick={this.asyncIncrement}>异步+</button>
      </div>
    )
  }
}
