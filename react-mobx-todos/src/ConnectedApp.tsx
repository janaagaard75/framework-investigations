import * as React from "react"
// TODO: Figure out how to remove dev tools from the production bundle.
import DevTools from "mobx-react-devtools"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { RouteComponent } from "./model/RouteComponent"
import { Store } from "./model/Store"

declare const process: any

useStrict(true)

export class ConnectedApp extends RouteComponent<void> {
  public render() {
    const includeDevTools = process.env.NODE_ENV === "development"
    const store = new Store()

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