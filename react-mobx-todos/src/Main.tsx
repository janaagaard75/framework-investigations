import * as React from "react"
import { browserHistory } from "react-router"
import { Provider } from "mobx-react"
import { render } from "react-dom"
import { Route } from "react-router"
import { Router } from "react-router"
import { RouterStore } from "mobx-react-router"
import { syncHistoryWithStore } from "mobx-react-router"

import { allRoutes } from "./routes"

import "./main.scss"

const routerStore = new RouterStore()
const stores = {
  router: routerStore
}

// TODO: Isn't there a better solution than to cast to 'any'?
const history = syncHistoryWithStore(browserHistory, routerStore) as any

render(
  <Provider {...stores}>
    <Router history={history}>
      {allRoutes.map(route =>
        <Route key={route.routePath} component={route.component} path={route.routePath}/>
      )}
    </Router>
  </Provider>,
  document.getElementById("app")
)