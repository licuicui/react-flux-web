/* Libs */
import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
import 'Plugin/jquery.base64.min.js'
/* login */
import Login from 'Components/login'

import ScrollDemo from 'Components/scrollDemo'

const router = (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Login} />
      <Route path='login' component={Login} />
      <Route path='scroll' component={ScrollDemo} />
    </Route>
  </Router>
)

export default router
