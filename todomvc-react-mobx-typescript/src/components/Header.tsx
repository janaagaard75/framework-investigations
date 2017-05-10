import * as React from 'react'
import { Component } from 'react'

export class Header extends Component<{}, void> {
  public render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      </header>
    )
  }
}