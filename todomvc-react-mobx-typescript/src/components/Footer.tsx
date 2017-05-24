import * as React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { MouseEvent } from 'react'

import { Filter } from './Filter'
import { PathsAndFilters } from './PathsAndFilters'
import { TodoModel } from './TodoModel'

interface Props {
  currentFilter: Filter
  deleteTodo: (todo: TodoModel) => void
  pathsAndFilter: PathsAndFilters
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
          {/* TODO: Figure out a better syntax. */}
          {this.props.pathsAndFilter.pathsAndFilters.map(pathAndFilter =>
            <li>
              <a
                className={this.props.currentFilter === pathAndFilter.filter ? 'selected' : ''}
                href=""
                onClick={e => this.navigate(e, pathAndFilter.filter)}
              >
                {pathAndFilter.caption}
              </a>
            </li>
          )}
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