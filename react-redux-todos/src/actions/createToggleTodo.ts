import actionCreatorFactory from 'redux-typescript-actions'

export const createToggleTodo = actionCreatorFactory()<number>('TOGGLE_TODO')