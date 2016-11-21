import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import { visibilityFilterReducer } from './visibilityFilterReducer'
import { RootStore } from '../model/RootStore'

export const rootReducer = combineReducers<RootStore>({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})