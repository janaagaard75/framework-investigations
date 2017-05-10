import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Footer } from './Footer'
import { Header } from './Header'
import { TodoList } from './TodoList'

@observer
export class App extends Component<{}, void> {
  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header/>
          <section className="main">
            <TodoList />
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