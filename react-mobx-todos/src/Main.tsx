import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { Switch } from 'react-router'

import { allRoutes } from './routes'

import './main.scss'

// It would be easier to define two separate Routers for the two possible values for :filter, but keepting the parameterized construction as a showcase as to how paramters work.
render(
  <BrowserRouter>
    <div>
      <Switch>
        {allRoutes.map(route =>
          <Route
            component={route.component}
            exact={route.exact}
            key={route.routePath}
            path={route.routePath}
          />
        )}
        {/*<Route exact={true} path="/" component={ConnectedApp}/>
        <Route path="/:filter" component={ConnectedApp}/>*/}
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('main')
)