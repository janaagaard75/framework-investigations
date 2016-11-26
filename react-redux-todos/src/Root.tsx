// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'
import { browserHistory, Route, Router } from 'react-router'

import { App } from './components/App'
import { rootReducer } from './reducers/rootReducer'
import { RootStore } from './model/RootStore'

const store: Store<RootStore> = createStore<RootStore>(rootReducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/"/>
        <Route path="/active"/>
        <Route path="/completed"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)