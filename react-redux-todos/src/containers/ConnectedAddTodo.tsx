import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AddTodo } from '../components/AddTodo'
import { createAddTodo } from '../actions/createAddTodo'
import { RootState } from '../model/RootState'

interface ConnectedAddTodoStateProps { }

interface ConnectedAddTodoDispatchProps {
  addTodo: (text: string) => void
}

interface ConntedAddTodoOwnProps { }

const mapDispatchToProps = (dispatch: Dispatch<RootState>): ConnectedAddTodoDispatchProps => {
  return {
    addTodo: (text: string) => dispatch(createAddTodo(text))
  }
}

export const ConnectedAddTodo = connect<ConnectedAddTodoStateProps, ConnectedAddTodoDispatchProps, ConntedAddTodoOwnProps>(
  // tslint:disable-next-line no-empty
  () => { return { } },
  mapDispatchToProps
)(AddTodo)