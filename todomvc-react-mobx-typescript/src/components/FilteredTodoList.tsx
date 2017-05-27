import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Route } from './Route'
import { TodoList } from './TodoList'
import { TodoModel } from './TodoModel'
import { Todos } from './Todos'

interface Props {
  currentRoute: Route
  todos: Todos
}

@observer
export class FilteredTodoList extends Component<Props, void> {
  public render() {
    return (
      <TodoList
        deleteTodo={this.props.todos.deleteTodo}
        todos={this.getFilteredTodos(this.props.currentRoute)}
      />
    )
  }

  private getFilteredTodos(route: Route): Array<TodoModel> {
    const filteredTodos = this.props.todos.allTodos.filter(todo => route.filterFunction(todo))
    return filteredTodos
  }
}