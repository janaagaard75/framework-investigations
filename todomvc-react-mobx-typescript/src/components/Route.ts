import { TodoModel } from './TodoModel'

export interface Route {
  caption: string
  // TODO: This function doesn't feel right. We should be reusing activeTodos and completedTodos.
  filterFunction: (todo: TodoModel) => boolean
  path: string
}