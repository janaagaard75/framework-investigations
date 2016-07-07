// The following has to be added to the bottom of typings/global/backbone.localstorage/index.d.ts.
// TODO: Figure out how to avoid this or add a pull request fixing this.
// declare module "backbone.localstorage" {
//     export = Backbone.LocalStorage;
// }
import Filter from "./Filter"
import Store = require("backbone.localstorage")
import TodoCollection from "./TodoCollection"

export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      todos: TodoCollection,
      todosFilter: Filter.All
    }
  }

  localStorage = new Store("todos-typescript-marionette-v2")

  get filter(): Filter {
    return this.get("filter")
  }

  set filter(filter: Filter) {
    this.set("fitler", filter)
  }

  // TODO: Filtering a collection does not return a new collection, but an array.
  // get filteredTodos(): TodoCollection {
  //   const filtered = this.todos.filter(todo =>  {
  //     switch (this.filter) {
  //       case Filter.Active:
  //         return !todo.completed

  //       case Filter.All:
  //         return true

  //       case Filter.Completed:
  //         return todo.completed

  //       default:
  //         throw Error("Unknown filter state.")
  //     }
  //   })

  //   return filtered
  // }

  get todos(): TodoCollection {
    return this.get("todos")
  }

  set todos(todos: TodoCollection) {
    this.set("todos", todos)
  }
}
