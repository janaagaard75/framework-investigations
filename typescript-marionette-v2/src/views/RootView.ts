import AddTodoView from "./AddTodoView"
import ClearCompletedView from "./ClearCompletedView"
import ClearCompletedViewModel from "../viewModels/ClearCompletedViewModel"
import FiltersView from "./FiltersView"
import RootModel from "../model/RootModel"
import SummarizationView from "./SummarizationView"
import SummarizationViewModel from "../viewModels/SummarizationViewModel"
import TodosView from "./TodosView"
import ToggleAllView from "./ToggleAllView"
import ToggleAllViewModel from "../viewModels/ToggleAllViewModel"
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
      collection: this.model.todos
    }))

    this.getRegion("clearCompleted").show(new ClearCompletedView({
      model: new ClearCompletedViewModel({
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
      model: new ToggleAllViewModel({
        todos: this.model.todos
      })
    }))

    this.getRegion("summarization").show(new SummarizationView({
      model: new SummarizationViewModel({
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
