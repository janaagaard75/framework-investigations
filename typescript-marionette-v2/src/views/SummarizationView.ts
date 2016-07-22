import TodoCollection from "../model/TodoCollection"
import TodoModel from "../model/TodoModel"
import TypedItemView from "../TypedItemView"

interface SummarizationViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class SummarizationView extends TypedItemView<TodoModel> {
  constructor(options: SummarizationViewOptions) {
    super(options)

    this.listenTo(this.collection, "change:completed", this.getThrottledRender())
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
