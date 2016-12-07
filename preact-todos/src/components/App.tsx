import { Component } from "preact"

import { AddTodo } from "./AddTodo"
import { Todo } from "../models/Todo"
import { TodoList } from "./TodoList"
import { TodoStore } from "../models/TodoStore"

interface AppProps {
  store: TodoStore
}

export class App extends Component<AppProps, void> {
  // TODO: Why not handle the toggle in TodoItem?
  private handleOnTodoClick(todo: Todo) {
    todo.toggle()
  }

  public render() {
    return (
      <div>
        <AddTodo
          addTodo={(text) => this.props.store.addTodo(text)}
        />
        <TodoList
          // TODO: What about (todo) => this.handleOnTodoClick(todo)?
          onTodoClick={this.handleOnTodoClick}
          todos={this.props.store.todos}
        />
      </div>
    )
  }
}