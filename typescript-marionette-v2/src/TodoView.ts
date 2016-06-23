import * as Marionette from "backbone.marionette"
import TodoModel from "./TodoModel"

interface TodoViewOptions extends Backbone.ViewOptions<TodoModel> {
}

export default class TodoView extends Marionette.ItemView<TodoModel> {
  constructor(options: TodoViewOptions) {
    super(TodoView.setTagName(options))
  }

  template = require("./TodoView.ejs")

  private static setTagName(options: TodoViewOptions): TodoViewOptions {
    if (!options.el) {
      options.tagName = "li"
    }

    return options
  }
}
