// TODO: Why does the compiler not complain when Marionette is missing?
import * as Marionette from "backbone.marionette"
import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TodoView from "./TodoView"

// Add this to marionette/index.d.ts.
// interface CompositeViewOptions<TModel extends Backbone.Model> extends CollectionViewOptions<TModel> {
//     childView?: string,
//     collection?: Backbone.Collection<TModel>,
//     template?: any
// }

interface TodosViewOptions extends Marionette.CompositeViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class TodosView extends Marionette.CompositeView<TodoModel, TodoView> {
  constructor(options: TodosViewOptions) {
    super(TodosView.setDefaultOptions(options))
  }

  childView = TodoView

  collection: TodoCollection

  template = require("./TodosView.ejs")

  templateHelpers() {
    return {
      numberOfTodos: this.collection.length
    }
  }

  private static setDefaultOptions(options: TodosViewOptions): TodosViewOptions {
    options.childViewContainer = ".js-child-view-container"
    return options
  }
}
