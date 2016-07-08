import Filter from "./Filter"
import TodoCollection from "./TodoCollection"

export default class FilteredTodosModel extends Backbone.Model {
  defaults() {
    return {
      filter: Filter.All,
      todos: new TodoCollection()
    }
  }

  get filter(): Filter {
    return this.get("filter")
  }

  set filter(filter: Filter) {
    this.set("fitler", filter)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
