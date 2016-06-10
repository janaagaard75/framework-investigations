import TodoModel from "./TodoModel"

export default class TodoCollection extends Backbone.Collection<TodoModel> {
  model = TodoModel
  // TODO: Move the local storage to the root model?
  localStorage = new Backbone.LocalStorage("todos-typescript-marionette")
  comparator = "created"

  allTodosAreCompleted(): boolean {
    return (this.getActive().length === 0)
  }

  getActive(): Array<TodoModel> {
    return this.reject(todo => todo.completed)
  }

  getCompleted(): Array<TodoModel> {
    return this.filter(todo => todo.completed)
  }
}
