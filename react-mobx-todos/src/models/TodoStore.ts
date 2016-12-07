import { Todo } from "./Todo"
import { Todos } from "./Todos"

export class TodoStore {
  constructor() {
    this.todos = []
  }

  public readonly todos: Todos

  public addTodo(text: string) {
    const newTodo = new Todo(this.getNextId(), text)
    this.todos.push(newTodo)
  }

  private getRandomInteger(min: number, max: number): number {
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
    return randomInteger
  }

  private getNextId(): number {
    const nextId = this.getRandomInteger(1, Number.MAX_SAFE_INTEGER)
    return nextId
  }
}