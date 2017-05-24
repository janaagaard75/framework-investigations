import * as React from 'react'
import { autorun } from 'mobx'
import { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { Filter } from './Filter'
import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'
import { Main } from './Main'
import { Routes } from './Routes'
import { TodoModel } from './TodoModel'

@observer
export class App extends Component<{}, void> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.routes = new Routes()

    this.currentFilter = this.routes.getFromPath(window.location.pathname).filter

    this.todos = [
      new TodoModel('Taste JavaScript', true),
      new TodoModel('Buy a unicorn', false)
    ]

    autorun(() => {
      this.updatePath()
    })
  }

  @observable private currentFilter: Filter
  private readonly routes: Routes
  @observable private readonly todos: Array<TodoModel>

  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={text => this.addTodo(text)}/>
          {this.todos.length >= 1 &&
            <Main
              currentRoute={this.routes.getFromFilter(this.currentFilter)}
              deleteTodo={todo => this.deleteTodo(todo)}
              todos={this.todos}
            />
          }
          {this.todos.length >= 1 &&
            <Footer
              currentFilter={this.currentFilter}
              deleteTodo={todo => this.deleteTodo(todo)}
              routes={this.routes}
              setCurrentFilter={(filter: Filter) => this.setCurrentFilter(filter)}
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

  private setCurrentFilter(filter: Filter) {
    this.currentFilter = filter
  }

  private updatePath() {
    const path = this.routes.getFromFilter(this.currentFilter).path
    history.pushState({}, '', path)
  }
}

// TODO: What difference would it make if the todos were in App's state instead of being a private member?