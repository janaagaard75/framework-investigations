import FilteredTodosModel from "./FilteredTodosModel"
import Store = require("backbone.localstorage")

export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      filteredTodos: new FilteredTodosModel()
    }
  }

  // TODO: Stored the model in local storage.
  localStorage = new Store("todos-typescript-marionette-v2")

  get filteredTodos(): FilteredTodosModel {
    return this.get("filteredTodos")
  }
}
