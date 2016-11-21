// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'

import { App } from './components/App'
import { rootReducer } from './reducers/rootReducer'
import { RootStore } from './model/RootStore'

const initialState = new RootStore([], 'SHOW_ALL')
const store: Store<RootStore> = createStore<RootStore>(rootReducer, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)