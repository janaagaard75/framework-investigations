import * as classnames from 'classnames'
import * as React from 'react'
import TodoTextInput from './TodoTextInput'

interface PropTypes {
  todo: any
  completeTodo: (id: number) => void,
  deleteTodo: (id: number) => void,
  editTodo: (id: number, text: string) => void
}

class TodoItem extends React.Component<PropTypes, any> {
  constructor(props: PropTypes, context: any) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(id: number, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }

    this.setState({ editing: false })
  }

  render() {
    // const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput
          editing={this.state.editing}
          onSave={(text) => this.handleSave(this.props.todo.id, text)}
          text={this.props.todo.text} />
      )
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.completeTodo(this.props.todo.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {this.props.todo.text}
          </label>
          <button
            className="destroy"
            onClick={() => this.props.deleteTodo(this.props.todo.id)} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: this.props.todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}

export default TodoItem
