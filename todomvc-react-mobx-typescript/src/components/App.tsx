import * as React from 'react'
import { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'
import { Main } from './Main'
import { Todo } from './Todo'

@observer
export class App extends Component<{}, void> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.todos = [
      new Todo('Taste JavaScript', true),
      new Todo('Buy a unicorn', false)
    ]
  }

  @observable private readonly todos: Array<Todo>

  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={text => this.addTodo(text)}/>
          <Main todos={this.todos}/>
          <Footer todos={this.todos}/>
        </section>
        <Info/>
      </div>
    )
  }

  private addTodo(text: string) {
    this.todos.push(new Todo(text, false))
  }
}