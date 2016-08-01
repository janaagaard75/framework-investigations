import TodoCollection from "../model/TodoCollection"
import TodoModel from "../model/TodoModel"
import TypedItemView from "./typedViews/TypedItemView"

interface SummarizationViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

// TODO: TodoModel isn't used for anything in here.
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
