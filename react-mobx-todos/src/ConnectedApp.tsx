import * as React from 'react'
// TODO: Figure out how to remove dev tools from the production bundle.
import DevTools from 'mobx-react-devtools'
import { useStrict } from 'mobx'

import { ActiveFilterRouteParams } from './components/ActiveFilterRouteParams'
import { App } from './components/App'
import { RouteComponent } from './model/RouteComponent'
import { Store } from './model/Store'

declare const process: any

export class ConnectedApp extends RouteComponent<ActiveFilterRouteParams, void> {
  constructor() {
    super()

    this.includeDevTools = process.env.NODE_ENV === 'development'

    useStrict(true)
    this.store = new Store()
  }

  private includeDevTools: boolean
  private store: Store

  public render() {
    return (
      <div>
        <App routeProps={this.props} store={this.store}/>
        {this.includeDevTools &&
          <DevTools/>
        }
      </div>
    )
  }
}