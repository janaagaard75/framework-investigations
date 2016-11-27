import * as React from 'react'
import { browserHistory } from 'react-router'
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { Router } from 'react-router'
import { routerReducer } from 'react-router-redux'
import { Store } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import { App } from './components/App'
import { RootStore } from './model/RootStore'
import { todosReducer } from './reducers/todosReducer'
import { visibilityFilterReducer } from './reducers/visibilityFilterReducer'

const rootReducer = combineReducers<RootStore>({
  routing: routerReducer,
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

const store: Store<RootStore> = createStore<RootStore>(rootReducer)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        {/* TODO: Consider using a router parameter instead. */}
        <Route path="/"/>
        <Route path="/active"/>
        <Route path="/completed"/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)