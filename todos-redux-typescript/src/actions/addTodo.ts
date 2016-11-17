import { createActionCreator } from './createActionCreator'

export const addTodo = createActionCreator<string>('ADD_TODO')