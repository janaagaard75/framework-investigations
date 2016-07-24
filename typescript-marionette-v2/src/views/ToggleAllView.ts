import ToggleAllViewModel from "./ToggleAllViewModel"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

export default class ToggleAllView extends TypedLayoutView<ToggleAllViewModel> {
  constructor(
    options: TypedLayoutViewOptions<ToggleAllViewModel>
  ) {
    super(options)

    this.setUi({
      toggleAll: ".jsToggleAll"
    })

    this.setEvents({
      "click @ui.toggleAll": this.toggleAllClicked
    })

    // Listening for clicks on the checkboxes and for add or removal of todos. Whenever one of these things happen, verify if the check all checkbox should be checked.
    // TODO: Should only render when the value of toggleAllChecked has changed.
    this.listenTo(this.model.todos, "checkboxClicked update", this.render)
  }

  template = require("./ToggleAllView.ejs")

  templateHelpers() {
    return {
      toggleAllChecked: this.model.todos.allCompleted() ? "checked" : ""
    }
  }

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.todos.allCompleted()

    // TODO: This should probably only affect the visible todos, and not all of them.
    this.model.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
