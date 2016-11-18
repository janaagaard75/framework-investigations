import * as React from 'react'
import Footer from './Footer'
import State from '../interfaces/State'
import TodoItem from './TodoItem'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

interface PropTypes {
  todos: State,
  actions: any
}

class MainSection extends React.Component<PropTypes, any> {
  constructor(props: PropTypes, context: any) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    this.props.actions.clearCompleted()
  }

  handleShow(filter: string) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount: number) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={actions.completeAll} />
      )
    }
  }

  renderFooter(completedCount: number) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted.bind(this)}
          onShow={this.handleShow.bind(this)} />
      )
    }
  }

  render() {
    // const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = this.props.todos.filter(TODO_FILTERS[filter])
    const completedCount = this.props.todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...this.props.actions} />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

export default MainSection
