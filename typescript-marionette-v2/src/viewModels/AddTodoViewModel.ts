import TodoCollection from "../model/TodoCollection"

interface AddTodoViewModelAttributes {
  todos: TodoCollection
}

export default class AddTodoViewModel extends Backbone.Model {
  constructor(attributes: AddTodoViewModelAttributes) {
    super(attributes)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
