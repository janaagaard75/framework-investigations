import Filter from "./Filter"
import FilterModel from "./FilterModel"
import BackboneLocalStorage = require("backbone.localstorage")
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

  // TODO: Stored the model in local storage.
  localStorage = new BackboneLocalStorage("todos-typescript-marionette-v2")

  get activeFilter(): FilterModel {
    return this.get("activeFilter")
  }

  get todos(): TodoCollection {
    return this.get("todos")
  }
}
