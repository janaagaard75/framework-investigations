import * as React from 'react'
import { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { Footer } from './Footer'
import { Header } from './Header'
import { Info } from './Info'
import { Main } from './Main'
import { TodoModel } from './TodoModel'

@observer
export class App extends Component<{}, void> {
  constructor(props: {}, context?: any) {
    super(props, context)

    this.todos = [
      new TodoModel('Taste JavaScript', true),
      new TodoModel('Buy a unicorn', false)
    ]
  }

  @observable private readonly todos: Array<TodoModel>

  public render() {
    return (
      <div>
        <section className="todoapp">
          <Header addTodo={text => this.addTodo(text)}/>
          {this.todos.length >= 1 &&
            <Main
              deleteTodo={todo => this.deleteTodo(todo)}
              todos={this.todos}
            />
          }
          {this.todos.length >= 1 &&
            <Footer
              deleteTodo={todo => this.deleteTodo(todo)}
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
}

// TODO: What difference would it make if the todos were in App's state instead of being a private member?