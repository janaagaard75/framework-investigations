import { Filter } from './Filter'
import { Todos } from './Todos'

export interface RootStore {
  readonly routing: any
  readonly todos: Todos
  readonly visibilityFilter: Filter
}