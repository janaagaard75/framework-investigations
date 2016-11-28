import { Filter } from './Filter'
import { Todos } from './Todos'

export interface RootState {
  readonly routing: any
  readonly todos: Todos
  readonly visibilityFilter: Filter
}