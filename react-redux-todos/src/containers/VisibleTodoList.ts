import { connect } from 'react-redux'

import { createToggleTodo } from '../actions/createToggleTodo'
import { TodoList } from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(createToggleTodo(id))
    }
  }
}

// tslint:disable-next-line variable-name
export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)