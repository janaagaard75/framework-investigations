import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createAddTodo } from '../actions/createAddTodo'
import { RootState } from '../model/RootState'

// TODO: Clean up. Is there an easier way to get the dispatch method into the component? If not, then split up into two separate files as with the other two containers.
interface AddTodoComponentStateProps { }

interface AddTodoComponentDispathProps {
  addTodo: (text: string) => void
}

interface AddTodoComponentOwnProps { }

type AddTodoComponentProps = AddTodoComponentStateProps & AddTodoComponentDispathProps & AddTodoComponentOwnProps

interface AddTodoComponentState {
  text: string
}

const mapStateToProps = (state: RootState): AddTodoComponentStateProps => {
  return { }
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>): AddTodoComponentDispathProps => {
  return {
    addTodo: (text: string) => dispatch(createAddTodo(text))
  }
}

class AddTodoComponent extends Component<AddTodoComponentProps, AddTodoComponentState> {
  constructor(props: AddTodoComponentProps, context?: any) {
    super(props, context)
    // Always start with an empty input field.
    this.state = {
      text: ''
    }
  }

  private handleChange(formEvent: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: formEvent.currentTarget.value })
  }

  private handleSubmit(formEvent: React.FormEvent<HTMLFormElement>) {
    formEvent.preventDefault()

    const trimmedText = this.state.text.trim()
    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodo(trimmedText)
    this.setState({
      text: ''
    })
  }

  public render() {
    return (
      <div>
        <form onSubmit={formEvent => this.handleSubmit(formEvent)}>
          <input
            type="text"
            value={this.state.text}
            onChange={formEvent => this.handleChange(formEvent)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export const AddTodo = connect<AddTodoComponentStateProps, AddTodoComponentDispathProps, AddTodoComponentOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoComponent)