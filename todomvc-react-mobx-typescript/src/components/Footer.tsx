import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { FilterLink } from './FilterLink'
import { Route } from './Route'
import { Routes } from './Routes'
import { Todos } from './Todos'

interface Props {
  currentRoute: Route
  routes: Routes
  setCurrentRoute: (route: Route) => void
  todos: Todos
}

@observer
export class Footer extends Component<Props, void> {
  public render() {
    if (!this.props.todos.hasTodos) {
      return null
    }

    const numberOfActiveTodos = this.props.todos.activeTodos.length
    const pluralizedItems = this.pluralize('item', numberOfActiveTodos)

    return (
      <footer className="footer">
        <span
          className="todo-count"
        >
          <strong>{numberOfActiveTodos}</strong> {pluralizedItems} left
        </span>
        <ul className="filters">
          {this.props.routes.allRoutes.map(route =>
            <FilterLink
              currentRoute={this.props.currentRoute}
              key={route.filter}
              route={route}
              setCurrentRoute={this.props.setCurrentRoute}
            />
          )}
        </ul>
        {this.props.todos.completedTodos.length >= 1 &&
          <button
            className="clear-completed"
            onClick={() => this.deleteCompletedTodos()}
          >
            Clear completed
          </button>
        }
      </footer>
    )
  }

  private deleteCompletedTodos() {
    this.props.todos.completedTodos.forEach(todo => this.props.todos.deleteTodo(todo))
  }

  private pluralize(word: string, items: number) {
    if (items === 1) {
      return word
    }

    return word + 's'
  }
}