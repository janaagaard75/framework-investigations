import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TypedItemView from "./TypedItemView"

interface SummarizationViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class SummarizationView extends TypedItemView<TodoModel> {
  constructor(options: SummarizationViewOptions) {
    super(options)
  }

  collection: TodoCollection

  template = require("./SummarizationView.ejs")

  templateHelpers() {
    return {
      numberOfCompletedTodos: this.collection.getCompleted().length,
      numberOfTodos: this.collection.length
    }
  }
}
