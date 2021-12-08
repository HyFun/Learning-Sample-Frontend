import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'


import Loading from './Loading'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class extends Component {
    render() {
        return (
            <>
                <NavLink to="/home">home</NavLink>
                <NavLink to="/about">about</NavLink>

                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                </Suspense>

            </>
        )
    }
}
