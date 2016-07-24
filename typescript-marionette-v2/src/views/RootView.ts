import AddTodoView from "./AddTodoView"
import FiltersView from "./FiltersView"
import RootModel from "../model/RootModel"
import SummarizationView from "./SummarizationView"
import TodosView from "./TodosView"
import ToggleAllView from "./ToggleAllView"
import ToggleAllViewModel from "./ToggleAllViewModel"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

interface RootViewOptions extends TypedLayoutViewOptions<RootModel> { }

// TODO: Add the possibility to delete completed todos.

export default class RootView extends TypedLayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))
  }

  template = require("./RootView.ejs")

  onRender() {
    this.getRegion("addTodo").show(new AddTodoView({
      collection: this.model.todos
    }))

    this.getRegion("toggleAll").show(new ToggleAllView({
      model: new ToggleAllViewModel({
        todos: this.model.todos
      })
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
      todos: ".jsTodosRegion",
      toggleAll: ".jsToggleAllRegion"
    }

    return options
  }
}
