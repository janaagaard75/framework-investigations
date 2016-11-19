import { combineReducers } from 'redux'

import { GlobalReduxState } from './main'
import { todosReducer } from './todos/todosReducer'

export const rootReducer = combineReducers<GlobalReduxState>({
  todos: todosReducer
})