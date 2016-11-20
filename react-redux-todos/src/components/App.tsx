import * as React from 'react'
import { AddTodo } from '../containers/AddTodo'
import { Footer } from './Footer'
import { VisibleTodoList } from '../containers/VisibleTodoList'

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <AddTodo dispatch/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    )
  }
}