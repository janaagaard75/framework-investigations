import * as React from 'react'
import { Todo } from './Todo'

interface TodoListPropTypes {
  todos: Array<{
    completed: boolean,
    id: number,
    text: string
  }>,
  onTodoClick: (id: number) => void
}

export class TodoList extends React.Component<TodoListPropTypes, void> {
  render() {
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