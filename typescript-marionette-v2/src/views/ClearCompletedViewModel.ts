import TodoCollection from "../model/TodoCollection"

interface ClearCompletedViewModelAttributes {
  todos: TodoCollection
}

export default class ClearCompletedViewModel extends Backbone.Model {
  // TODO: Is there any reason to include the options parameter?
  constructor(attributes: ClearCompletedViewModelAttributes, options?: any) {
    super(attributes, options)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
