import * as React from 'react'
import { Component } from 'react'

import { TodoModel } from './TodoModel'
import { TodoList } from './TodoList'

interface Props {
  deleteTodo: (todo: TodoModel) => void
  todos: Array<TodoModel>
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