import { action } from "mobx"
import { observable } from "mobx"

import { Todo } from "./Todo"
import { Todos } from "./Todos"

export class Store {
  constructor() {
    this.todos = []
  }

  @observable public todos: Todos

  @action
  public addTodo(text: string) {
    const newTodo = new Todo(this.getId(), text)
    this.todos.push(newTodo)
  }

  private getId(): number {
    const nextId = this.getRandomInteger(1, Number.MAX_SAFE_INTEGER)
    return nextId
  }

  private getRandomInteger(min: number, max: number): number {
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
    return randomInteger
  }

  @action
  public toggleTodo(todo: Todo) {
    todo.toggle()
  }
}