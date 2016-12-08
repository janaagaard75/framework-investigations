import * as React from "react"
import { Component } from "react"

import { AddTodo } from "./AddTodo"
import { Store } from "../Store"
import { Todo } from "../models/Todo"
import { TodoList } from "./TodoList"

interface AppProps {
  store: Store
}

export class App extends Component<AppProps, void> {
  public render() {
    return (
      <div>
        <AddTodo
          addTodo={(text: string) => this.props.store.addTodo(text)}
        />
        <TodoList
          onTodoClick={(todo: Todo) => this.props.store.toggleTodo(todo)}
          todos={this.props.store.todos}
        />
      </div>
    )
  }
}