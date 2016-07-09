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
    const filter = this.get("filter")
    return filter
  }

  set filter(newFilter: Filter) {
    this.set("filter", newFilter)
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
