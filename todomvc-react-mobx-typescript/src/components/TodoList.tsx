import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { TodoModel } from './TodoModel'
import { TodoItem } from './TodoItem'

interface Props {
  deleteTodo: (todo: TodoModel) => void
  todos: Array<TodoModel>
}

@observer
export class TodoList extends Component<Props, void> {
  public render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => this.props.deleteTodo(todo)}
          />
        )}
      </ul>
    )
  }
}