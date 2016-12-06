import { connect } from 'react-redux'

import { AddTodo } from '../components/AddTodo'
import { createAddTodo } from '../actions/actionCreators'
import { createAddTodoAsynchronously } from '../actions/actionCreators'
import { TypedDispatch } from '../model/TypedDispatch'

interface ConnectedAddTodoDispatchProps {
  addTodo: (text: string) => void,
  addTodoAsynchronously: (text: string) => void
}

const mapDispatchToProps = (dispatch: TypedDispatch): ConnectedAddTodoDispatchProps => {
  return {
    addTodo: (text: string) => dispatch(createAddTodo(text)),
    addTodoAsynchronously: (text: string) => createAddTodoAsynchronously(dispatch, text)
  }
}

export const ConnectedAddTodo = connect<{}, ConnectedAddTodoDispatchProps, {}>(
  // TODO: Isn't there a better way to do this?
  // tslint:disable-next-line no-empty
  () => { return { } },
  mapDispatchToProps
)(AddTodo)