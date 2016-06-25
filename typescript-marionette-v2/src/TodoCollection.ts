import TodoModel from "./TodoModel"

export default class TodoCollection extends Backbone.Collection<TodoModel> {
  model = TodoModel
  comparator = "created"

  allCompleted(): boolean {
    return this.all(todo => todo.completed)
  }

  getActive(): Array<TodoModel> {
    return this.reject(todo => todo.completed)
  }

  getCompleted(): Array<TodoModel> {
    return this.filter(todo => todo.completed)
  }
}
