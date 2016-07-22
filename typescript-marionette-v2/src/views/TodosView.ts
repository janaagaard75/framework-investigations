import Filter from "../model/Filter"
import FilterModel from "../model/FilterModel"
import TodoCollection from "../model/TodoCollection"
import TodoModel from "../model/TodoModel"
import TodoView from "./TodoView"
import TypedCompositeView from "../TypedCompositeView"
import TypedCompositeViewOptions from "../TypedCompositeViewOptions"

interface TodosViewOptions extends TypedCompositeViewOptions<TodoModel, TodoCollection> {
  activeFilter: FilterModel
}

export default class TodosView extends TypedCompositeView<TodoModel, TodoCollection, TodoView> {
  constructor(
    private options: TodosViewOptions
  ) {
    super(TodosView.setDefaultOptions(options))

    this.listenTo(this.options.activeFilter, "change", this.render)
    // Listening for changed on the 'completed' attribute - not if the change event has completed.
    this.listenTo(this.options.collection, "change:completed", this.getThrottledRender())
  }

  childView = TodoView

  template = require("./TodosView.ejs")

  filter(child: TodoModel, index: number, collection: TodoCollection): boolean {
    switch (this.options.activeFilter.filter) {
      case Filter.Active:
        return !child.completed

      case Filter.All:
        return true

      case Filter.Completed:
        return child.completed

      default:
        throw new Error(`Unsupported filter ${this.options.activeFilter.filter}.`)
    }
  }

  private static setDefaultOptions(options: TodosViewOptions): TodosViewOptions {
    options.childViewContainer = ".jsChildViewContainer"
    return options
  }
}

//            View
//           /     \
//    ItemView     CollectionView
//        |             |
//   LayoutView    CompositeView
