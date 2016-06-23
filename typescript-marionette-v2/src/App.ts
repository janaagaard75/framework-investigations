// The reference only needed by VS Code, and not by the TypeScript compiler.
/// <reference path="../typings/index.d.ts"/>

import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import RootView from "./RootView"
import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"

export default class App extends Marionette.Application {
  rootView: RootView

  initialize() {
    const rootModel = new RootModel()

    rootModel.todos = new TodoCollection()

    rootModel.todos.add(new TodoModel({
      completed: true,
      title: "Handle ind"
    }))

    rootModel.todos.add(new TodoModel({
      title: "Lave mad"
    }))

    this.rootView = new RootView({
      model: rootModel
    })

    this.rootView.render()
  }
}
