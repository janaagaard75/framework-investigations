import BackboneLocalStorage = require("backbone.localstorage")
import TodoModel from "./TodoModel"

export default class TodoCollection extends Backbone.Collection<TodoModel> {
  comparator = "created"
  localStorage = new BackboneLocalStorage("todos-typescript-marionette-v2")
  model = TodoModel

  allCompleted(): boolean {
    return this.all(todo => todo.completed)
  }

  getActive(): Array<TodoModel> {
    return this.filter(todo => !todo.completed)
  }

  getCompleted(): Array<TodoModel> {
    return this.filter(todo => todo.completed)
  }
}
