import TodosViewModel from "../viewModels/TodosViewModel"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

export default class ToggleAllView extends TypedLayoutView<TodosViewModel> {
  constructor(options: TypedLayoutViewOptions<TodosViewModel>) {
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
    const newState = this.model.todos.allAreCompleted()

    if (newState !== currentState) {
      this.render()
    }
  }

  templateHelpers() {
    return {
      toggleAllChecked: this.model.todos.allAreCompleted() ? "checked" : ""
    }
  }

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.todos.allAreCompleted()

    this.model.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
