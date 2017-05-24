import { Filter } from './Filter'
import { TodoModel } from './TodoModel'

interface PathAndFilter {
  caption: string
  filter: Filter
  filterFunction: (todos: Array<TodoModel>) => Array<TodoModel>
  path: string
}

export class PathsAndFilters {
  public readonly pathsAndFilters: Array<PathAndFilter> = [
    {
      caption: 'All',
      filter: 'all',
      filterFunction: (todos: Array<TodoModel>) => todos,
      path: '/'
    },
    {
      caption: 'Active',
      filter: 'active',
      filterFunction: (todos: Array<TodoModel>) => todos.filter(todo => !todo.completed),
      path: '/active'
    },
    {
      caption: 'Completed',
      filter: 'completed',
      filterFunction: (todos: Array<TodoModel>) => todos.filter(todo => todo.completed),
      path: '/completed'
    }
  ]

  public getFromFilter(filter: Filter): PathAndFilter {
    const match = this.pathsAndFilters.find(pathAndFilter => pathAndFilter.filter === filter)
    if (match === undefined) {
      throw new Error(`Could not find the filter '${filter}'.`)
    }

    return match
  }

  public getFromPath(path: string): PathAndFilter {
    const match = this.pathsAndFilters.find(pathAndFilter => pathAndFilter.path === path)
    if (match === undefined) {
      // TODO: This should return the HTTP error 404 Not Found.
      throw new Error(`Could not find the path '${path}'.`)
    }

    return match
  }
}