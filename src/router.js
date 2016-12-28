/* Libs */
import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router'
/* login */
import Login from 'Login/login'

import Hello from 'SupplierComponents/service/hello'

/* Seller */
// 外层架子
import SellerBody from 'SupplierComponents/service/body/body'
// home
import SellerHome from 'SupplierComponents/service/home/home'
// 待开通客户
import CustomerOpened from 'SupplierComponents/service/customer/opened/index'

/* Buyer */
// home
import BuyerHome from 'ClientComponents/service/home/home'

const router = (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Login} />
      <Route path='login' component={Login} />
      <Route path='seller' component={SellerBody}>
        <IndexRedirect to='seller' />
        <Route path='home' component={Hello} />
        <Route path='customer'>
          <IndexRedirect to='opened' />
          <Route path='opened' component={Hello} />
          <Route path='toBeOpened' component={Hello} />
        </Route>
      </Route>
      <Route path='buyer'>
        <Route patch='home' component={BuyerHome} />
      </Route>
    </Route>
  </Router>
)

export default router
