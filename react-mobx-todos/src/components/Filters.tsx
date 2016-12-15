import * as React from "react"
import { Component } from "react"
import { Link } from "react-router"

import { FilteredTodos } from "../Main"
import { TodosFilter } from "../model/TodosFilter"

export class Filters extends Component<void, void> {
  public render() {
    return (
      <p>
        <Link to={FilteredTodos.getLinkPath(TodosFilter.ShowAll)}>All</Link>
        {" "}&middot;{" "}
        <Link to={FilteredTodos.getLinkPath(TodosFilter.ShowActive)}>Active</Link>
        {" "}&middot;{" "}
        <Link to={FilteredTodos.getLinkPath(TodosFilter.ShowCompleted)}>Completed</Link>
      </p>
    )
  }
}