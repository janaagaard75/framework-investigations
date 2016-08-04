import ToggleAllViewModel from "../viewModels/ToggleAllViewModel"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

export default class ToggleAllView extends TypedLayoutView<ToggleAllViewModel> {
  constructor(options: TypedLayoutViewOptions<ToggleAllViewModel>) {
    super(options)

    this.setUi({
      toggleAll: ".jsToggleAll"
    })

    this.setEvents({
      "click @ui.toggleAll": this.toggleAllClicked
    })

    this.listenTo(this.model.todos, "checkboxClicked update", this.renderIfNecessary)
  }

  template = require("./ToggleAllView.ejs")

  private renderIfNecessary() {
    const currentState = this.ui.toggleAll.prop("checked")
    const newState = this.model.todos.allCompleted()

    if (newState !== currentState) {
      this.render()
    }
  }

  templateHelpers() {
    return {
      toggleAllChecked: this.model.todos.allCompleted() ? "checked" : ""
    }
  }

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.todos.allCompleted()

    // TODO: This should probably only affect the visible todos, and not all of them. Affecting all todos is the behaviour that TodoMVC has.
    this.model.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
