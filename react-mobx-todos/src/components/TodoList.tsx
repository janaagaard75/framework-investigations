import * as React from "react"
import { Component } from "react"

import { Todo } from "./Todo"
import { Todos } from "../model/Todos"

interface TodoListProps {
  onTodoClick: (id: number) => void,
  todos: Todos
}

export class TodoList extends Component<TodoListProps, void> {
  public render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            onClick={() => this.props.onTodoClick(todo.id) }
            completed={todo.completed}
            text={todo.text}
          />
        ) }
      </ul>
    )
  }
}