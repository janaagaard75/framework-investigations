import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import * as React from 'react'
import { render } from 'react-dom'

import { ConnectedApp } from './App'
import { rootReducer } from './rootReducer'
import { Todo } from './todos/model'

import 'todomvc-app-css/index.css'

export type GlobalReduxState = {
  todos?: Array<Todo>
}

const store: Store<GlobalReduxState> = createStore<GlobalReduxState>(rootReducer)

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app')
)