import * as React from 'react'
import { Component } from 'react'

import { FilterLink } from '../containers/FilterLink'

export class Footer extends Component<void, void> {
  public render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink to="/">All</FilterLink>
        {', '}
        <FilterLink to="/active">Active</FilterLink>
        {', '}
        <FilterLink to="/completed">Completed</FilterLink>
      </p>
    )
  }
}