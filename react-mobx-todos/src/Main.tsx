import * as React from "react"
// TODO: Figure out how to remove dev tools from the production bundle.
import DevTools from "mobx-react-devtools"
import { browserHistory } from "react-router"
import { Component } from "react"
import { render } from "react-dom"
import { Route } from "react-router"
import { Router } from "react-router"
import { RouterContext } from "react-router"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { Filter } from "./model/Filter"
import { Store } from "./model/Store"
import { TypedRoute } from "./model/TypedRoute"

useStrict(true)
const store = new Store()

declare const process: any
const includeDevTools = process.env.NODE_ENV === "development"

interface ConnectedAppProps extends RouterContext.RouterContextProps { }

class ConnectedApp extends Component<ConnectedAppProps, void> {
  public render() {
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

// Explicit types on the routes are required because there's a cyclic reference to them through Filters.tsx.
export const AllTodos: TypedRoute<() => string> = new TypedRoute(
  ConnectedApp,
  "/",
  () => "/"
)

export const FilteredTodos: TypedRoute<(filter: Filter) => string> = new TypedRoute(
  ConnectedApp,
  "/:filter",
  (filter: Filter) => `${Filter[filter]}`
)

const allRoutes = [
  AllTodos,
  FilteredTodos
]

render(
  <Router history={browserHistory}>
    {allRoutes.map(route =>
      <Route component={route.component} path={route.routePath}/>
    )}
  </Router>,
  document.getElementById("app")
)