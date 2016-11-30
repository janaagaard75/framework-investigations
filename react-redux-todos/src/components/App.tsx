import * as React from 'react'
import { AddTodo } from '../containers/AddTodo'
import { Component } from 'react'
import { Footer } from './Footer'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export class App extends Component<void, void> {
  public render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}