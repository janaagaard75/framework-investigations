import * as React from "react"
import { Component } from "react"

import { GenericButton } from "./bootstrap/GenericButton"

interface AddTodoProps {
  addTodo: (text: string) => void,
  addTodoAsynchronously: (text: string) => void
}

interface AddTodoState {
  text: string
}

export class AddTodo extends Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps, context?: any) {
    super(props, context)

    this.state = {
      text: ""
    }
  }

  private handleAddTodoAsyncClick() {
    const trimmedText = this.state.text.trim()
    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodoAsynchronously(trimmedText)

    this.setState({
      text: ""
    })
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
      text: ""
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
          <GenericButton type="button" color="default" onClick={() => this.handleAddTodoAsyncClick()}>Add Todo Asynchronously</GenericButton>
        </form>
      </div>
    )
  }
}