import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Footer } from './Footer'
import { Header } from './Header'
import { Todo } from './Todo'
import { TodoList } from './TodoList'

@observer
export class App extends Component<{}, void> {
  public render() {
    const todos: Array<Todo> = [
      new Todo('Taste JavaScript'),
      new Todo('Buy a unicorn')
    ]
    todos[0].completed = true

    return (
      <div>
        <section className="todoapp">
          <Header/>
          <section className="main">
            <TodoList todos={todos}/>
          </section>
          <Footer/>
        </section>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="https://github.com/janaagaard75">Jan Aagaard</a></p>
          <p>Part of <a href="http://todomvc.com/">TodoMVC</a></p>
        </footer>
      </div>
    )
  }
}