import * as React from "react"
import { Component } from "react"
import { RouterContext } from "react-router"

import { AddTodo } from "./AddTodo"
import { FilteredTodoList } from "./FilteredTodoList"
import { Filters } from "./Filters"
import { Store } from "../model/Store"
import { Todo } from "../model/Todo"
import { toFilter } from "../model/TodosFilter"

interface Props {
  routerContext: RouterContext.RouterContextProps,
  store: Store
}

export class App extends Component<Props, void> {
  public render() {
    return (
      <div>
        <AddTodo
          addTodo={(text: string) => this.props.store.addTodo(text)}
          addTodoAsynchronously={(text: string) => this.props.store.addTodoAsynchronously(text)}
        />
        <FilteredTodoList
          // tslint:disable-next-line no-string-literal
          activeFilter={toFilter(this.props.routerContext.params["filter"])}
          onTodoClick={(todo: Todo) => this.props.store.toggleTodo(todo)}
          todos={this.props.store.todos}
        />
        <Filters/>
      </div>
    )
  }
}