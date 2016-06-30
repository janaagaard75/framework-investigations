interface TodoAttributes {
  completed?: boolean,
  title: string
}

export default class Todo extends Backbone.Model {
  constructor(attributes: TodoAttributes, options?: any) {
    super(attributes, options)
  }

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

  // TODO: Come up with a better word than title for this property.
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
