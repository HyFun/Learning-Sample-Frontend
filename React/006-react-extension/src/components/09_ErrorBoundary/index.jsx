import React, { Component } from 'react'

export default class index extends Component {

    state = {
        hasError: ''
    }
    // 适用于production环境
    static getDerivedStateFromError(error) {
        return { hasError: error }
    }

    componentDidCatch() {
        console.log(`渲染组件时出错...`);
    }

    render() {
        return (
            <div>
                ErrorBoundary...
                {this.state.hasError ? <h3>网络不稳定，请稍后重试~</h3> : <B />}
            </div>
        )
    }
}


class B extends Component {
    state = {
        values: ''
    }

    render() {
        return (
            <div>
                {this.state.values.map(v => 111)}
            </div>
        )
    }
}