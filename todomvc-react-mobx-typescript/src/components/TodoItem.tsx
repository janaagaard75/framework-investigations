import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Todo } from './Todo'

interface Props {
  todo: Todo
}

@observer
export class TodoItem extends Component<Props, void> {
  public render() {
    return (
      <li className={this.props.todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            checked={this.props.todo.completed}
            className="toggle"
            onChange={() => this.props.todo.toggleCompleted()}
            type="checkbox"
          />
          <label>{this.props.todo.text}</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue={this.props.todo.text} />
      </li>
    )
  }
}