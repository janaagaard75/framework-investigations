import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import State from '../interfaces/State'
import { actionCreators } from '../actions'

interface StatePropTypes {
  todos: State
}

interface ActionPropTypes {
  actions: any
}

interface PropTypes extends StatePropTypes, ActionPropTypes { }

class App extends React.Component<PropTypes, any> {
  render() {
    return (
      <div>
        <Header addTodo={this.props.actions.addTodo} />
        <MainSection todos={this.props.todos} actions={this.props.actions} />
      </div>
    )
  }
}

const mapStateToProps = (state: State): StatePropTypes => {
  return {
    // TODO: Why is this todosReducer and not todos?
    todos: (state as any).todosReducer
  }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): ActionPropTypes => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default connectedApp
