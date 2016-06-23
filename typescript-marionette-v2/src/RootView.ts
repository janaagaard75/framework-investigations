import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import TodosView from "./TodosView"

interface RootViewOptions extends Marionette.LayoutViewOptions<RootModel> {
}

export default class RootView extends Marionette.LayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))
  }

  template = require("./RootView.ejs")

  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootPlaceholder"

    options.regions = {
      todos: ".jsTodosPlaceholder"
    }

    return options
  }

  onBeforeShow() {
    const todosView = new TodosView({
      collection: this.model.todos
    })

    // TODO: Are these two lines equivalent?
    this.getRegion("todos").show(todosView)
    // this.showChildView("todos", todosView)
  }
}
