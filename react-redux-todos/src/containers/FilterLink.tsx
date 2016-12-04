import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { Filter } from '../model/Filter'
import { LinkUnlessActive } from '../components/LinkUnlessActive'
import { RootState } from '../model/RootState'

interface StateProps {
  active: boolean
}

interface OwnProps {
  filter: Filter
}

export type MergedProps = StateProps & OwnProps

const isActive = (pathname: string, filter: Filter): boolean => {
  // TODO: Figure out a better way to associate pathname and filter.
  return (
    (pathname === '/' && filter === 'SHOW_ALL')
    || (pathname === '/active' && filter === 'SHOW_ACTIVE')
    || (pathname === '/completed' && filter === 'SHOW_COMPLETED')
  )
}

const toPathname = (filter: Filter): string => {
  // TODO: Figure out a better way to associate pathname and filter.
  switch (filter) {
    default:
    case 'SHOW_ALL':
      return '/'

    case 'SHOW_ACTIVE':
      return '/active'

    case 'SHOW_COMPLETED':
      return '/completed'
  }
}

const mapStateToProps = (rootState: RootState, ownProps: OwnProps): StateProps => {
  return {
    // TODO: Pass down activeFilter instead of this.
    active: isActive(rootState.routing.locationBeforeTransitions.pathname, ownProps.filter)
  }
}

class FilterLinkComponent extends Component<MergedProps, void> {
  constructor(props: MergedProps, context?: any) {
    super(props, context)
  }

  public render() {
    const to = toPathname(this.props.filter)

    return (
      <LinkUnlessActive active={this.props.active} to={to}>
        {this.props.children}
      </LinkUnlessActive>
    )
  }
}

export const FilterLink = connect<StateProps, {}, OwnProps>(mapStateToProps)(FilterLinkComponent)