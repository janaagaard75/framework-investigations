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
        <input type="checkbox" className="toggle-all"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          deleteTodo={this.props.deleteTodo}
          todos={this.props.todos}
        />
      </section>
    )
  }
}