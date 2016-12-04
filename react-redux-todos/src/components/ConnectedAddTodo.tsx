import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AddTodo } from '../components/AddTodo'
import { createAddTodo } from '../actions/createAddTodo'
import { RootState } from '../model/RootState'

interface ConnectedAddTodoDispatchProps {
  addTodo: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ConnectedAddTodoDispatchProps => {
  return {
    addTodo: (text: string) => dispatch(createAddTodo(text))
  }
}

export const ConnectedAddTodo = connect<{}, ConnectedAddTodoDispatchProps, {}>(
  // TODO: Isn't there a better way to do this?
  // tslint:disable-next-line no-empty
  () => { return { } },
  mapDispatchToProps
)(AddTodo)