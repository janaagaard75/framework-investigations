import { Route } from './Route'
import { TodoModel } from './TodoModel'

export class Routes {
  public readonly allRoutes: Array<Route> = [
    {
      caption: 'All',
      filterFunction: (_todo: TodoModel) => true,
      path: '/'
    },
    {
      caption: 'Active',
      filterFunction: (todo: TodoModel) => !todo.completed,
      path: '/active'
    },
    {
      caption: 'Completed',
      filterFunction: (todo: TodoModel) => todo.completed,
      path: '/completed'
    }
  ]

  public getFromPath(path: string): Route {
    const match = this.allRoutes.find(pathAndFilter => pathAndFilter.path === path)
    if (match === undefined) {
      // TODO: This should return the HTTP error 404 Not Found.
      throw new Error(`Could not find the path '${path}'.`)
    }

    return match
  }
}