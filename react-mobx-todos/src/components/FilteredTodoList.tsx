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
    switch (this.props.activeFilter) {
      case TodosFilter.ShowActive:
        return this.props.todos.filter(todo => !todo.completed)

      case TodosFilter.ShowAll:
        return this.props.todos

      case TodosFilter.ShowCompleted:
        return this.props.todos.filter(todo => todo.completed)

      default:
        throw new Error("Unsupported filter: " + this.props.activeFilter)
    }
  }

  public render() {
    return (
      <TodoList onTodoClick={this.props.onTodoClick} todos={this.getVisibleTodos()}/>
    )
  }
}