import * as React from 'react'
import { ConnectedAddTodo } from '../containers/ConnectedAddTodo'
import { Component } from 'react'
import { Footer } from './Footer'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export class App extends Component<void, void> {
  public render() {
    return (
      <div>
        <ConnectedAddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}