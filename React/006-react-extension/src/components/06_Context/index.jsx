import React, { Component } from 'react'

const MyContext = React.createContext()
const { Provider } = MyContext

export default class A extends Component {
    state = {
        name: ''
    }
    render() {
        return (
            <div>
                A...
                <h3>name: {this.state.name}</h3>
                <input type="text" value={this.state.name} onChange={e => {
                    this.setState({ name: e.target.value })
                }} />
                <Provider value={this.state.name}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div>
                B...
                <MyContext.Consumer>
                    {value=>`我在B里边：${value}`}
                </MyContext.Consumer>
                <C />
            </div>
        )
    }
}

class C extends Component {
    static contextType = MyContext
    render() {
        return (
            <div>
                C...
                {this.context}
            </div>
        )
    }
}