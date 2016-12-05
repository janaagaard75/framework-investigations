import * as React from 'react'
import { ConnectedAddTodo } from './ConnectedAddTodo'
import { Component } from 'react'
import { Filter } from '../model/Filter'
import { Footer } from './Footer'
import { RouterContext } from 'react-router'
import { VisibleTodoList } from './VisibleTodoList'

interface AppProps extends RouterContext.RouterContextProps { }

export class App extends Component<AppProps, void> {
  private toFilter(filterString: string): Filter {
    switch (filterString) {
      case undefined:
        return Filter.ShowAll

      case 'active':
        return Filter.ShowActive

      case 'completed':
        return Filter.ShowCompleted

      default:
        throw new Error(`The filterString '${filterString}' is not supported.`)
    }
  }

  public render() {
    // tslint:disable-next-line no-string-literal
    const activeFilter = this.toFilter(this.props.params['filter'])
    return (
      <div>
        <ConnectedAddTodo/>
        <VisibleTodoList activeFilter={activeFilter}/>
        <Footer activeFilter={activeFilter}/>
      </div>
    )
  }
}