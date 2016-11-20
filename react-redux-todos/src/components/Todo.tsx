import * as React from 'react'

interface TodoPropTypes {
  onClick: () => void,
  completed: boolean,
  text: string
}

export class Todo extends React.Component<TodoPropTypes, void> {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          cursor: 'pointer',
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    )
  }
}