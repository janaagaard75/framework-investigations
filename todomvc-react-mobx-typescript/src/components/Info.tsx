import * as React from 'react'
import { Component } from 'react'

export class Info extends Component<{}, void> {
  public render() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://github.com/janaagaard75">Jan Aagaard</a></p>
        <p>Part of <a href="http://todomvc.com/">TodoMVC</a></p>
      </footer>
    )
  }
}