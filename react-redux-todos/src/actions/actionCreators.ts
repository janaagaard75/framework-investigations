import actionCreatorFactory from 'redux-typescript-actions'

import { Filter } from '../model/Filter'
import { TypedDispatch } from '../model/TypedDispatch'

const actionCreator = actionCreatorFactory()

export const createAddTodo = actionCreator<{text: string}>('ADD_TODO')
// TODO: createSetVisibilityFilter is not used. Should it be?
export const createSetVisibilityFilter = actionCreator<Filter>('SET_VISIBILITY_FILTER')
export const createToggleTodo = actionCreator<{id: number}>('TOGGLE_TODO')

export const createAddTodoStarted = actionCreator<NodeJS.Timer>('ADD_TODO_STARTED')
export const createAddTodoDone = actionCreator<string>('ADD_TODO_DONE')

export const createAsyncAddTodo = (dispatch: TypedDispatch) => {
  const timeoutId = setTimeout(() => {
    dispatch(createAddTodoDone)
  }, 3 * 1000)

  dispatch(createAddTodoStarted(timeoutId))
}

// TODO: Introduce an asynchronous action to see how that plays out.
// It's possible to queue up adding multiple todos.
// Adding a todo triggers ADD_TODO_STARTED. The global redux state is updated.
// Once the timeout is done, the todo will be added to the state.
// TODO: Random timeout durations.
// TODO: Simulate an error from time to time.