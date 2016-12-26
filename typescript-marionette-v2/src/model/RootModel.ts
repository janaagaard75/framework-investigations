import Filter from "./Filter"
import FilterModel from "./FilterModel"
import TodoCollection from "./TodoCollection"

export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      activeFilter: new FilterModel({
        filter: Filter.All
      }),
      todos: new TodoCollection()
    }
  }

  get activeFilter(): FilterModel {
    return this.get("activeFilter")
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
