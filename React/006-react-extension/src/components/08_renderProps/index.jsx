import React, { Component } from 'react'

export default class A extends Component {
    render() {
        return (
            <div>
                A...
                <B h={(v) => <C msg={v} />} />
            </div>
        )
    }
}


class B extends Component {
    state = {
        value: ''
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onInput={e => {
                    this.setState({
                        value: e.target.value
                    })
                }} />
                {this.props.h(this.state.value)}
            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div>
                C...
                {this.props.msg}
            </div>
        )
    }
}

