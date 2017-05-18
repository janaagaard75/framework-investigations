import * as classNames from 'classnames'
import * as React from 'react'
import { Component } from 'react'
import { KeyboardEvent } from 'react'
import { observer } from 'mobx-react'

import { Todo } from './Todo'

interface Props {
  todo: Todo
}

interface State {
  mode: 'edit' | 'view'
}

@observer
export class TodoItem extends Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      mode: 'view'
    }
  }

  private inputElement: HTMLInputElement

  public componentDidUpdate(_previousProps: Props, previousState: State) {
    if (previousState.mode === 'view' && this.state.mode === 'edit') {
      this.inputElement.focus()
    }
  }

  public render() {
    return (
      <li
        className={
          classNames({
            'completed': this.props.todo.completed,
            'editing': this.state.mode === 'edit'
          })
        }
      >
        <div className="view">
          <input
            checked={this.props.todo.completed}
            className="toggle"
            id={this.props.todo.id}
            onChange={() => this.props.todo.toggleCompleted()}
            type="checkbox"
          />
          <label
            htmlFor={this.props.todo.id}
            onDoubleClick={() => this.switchToEditMode()}
          >
            {this.props.todo.text}
          </label>
          <button className="destroy" />
        </div>
        <input
          className="edit"
          defaultValue={this.props.todo.text}
          onBlur={() => this.switchToViewMode()}
          onKeyDown={e => this.handleKeyDown(e)}
          ref={input => this.inputElement = input}
        />
      </li>
    )
  }

  private handleKeyDown(keyboardEvent: KeyboardEvent<HTMLInputElement>) {
    if (keyboardEvent.key === 'Enter') {
      // TODO: Save changes.
      this.switchToViewMode()
    }

    if (keyboardEvent.key === 'Escape') {
      // TODO: Discard changes.
      this.switchToViewMode()
    }
  }

  private switchToEditMode() {
    this.setState({
      mode: 'edit'
    })
  }

  private switchToViewMode() {
    this.setState({
      mode: 'view'
    })
  }
}