import * as React from 'react'
import { Component } from 'react'

interface AddTodoProps {
  // TODO: Prefix these with create?
  addTodo: (text) => void,
  addTodoAsynchronously: (text) => void
  // TODO: Adding attributes here should trigger a build error in ConnectedAddTodo, but how?
}

interface AddTodoState {
  text: string
}

export class AddTodo extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps, context?: any) {
    super(props, context)

    this.state = {
      text: ''
    }
  }

  private handleChange(formEvent: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: formEvent.currentTarget.value })
  }

  private handleAddAsyncClicked() {
    const trimmedText = this.state.text.trim()
    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodoAsynchronously(trimmedText)
    this.setState({
      text: ''
    })
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
          <button onClick={() => this.handleAddAsyncClicked()}>Add Todo Asynchronously</button>
        </form>
      </div>
    )
  }
}