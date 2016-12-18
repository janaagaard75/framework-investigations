import * as React from "react"
import { Component } from "react"
import { Link } from "react-router"

import { allFilters } from "../model/TodosFilter"
import { FilteredTodos } from "../Main"

export class Filters extends Component<void, void> {
  public render() {
    return (
      <p>
        {allFilters.map(filter =>
          // TODO: Figure out how to put an element between the links.
          <Link key={filter.filter} to={FilteredTodos.getLinkPath(filter)}>{filter.label}</Link>
        )}
      </p>
    )
  }
}