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

@observer
export class App extends Component<{}, void> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.routes = new Routes()

    this.currentRoute = this.routes.getFromPath(window.location.pathname)

    this.todos = [
      new TodoModel('Taste JavaScript', true),
      new TodoModel('Buy a unicorn', false)
    ]

    autorun(() => {
      this.updatePath()
    })
  }

  @observable private currentRoute: Route
  private readonly routes: Routes
  @observable private readonly todos: Array<TodoModel>

  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={text => this.addTodo(text)}/>
          {this.todos.length >= 1 &&
            <Main
              currentRoute={this.currentRoute}
              deleteTodo={todo => this.deleteTodo(todo)}
              todos={this.todos}
            />
          }
          {this.todos.length >= 1 &&
            <Footer
              currentRoute={this.currentRoute}
              deleteTodo={todo => this.deleteTodo(todo)}
              routes={this.routes}
              setCurrentRoute={(route: Route) => this.setCurrentRoute(route)}
              todos={this.todos}
            />
          }
        </section>
        <Info/>
      </div>
    )
  }

  private addTodo(text: string) {
    this.todos.push(new TodoModel(text, false))
  }

  private deleteTodo(todo: TodoModel) {
    const index = this.todos.indexOf(todo)

    if (index === -1) {
      return
    }

    this.todos.splice(index, 1)
  }

  private setCurrentRoute(route: Route) {
    this.currentRoute = route
  }

  private updatePath() {
    history.pushState({}, '', this.currentRoute.path)
  }
}

// TODO: What difference would it make if the todos were in App's state instead of being a private member?