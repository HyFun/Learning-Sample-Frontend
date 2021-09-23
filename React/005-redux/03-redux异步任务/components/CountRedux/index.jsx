import React, { Component } from 'react'
import store from '../../redux/store'
import {
  increment,
  decrement,
  ride,
  divide,
  incrementAsync
} from '../../redux/actionCount'

import styles from './index.module.css'

export default class index extends Component {
  get count() {
    return store.getState().count
  }

  getSelectValue = () => {
    return +this.select.value
  }

  componentDidMount() {
    // 监听redux数据改变
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  increment = (e) => {
    store.dispatch(increment(this.getSelectValue()))
  }

  decrement = (e) => {
    store.dispatch(decrement(this.getSelectValue()))
  }

  ride = (e) => {
    store.dispatch(ride(this.getSelectValue()))
  }

  divide = (e) => {
    store.dispatch(divide(this.getSelectValue()))
  }

  asyncIncrement = () => {
    store.dispatch(incrementAsync(this.getSelectValue(), 1000))
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
