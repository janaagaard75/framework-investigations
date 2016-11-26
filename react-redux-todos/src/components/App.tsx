import * as React from 'react'
import { AddTodo } from '../containers/AddTodo'
import { Footer } from './Footer'
import { VisibleTodoList } from '../containers/VisibleTodoList'

interface AppProps {
  location: Location
}

export class App extends React.Component<AppProps, void> {
  public render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList location={this.props.location}/>
        <Footer/>
      </div>
    )
  }
}