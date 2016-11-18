import * as React from 'react'
import * as classNames from 'classnames'

interface TodoTextInputProps {
  editing?: boolean
  newTodo?: boolean
  placeholder?: string
  text?: string
  onSave: (text: string) => void
}

interface TodoTextInputState {
  text: string
}

export class TodoTextInput extends React.Component<TodoTextInputProps, TodoTextInputState> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e: Event) {
    const text = (e.target as HTMLInputElement).value.trim()
    if ((e as KeyboardEvent).which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange(e: Event) {
    this.setState({ text: (e.target as HTMLInputElement).value })
  }

  handleBlur(e: Event) {
    if (!this.props.newTodo) {
      this.props.onSave((e.target as HTMLInputElement).value)
    }
  }

  render() {
    return (
      <input
        type="text"
        className={
          classNames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })
        }
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)}
      />
    )
  }
}