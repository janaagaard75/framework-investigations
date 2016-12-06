enum TodoState {
  Adding,
  Active,
  Completed
}

interface TodoProperties {
  completed: boolean
  id: number
  text: string
}

export class Todo {
  constructor(properties: TodoProperties) {
    this.completed = properties.completed
    this.id = properties.id
    this.text = properties.text
  }

  public readonly completed: boolean
  public readonly id: number
  public readonly text: string
}