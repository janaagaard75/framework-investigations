import actionCreatorFactory from 'redux-typescript-actions'

import { TypedDispatch } from '../model/TypedDispatch'

const createActionCreator = actionCreatorFactory()

export const createAddTodo = createActionCreator<string>('ADD_TODO')
export const createToggleTodo = createActionCreator<number>('TOGGLE_TODO')

export const createAddTodoStarted = createActionCreator<{
  text: string,
  timeoutId: NodeJS.Timer
}>('ADD_TODO_STARTED')

export const createAddTodoDone = createActionCreator<{
  text: string
  timeoutId: NodeJS.Timer
}>('ADD_TODO_DONE')

export const createAddTodoAsynchronously = (dispatch: TypedDispatch, text: string) => {
  const timeoutId = setTimeout(() => {
    dispatch(createAddTodoDone({ text, timeoutId }))
  }, 3 * 1000)

  dispatch(createAddTodoStarted({ text, timeoutId }))
}

// TODO: Introduce an asynchronous action to see how that plays out.
// It's possible to queue up adding multiple todos.
// Adding a todo triggers ADD_TODO_STARTED. The global redux state is updated.
// Once the timeout is done, the todo will be added to the state.
// How should the interface look while adding a todo asynchronously? Create an empty row while waiting? That would mean adding a new status to all the todos.
// How should the interface look if something when wrong? A toaster message?
// TODO: Simulate an error from time to time.
// TODO: Random timeout durations.