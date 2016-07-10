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
      collection: this.model.filteredTodos.todos
    }))

    this.getRegion("todos").show(new TodosView(this.model.filteredTodos))

    this.getRegion("summarization").show(new SummarizationView({
      collection: this.model.filteredTodos.todos
    }))

    this.getRegion("filterTodos").show(new FiltersView({
      collection: this.model.filteredTodos.todos
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
