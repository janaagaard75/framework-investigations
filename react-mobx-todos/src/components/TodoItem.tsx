import * as React from "react"
import { Component } from "react"
import { observer } from "mobx-react"

import { Todo } from "../model/Todo"

interface Props {
  todo: Todo
}

@observer
export class TodoItem extends Component<Props, void> {
  public render() {
    return (
      <li
        className="list-group-item"
        onClick={() => this.props.todo.toggle()}
        style={{
          cursor: "pointer",
          textDecoration: this.props.todo.completed ? "line-through" : "none"
        }}
      >
        {this.props.todo.text}
      </li>
    )
  }
}