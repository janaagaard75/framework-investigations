import { connect } from 'react-redux'

import { createToggleTodo } from '../actions/actionCreators'
import { Filter } from '../model/Filter'
import { RootState } from '../model/RootState'
import { TodoList } from '../components/TodoList'
import { Todos } from '../model/Todos'
import { TypedDispatch } from '../model/TypedDispatch'

interface StateProps {
  todos: Todos
}

interface DispatchProps {
  onTodoClick: (id: number) => void
}

interface OwnProps {
  activeFilter: Filter
}

const getVisibleTodos = (todos: Todos, filter: Filter): Todos => {
  // TODO: Figure out a better/cleaner way to do this.
  switch (filter) {
    case Filter.ShowAll:
      return todos

    case Filter.ShowCompleted:
      return todos.filter(t => t.completed)

    case Filter.ShowActive:
      return todos.filter(t => !t.completed)

    default:
      throw new Error(`'${filter}' is not a supported value for filter.`)
  }
}

const mapStateToProps = (rootState: RootState, ownProps: OwnProps) => {
  const visibleTodos = getVisibleTodos(rootState.todos, ownProps.activeFilter)
  return {
    todos: visibleTodos
  }
}

const mapDispatchToProps = (dispatch: TypedDispatch) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(createToggleTodo({ id: id }))
    }
  }
}

export const VisibleTodoList = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)