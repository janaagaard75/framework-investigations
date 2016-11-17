import * as React from 'react'
import TodoTextInput from './TodoTextInput'

// TODO: Re-use the function type.
interface PropTypes {
  addTodo: (text: string) => void
}

class Header extends React.Component<PropTypes, any> {
  handleSave(text: string) {
    if (text.length !== 0) {
      // TODO: createAddTodoAction(text) would be more correct. Is it possible to that naming convention?
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave.bind(this)}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
