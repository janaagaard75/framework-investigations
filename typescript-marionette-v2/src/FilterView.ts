import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TypedItemView from "./TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class FilterView extends TypedItemView<TodoModel> {
  constructor(options: FilterViewOptions) {
    super(options)
  }

  template = require("./FilterView.ejs")
}
