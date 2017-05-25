import { computed } from 'mobx'
import { observable } from 'mobx'

import { Route } from './Route'
import { TodoModel } from './TodoModel'

export class Todos {
  constructor() {
    this.allTodos = [
      new TodoModel('Taste JavaScript', true),
      new TodoModel('Buy a unicorn', false)
    ]
  }

  @observable
  public readonly allTodos: Array<TodoModel>

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

  public getFilteredTodos(route: Route): Array<TodoModel> {
    const filteredTodos = this.allTodos.filter(todo => route.filterFunction(todo))
    return filteredTodos
  }
}