/* Libs */
import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
/* login */
import Login from 'Login/login'
/* Seller */
// home
import SellerHome from 'SupplierComponents/service/home/home'

/* Buyer */
// home
import BuyerHome from 'ClientComponents/service/home/home'

const router = (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Login} />
      <Route path='login' component={Login} />
      <Route path='seller'>
        <Route path='home' component={SellerHome} />
      </Route>
      <Route path='buyer'>
        <Route patch='home' component={BuyerHome} />
      </Route>
    </Route>
  </Router>
)

export default router
