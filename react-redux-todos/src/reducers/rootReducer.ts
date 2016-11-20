import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { visibilityFilterReducer } from './visibilityFilterReducer'

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})