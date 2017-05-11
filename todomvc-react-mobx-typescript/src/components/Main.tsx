import * as React from 'react'
import { Component } from 'react'

import { Todo } from './Todo'
import { TodoList } from './TodoList'

interface Props {
  todos: Array<Todo>
}

export class Main extends Component<Props, void> {
  public render() {
    return (
      <section className="main">
        <TodoList todos={this.props.todos}/>
      </section>
    )
  }
}