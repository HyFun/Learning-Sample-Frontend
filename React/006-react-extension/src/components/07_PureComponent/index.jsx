import React, {PureComponent as Component } from 'react'

export default class A extends Component {
    state = {
        value: ''
    }
    render() {
        console.log(`A render`);
        return (
            <div>
                <h3>A的value为：{this.state.value}</h3>
                <input type="text" value={this.state.value}
                    onChange={e => {
                        this.setState({ value: e.target.value })
                    }} />

                <B value={this.state.value}/>
                <C />
            </div>
        )
    }
}


class B extends Component {
    render() {
        console.log(`B render`);
        return (
            <div>
                B...
                {this.props.value}
            </div>
        )
    }
}

class C extends Component {
    render() {
        console.log(`C render`);
        return (
            <div>
                C...
            </div>
        )
    }
}