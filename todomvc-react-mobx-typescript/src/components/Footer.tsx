import * as React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'

import { Filter } from './Filter'
import { TodoModel } from './TodoModel'

interface Props {
  deleteTodo: (todo: TodoModel) => void
  setCurrentFilter: (filter: Filter) => void
  todos: Array<TodoModel>
}

@observer
export class Footer extends Component<Props, void> {
  public render() {
    const numberOfActiveTodos = this.props.todos.filter(todo => !todo.completed).length
    const pluralizedItems = this.pluralize('item', numberOfActiveTodos)

    return (
      <footer className="footer">
        <span
          className="todo-count"
        >
          <strong>{numberOfActiveTodos}</strong> {pluralizedItems} left
        </span>
        <ul className="filters">
          <li>
            <a
              className="selected"
              href="#/"
              onClick={() => this.props.setCurrentFilter('all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              onClick={() => this.props.setCurrentFilter('active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              onClick={() => this.props.setCurrentFilter('completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {this.completedTodos.length >= 0 &&
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

  @computed
  private get completedTodos(): Array<TodoModel> {
    const completedTodos = this.props.todos.filter(todo => todo.completed)
    return completedTodos
  }

  private deleteCompletedTodos() {
    this.completedTodos.forEach(todo => this.props.deleteTodo(todo))
  }

  private pluralize(word: string, items: number) {
    if (items === 1) {
      return word
    }

    return word + 's'
  }
}