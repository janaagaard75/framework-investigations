import * as React from "react"
// TODO: Figure out how to remove dev tools from the production bundle.
import DevTools from "mobx-react-devtools"
import { browserHistory } from "react-router"
import { render } from "react-dom"
import { Route } from "react-router"
import { Router } from "react-router"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { RouteComponent } from "./model/RouteComponent"
import { Store } from "./model/Store"
import { TodosFilter } from "./model/TodosFilter"
import { TypedRoute } from "./model/TypedRoute"

import "./main.scss"

useStrict(true)
const store = new Store()

declare const process: any

class ConnectedApp extends RouteComponent<void> {
  public render() {
    const includeDevTools = process.env.NODE_ENV === "development"

    return (
      <div>
        <App routerContext={this.props} store={store}/>
        {includeDevTools &&
          <DevTools/>
        }
      </div>
    )
  }
}

export const FilteredTodosRoute: TypedRoute<(filterAndPath: TodosFilter) => string> = new TypedRoute(
  ConnectedApp,
  "/(:filter)",
  (filterAndPath: TodosFilter) => "/" + filterAndPath.path
)

const allRoutes = [
  FilteredTodosRoute
]

render(
  <Router history={browserHistory}>
    {allRoutes.map(route =>
      <Route key={route.routePath} component={route.component} path={route.routePath}/>
    )}
  </Router>,
  document.getElementById("app")
)