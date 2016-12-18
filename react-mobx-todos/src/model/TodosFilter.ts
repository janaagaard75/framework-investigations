import { Todo } from "./Todo"

enum Filter {
  ShowActive,
  ShowAll,
  ShowCompleted
}

type Path = "" | "active" | "completed"

export class TodosFilter {
  constructor(
    public readonly filter: Filter,
    public readonly path: Path,
    public readonly label: string,
    public filterTodos: (todos: Array<Todo>) => Array<Todo>
  ) { }
}

export const ShowActive = new TodosFilter(
  Filter.ShowActive,
  "active",
  "Active",
  (todos: Array<Todo>) => todos
)

export const ShowAll = new TodosFilter(
  Filter.ShowAll,
  "",
  "All",
  (todos: Array<Todo>) => todos
)

export const ShowCompleted = new TodosFilter(
  Filter.ShowCompleted,
  "completed",
  "Completed",
  (todos: Array<Todo>) => todos
)

export const allFilters = [
  ShowAll,
  ShowActive,
  ShowCompleted
]

// TODO: Consider to use Path as input type.
export const toFilter = (path: string): TodosFilter => {
  // TODO: Figure out how to avoid this annyoing fix.
  const fixedPath: string = path || ""
  const matchingFilter = allFilters.find(filter => filter.path === fixedPath)

  if (matchingFilter === undefined) {
    throw new Error(`The path '${path}' is not supported.`)
  }

  return matchingFilter
}