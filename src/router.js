/* Libs */
import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
import 'Plugin/jquery.base64.min.js'
/* login */
import Login from 'Components/service/login'

const router = (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Login} />
      <Route path='login' component={Login} />
    </Route>
  </Router>
)

export default router
