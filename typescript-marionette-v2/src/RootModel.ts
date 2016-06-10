export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      title: "Todos"
    }
  }

  localStorage = new Backbone.LocalStorage("todos-typescript-marionette-v2")

  get title(): string {
    return this.get("title")
  }

  set title(newTitle: string) {
    this.set("title", newTitle)
  }
}
