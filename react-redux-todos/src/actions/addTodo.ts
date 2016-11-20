import actionCreatorFactory from 'redux-typescript-actions'

// TODO: Prefix these action creators with 'create'.
export const addTodo = actionCreatorFactory()<string>('ADD_TODO')