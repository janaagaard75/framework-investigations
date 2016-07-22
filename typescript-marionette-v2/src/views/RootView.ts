import * as Marionette from "backbone.marionette"
import AddTodoView from "./AddTodoView"
import FiltersView from "./FiltersView"
import RootModel from "../model/RootModel"
import SummarizationView from "./SummarizationView"
import TodosView from "./TodosView"
import TypedLayoutView from "./typedViews/TypedLayoutView"

interface RootViewOptions extends Marionette.LayoutViewOptions<RootModel> { }

// TODO: Add the possibility to delete completed todos.

export default class RootView extends TypedLayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))

    this.setUi({
      toggleAll: ".jsToggleAll"
    })

    this.setEvents({
      "click @ui.toggleAll": this.toggleAllClicked
    })

    // Listening for clicks on the checkboxes and for add or removal of todos. Whenever one of these things happen, verify if the check all checkbox should be checked.
    this.listenTo(this.model.todos, "checkboxClicked update", this.todosChanged)
  }

  template = require("./RootView.ejs")

  onRender() {
    this.getRegion("addTodo").show(new AddTodoView({
      collection: this.model.todos
    }))

    this.getRegion("todos").show(new TodosView({
      activeFilter: this.model.activeFilter,
      collection: this.model.todos
    }))

    this.getRegion("summarization").show(new SummarizationView({
      collection: this.model.todos
    }))

    this.getRegion("filterTodos").show(new FiltersView({
      model: this.model.activeFilter
    }))
  }

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
      toggleAllChecked: this.model.todos.allCompleted() ? "checked" : ""
    }
  }

  private todosChanged(eventSource: Backbone.Model, options: any) {
    // TODO: Fix the error in the console. It might help to move the toggle all checkbox to a separate view.
    this.render()
  }

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.todos.allCompleted()

    // TODO: This should probably only affect the visible todos, and not all of them.
    this.model.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
