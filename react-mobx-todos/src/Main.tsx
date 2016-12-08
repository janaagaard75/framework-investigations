import * as React from "react"
import { render } from "react-dom"

import { App } from "./components/App"
import { Store } from "./model/Store"

const store = new Store()

render(
  <App store={store}/>,
  document.getElementById("app")
)