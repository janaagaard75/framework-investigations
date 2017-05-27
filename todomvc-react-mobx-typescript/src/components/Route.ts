import { Filter } from './Filter'
import { TodoModel } from './TodoModel'

export interface Route {
  caption: string
  filter: Filter
  // TODO: This function doesn't feel right. We should be reusing activeTodos and completedTodos.
  filterFunction: (todo: TodoModel) => boolean
  path: string
}