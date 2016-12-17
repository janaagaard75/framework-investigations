export enum TodosFilter {
  ShowActive,
  ShowAll,
  ShowCompleted
}

export const toFilter = (path: string): TodosFilter => {
  switch (path) {
    case "":
      return TodosFilter.ShowAll

    case "active":
      return TodosFilter.ShowActive

    case "completed":
      return TodosFilter.ShowCompleted

    default:
      throw new Error(`The path '${path} is not supported.`)
  }
}

export const toPath = (filter: TodosFilter): string => {
  switch (filter) {
    case TodosFilter.ShowActive:
      return "active"

    case TodosFilter.ShowAll:
      return ""

    case TodosFilter.ShowCompleted:
      return "completed"

    default:
      throw new Error(`The filter '${filter} is not supported.`)
  }
}