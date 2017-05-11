import { observable } from 'mobx'

export class Todo {
  constructor(text: string) {
    this.key = this.getRandomInteger().toString()
    this.text = text
  }

  @observable public completed: boolean
  public readonly key: string
  public text: string

  public toggleCompleted() {
    this.completed = !this.completed
  }

  private getRandomInteger() {
    const MAX_SAFE_INTEGER = 9007199254740991
    return Math.floor(Math.random() * MAX_SAFE_INTEGER)
  }
}