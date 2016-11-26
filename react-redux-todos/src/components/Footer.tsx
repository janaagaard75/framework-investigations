import * as React from 'react'
import { Link } from 'react-router'

export class Footer extends React.Component<void, void> {
  public render() {
    return (
      <p>
        Show:
        {' '}
        <Link to="/" activeClassName="selected">All</Link>
        {', '}
        <Link to="/active" activeClassName="selected">Active</Link>
        {', '}
        <Link to="/completed" activeClassName="selected">Completed</Link>
      </p>
    )
  }
}