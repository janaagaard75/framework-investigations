import { Todo } from './Todo'
import { allFilters } from './allFilters'

type Path = '' | 'active' | 'completed'

// TODO: Add a select method to the filter.
export class TodosFilter {
  constructor(
    public readonly path: Path,
    public readonly label: string,
    public filterTodos: (todos: Array<Todo>) => Array<Todo>
  ) { }
}

// TODO: Consider using Path or router params as input type.
export const toFilter = (path: string): TodosFilter => {
  // TODO: Figure out how to avoid this annyoing fix.
  const definedPath: string = path || ''
  const matchingFilter = allFilters.find(filter => filter.path === definedPath)

  if (matchingFilter === undefined) {
    throw new Error(`The path '${path}' is not supported.`)
  }

  return matchingFilter
}