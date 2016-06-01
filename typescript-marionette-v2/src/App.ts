// The reference only needed by VS Code, and not by the TypeScript compiler.
/// <reference path="../typings/index.d.ts"/>

import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import RootView from "./RootView"

export default class App extends Marionette.Application {
  rootView: RootView

  initialize() {
    this.rootView = new RootView({
      model: new RootModel({title: "Defined when new'ing"})
    })
    this.rootView.render()
    window.console.info("Application initialized.")
  }
}
