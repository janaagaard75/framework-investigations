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
import { TodoModel } from './TodoModel'

interface PathAndFilter {
  filter: Filter
  path: string
}

const pathsAndFilters: Array<PathAndFilter> = [
  {
    filter: 'all',
    path: '/'
  },
  {
    filter: 'active',
    path: '/active'
  },
  {
    filter: 'completed',
    path: '/completed'
  }
]

@observer
export class App extends Component<{}, void> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.todos = [
      new TodoModel('Taste JavaScript', true),
      new TodoModel('Buy a unicorn', false)
    ]

    this.currentFilter = App.getFilter(window.location.pathname)

    autorun(() => {
      this.updatePath()
    })
  }

  @observable private currentFilter: Filter
  @observable private readonly todos: Array<TodoModel>

  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={text => this.addTodo(text)}/>
          {this.todos.length >= 1 &&
            <Main
              currentFilter={this.currentFilter}
              deleteTodo={todo => this.deleteTodo(todo)}
              todos={this.todos}
            />
          }
          {this.todos.length >= 1 &&
            <Footer
              currentFilter={this.currentFilter}
              deleteTodo={todo => this.deleteTodo(todo)}
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

  private static getFilter(path: string): Filter {
    const match = pathsAndFilters.find(pathAndFilter => pathAndFilter.path === path)
    if (match === undefined) {
      // TODO: This should return the HTTP error 404 Not Found.
      throw new Error(`Could not find the path '${path}'.`)
    }

    return match.filter
  }

  private static getPath(filter: Filter): string {
    const match = pathsAndFilters.find(pathAndFilter => pathAndFilter.filter === filter)
    if (match === undefined) {
      throw new Error(`Could not find the filter '${filter}'.`)
    }

    return match.path
  }

  private setCurrentFilter(filter: Filter) {
    this.currentFilter = filter
  }

  private updatePath() {
    const path = App.getPath(this.currentFilter)
    history.pushState({}, '', path)
  }
}

// TODO: What difference would it make if the todos were in App's state instead of being a private member?