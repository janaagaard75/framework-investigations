import { Filter } from './Filter'
import { Todos } from './Todos'

interface RootStoreProperties {
  todos: Todos,
  visibilityFilter: Filter
}

export class RootStore {
  constructor(properties: RootStoreProperties) {
    this.todos = properties.todos
    this.visibilityFilter = properties.visibilityFilter
  }

  public readonly todos: Todos
  public readonly visibilityFilter: Filter
}