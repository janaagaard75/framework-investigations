import { ActiveFilterRouteParams } from './components/App'
import { ConnectedApp } from './ConnectedApp'
import { TodosFilter } from './model/TodosFilter'
import { TypedRoute } from './model/TypedRoute'

export const AllTodosRoute = new TypedRoute(
  ConnectedApp,
  '/',
  () => '/'
)

export const FilteredTodosRoute: TypedRoute<ActiveFilterRouteParams, (filterAndPath: TodosFilter) => string> = new TypedRoute(
  ConnectedApp,
  '/:filter',
  (filterAndPath: TodosFilter) => '/' + filterAndPath.path
)

export const allRoutes = [
  AllTodosRoute,
  FilteredTodosRoute
]