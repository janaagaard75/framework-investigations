import { ActionWithoutPayload, ActionWithPayload } from './interfaces'

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
  COMPLETE_ALL: 'COMPLETE_ALL',
  COMPLETE_TODO: 'COMPLETE_TODO',
  DELETE_TODO: 'DELETE_TODO',
  EDIT_TODO: 'EDIT_TODO'
}

export type AddTodoAction = ActionWithPayload<string>

const createAddTodoAction = (text: string): AddTodoAction => {
  return {
    payload: text,
    type: actionTypes.ADD_TODO
  }
}

export type ClearCompletedAction = ActionWithoutPayload

const createClearCompletedAction = (): ClearCompletedAction => {
  return {
    type: actionTypes.CLEAR_COMPLETED
  }
}

export type CompleteAllAction = ActionWithoutPayload

const createCompleteAllAction = (): CompleteAllAction => {
  return {
    type: actionTypes.COMPLETE_ALL
  }
}

export type CompleteTodoAction = ActionWithPayload<number>

const createCompleteTodoAction = (id: number): CompleteTodoAction => {
  return {
    payload: id,
    type: actionTypes.COMPLETE_TODO
  }
}

export type DeleteTodoAction = ActionWithPayload<number>

const createDeleteTodoAction = (id: number): DeleteTodoAction => {
  return {
    payload: id,
    type: actionTypes.DELETE_TODO
  }
}

export type EditTodoAction = ActionWithPayload<{id: number, newText: string}>

const createEditTodoAction = (id: number, newText: string): EditTodoAction => {
  return {
    payload: {
      id: id,
      newText: newText
    },
    type: actionTypes.EDIT_TODO
  }
}

export const actionCreators = {
  addTodo: createAddTodoAction,
  clearCompleted: createClearCompletedAction,
  completeAll: createCompleteAllAction,
  completeTodo: createCompleteTodoAction,
  deleteTodo: createDeleteTodoAction,
  editTodo: createEditTodoAction
}
