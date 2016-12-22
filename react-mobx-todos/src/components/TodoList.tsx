import * as React from "react"
import { Component } from "react"
import { observer } from "mobx-react"

import { Todo } from "../model/Todo"
import { TodoItem } from "./TodoItem"
import { Todos } from "../model/Todos"

interface Props {
  onTodoClick: (todo: Todo) => void,
  todos: Todos
}

@observer
export class TodoList extends Component<Props, void> {
  public render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            onClick={() => this.props.onTodoClick(todo)}
            todo={todo}
          />
        )}
      </ul>
    )
  }
}