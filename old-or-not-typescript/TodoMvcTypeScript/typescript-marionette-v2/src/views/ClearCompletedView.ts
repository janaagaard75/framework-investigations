import TodosViewModel from "../viewModels/TodosViewModel"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

export default class ClearCompletedView extends TypedLayoutView<TodosViewModel> {
  constructor(options: TypedLayoutViewOptions<TodosViewModel>) {
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
