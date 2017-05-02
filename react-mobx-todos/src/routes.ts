import { ActiveFilterRouteParams } from './components/ActiveFilterRouteParams'
import { ConnectedApp } from './ConnectedApp'
import { TodosFilter } from './model/TodosFilter'
import { TypedRoute } from './model/TypedRoute'

export const AllTodosRoute = new TypedRoute(
  ConnectedApp,
  '/',
  true,
  () => '/'
)

export const FilteredTodosRoute: TypedRoute<ActiveFilterRouteParams, (filterAndPath: TodosFilter) => string> = new TypedRoute(
  ConnectedApp,
  '/:filter',
  false,
  (filterAndPath: TodosFilter) => '/' + filterAndPath.path
)

export const allRoutes = [
  AllTodosRoute,
  FilteredTodosRoute
]