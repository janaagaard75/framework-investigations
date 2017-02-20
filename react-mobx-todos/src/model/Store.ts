import { action } from "mobx"
import { computed } from "mobx"
import { observable } from "mobx"

import { Todo } from "./Todo"
import { Todos } from "./Todos"

export class Store {
  private nextId = 0
  @observable private todosBeingAdded = 0
  @observable public todos: Todos = []

  @action
  public addTodo(text: string) {
    const newTodo = new Todo(this.getNextId(), text)
    this.todos.push(newTodo)
  }

  @action
  public addTodoAsynchronously(text: string) {
    this.todosBeingAdded++
    setTimeout(() => {
      this.addTodoAsyncDone(text)
    }, 5 * 1000)
    // TODO: Simulate an error from time to time, both server errors and timeouts.
  }

  @action
  private addTodoAsyncDone(text: string) {
    this.addTodo(text)
    this.todosBeingAdded--
  }

  @computed
  public get addTodoInProgress(): boolean {
    return this.todosBeingAdded > 0
  }

  private getNextId(): number {
    this.nextId++
    return this.nextId
  }
}