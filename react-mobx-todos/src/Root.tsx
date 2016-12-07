import * as React from "react"
import { render } from "react-dom"

import { App } from "./components/App"
import { TodoStore } from "./models/TodoStore"

const store = new TodoStore()

render(
  <App store={store}/>,
  document.getElementById("root")
)