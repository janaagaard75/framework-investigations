// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { App } from './components/App'
import { rootReducer } from './reducers/rootReducer'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)