import Filter from "./Filter"
import FilteredTodosModel from "./FilteredTodosModel"
import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TodoView from "./TodoView"
import TypedCompositeView from "./TypedCompositeView"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

// interface TodosViewOptions extends TypedCompositeViewOptions<TodoModel, TodoCollection> {
//   filter: Filter
// }

export default class TodosView extends TypedCompositeView<TodoModel, TodoCollection, TodoView> {
  // constructor(options: TodosViewOptions) {
  //   super(TodosView.setDefaultOptions(options))
  // }

  constructor(
    private filteredTodos: FilteredTodosModel
  ) {
    super(TodosView.setDefaultOptions(filteredTodos))
  }

  childView = TodoView

  template = require("./TodosView.ejs")

  // TODO: Can this method be defined in TypedCompositeView even though it's static?
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

// TODO: TodosView will extend TypedItemView or TypedLayoutView instead of TypedCompositeView.

//            View
//           /     \
//    ItemView     CollectionView
//        |             |
//   LayoutView    CompositeView
