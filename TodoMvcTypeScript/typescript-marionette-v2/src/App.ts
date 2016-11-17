// The reference only needed by VS Code, and not by the TypeScript compiler.
/// <reference path="../typings/index.d.ts"/>

import * as Marionette from "backbone.marionette"
import RootModel from "./model/RootModel"
import RootView from "./views/RootView"
import Router from "./Router"

export default class App extends Marionette.Application {
  private rootView: RootView

  private getInitialModel(): RootModel {
    const rootModel = new RootModel()
    rootModel.todos.fetch()

    return rootModel
  }

  initialize() {
    const rootModel = this.getInitialModel()

    Router.initialize(rootModel)

    this.rootView = new RootView({
      model: rootModel
    })

    this.rootView.render()
  }
}
