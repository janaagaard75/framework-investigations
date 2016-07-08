import Filter from "./Filter"
import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TodoView from "./TodoView"
import TypedCompositeView from "./TypedCompositeView"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

interface TodosViewOptions extends TypedCompositeViewOptions<TodoModel, TodoCollection> {
  filter: Filter
}

export default class TodosView extends TypedCompositeView<TodoModel, TodoCollection, TodoView> {
  constructor(options: TodosViewOptions) {
    super(TodosView.setDefaultOptions(options))
  }

  childView = TodoView

  template = require("./TodosView.ejs")

  private static setDefaultOptions(options: TodosViewOptions): TodosViewOptions {
    options.childViewContainer = ".jsChildViewContainer"
    return options
  }

  // TODO: This filter function works as expected.
  // filter(child: TodoModel, index: number, collection: TodoCollection): boolean {
  //   return child.completed
  // }
}

// TODO: TodosView will extend TypedItemView or TypedLayoutView instead of TypedCompositeView.

//            View
//           /     \
//    ItemView     CollectionView
//        |             |
//   LayoutView    CompositeView
