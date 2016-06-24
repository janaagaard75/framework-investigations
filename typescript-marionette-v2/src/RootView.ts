import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import TodosView from "./TodosView"

interface RootViewOptions extends Marionette.LayoutViewOptions<RootModel> {
}

export default class RootView extends Marionette.LayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))

    this.ui = {
      toggleAll: ".jsToggleAll"
    }

    this.events = <any>{
      "click @ui.toggleAll": this.toggleAllClicked
    }
    this.delegateEvents()

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
      // TODO: Create helper properties in the model.
      numberOfCompletedTodos: this.model.todos.getCompleted().length,
      numberOfTodos: this.model.todos.length,
      toggleAllChecked: this.model.todos.allAreCompleted() ? "checked" : ""
    }
  }

  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootPlaceholder"

    options.regions = {
      todos: ".jsTodosPlaceholder"
    }

    return options
  }

  private toggleAllClicked() {
    console.info("RootView.toogleAllClicked")
  }
}
