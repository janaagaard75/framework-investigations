// TODO: Consider merging the action creators into a single file.
import actionCreatorFactory from 'redux-typescript-actions'

export const createAddTodo = actionCreatorFactory()<string>('ADD_TODO')