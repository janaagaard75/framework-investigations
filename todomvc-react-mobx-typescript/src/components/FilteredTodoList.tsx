import * as React from 'react'
import { Component } from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'

import { Filter } from './Filter'
import { TodoList } from './TodoList'
import { TodoModel } from './TodoModel'

interface Props {
  currentFilter: Filter
  deleteTodo: (todo: TodoModel) => void
  todos: Array<TodoModel>
}

@observer
export class FilteredTodoList extends Component<Props, void> {
  @computed
  private get filteredTodos(): Array<TodoModel> {
    switch (this.props.currentFilter) {
      default:
        return this.props.todos
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