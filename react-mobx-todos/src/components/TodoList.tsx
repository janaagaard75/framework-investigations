import * as React from "react"
import { Component } from "react"
import { observer } from "mobx-react"

import { TodoItem } from "./TodoItem"
import { Todos } from "../model/Todos"

interface Props {
  todos: Todos
}

// TODO: Should the observer be on FilteredTodoList?
@observer
export class TodoList extends Component<Props, void> {
  public render() {
    return (
      <ul className="list-group">
        {this.props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )}
      </ul>
    )
  }
}