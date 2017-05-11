import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'
import { Main } from './Main'
import { Todo } from './Todo'

@observer
export class App extends Component<{}, void> {
  public render() {
    const todos: Array<Todo> = [
      new Todo('Taste JavaScript'),
      new Todo('Buy a unicorn')
    ]
    todos[0].completed = true

    return (
      <div>
        <section className="todoapp">
          <Header/>
          <Main todos={todos}/>
          <Footer/>
        </section>
        <Info/>
      </div>
    )
  }
}