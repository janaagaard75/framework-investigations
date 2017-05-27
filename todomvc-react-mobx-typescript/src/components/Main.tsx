import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { FilteredTodoList } from './FilteredTodoList'
import { Route } from './Route'
import { Todos } from './Todos'

interface Props {
  currentRoute: Route
  todos: Todos
}

@observer
export class Main extends Component<Props, void> {
  public render() {
    if (!this.props.todos.hasTodos) {
      return null
    }

    const allTodosChecked = this.props.todos.allTodos.every(todo => todo.completed)

    return (
      <section className="main">
        <input
          checked={allTodosChecked}
          className="toggle-all"
          id="toggle-all"
          onChange={() => this.props.todos.toggleAllTodos()}
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <FilteredTodoList
          currentRoute={this.props.currentRoute}
          todos={this.props.todos}
        />
      </section>
    )
  }
}