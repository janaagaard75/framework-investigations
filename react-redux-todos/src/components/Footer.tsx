import * as React from 'react'
import { Link } from 'react-router'

export class Footer extends React.Component<void, void> {
  public render() {
    return (
      <p>
        {/* TODO: Consider making the active link unclickable. See http://stackoverflow.com/questions/35963070/react-router-how-to-disable-a-link-if-its-active. Might change if a route paraemter is introduced.  */}
        Show:
        {' '}
        <Link to="/" activeClassName="active">All</Link>
        {', '}
        <Link to="/active" activeClassName="active">Active</Link>
        {', '}
        <Link to="/completed" activeClassName="active">Completed</Link>
      </p>
    )
  }
}