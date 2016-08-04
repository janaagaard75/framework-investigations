import TodoCollection from "../model/TodoCollection"

class ToggleAllViewModelAttributes {
  todos: TodoCollection
}

export default class ToggleAllViewModel extends Backbone.Model {
  constructor(attributes: ToggleAllViewModelAttributes) {
    super(attributes)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
