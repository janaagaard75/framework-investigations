import TodoCollection from "../model/TodoCollection"

interface SummarizationViewModelAttributes {
  todos: TodoCollection
}

export default class SummarizationViewModel extends Backbone.Model {
  constructor(attributes: SummarizationViewModelAttributes) {
    super(attributes)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
