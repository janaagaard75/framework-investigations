import actionCreatorFactory from 'redux-typescript-actions'

import { Filter } from '../model/Filter'
import { TypedDispatch } from '../model/TypedDispatch'

export const createAddTodo = actionCreatorFactory()<{text: string}>('ADD_TODO')
// TODO: createSetVisibilityFilter is not used. Should it be?
export const createSetVisibilityFilter = actionCreatorFactory()<Filter>('SET_VISIBILITY_FILTER')
export const createToggleTodo = actionCreatorFactory()<{id: number}>('TOGGLE_TODO')

// TODO: Introduce an asynchronous action to see how that plays out.

export const createAddTodoStarted = actionCreatorFactory()<NodeJS.Timer>('ADD_TODO_STARTED')
export const createAddTodoDone = actionCreatorFactory()<string>('ADD_TODO_DONE')

export const createAsyncAddTodo = (dispatch: TypedDispatch) => {
  const timeoutId = setTimeout(() => {
    dispatch(createAddTodoDone)
  }, 3 * 1000)

  dispatch(createAddTodoStarted(timeoutId))
}

// It's possible to queue up adding multiple todos.
// Adding a todo triggers ADD_TODO_STARTED. The global redux state is updated.
// Once the timeout is done, the todo will be added to the state.
// TODO: Random timeout durations.
// TODO: Simulate an error from time to time.