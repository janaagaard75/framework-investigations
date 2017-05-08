import * as React from 'react'
import { Component } from 'react'
import { observer } from 'mobx-react'

import { TodoList } from './TodoList'

@observer
export class App extends Component<{}, void> {
  public render() {
    return (
      <section className="todoapp">
        <section className="main">
          <TodoList/>
        </section>
      </section>
    )
  }
}