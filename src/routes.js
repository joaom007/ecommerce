import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { About, Main, Product, Login, Order } from './pages/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/product/:id" component={Product} />
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/order" component={Order}></Route>
    </Switch>
  </BrowserRouter>
)

export default Routes
