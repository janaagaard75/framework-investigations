import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TodoView from "./TodoView"
import TypedCompositeView from "./TypedCompositeView"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

interface TodosViewOptions extends TypedCompositeViewOptions<TodoModel, TodoCollection> { }

export default class TodosView extends TypedCompositeView<TodoModel, TodoCollection, TodoView> {
  // TODO: The view either needs to know about the current filter or it should only be fed with the todos to show.
  constructor(options: TypedCompositeViewOptions<TodoModel, TodoCollection>) {
    super(TodosView.setDefaultOptions(options))
  }

  childView = TodoView

  template = require("./TodosView.ejs")

  private static setDefaultOptions(options: TypedCompositeViewOptions<TodoModel, TodoCollection>): TypedCompositeViewOptions<TodoModel, TodoCollection> {
    options.childViewContainer = ".jsChildViewContainer"
    return options
  }

  // TODO: This filter function works as expected.
  // filter(child: TodoModel, index: number, collection: TodoCollection): boolean {
  //   return child.completed
  // }
}
