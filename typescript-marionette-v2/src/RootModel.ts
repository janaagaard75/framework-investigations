// Requires the following added to the bottom of typings/global/backbone.localstorage/index.d.ts.
// TODO: Figure out how to avoid this or add a pull request fixing this.
// declare module "backbone.localstorage" {
//     export = Backbone.LocalStorage;
// }
import Store = require("backbone.localstorage")
import TodoModel from "./TodoModel"

export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      title: "Todos",
      todos: [TodoModel] // TODO: Figure out how to use the Array<> syntax.
    }
  }

  localStorage = new Store("todos-typescript-marionette-v2")

  get title(): string {
    return this.get("title")
  }

  set title(title: string) {
    this.set("title", title)
  }

  get todos(): Array<TodoModel> {
    return this.get("todos")
  }

  set todos(todos: Array<TodoModel>) {
    this.set("todos", todos)
  }
}
