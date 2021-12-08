import React, { Component } from 'react'

export default class index extends Component {
    state = {
        count: 0
    }

    clickObj = () => {
        const { count } = this.state
        this.setState({ count: count + 1 }, () => {
            console.log(`对象修改完成`, this.state.count);
        })
    }

    clickFunc = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        }, () => {
            console.log(`方法修改完成`, this.state.count);
        })
    }

    render() {
        return (
            <>
                <h3>当前count: {this.state.count}</h3>
                <button onClick={this.clickObj}>点击对象修改</button>
                <button onClick={this.clickFunc}>点击方法修改</button>
            </>
        )
    }
}
