import * as _ from "underscore"
import * as Marionette from "backbone.marionette"
import AddTodoView from "./AddTodoView"
import RootModel from "./RootModel"
import SummarizationView from "./SummarizationView"
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

    // TODO: Move the toogleTodos checkbox to a separate view and remove this listener.
    this.listenTo(this.model.todos, "change:completed", this.getThrottledRender())
  }

  template = require("./RootView.ejs")

  /** Returns a throttled version of the render method. */
  private getThrottledRender() {
    return _.throttle(this.render, 10, { leading: false })
  }

  onRender() {
    const addTodoView = new AddTodoView({
      collection: this.model.todos
    })
    this.getRegion("addTodo").show(addTodoView)

    const todosView = new TodosView({
      collection: this.model.todos
    })
    this.getRegion("todos").show(todosView)

    const summarizationView = new SummarizationView({
      collection: this.model.todos
    })
    this.getRegion("summarization").show(summarizationView)
  }

  // TODO: Is it possible to define the signature for this method?
  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootViewElement"

    options.regions = {
      addTodo: ".jsAddTodoRegion",
      summarization: ".jsSummarizationRegion",
      todos: ".jsTodosRegion"
    }

    return options
  }

  templateHelpers() {
    return {
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
