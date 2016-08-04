import SummarizationViewModel from "../viewModels/SummarizationViewModel"
import TypedItemView from "./typedViews/TypedItemView"
import TypedItemViewOptions from "./typedViews/TypedItemViewOptions"

interface SummarizationViewOptions extends TypedItemViewOptions<SummarizationViewModel> {
}

export default class SummarizationView extends TypedItemView<SummarizationViewModel> {
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
