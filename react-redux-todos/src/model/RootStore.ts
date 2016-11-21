import { Filter } from './Filter'
import { Todos } from './Todos'

// TODO: Consider using named parameters in the constructor.
export class RootStore {
  constructor(
    public readonly todos: Todos,
    public readonly visibilityFilter: Filter
  ) { }
}