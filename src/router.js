/* Libs */
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
/* Components */
import Login from 'Login/login'

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Login} />
    </Router>
)

export default router
