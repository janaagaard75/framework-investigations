import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import { TodosFilter } from '../model/TodosFilter'

interface Props {
  activeFilter: TodosFilter
  filters: Array<TodosFilter>
}

export class FilterLinks extends Component<Props, void> {
  private isActive(filter: TodosFilter): boolean {
    return filter.path === this.props.activeFilter.path
  }

  public render() {
    return (
      <ul className="nav nav-pills">
        {this.props.filters.map(filter =>
          <li className="nav-item" key={filter.path}>
            <Link
              className={'nav-link' + (this.isActive(filter) ? ' active' : '')}
              to={filter.path}
            >
              {filter.label}
            </Link>
          </li>
        )}
      </ul>
    )
  }
}