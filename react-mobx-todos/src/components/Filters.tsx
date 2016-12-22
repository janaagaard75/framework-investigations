import * as React from "react"
import { Component } from "react"
import { Link } from "react-router"

import { allFilters } from "../model/TodosFilter"
import { FilteredTodos } from "../Main"
import { TodosFilter } from "../model/TodosFilter"

interface Props {
  activeFilter: TodosFilter
}

export class Filters extends Component<Props, void> {
  private isActive(filter: TodosFilter): boolean {
    return filter.path === this.props.activeFilter.path
  }

  public render() {
    return (
      <ul className="nav nav-pills">
        {allFilters.map(filter =>
          <li className="nav-item" key={filter.path}>
            <Link
              className={"nav-link" + (this.isActive(filter) ? " active" : "")}
              to={FilteredTodos.getLinkPath(filter)}
            >
              {filter.label}
            </Link>
          </li>
        )}
      </ul>
    )
  }
}