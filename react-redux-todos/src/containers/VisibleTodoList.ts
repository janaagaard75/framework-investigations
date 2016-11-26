import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createToggleTodo } from '../actions/createToggleTodo'
import { Filter } from '../model/Filter'
import { RootStore } from '../model/RootStore'
import { TodoList } from '../components/TodoList'
import { Todos } from '../model/Todos'

// TODO: Consider merging these two function into one.
const getFilter = (location: Location): Filter => {
  switch (location.pathname) {
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
      throw new Error(`The value ${filter} for filter is not supported.`)
  }
}

// TODO: Consider moving these interfaces to TodoList.
interface StateProps {
  todos: Todos
}

interface DispatchProps {
  onTodoClick: (id: number) => void
}

interface OwnProps {
  location: Location
}

const mapStateToProps = (state: RootStore, ownProps: OwnProps) => {
  const activeFilter = getFilter(ownProps.location)
  return {
    todos: getVisibleTodos(state.todos, activeFilter)
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
export const VisibleTodoList = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)