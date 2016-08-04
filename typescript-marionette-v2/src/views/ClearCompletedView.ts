import ClearCompletedViewModel from "./ClearCompletedViewModel"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

export default class ClearCompletedView extends TypedLayoutView<ClearCompletedViewModel> {
  constructor(options: TypedLayoutViewOptions<ClearCompletedViewModel>) {
    super(options)

    this.setUi({
      clearCompletedButton: ".jsClearCompletedButton"
    })

    this.setEvents({
      "click @ui.clearCompletedButton": this.clearCompletedButtonClicked
    })

    this.listenTo(this.model.todos, "checkboxClicked update", this.renderIfNecessary)
  }

  template = require("./ClearCompletedView.ejs")

  private clearCompletedButtonClicked() {
    this.model.todos.getCompleted().forEach(todo => {
      todo.destroy()
    })
    // TODO: SummarizedView has to re-render.
  }

  private isButtonEnabled() {
    const enabled = (this.model.todos.getCompleted().length >= 1)
    return enabled
  }

  private renderIfNecessary() {
    const currentState = this.ui.clearCompletedButton.prop("enabled")
    const newState = this.isButtonEnabled()

    if (newState !== currentState) {
      this.render()
    }
  }
}
