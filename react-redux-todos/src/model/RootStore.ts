import { List, Record } from 'immutable'

import { Filter } from './Filter'
import { Todo } from './Todo'
import { Todos } from './Todos'

interface RootStoreProperties {
  todos: Todos
  visibilityFilter: Filter
}

const rootStorestateRecord = Record({
  // TODO: This should be defined in Todos, so that this files doesn't have to import List and Todo. This could be solved by avoiding defaults. Would undefined be okay?
  todos: List<Todo>(),
  visibilityFilter: 'SHOW_ALL'
})

export class RootStore extends rootStorestateRecord implements RootStoreProperties {
  constructor(state: RootStoreProperties) {
    super(state)
  }

  todos: Todos
  visibilityFilter: Filter
}