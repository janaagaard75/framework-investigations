import * as React from 'react'
import DevTools from 'mobx-react-devtools'
import { render } from 'react-dom'

import '../node_modules/todomvc-app-css/index.css'

import { App } from './components/App'

render(
  <div>
    <App/>
    <DevTools/>
  </div>,
  document.getElementById('app')
)