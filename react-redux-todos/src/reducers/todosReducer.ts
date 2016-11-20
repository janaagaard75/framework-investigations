import { Action as ReduxAction } from 'redux'
import { isType } from 'redux-typescript-actions'
import { List } from 'immutable'

import { createAddTodo } from '../actions/createAddTodo'
import { createToggleTodo } from '../actions/createToggleTodo'
import { Todo } from '../model/Todo'
import { todoReducer } from './todoReducer'
import { Todos } from '../model/Todos'

const getNextId = (state: Todos): number => {
  const initialMaxId = -1
  const currentMaxId = state.reduce(
    (previousMaxId, currentTodo) => Math.max(previousMaxId, currentTodo.id),
    initialMaxId
  )
  const nextId = currentMaxId + 1
  return nextId
}

export const todosReducer = (state: Todos = List<Todo>(), action: ReduxAction): Todos => {
  if (isType(action, createAddTodo)) {
    const newTodo: Todo = new Todo({
      completed: false,
      id: getNextId(state),
      text: action.payload
    })

    const newState = state.push(newTodo)
    return newState
  }

  if (isType(action, createToggleTodo)) {
    const newState = state.update(
      state.findIndex(todo => {
        return (todo.id === action.payload)
      }),
      todo => {
        const toggledTodo = todoReducer(todo, action)
        return toggledTodo
      }
    )

    return newState
  }

  return state
}