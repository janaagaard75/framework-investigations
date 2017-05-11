import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Todo } from './Todo'

interface Props {
  todos: Array<Todo>
}

@observer
export class TodoList extends Component<Props, void> {
  public render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, index) =>
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={todo.completed}/>
              <label>{todo.text}</label>
              <button className="destroy" />
            </div>
            <input className="edit" defaultValue={todo.text} />
          </li>
        )}
      </ul>
    )
  }
}