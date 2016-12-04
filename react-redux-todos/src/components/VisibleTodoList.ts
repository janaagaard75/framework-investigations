import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createToggleTodo } from '../actions/createToggleTodo'
import { Filter } from '../model/Filter'
import { RootState } from '../model/RootState'
import { TodoList } from '../components/TodoList'
import { Todos } from '../model/Todos'

const getVisibleTodos = (todos: Todos, filter: Filter): Todos => {
  // TODO: Figure out a better/cleaner way to do this.
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

interface StateProps {
  todos: Todos
}

interface DispatchProps {
  onTodoClick: (id: number) => void
}

interface OwnProps {
  activeFilter: Filter
}

const mapStateToProps = (rootState: RootState, ownProps: OwnProps) => {
  const visibleTodos = getVisibleTodos(rootState.todos, ownProps.activeFilter)
  return {
    todos: visibleTodos
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(createToggleTodo(id))
    }
  }
}

export const VisibleTodoList = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)