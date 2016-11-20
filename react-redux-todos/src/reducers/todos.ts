import { Action as ReduxAction } from 'redux'
import { isType } from 'redux-typescript-actions'
import { List } from 'immutable'

import { addTodo } from '../actions/addTodo'
import { Todo } from '../model/Todo'
import { Todos } from '../model/Todos'
import { toggleTodo } from '../actions/toggleTodo'

const getNextId = (state: Todos): number => {
  const initialMaxId = -1
  const currentMaxId = state.reduce(
    (previousMaxId, currentTodo) => Math.max(previousMaxId, currentTodo.id),
    initialMaxId
  )
  const nextId = currentMaxId + 1
  return nextId
}

// TODO: Consider re-introducing the Todo reducer to emphasise how the reducer hierarchy works.
export const todosReducer = (state: Todos = List<Todo>(), action: ReduxAction): Todos => {
  if (isType(action, addTodo)) {
    const newTodo: Todo = new Todo({
      completed: false,
      id: getNextId(state),
      text: action.payload
    })

    const newState = state.push(newTodo)
    return newState
  }

  if (isType(action, toggleTodo)) {
    const newState = state.update(
      state.findIndex(todo => {
        return (todo.id === action.payload)
      }),
      todo => {
        const toggledTodo = new Todo({
          completed: !todo.completed,
          id: todo.id,
          text: todo.text
        })

        return toggledTodo
      }
    )

    return newState
  }

  return state
}