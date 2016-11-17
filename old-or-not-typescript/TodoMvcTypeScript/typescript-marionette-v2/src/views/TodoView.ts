import TodoModel from "../model/TodoModel"
import TypedItemView from "./typedViews/TypedItemView"
import TypedItemViewOptions from "./typedViews/TypedItemViewOptions"

interface TodoViewOptions extends TypedItemViewOptions<TodoModel> { }

export default class TodoView extends TypedItemView<TodoModel> {
  constructor(options: TodoViewOptions) {
    super(TodoView.setDefaultOptions(options))

    this.setUi({
      checkbox: ".jsCheckbox"
    })

    this.setEvents({
      "click @ui.checkbox": this.checkboxClicked
    })

    // (Listening for changes to the 'completed' attribute - not if the change event has completed.)
    this.listenTo(this.model, "change:completed", this.render)
  }

  template = require("./TodoView.ejs")

  private checkboxClicked() {
    this.model.toggle()
    this.model.collection.trigger("checkboxClicked")
  }

  templateHelpers() {
    return {
      checked: this.model.completed ? "checked" : ""
    }
  }

  private static setDefaultOptions(options: TodoViewOptions): TodoViewOptions {
    options = this.setTagName(options, "li")
    return options
  }
}
