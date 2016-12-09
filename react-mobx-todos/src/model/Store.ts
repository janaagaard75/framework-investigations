import { action } from "mobx"
import { observable } from "mobx"

import { Todo } from "./Todo"
import { Todos } from "./Todos"

export class Store {
  private nextId = 0
  @observable public todos: Todos = []

  @action
  public addTodo(text: string) {
    const newTodo = new Todo(this.getNextId(), text)
    this.todos.push(newTodo)
  }

  private getNextId(): number {
    this.nextId++
    return this.nextId
  }

  @action
  public toggleTodo(todo: Todo) {
    todo.toggle()
  }
}