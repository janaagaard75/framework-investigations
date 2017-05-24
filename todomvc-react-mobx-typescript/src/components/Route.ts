import { Filter } from './Filter'
import { TodoModel } from './TodoModel'

export interface Route {
  caption: string
  filter: Filter
  filterFunction: (todos: Array<TodoModel>) => Array<TodoModel>
  path: string
}