import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { TodoModel } from './TodoModel'
import { TodoList } from './TodoList'

interface Props {
  deleteTodo: (todo: TodoModel) => void
  todos: Array<TodoModel>
}

@observer
export class Main extends Component<Props, void> {
  public render() {
    const allTodosChecked = this.props.todos.every(todo => todo.completed)

    return (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={allTodosChecked}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          deleteTodo={this.props.deleteTodo}
          todos={this.props.todos}
        />
      </section>
    )
  }
}