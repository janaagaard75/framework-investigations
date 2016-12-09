import * as React from "react"
// TODO: Figure out how to remove dev tools from the production bundle.
import DevTools from "mobx-react-devtools"
import { browserHistory } from "react-router"
import { render } from "react-dom"
import { Route } from "react-router"
import { Router } from "react-router"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { Store } from "./model/Store"

useStrict(true)
const store = new Store()

declare const process: any
const includeDevTools = process.env.NODE_ENV === "development"

class AppAndMore extends React.Component<void, void> {
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

render(
  <Router history={browserHistory}>
    <Route component={AppAndMore} path="/(:filter)"/>
  </Router>,
  document.getElementById("app")
)