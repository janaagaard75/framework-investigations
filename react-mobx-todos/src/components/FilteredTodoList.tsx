import * as React from "react"
import { Component } from "react"

import { Todo } from "../model/Todo"
import { TodoList } from "./TodoList"
import { Todos } from "../model/Todos"
import { TodosFilter } from "../model/TodosFilter"

interface Props {
  activeFilter: TodosFilter
  onTodoClick: (todo: Todo) => void,
  todos: Todos
}

export class FilteredTodoList extends Component<Props, void> {
  private getVisibleTodos(): Todos {
    const visibleTodos = this.props.activeFilter.filterTodos(this.props.todos)
    return visibleTodos
  }

  public render() {
    return (
      <TodoList onTodoClick={() => this.props.onTodoClick} todos={this.getVisibleTodos()}/>
    )
  }
}