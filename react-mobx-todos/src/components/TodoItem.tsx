import * as React from "react"
import { Component } from "react"
import { observer } from "mobx-react"

interface TodoItemProps {
  onClick: () => void,
  completed: boolean,
  text: string
}

@observer
export class TodoItem extends Component<TodoItemProps, void> {
  public shouldComponentUpdate(newProps: TodoItemProps) {
    return (
      this.props.completed !== newProps.completed
      || this.props.text !== newProps.text
    )
  }

  public render() {
    return (
      <li
        onClick={() => this.props.onClick()}
        style={{
          cursor: "pointer",
          textDecoration: this.props.completed ? "line-through" : "none"
        }}
      >
        {this.props.text}
      </li>
    )
  }
}