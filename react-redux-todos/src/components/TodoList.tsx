import * as React from 'react'
import { Todo } from './Todo'

interface TodoListPropTypes {
  location: Location,
  onTodoClick: (id: number) => void,
  todos: Array<{
    completed: boolean,
    id: number,
    text: string
  }>
}

export class TodoList extends React.Component<TodoListPropTypes, void> {
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