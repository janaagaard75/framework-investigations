import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { visibilityFilterReducer } from './visibilityFilterReducer'

export const todoApp = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})