// The reference only needed by VS Code, and not by the TypeScript compiler.
/// <reference path="../typings/index.d.ts"/>

import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import RootView from "./RootView"
import Router from "./Router"
import TodoModel from "./TodoModel"

export default class App extends Marionette.Application {
  private rootView: RootView

  private getInitialModel(): RootModel {
    const rootModel = new RootModel()

    // rootModel.todos.add(new TodoModel({
    //   completed: true,
    //   title: "Handle ind"
    // }))

    // rootModel.todos.add(new TodoModel({
    //   title: "Lave mad"
    // }))

    // TODO: This doesn't do anything. It has to be called on the collection of TODOs.
    rootModel.fetch()

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
