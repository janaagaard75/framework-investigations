import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { TodoModel } from './TodoModel'

interface Props {
  todos: Array<TodoModel>
}

@observer
export class Footer extends Component<Props, void> {
  public render() {
    return (
      <div>
        {this.props.todos.length &&
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
        }
      </div>
    )
  }
}