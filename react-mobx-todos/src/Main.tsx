import * as React from "react"
import DevTools from "mobx-react-devtools"
import { render } from "react-dom"
import { useStrict } from "mobx"

import { App } from "./components/App"
import { Store } from "./model/Store"

useStrict(true)
const store = new Store()

render(
  <div>
    <App store={store}/>
    <DevTools/>
  </div>,
  document.getElementById("app")
)