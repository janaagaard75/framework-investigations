import * as React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'

import { Route } from './Route'
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
    return this.props.currentRoute.filterFunction(this.props.todos)
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