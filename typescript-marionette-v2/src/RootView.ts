import * as Marionette from "backbone.marionette"
import AddTodoView from "./AddTodoView"
import FiltersView from "./FiltersView"
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

  private toggleAllClicked() {
    const markTodosCompleted = !this.model.todos.allCompleted()

    // TODO: This should probably only affect the visible todos, and not all of them.
    this.model.todos.each(todo => {
      todo.completed = markTodosCompleted
    })
  }
}
