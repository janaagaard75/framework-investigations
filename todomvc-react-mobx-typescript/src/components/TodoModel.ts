import { computed } from 'mobx'
import { observable } from 'mobx'

export class TodoModel {
  constructor(text: string, completed: boolean) {
    this._completed = completed
    this.id = `todo${TodoModel.getNextId()}`
    this.text = text
  }

  public readonly id: string
  public text: string

  private static nextId = 0

  @observable private _completed: boolean

  @computed get completed(): boolean {
    return this._completed
  }

  public toggleCompleted(): void {
    this._completed = !this._completed
  }

  private static getNextId(): number {
    this.nextId++
    return this.nextId
  }
}