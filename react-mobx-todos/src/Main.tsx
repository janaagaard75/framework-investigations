import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { Switch } from 'react-router'

// import { allRoutes } from './routes'
import { ConnectedApp } from './ConnectedApp'

import './main.scss'

render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact={true} path="/" component={ConnectedApp}/>
        <Route path="/:filter" component={ConnectedApp}/>
      </Switch>
      {/*{allRoutes.map(route =>
        <Route key={route.routePath} component={route.component} path={route.routePath}/>
      )}*/}
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)