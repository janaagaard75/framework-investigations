import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

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
          <footer className="footer">
            <span className="todo-count"><strong>0</strong> item left</span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
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