import * as React from "react"
import { Component } from "react"
import { Link } from "react-router"

import { AllTodos } from "../Main"
import { TodosFilter } from "../model/Filter"
import { FilteredTodos } from "../Main"

export class Filters extends Component<void, void> {
  public render() {
    return (
      <p>
        <Link to={AllTodos.getLinkPath()}>All</Link>
        {" "}&middot;{" "}
        <Link to={FilteredTodos.getLinkPath(TodosFilter.active)}>Active</Link>
        {" "}&middot;{" "}
        <Link to={FilteredTodos.getLinkPath(TodosFilter.completed)}>Completed</Link>
      </p>
    )
  }
}