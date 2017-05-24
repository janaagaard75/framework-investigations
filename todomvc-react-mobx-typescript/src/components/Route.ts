import { Filter } from './Filter'
import { TodoModel } from './TodoModel'

export interface Route {
  caption: string
  filter: Filter
  filterFunction: (todo: TodoModel) => boolean
  path: string
}