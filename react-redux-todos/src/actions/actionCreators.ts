import actionCreatorFactory from 'redux-typescript-actions'
import { Filter } from '../model/Filter'

export const createAddTodo = actionCreatorFactory()<string>('ADD_TODO')
// TODO: createSetVisibilityFilter is not used. Should it be?
export const createSetVisibilityFilter = actionCreatorFactory()<Filter>('SET_VISIBILITY_FILTER')
export const createToggleTodo = actionCreatorFactory()<number>('TOGGLE_TODO')

// TODO: Introduce an asynchronous action to see how that plays out.