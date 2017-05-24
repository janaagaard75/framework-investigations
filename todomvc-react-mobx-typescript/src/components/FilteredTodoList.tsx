import * as React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'

import { Route } from './Filter'
import { TodoList } from './TodoList'
import { TodoModel } from './TodoModel'

interface Props {
  currentRoute: Route
  deleteTodo: (todo: TodoModel) => void
  todos: Array<TodoModel>
}

@observer
export class FilteredTodoList extends Component<Props, void> {
  @computed
  private get filteredTodos(): Array<TodoModel> {
    // TODO: Avoid this switch case by associating the filtering method with the name of the filter.
    switch (this.props.currentRoute) {
      case 'active':
        return this.props.todos.filter(todo => !todo.completed)

      case 'all':
        return this.props.todos

      case 'completed':
        return this.props.todos.filter(todo => todo.completed)

      default:
        throw new Error(`The value '${this.props.currentRoute}' is not supported.`)
    }
  }

  public render() {
    return (
      <TodoList
        deleteTodo={this.props.deleteTodo}
        todos={this.filteredTodos}
      />
    )
  }
}