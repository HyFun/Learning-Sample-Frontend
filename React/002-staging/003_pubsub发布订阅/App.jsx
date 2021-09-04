
import React, { Component } from 'react'

import Comp1 from './component/Comp1'
import Comp2 from './component/Comp2'
export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <Comp1></Comp1>
        <hr />
        <Comp2></Comp2>
      </div>
    )
  }
}
