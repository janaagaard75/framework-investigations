import * as _ from "underscore"
import * as Marionette from "backbone.marionette"
import AddTodoView from "./AddTodoView"
import FilterView from "./FilterView"
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
    this.listenTo(this.model.filteredTodos.todos, "change:completed", this.getThrottledRender())
  }

  template = require("./RootView.ejs")

  /** Returns a throttled version of the render method. */
  private getThrottledRender() {
    return _.throttle(this.render, 10, { leading: false })
  }

  onRender() {
    this.getRegion("addTodo").show(new AddTodoView({
      collection: this.model.filteredTodos.todos
    }))

    this.getRegion("todos").show(new TodosView(this.model.filteredTodos))

    this.getRegion("summarization").show(new SummarizationView({
      collection: this.model.filteredTodos.todos
    }))

    this.getRegion("filterTodos").show(new FilterView({
      collection: this.model.filteredTodos.todos
    }))
  }

  // TODO: Is it possible to define the signature for this method?
  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootViewElement"

    options.regions = {
      addTodo: ".jsAddTodoRegion",
      filterTodos: ".jsFilterTodosRegion",
      summarization: ".jsSummarizationRegion",
      todos: ".jsTodosRegion"
    }

    return options
  }

  templateHelpers() {
    return {
      toggleAllChecked: this.model.filteredTodos.todos.allCompleted() ? "checked" : ""
    }
  }

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.filteredTodos.todos.allCompleted()

    // TODO: This should probably only affect the visible todos, and not all of them.
    this.model.filteredTodos.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
