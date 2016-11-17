import TodosViewModel from "../viewModels/TodosViewModel"
import TypedItemView from "./typedViews/TypedItemView"
import TypedItemViewOptions from "./typedViews/TypedItemViewOptions"

interface SummarizationViewOptions extends TypedItemViewOptions<TodosViewModel> {
}

export default class SummarizationView extends TypedItemView<TodosViewModel> {
  constructor(options: SummarizationViewOptions) {
    super(options)

    this.listenTo(this.collection, "change:completed update", this.getThrottledRender())
  }

  template = require("./SummarizationView.ejs")

  templateHelpers() {
    return {
      numberOfCompletedTodos: this.model.todos.getCompleted().length,
      numberOfTodos: this.model.todos.length
    }
  }
}
