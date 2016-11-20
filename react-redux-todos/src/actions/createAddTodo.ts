import actionCreatorFactory from 'redux-typescript-actions'

// TODO: Prefix these action creators with 'create'.
export const createAddTodo = actionCreatorFactory()<string>('ADD_TODO')