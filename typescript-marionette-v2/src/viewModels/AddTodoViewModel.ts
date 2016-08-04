import TodoCollection from "../model/TodoCollection"

// TODO: Consider using just a single view model for AddTodoViewModel, ClearCompletedViewModel etc., since they are all the same.
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
