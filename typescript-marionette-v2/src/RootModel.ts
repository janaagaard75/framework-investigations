// The following has to be added to the bottom of typings/global/backbone.localstorage/index.d.ts.
// TODO: Figure out how to avoid this or add a pull request fixing this.
// declare module "backbone.localstorage" {
//     export = Backbone.LocalStorage;
// }
import Store = require("backbone.localstorage")
import TodoCollection from "./TodoCollection"

export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      title: "Todos",
      todos: TodoCollection
    }
  }

  localStorage = new Store("todos-typescript-marionette-v2")

  get title(): string {
    return this.get("title")
  }

  set title(title: string) {
    this.set("title", title)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }

  set todos(todos: TodoCollection) {
    this.set("todos", todos)
  }
}
