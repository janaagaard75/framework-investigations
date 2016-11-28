import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router'

interface LinkUnlessActivePropTypes {
  active: boolean
  to: string
}

export class LinkUnlessActive extends Component<LinkUnlessActivePropTypes, void> {
  public render() {
    if (this.props.active) {
      return (
        <span className="active">
          {this.props.children}
        </span>
      )
    }

    return (
      <Link to={this.props.to}>
        {this.props.children}
      </Link>
    )
  }
}