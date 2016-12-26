import AddTodoView from "./AddTodoView"
import ClearCompletedView from "./ClearCompletedView"
import FiltersView from "./FiltersView"
import RootModel from "../model/RootModel"
import SummarizationView from "./SummarizationView"
import TodosView from "./TodosView"
import TodosViewModel from "../viewModels/TodosViewModel"
import ToggleAllView from "./ToggleAllView"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

interface RootViewOptions extends TypedLayoutViewOptions<RootModel> { }

export default class RootView extends TypedLayoutView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setDefaultOptions(options))
  }

  template = require("./RootView.ejs")

  onRender() {
    this.getRegion("addTodo").show(new AddTodoView({
      model: new TodosViewModel({
        todos: this.model.todos
      })
    }))

    this.getRegion("clearCompleted").show(new ClearCompletedView({
      model: new TodosViewModel({
        todos: this.model.todos
      })
    }))

    this.getRegion("filterTodos").show(new FiltersView({
      activeFilter: this.model.activeFilter
    }))

    this.getRegion("todos").show(new TodosView({
      activeFilter: this.model.activeFilter,
      collection: this.model.todos
    }))

    this.getRegion("toggleAll").show(new ToggleAllView({
      model: new TodosViewModel({
        todos: this.model.todos
      })
    }))

    this.getRegion("summarization").show(new SummarizationView({
      model: new TodosViewModel({
        todos: this.model.todos
      })
    }))
  }

  private static setDefaultOptions(options: RootViewOptions): RootViewOptions {
    options.el = ".jsRootViewElement"

    options.regions = {
      addTodo: ".jsAddTodoRegion",
      clearCompleted: ".jsClearCompletedRegion",
      filterTodos: ".jsFilterTodosRegion",
      summarization: ".jsSummarizationRegion",
      todos: ".jsTodosRegion",
      toggleAll: ".jsToggleAllRegion"
    }

    return options
  }
}
