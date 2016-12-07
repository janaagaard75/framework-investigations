import * as React from "react"
import { Component } from "react"

import { AddTodo } from "./AddTodo"
import { Todo } from "../models/Todo"
import { TodoList } from "./TodoList"
import { TodoStore } from "../models/TodoStore"

interface AppProps {
  store: TodoStore
}

export class App extends Component<AppProps, void> {
  private handleOnTodoClick(todo: Todo) {
    todo.toggle()
  }

  public render() {
    return (
      <div>
        <AddTodo addTodo={(text) => this.props.store.addTodo(text)}/>
        <TodoList todos={this.props.store.todos} onTodoClick={this.handleOnTodoClick}/>
      </div>
    )
  }
}