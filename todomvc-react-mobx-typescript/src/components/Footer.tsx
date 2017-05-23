import * as React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { MouseEvent } from 'react'

import { Filter } from './Filter'
import { TodoModel } from './TodoModel'

interface Props {
  currentFilter: Filter
  deleteTodo: (todo: TodoModel) => void
  setCurrentFilter: (filter: Filter) => void
  todos: Array<TodoModel>
}

@observer
export class Footer extends Component<Props, void> {
  public render() {
    const numberOfActiveTodos = this.props.todos.filter(todo => !todo.completed).length
    const pluralizedItems = this.pluralize('item', numberOfActiveTodos)

    // TODO: Add proper routing.
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
              className={this.props.currentFilter === 'all' ? 'selected' : ''}
              href=""
              onClick={e => this.navigate(e, 'all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={this.props.currentFilter === 'active' ? 'selected' : ''}
              href=""
              onClick={e => this.navigate(e, 'active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={this.props.currentFilter === 'completed' ? 'selected' : ''}
              href=""
              onClick={e => this.navigate(e, 'completed')}
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

  private navigate(e: MouseEvent<HTMLAnchorElement>, filter: Filter): void {
    e.preventDefault()
    this.props.setCurrentFilter(filter)
  }
}