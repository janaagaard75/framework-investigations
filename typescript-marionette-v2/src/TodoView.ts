import TypedItemView from "./TypedItemView"
import TodoModel from "./TodoModel"

interface TodoViewOptions extends Backbone.ViewOptions<TodoModel> { }

export default class TodoView extends TypedItemView<TodoModel> {
  constructor(options: TodoViewOptions) {
    super(TodoView.setDefaultOptions(options))

    this.setUi({
      toggle: ".jsToggle"
    })

    this.setEvents({
      "click @ui.toggle": this.toggle
    })
  }

  template = require("./TodoView.ejs")

  templateHelpers() {
    return {
      checked: this.model.completed ? "checked" : ""
    }
  }

  private static setDefaultOptions(options: TodoViewOptions): TodoViewOptions {
    options = this.setTagName(options, "li")
    return options
  }

  private toggle() {
    this.model.toggle()
  }
}
