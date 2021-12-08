import React from 'react'
import './App.css'

import State from './components/01_setState'
import LazyRoute from './components/02_lazy'
import UseState from './components/03_useState'
import EffectHook from './components/04_effectHook'
import RefHook from './components/05_RefHook'
import A from './components/06_Context'
import PuraCom from './components/07_PureComponent'
import RenderProps from './components/08_renderProps'
import ErrorBoundary from './components/09_ErrorBoundary'


export default class App extends React.Component {

    render() {
        return (
            <div>
                <State />
                <hr />
                <LazyRoute />
                <hr />
                <UseState />
                <hr />
                <EffectHook />
                <hr />
                <RefHook />
                <hr />
                <A />
                <hr />
                <PuraCom />
                <hr />
                <RenderProps />
                <hr />
                <ErrorBoundary />
            </div>
        )
    }
}