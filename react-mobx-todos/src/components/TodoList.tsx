import * as React from "react"
import { Component } from "react"
import { observer } from "mobx-react"

import { Todo } from "../models/Todo"
import { TodoItem } from "./TodoItem"
import { Todos } from "../models/Todos"

interface TodoListProps {
  onTodoClick: (todo: Todo) => void,
  todos: Todos
}

@observer
export class TodoList extends Component<TodoListProps, void> {
  public render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            onClick={() => this.props.onTodoClick(todo)}
            completed={todo.completed}
            text={todo.text}
          />
        )}
      </ul>
    )
  }
}