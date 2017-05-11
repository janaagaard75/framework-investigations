import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Todo } from './Todo'
import { TodoItem } from './TodoItem'

interface Props {
  todos: Array<Todo>
}

@observer
export class TodoList extends Component<Props, void> {
  public render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo =>
          <TodoItem key={todo.key} todo={todo} />
        )}
      </ul>
    )
  }
}