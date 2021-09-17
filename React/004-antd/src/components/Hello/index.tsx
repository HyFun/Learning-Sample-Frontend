/*
 * @Author       : heyongfeng
 * @Date         : 2021-09-17 10:52:13
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-09-17 11:10:12
 */
import React, { Component } from 'react'
import { Button } from 'antd'

export default class Hello extends Component {
  render() {
    return (
      <>
        <h3>Hello React!</h3>
        <Button type="primary">我是一个antd按钮</Button>
      </>
    )
  }
}
