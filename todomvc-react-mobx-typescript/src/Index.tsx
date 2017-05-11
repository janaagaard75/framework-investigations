import * as React from 'react'
import { render } from 'react-dom'

import '../node_modules/todomvc-app-css/index.css'

import { App } from './components/App'

render(
  <App/>,
  document.getElementById('app')
)