import * as React from "react"
import { Component } from "react"
import { observer } from "mobx-react"

import { Todo } from "../model/Todo"

interface TodoItemProps {
  onClick: () => void,
  todo: Todo
}

@observer
export class TodoItem extends Component<TodoItemProps, void> {
  // TODO: This breaks toggling a todo. Not sure why. Removing this means the whole list is repainted when adding a todo. It's as if MobX isn't able to observe that the completed state is changing.
  // public shouldComponentUpdate(newProps: TodoItemProps) {
  //   const sameTodo = this.props.todo.equals(newProps.todo)
  //   return !sameTodo
  // }

  public render() {
    return (
      <li
        onClick={() => this.props.onClick()}
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