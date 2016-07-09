import FilterModel from "./FilterModel"
import TodoCollection from "./TodoCollection"

export default class FilteredTodosModel extends Backbone.Model {
  defaults() {
    return {
      filter: FilterModel.All,
      todos: new TodoCollection()
    }
  }

  get filter(): FilterModel {
    const filter = this.get("filter")
    return filter
  }

  set filter(filter: FilterModel) {
    this.set("filter", filter)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
