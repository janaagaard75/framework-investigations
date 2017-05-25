import * as React from 'react'
import { Component } from 'react'
import { MouseEvent } from 'react'
import { observer } from 'mobx-react'

import { Route } from './Route'

interface Props {
  currentRoute: Route
  route: Route
  setCurrentRoute: (route: Route) => void
}

@observer
export class FilterLink extends Component<Props, void> {
  public render() {
    return (
      <li>
        <a
          className={this.props.currentRoute.filter === this.props.route.filter ? 'selected' : ''}
          href=""
          onClick={e => this.navigate(e, this.props.route)}
        >
          {this.props.route.caption}
        </a>
      </li>
    )
  }

  private navigate(e: MouseEvent<HTMLAnchorElement>, route: Route): void {
    e.preventDefault()
    this.props.setCurrentRoute(route)
  }
}