import { Action as ReduxAction } from 'redux'
import { isType } from 'redux-typescript-actions'

import { createAddTodo } from '../actions/createAddTodo'
import { createToggleTodo } from '../actions/createToggleTodo'
import { Todo } from '../model/Todo'
import { todoReducer } from './todoReducer'
import { Todos } from '../model/Todos'

const getNextId = (todos: Todos): number => {
  if (todos.length === 0) {
    return 1
  }

  const ids = todos.map(todo => todo.id)
  const maximumId = Math.max(...ids)
  const nextId = maximumId + 1
  return nextId
}

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