import * as classnames from 'classnames'
import * as React from 'react'

interface PropTypes {
  onSave: (text: string) => void,
  text?: string,
  placeholder?: string,
  editing?: boolean,
  newTodo?: boolean
}

class TodoTextInput extends React.Component<PropTypes, any> {
  constructor(props: PropTypes, context?: any) {
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
        className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })
        }
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    )
  }
}

export default TodoTextInput
