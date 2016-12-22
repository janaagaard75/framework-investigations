import * as React from "react"
import { Component } from "react"
import { Link } from "react-router"

import { allFilters } from "../model/TodosFilter"
import { FilteredTodos } from "../Main"

export class Filters extends Component<void, void> {
  public render() {
    return (
      <ul className="nav nav-pills">
        {allFilters.map(filter =>
          <li className="nav-item" key={filter.path}>
            <Link className="nav-link" to={FilteredTodos.getLinkPath(filter)}>{filter.label}</Link>
          </li>
        )}
      </ul>
    )
  }
}