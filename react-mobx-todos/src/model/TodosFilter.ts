import { Todo } from './Todo'

type Path = '' | 'active' | 'completed'

// TODO: Add a select method to the filter.
export class TodosFilter {
  constructor(
    public readonly path: Path,
    public readonly label: string,
    public filterTodos: (todos: Array<Todo>) => Array<Todo>
  ) { }
}

export const ShowActive = new TodosFilter(
  'active',
  'Active',
  (todos: Array<Todo>) => todos.filter(todo => !todo.completed)
)

export const ShowAll = new TodosFilter(
  '',
  'All',
  (todos: Array<Todo>) => todos
)

export const ShowCompleted = new TodosFilter(
  'completed',
  'Completed',
  (todos: Array<Todo>) => todos.filter(todo => todo.completed)
)

export const allFilters = [
  ShowAll,
  ShowActive,
  ShowCompleted
]

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