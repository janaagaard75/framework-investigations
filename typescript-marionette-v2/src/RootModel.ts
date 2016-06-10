// Requires the following added to the bottom of typings/global/backbone.localstorage/index.d.ts.
// declare module "backbone.localstorage" {
//     export = Backbone.LocalStorage;
// }
import Store = require("backbone.localstorage")

export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      title: "Todos"
    }
  }

  localStorage = new Store("todos-typescript-marionette-v2")

  get title(): string {
    return this.get("title")
  }

  set title(newTitle: string) {
    this.set("title", newTitle)
  }
}
