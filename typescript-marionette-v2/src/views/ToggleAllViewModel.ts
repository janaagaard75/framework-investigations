import TodoCollection from "../model/TodoCollection"

class ToggleAllViewModelAttributes {
  todos: TodoCollection
}

export default class ToggleAllViewModel extends Backbone.Model {
  constructor(attributes: ToggleAllViewModelAttributes, options?: any) {
    super(attributes, options)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
