import actionCreatorFactory from 'redux-typescript-actions'

export const toggleTodo = actionCreatorFactory()<number>('TOGGLE_TODO')