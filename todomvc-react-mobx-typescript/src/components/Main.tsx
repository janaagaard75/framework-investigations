import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { TodoModel } from './TodoModel'
import { TodoList } from './TodoList'

interface Props {
  todos: Array<TodoModel>
}

@observer
export class Main extends Component<Props, void> {
  public render() {
    const allTodosChecked = this.props.todos.every(todo => todo.completed)

    return (
      <section className="main">
        <input
          checked={allTodosChecked}
          className="toggle-all"
          id="toggle-all"
          onChange={() => this.toggleAllTodos()}
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          todos={this.props.todos}
        />
      </section>
    )
  }

  private toggleAllTodos() {
    if (this.allTodosHaveSameState()) {
      this.props.todos.forEach(todo => todo.toggle())
      return
    }

    this.props.todos.forEach(todo => {
      if (!todo.completed) {
        todo.toggle()
      }
    })
  }

  private allTodosHaveSameState() {
    if (this.props.todos.every(todo => todo.completed)) {
      return true
    }

    if (this.props.todos.every(todo => !todo.completed)) {
      return true
    }

    return false
  }
}