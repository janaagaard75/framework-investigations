import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TodoView from "./TodoView"

// Add childViewContainer?:string; to CollectionViewOptions in marionette/index.d.ts.

interface TodosViewOptions extends Marionette.CollectionViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class TodosView extends Marionette.CompositeView<TodoModel, TodoView> {
  constructor(options: TodosViewOptions) {
    super({
      childViewContainer: ".js-child-view-container"
    })

    this.collection = options.collection
  }

  childView = TodoView

  collection: TodoCollection

  template = require("./TodosView.ejs")
}
