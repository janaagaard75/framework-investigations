import { Action } from 'redux-actions'
import { actionTypes } from '../actions'
import * as actions from '../actions'
import State from '../interfaces/State'

// TODO: Does the initialState really belong here in the reducer? Wouldn't it be better to put in configureStore or in index.tsx?
const initialState: State = [
  {
    completed: false,
    id: 0,
    text: 'Use Redux'
  }
]

const handleAddTodoAction = (state: State, action: actions.AddTodoAction) => {
  return [
    {
      completed: false,
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.payload
    },
    ...state
  ]
}

const handleClearCompletedAction = (state: State, action: actions.ClearCompletedAction) => {
  return state.filter(todo => todo.completed === false)
}

const handleCompleteAllAction = (state: State, action: actions.CompleteAllAction) => {
  const allTodosMarkedComplete = state.every(todo => todo.completed)
  return state.map(todo => Object.assign({}, todo, {
    completed: !allTodosMarkedComplete
  }))
}

const handleCompleteTodoAction = (state: State, action: actions.CompleteTodoAction) => {
  return state.map(todo =>
    todo.id === action.payload ?
      Object.assign({}, todo, { completed: !todo.completed }) :
      todo
  )
}

const handleDeleteTodoAction = (state: State, action: actions.DeleteTodoAction) => {
  return state.filter(todo =>
    todo.id !== action.payload
  )
}

const handleEditTodoAction = (state: State, action: actions.EditTodoAction) => {
  return state.map(todo =>
    todo.id === action.payload.id
      ? Object.assign({}, todo, { text: action.payload.newText }) // TODO: Why not Object.assign(todo, { text: action.payload.newText })?
      : todo
  )
}

const todosReducer = (state: State = initialState, action: Action<any>): State => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return handleAddTodoAction(state, action as actions.AddTodoAction)

    case actionTypes.CLEAR_COMPLETED:
      return handleClearCompletedAction(state, action)

    case actionTypes.COMPLETE_ALL:
      return handleCompleteAllAction(state, action)

    case actionTypes.COMPLETE_TODO:
      return handleCompleteTodoAction(state, action as actions.CompleteTodoAction)

    case actionTypes.DELETE_TODO:
      return handleDeleteTodoAction(state, action as actions.DeleteTodoAction)

    case actionTypes.EDIT_TODO:
      return handleEditTodoAction(state, action as actions.EditTodoAction)

    default:
      return state
  }
}

export default todosReducer
