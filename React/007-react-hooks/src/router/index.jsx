import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// routes
import Loading from '../components/loading'

import routes from './routes'


export default function router() {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {
                    routes.map((v) => <Route key={v.path} path={v.path} component={v.component} />)
                }
                <Redirect to="/index" />
            </Switch>
        </Suspense>
    )
}
