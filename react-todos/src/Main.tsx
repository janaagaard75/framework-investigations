import * as React from "react"
import { render } from "react-dom"

import { App } from "./components/App"
import { Store } from "./Store"

const storeUpdated = () => {
  renderApp()
}

const store = new Store(storeUpdated)

const renderApp = () => {
  render(
    <App store={store}/>,
    document.getElementById("app")
  )
}

renderApp()