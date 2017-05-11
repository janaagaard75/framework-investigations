import { observable } from 'mobx'

export class Todo {
  constructor(text: string) {
    this.text = text
  }

  @observable public completed: boolean
  public text: string
}