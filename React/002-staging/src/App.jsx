import { Component } from 'react'

import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

import './App.css'
export default class App extends Component {
  state = {
    list: []
  }

  submit = (value) => {
    const list = this.state.list
    list.unshift({
      id: Date.now(),
      value,
      done: false
    })
    this.setState({
      list
    })
  }

  check = (id, done) => {
    const list = this.state.list
    list.find((v) => v.id === id).done = done
    this.setState({
      list
    })
  }

  delete = (id) => {
    const list = this.state.list
    const index = list.findIndex((v) => v.id === id)
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div className="App">
        <Header submit={this.submit}></Header>
        <List
          list={this.state.list}
          check={this.check}
          delete={this.delete}
        ></List>
        <Footer list={this.state.list}></Footer>
      </div>
    )
  }
}
