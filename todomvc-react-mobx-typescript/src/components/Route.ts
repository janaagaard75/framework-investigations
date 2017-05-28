import { TodoModel } from './TodoModel'

export interface Route {
  caption: string
  // TODO: Is it possible to use activeTodos and completedTodos?
  filterFunction: (todo: TodoModel) => boolean
  path: string
}