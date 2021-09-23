import React, { Component } from 'react'
import Count from './components/Count'
import CountRedux from './components/CountRedux'

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Count />
        <hr />
        <CountRedux />
      </div>
    )
  }
}
