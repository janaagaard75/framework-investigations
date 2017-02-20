import { action } from "mobx"
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

  public equals(other: Todo): boolean {
    return (
      this.completed === other.completed
        && this.id === other.id
        && this.text === other.text
    )
  }

  @action
  public toggle(): void {
    this.completed = !this.completed
  }
}