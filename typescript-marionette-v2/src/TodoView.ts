import * as Marionette from "backbone.marionette"
import TodoModel from "./TodoModel"

interface TodoViewOptions extends Backbone.ViewOptions<TodoModel> {
}

export default class TodoView extends Marionette.ItemView<TodoModel> {
  constructor(options: TodoViewOptions) {
    super(TodoView.setDefaultOptions(options))

    this.ui = {
      toggle: ".js-toggle"
    }

    this.events = <any>{
      "click @ui.toggle": this.toggle
    }
    this.delegateEvents()
  }

  template = require("./TodoView.ejs")

  templateHelpers() {
    return {
      checked: this.model.completed ? "checked" : ""
    }
  }

  private static setDefaultOptions(options: TodoViewOptions): TodoViewOptions {
    options.tagName = "li"

    return options
  }

  private toggle() {
    this.model.toggle()
  }
}
