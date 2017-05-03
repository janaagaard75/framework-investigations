import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { Switch } from 'react-router'

import { ConnectedApp } from './ConnectedApp'

import './main.scss'

// It would be easier to define two separate Routers for the two possible values for :filter, but keepting the parameterized construction as a showcase as to how paramters work.
render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={ConnectedApp}/>
      <Route path="/:filter" component={ConnectedApp}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('main')
)