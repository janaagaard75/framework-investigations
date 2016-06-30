import * as _ from "underscore"
import * as Marionette from "backbone.marionette"
import AddTodoView from "./AddTodoView"
import RootModel from "./RootModel"
import TodosView from "./TodosView"
import TypedLayoutView from "./TypedLayoutView"

interface RootViewOptions extends Marionette.LayoutViewOptions<RootModel> { }

export default class RootView extends TypedLayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))

    this.setUi({
      toggleAll: ".jsToggleAll"
    })

    this.setEvents({
      "click @ui.toggleAll": this.toggleAllClicked
    })

    this.listenTo(this.model.todos, "change:completed", this.getThrottledRender())
  }

  template = require("./RootView.ejs")

  private getThrottledRender() {
    return _.throttle(this.render, 10, { leading: false })
  }

  onRender() {
    const addTodoView = new AddTodoView({
      collection: this.model.todos
    })
    // Note to self: showChildView is just a shorthand for getRegion("todos").show(todosView).
    this.showChildView("addTodo", addTodoView)

    const todosView = new TodosView({
      collection: this.model.todos
    })
    this.showChildView("todos", todosView)
  }

  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootPlaceholder"

    // TODO: Consider postfixing with Region instead of Placeholder.
    options.regions = {
      addTodo: ".jsAddTodoPlaceholder",
      todos: ".jsTodosPlaceholder"
    }

    return options
  }

  templateHelpers() {
    return {
      numberOfCompletedTodos: this.model.todos.getCompleted().length,
      numberOfTodos: this.model.todos.length,
      toggleAllChecked: this.model.todos.allCompleted() ? "checked" : ""
    }
  }

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.todos.allCompleted()

    this.model.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
