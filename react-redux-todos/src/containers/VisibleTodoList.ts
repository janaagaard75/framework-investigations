import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createToggleTodo } from '../actions/createToggleTodo'
import { Filter } from '../model/Filter'
import { RootStore } from '../model/RootStore'
import { TodoList } from '../components/TodoList'
import { Todos } from '../model/Todos'

const getFilter = (pathname: string): Filter => {
  switch (pathname) {
    default:
    case '/':
      return 'SHOW_ALL'

    case '/active':
      return 'SHOW_ACTIVE'

    case '/completed':
      return 'SHOW_COMPLETED'
  }
}

const getVisibleTodos = (todos: Todos, filter: Filter): Todos => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos

    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)

    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

    default:
      throw new Error(`'${filter}' is not a supported value for filter.`)
  }
}

// The combination of StateProps, DispatchProps and OwnProps have to match TodoList's properties.
interface StateProps {
  todos: Todos
}

interface DispatchProps {
  onTodoClick: (id: number) => void
}

const mapStateToProps = (state: RootStore) => {
  // TODO: Add definition type to routing.
  const activeFilter = getFilter(state.routing.locationBeforeTransitions.pathname)
  const visibleTodos = getVisibleTodos(state.todos, activeFilter)
  return {
    todos: visibleTodos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootStore>) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(createToggleTodo(id))
    }
  }
}

// tslint:disable-next-line variable-name
export const VisibleTodoList = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)