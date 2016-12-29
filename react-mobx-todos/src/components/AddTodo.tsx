import * as React from "react"
import { Component } from "react"
import { FormEvent } from "react"

import { Button } from "./bootstrap/Button"
import { TextInput } from "./bootstrap/TextInput"
import { SubmitButton } from "./bootstrap/SubmitButton"

interface Props {
  addTodo: (text: string) => void,
  addTodoAsynchronously: (text: string) => void
}

interface State {
  text: string
}

export class AddTodo extends Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      text: ""
    }
  }

  private clearText() {
    this.setState({
      text: ""
    })
  }

  private handleAddTodoAsyncClick() {
    const trimmedText = this.state.text.trim()
    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodoAsynchronously(trimmedText)
    this.clearText()
  }

  private handleChange(formEvent: FormEvent<HTMLInputElement>) {
    this.setState({ text: formEvent.currentTarget.value })
  }

  private handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault()

    const trimmedText = this.state.text.trim()
    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodo(trimmedText)
    this.clearText()
  }

  public render() {
    return (
      <form onSubmit={formEvent => this.handleSubmit(formEvent)}>
        <div className="input-group">
          <TextInput text={this.state.text} handleChange={e => this.handleChange(e)}/>
          <span className="input-group-btn">
            <SubmitButton color="primary">Add Todo</SubmitButton>
            <Button color="secondary" onClick={() => this.handleAddTodoAsyncClick()}>Add Todo Asynchronously</Button>
          </span>
        </div>
      </form>
    )
  }
}