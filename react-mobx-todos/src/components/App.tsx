import * as React from 'react'
import { Component } from 'react'
import { RouteComponentProps } from 'react-router'

import { AddTodo } from './AddTodo'
import { FilteredTodoList } from './FilteredTodoList'
import { Filters } from './Filters'
import { InProgress } from './InProgress'
import { Store } from '../model/Store'
import { toFilter } from '../model/TodosFilter'

export interface ActiveFilterRouteParams {
  filter: string
}

interface Props {
  routeProps: RouteComponentProps<ActiveFilterRouteParams>,
  store: Store
}

export class App extends Component<Props, void> {
  public render() {
    const activeFilter = toFilter(this.props.routeProps.match.params.filter)

    return (
      <div className="container-fluid">
        <h1 className="mt-1">React + MobX + Bootstrap + TypeScript</h1>
        <AddTodo
          addTodo={(text: string) => this.props.store.addTodo(text)}
          addTodoAsynchronously={(text: string) => this.props.store.addTodoAsynchronously(text)}
        />
        <FilteredTodoList
          activeFilter={activeFilter}
          todos={this.props.store.todos}
        />
        <InProgress store={this.props.store}/>
        <Filters activeFilter={activeFilter}/>
      </div>
    )
  }
}