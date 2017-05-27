import * as React from 'react'
import { autorun } from 'mobx'
import { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'
import { Main } from './Main'
import { Route } from './Route'
import { Routes } from './Routes'
import { TodoModel } from './TodoModel'
import { Todos } from './Todos'

@observer
export class App extends Component<{}, void> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.routes = new Routes()

    this.currentRoute = this.routes.getFromPath(window.location.pathname)

    this.todos = new Todos([
      new TodoModel('Taste JavaScript', true),
      new TodoModel('Buy a unicorn', false)
    ])

    autorun(() => {
      this.updatePath()
    })
  }

  @observable private currentRoute: Route
  private readonly routes: Routes
  @observable private readonly todos: Todos

  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={text => this.todos.addTodo(text)}/>
          <Main
            currentRoute={this.currentRoute}
            todos={this.todos}
          />
          <Footer
            currentRoute={this.currentRoute}
            routes={this.routes}
            setCurrentRoute={(route: Route) => this.setCurrentRoute(route)}
            todos={this.todos}
          />
        </section>
        <Info/>
      </div>
    )
  }

  private setCurrentRoute(route: Route) {
    this.currentRoute = route
  }

  private updatePath() {
    history.pushState({}, '', this.currentRoute.path)
  }
}