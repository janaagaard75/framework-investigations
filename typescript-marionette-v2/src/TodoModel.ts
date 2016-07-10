interface TodoAttributes {
  completed?: boolean,
  title: string
}

// TODO: Rename to TodoModel.
export default class Todo extends Backbone.Model {
  constructor(attributes: TodoAttributes, options?: any) {
    super(attributes, options)
  }

  defaults() {
    // No need to set defaults for required attributes.
    return {
      completed: false,
      created: Date.now()
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
