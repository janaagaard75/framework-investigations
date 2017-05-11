import * as React from 'react'
import { Component } from 'react'
import { FormEvent } from 'react'
import { KeyboardEvent } from 'react'

interface Props {
  addTodo: (text: string) => void,
}

interface State {
  text: string
}

export class Header extends Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      text: ''
    }
  }

  public render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          autoFocus={true}
          className="new-todo"
          onChange={e => this.handleTextChanged(e)}
          onKeyPress={e => this.handleKeyPressed(e)}
          placeholder="What needs to be done?"
          value={this.state.text}
        />
      </header>
    )
  }

  private handleKeyPressed(keyboardEvent: KeyboardEvent<HTMLInputElement>) {
    if (keyboardEvent.key !== 'Enter') {
      return
    }

    const trimmedText = this.state.text.trim()
    this.setState({
      text: ''
    })

    if (trimmedText.length === 0) {
      return
    }

    this.props.addTodo(trimmedText)
  }

  private handleTextChanged(formEvent: FormEvent<HTMLInputElement>) {
    this.setState({ text: formEvent.currentTarget.value })
  }
}