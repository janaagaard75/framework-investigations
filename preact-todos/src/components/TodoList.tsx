import { Component } from "preact"

import { Todo } from "../models/Todo"
import { TodoItem } from "./TodoItem"
import { Todos } from "../models/Todos"

interface TodoListProps {
  onTodoClick: (todo: Todo) => void,
  todos: Todos
}

export class TodoList extends Component<TodoListProps, void> {
  public render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <TodoItem
            key={todo.id.toString()}
            onClick={() => this.props.onTodoClick(todo) }
            completed={todo.completed}
            text={todo.text}
          />
        ) }
      </ul>
    )
  }
}