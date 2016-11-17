// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as ReactRedux from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

const store = configureStore()

ReactDom.render(
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>,
  document.getElementById('root')
)
