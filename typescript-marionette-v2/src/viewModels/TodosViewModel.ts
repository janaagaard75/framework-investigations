import TodoCollection from "../model/TodoCollection"

class TodosViewModelAttributes {
  todos: TodoCollection
}

export default class TodosViewModel extends Backbone.Model {
  constructor(attributes: TodosViewModelAttributes) {
    super(attributes)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
