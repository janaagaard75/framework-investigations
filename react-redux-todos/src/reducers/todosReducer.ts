import { Action as ReduxAction } from 'redux'
import { isType } from 'redux-typescript-actions'

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

// TODO: The default value is defined both here and in the RootStore. One play should be enough.
export const todosReducer = (state: Todos = [], action: ReduxAction): Todos => {
  if (isType(action, createAddTodo)) {
    const newTodo: Todo = new Todo({
      completed: false,
      id: getNextId(state),
      text: action.payload
    })

    const newState = state.concat(newTodo)
    return newState
  }

  if (isType(action, createToggleTodo)) {
    const newState = state.map(todo => todoReducer(todo, action))
    return newState
  }

  return state
}