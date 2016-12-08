import { observable } from "mobx"

export class Todo {
  constructor(
    id: number,
    text: string
  ) {
    this.completed = false
    this.id = id
    this.text = text
  }

  @observable public completed: boolean
  public readonly id: number
  public readonly text: string

  public toggle(): void {
    this.completed = !this.completed
  }
}