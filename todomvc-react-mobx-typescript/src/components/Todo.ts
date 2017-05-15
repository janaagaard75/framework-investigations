import { computed } from 'mobx'
import { observable } from 'mobx'

export class Todo {
  constructor(text: string, completed: boolean) {
    this._completed = completed
    this.key = this.getRandomInteger().toString()
    this.text = text
  }

  public readonly key: string
  public text: string

  @observable private _completed: boolean

  @computed get completed(): boolean {
    return this._completed
  }

  public toggleCompleted() {
    this._completed = !this._completed
  }

  private getRandomInteger() {
    const MAX_SAFE_INTEGER = 9007199254740991
    return Math.floor(Math.random() * MAX_SAFE_INTEGER)
  }
}