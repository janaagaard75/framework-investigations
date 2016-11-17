import { createActionCreator } from './createActionCreator'

export const toggleTodo = createActionCreator<number>('TOGGLE_TODO')