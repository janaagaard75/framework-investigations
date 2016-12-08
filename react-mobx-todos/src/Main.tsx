import * as React from "react"
import { render } from "react-dom"
import DevTools from "mobx-react-devtools"

import { App } from "./components/App"
import { Store } from "./model/Store"

const store = new Store()

render(
  <div>
    <App store={store}/>
    <DevTools/>
  </div>,
  document.getElementById("app")
)