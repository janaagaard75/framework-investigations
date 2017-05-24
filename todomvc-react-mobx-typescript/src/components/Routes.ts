import { Filter } from './Filter'
import { Route } from './Route'
import { TodoModel } from './TodoModel'

export class Routes {
  public readonly allRoutes: Array<Route> = [
    {
      caption: 'All',
      filter: 'all',
      filterFunction: (_todo: TodoModel) => true,
      path: '/'
    },
    {
      caption: 'Active',
      filter: 'active',
      filterFunction: (todo: TodoModel) => !todo.completed,
      path: '/active'
    },
    {
      caption: 'Completed',
      filter: 'completed',
      filterFunction: (todo: TodoModel) => todo.completed,
      path: '/completed'
    }
  ]

  public getFromFilter(filter: Filter): Route {
    const match = this.allRoutes.find(pathAndFilter => pathAndFilter.filter === filter)
    if (match === undefined) {
      throw new Error(`Could not find the filter '${filter}'.`)
    }

    return match
  }

  public getFromPath(path: string): Route {
    const match = this.allRoutes.find(pathAndFilter => pathAndFilter.path === path)
    if (match === undefined) {
      // TODO: This should return the HTTP error 404 Not Found.
      throw new Error(`Could not find the path '${path}'.`)
    }

    return match
  }
}