import * as React from "react"
import { render } from "react-dom"

import { App } from "./components/App"
import { TodoStore } from "./TodoStore"

const storeUpdated = () => {
  renderApp()
}

const store = new TodoStore(storeUpdated)

const renderApp = () => {
  render(
    <App store={store}/>,
    document.getElementById("root")
  )
}

renderApp()