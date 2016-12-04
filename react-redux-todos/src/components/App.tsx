import * as React from 'react'
import { ConnectedAddTodo } from '../containers/ConnectedAddTodo'
import { Component } from 'react'
import { Footer } from './Footer'
import { RouterContext } from 'react-router'
import { VisibleTodoList } from '../containers/VisibleTodoList'

interface AppProps extends RouterContext.RouterContextProps { }

export class App extends Component<AppProps, void> {
  public render() {
    // tslint:disable-next-line no-string-literal
    const activeFilter = this.props.params['filter']
    return (
      <div>
        <ConnectedAddTodo/>
        <VisibleTodoList activeFilter={activeFilter}/>
        <Footer/>
      </div>
    )
  }
}