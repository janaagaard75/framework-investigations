import { computed } from 'mobx'
import { observable } from 'mobx'

import { TodoModel } from './TodoModel'

export class Todos {
  constructor(todos: Array<TodoModel>) {
    this.allTodos = todos
  }

  @observable
  public readonly allTodos: Array<TodoModel>

  @computed
  public get activeTodos(): Array<TodoModel> {
    const activeTodos = this.allTodos.filter(todo => !todo.completed)
    return activeTodos
  }

  @computed
  public get completedTodos(): Array<TodoModel> {
    const completedTodos = this.allTodos.filter(todo => todo.completed)
    return completedTodos
  }

  @computed
  public get allTodosHaveSameState() {
    if (this.allTodos.length === 0) {
      return true
    }

    const stateOfFirstTodo = this.allTodos[0].completed
    const allTodosHaveSameState = this.allTodos.every(todo => todo.completed === stateOfFirstTodo)
    return allTodosHaveSameState
  }

  @computed
  public get hasTodos(): boolean {
    const hasTodos = this.allTodos.length >= 1
    return hasTodos
  }

  public addTodo(text: string) {
    this.allTodos.push(new TodoModel(text, false))
  }

  public deleteTodo(todo: TodoModel) {
    const index = this.allTodos.indexOf(todo)

    if (index === -1) {
      return
    }

    this.allTodos.splice(index, 1)
  }

  public toggleAllTodos() {
    if (this.allTodosHaveSameState) {
      this.allTodos.forEach(todo => todo.toggle())
      return
    }

    this.allTodos.forEach(todo => {
      todo.completed = true
    })
  }
}