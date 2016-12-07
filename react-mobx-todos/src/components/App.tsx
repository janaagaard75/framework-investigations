import * as React from "react"
import { Component } from "react"

import { AddTodo } from "./AddTodo"
import { TodoList } from "./TodoList"

export class App extends Component<void, void> {
  public render() {
    return (
      <div>
        <AddTodo/>
        <TodoList/>
      </div>
    )
  }
}