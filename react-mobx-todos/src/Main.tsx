import * as React from "react"
// TODO: Figure out how to remove dev tools from the production build.
import DevTools from "mobx-react-devtools"
import { render } from "react-dom"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { Store } from "./model/Store"

useStrict(true)
const store = new Store()

declare const process: any
const includeDevTools = process.env.NODE_ENV === "development"

render(
  <div>
    <App store={store}/>
    {includeDevTools &&
      <DevTools/>
    }
  </div>,
  document.getElementById("app")
)