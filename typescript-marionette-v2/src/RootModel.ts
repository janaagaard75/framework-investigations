export default class RootModel extends Backbone.Model {
  defaults() {
    return {
      title: "Todos"
    }
  }

  get title(): string {
    return this.get("title")
  }

  set title(newTitle: string) {
    this.set("title", newTitle)
  }
}
