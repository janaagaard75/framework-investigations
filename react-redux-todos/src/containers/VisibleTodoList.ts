import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createToggleTodo } from '../actions/createToggleTodo'
import { Filter } from '../model/Filter'
import { RootStore } from '../model/RootStore'
import { TodoList } from '../components/TodoList'
import { Todos } from '../model/Todos'

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

const mapStateToProps = (state: RootStore) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
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
export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)