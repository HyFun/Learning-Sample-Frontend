import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import routes from '../router/routes'

export default function () {
    return (
        <ul>
            {routes.filter(v => v.path !== '/index').map((v, i) => (
                <li key={i}>
                    <Link to={v.path}>{v.title}</Link>
                </li>)
            )}
        </ul>
    )
}
