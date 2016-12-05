import * as React from 'react'
import { Component } from 'react'

import { Filter } from '../model/Filter'
import { FilterLink } from './FilterLink'

interface FooterProps {
  activeFilter: Filter
}

export class Footer extends Component<FooterProps, void> {
  constructor(props: FooterProps, context?: any) {
    super(props, context)
  }

  public render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter={Filter.ShowAll} activeFilter={this.props.activeFilter}>All</FilterLink>
        {', '}
        <FilterLink filter={Filter.ShowActive} activeFilter={this.props.activeFilter}>Active</FilterLink>
        {', '}
        <FilterLink filter={Filter.ShowCompleted} activeFilter={this.props.activeFilter}>Completed</FilterLink>
      </p>
    )
  }
}