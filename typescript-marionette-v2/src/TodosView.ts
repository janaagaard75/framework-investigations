import Filter from "./Filter"
import FilteredTodosModel from "./FilteredTodosModel"
import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TodoView from "./TodoView"
import TypedCompositeView from "./TypedCompositeView"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

export default class TodosView extends TypedCompositeView<TodoModel, TodoCollection, TodoView> {
  constructor(
    private filteredTodos: FilteredTodosModel
  ) {
    super(TodosView.setDefaultOptions(filteredTodos))

    this.listenTo(this.filteredTodos, "change:filter", this.render)
  }

  childView = TodoView

  template = require("./TodosView.ejs")

  private static setDefaultOptions(filteredTodos: FilteredTodosModel): TypedCompositeViewOptions<TodoModel, TodoCollection> {
    const options = {
      childViewContainer: ".jsChildViewContainer",
      collection: filteredTodos.todos
    }
    return options
  }

  filter(child: TodoModel, index: number, collection: TodoCollection): boolean {
    switch (this.filteredTodos.filter) {
      case Filter.Active:
        return !child.completed

      case Filter.All:
        return true

      case Filter.Completed:
        return child.completed

      default:
        throw new Error(`Unsupported filter ${this.filteredTodos.filter}.`)
    }
  }
}

//            View
//           /     \
//    ItemView     CollectionView
//        |             |
//   LayoutView    CompositeView
