import { observable } from 'mobx'

export class TodoModel {
  constructor(text: string, completed: boolean) {
    this.completed = completed
    this.id = `todo${TodoModel.getNextId()}`
    this.text = text
  }

  @observable public completed: boolean
  public readonly id: string
  public text: string

  private static nextId = 0

  public toggle(): void {
    this.completed = !this.completed
  }

  private static getNextId(): number {
    this.nextId++
    return this.nextId
  }
}