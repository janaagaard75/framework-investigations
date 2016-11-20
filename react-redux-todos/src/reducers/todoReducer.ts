import { Action as ReduxAction } from 'redux'
import { isType } from 'redux-typescript-actions'

import { Todo } from '../model/Todo'
import { toggleTodo } from '../actions/toggleTodo'

export const todoReducer = (state: Todo, action: ReduxAction): Todo => {
  if (isType(action, toggleTodo)) {
    if (state.id === action.payload) {
      // TODO: It should be easier to do this. Perhaps with a setter on the Todo class.
      const toggledTodo = new Todo({
        completed: !state.completed,
        id: state.id,
        text: state.text
      })

      return toggledTodo
    }

    return state
  }

  return state
}