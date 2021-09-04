import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Comp2 extends Component {
  state = {
    msg: ''
  }

  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe('subscribe1', (msg, data) => {
      this.setState({
        msg: data
      })
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  send = () => {
    const value = this.inputNode.value.trim()
    if (!value) return
    PubSub.publish('subscribe2', value)
  }
  render() {
    const { msg } = this.state
    return (
      <div>
        <h3>我是组件2</h3>
        <h4>接收消息</h4>
        <p>我接受到的消息：{msg}</p>
        <h4>发布消息</h4>
        <div>
          <input type="text" ref={(c) => (this.inputNode = c)} />
          <button onClick={this.send}>发送</button>
        </div>
      </div>
    )
  }
}
