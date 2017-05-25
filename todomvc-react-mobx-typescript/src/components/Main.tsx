import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { FilteredTodoList } from './FilteredTodoList'
import { Route } from './Route'
import { TodoModel } from './TodoModel'
import { Todos } from './Todos'

interface Props {
  currentRoute: Route
  deleteTodo: (todo: TodoModel) => void
  todos: Todos
}

@observer
export class Main extends Component<Props, void> {
  public render() {
    if (this.props.todos.hasTodos) {
      return null
    }

    const allTodosChecked = this.props.todos.allTodos.every(todo => todo.completed)

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
        <FilteredTodoList
          currentRoute={this.props.currentRoute}
          deleteTodo={todo => this.props.deleteTodo(todo)}
          todos={this.props.todos}
        />
      </section>
    )
  }

  private allTodosHaveSameState() {
    if (this.props.todos.length === 0) {
      return true
    }

    const stateOfFirstTodo = this.props.todos[0].completed
    const allTodosHaveSameState = this.props.todos.every(todo => todo.completed === stateOfFirstTodo)
    return allTodosHaveSameState
  }

  private toggleAllTodos() {
    if (this.allTodosHaveSameState()) {
      this.props.todos.forEach(todo => todo.toggle())
      return
    }

    this.props.todos.forEach(todo => {
      todo.completed = true
    })
  }
}