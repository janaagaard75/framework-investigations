import actionCreatorFactory from 'redux-typescript-actions'

export const createAddTodo = actionCreatorFactory()<string>('ADD_TODO')