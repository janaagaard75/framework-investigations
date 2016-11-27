import * as React from 'react'
import { AddTodo } from '../containers/AddTodo'
import { Footer } from './Footer'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export class App extends React.Component<void, void> {
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