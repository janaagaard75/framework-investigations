export default class Todo extends Backbone.Model {
  defaults() {
    return {
      completed: false,
      created: Date.now(),
      title: ""
    }
  }

  get completed(): boolean {
    return this.get("completed")
  }

  set completed(newValue: boolean) {
    this.set("completed", newValue)
  }

  get title(): string {
    return this.get("title")
  }

  set title(newTitle: string) {
    this.set("title", newTitle)
  }

  toggle(): void {
    this.completed = !this.completed
  }
}
