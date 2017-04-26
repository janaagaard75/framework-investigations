import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import { render } from "react-dom"
import { Route } from "react-router"

import { allRoutes } from "./routes"

import "./main.scss"

render(
  <BrowserRouter>
    {allRoutes.map(route =>
      <Route key={route.routePath} component={route.component} path={route.routePath}/>
    )}
  </BrowserRouter>,
  document.getElementById("app")
)