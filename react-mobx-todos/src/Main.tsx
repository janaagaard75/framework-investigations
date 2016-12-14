import * as React from "react"
// TODO: Figure out how to remove dev tools from the production bundle.
import DevTools from "mobx-react-devtools"
import { browserHistory } from "react-router"
import { render } from "react-dom"
import { Route } from "react-router"
import { Router } from "react-router"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { Filter } from "./model/Filter"
import { Store } from "./model/Store"
import { TypedRoute } from "./model/TypedRoute"

useStrict(true)
const store = new Store()

declare const process: any
const includeDevTools = process.env.NODE_ENV === "development"

class ConnectedApp extends React.Component<void, void> {
  public render() {
    return (
      <div>
        <App store={store}/>
        {includeDevTools &&
          <DevTools/>
        }
      </div>
    )
  }
}

const AllTodos = new TypedRoute(
  ConnectedApp,
  "/",
  () => "/"
)

const FilteredTodos = new TypedRoute(
  ConnectedApp,
  "/:filter",
  (filter: Filter) => `${filter}`
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