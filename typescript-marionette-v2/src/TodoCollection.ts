import TodoModel from "./TodoModel"

export default class TodoCollection extends Backbone.Collection<TodoModel> {
  model = TodoModel
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
