import React, { Component } from 'react'

import styles from './index.module.css'

export default class index extends Component {
  state = {
    count: 0
  }

  getSelectValue = () => {
    return +this.select.value
  }

  increment = (e) => {
    const count = +this.state.count
    this.setState({
      count: count + this.getSelectValue()
    })
  }

  decrement = (e) => {
    const count = +this.state.count
    this.setState({
      count: count - this.getSelectValue()
    })
  }

  ride = (e) => {
    const count = +this.state.count
    this.setState({
      count: count * this.getSelectValue()
    })
  }

  divide = (e) => {
    const count = +this.state.count
    this.setState({
      count: count / this.getSelectValue()
    })
  }

  asyncIncrement = () => {}

  render() {
    const { count } = this.state
    return (
      <div className={styles.count}>
        <hr />
        <h3>当前和为：{count}</h3>
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
