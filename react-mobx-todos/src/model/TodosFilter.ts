import { Todo } from "./Todo"

type Path = "" | "active" | "completed"

export class TodosFilter {
  constructor(
    public readonly path: Path,
    public readonly label: string,
    public filterTodos: (todos: Array<Todo>) => Array<Todo>
  ) { }
}

export const ShowActive = new TodosFilter(
  "active",
  "Active",
  (todos: Array<Todo>) => todos
)

export const ShowAll = new TodosFilter(
  "",
  "All",
  (todos: Array<Todo>) => todos
)

export const ShowCompleted = new TodosFilter(
  "completed",
  "Completed",
  (todos: Array<Todo>) => todos
)

export const allFilters = [
  ShowAll,
  ShowActive,
  ShowCompleted
]

// TODO: Consider using Path or router params as input type.
export const toFilter = (path: string): TodosFilter => {
  // TODO: Figure out how to avoid this annyoing fix.
  const fixedPath: string = path || ""
  const matchingFilter = allFilters.find(filter => filter.path === fixedPath)

  if (matchingFilter === undefined) {
    throw new Error(`The path '${path}' is not supported.`)
  }

  return matchingFilter
}