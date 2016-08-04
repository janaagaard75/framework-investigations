import TodoCollection from "../model/TodoCollection"

interface ClearCompletedViewModelAttributes {
  todos: TodoCollection
}

export default class ClearCompletedViewModel extends Backbone.Model {
  constructor(attributes: ClearCompletedViewModelAttributes) {
    super(attributes)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
