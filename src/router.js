import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from 'components/home/home'
import Login from 'components/service/login/login'

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Login} />
    </Router>
)

export default router
