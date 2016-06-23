import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import TodosView from "./TodosView"

interface RootViewOptions extends Marionette.LayoutViewOptions<RootModel> {
}

export default class RootView extends Marionette.LayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))

    this.listenTo(this.model.todos, "change:completed", this.render)
  }

  template = require("./RootView.ejs")

  onRender() {
    const todosView = new TodosView({
      collection: this.model.todos
    })

    // Note to self: Shorthand for this.getRegion("todos").show(todosView)
    this.showChildView("todos", todosView)
  }

  templateHelpers() {
    return {
      // TODO: Create property on the model.
      numberOfCompletedTodos: this.model.todos.filter(todo => todo.completed).length,
      numberOfTodos: this.model.todos.length
    }
  }

  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootPlaceholder"

    options.regions = {
      todos: ".jsTodosPlaceholder"
    }

    return options
  }
}
