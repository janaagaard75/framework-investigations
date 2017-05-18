import * as React from 'react'
import { Component } from 'react'

import { Todo } from './Todo'
import { TodoList } from './TodoList'

interface Props {
  deleteTodo: (todo: Todo) => void
  todos: Array<Todo>
}

export class Main extends Component<Props, void> {
  public render() {
    return (
      <section className="main">
        <TodoList
          deleteTodo={this.props.deleteTodo}
          todos={this.props.todos}
        />
      </section>
    )
  }
}