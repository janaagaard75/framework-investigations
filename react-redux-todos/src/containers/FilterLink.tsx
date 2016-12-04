import * as React from 'react'
import { Component } from 'react'

import { Filter } from '../model/Filter'
import { LinkUnlessActive } from '../components/LinkUnlessActive'

const toPathname = (filter: Filter): string => {
  // TODO: Figure out a better way to associate pathname and filter.
  switch (filter) {
    case 'SHOW_ALL':
      return '/'

    case 'SHOW_ACTIVE':
      return '/active'

    case 'SHOW_COMPLETED':
      return '/completed'

    default:
      throw new Error(`The filter '${filter}' is not supported.`)
  }
}

interface FilterLinkProps {
  activeFilter: Filter
  filter: Filter
}

export class FilterLink extends Component<FilterLinkProps, void> {
  constructor(props: FilterLinkProps, context?: any) {
    super(props, context)
  }

  public render() {
    const isActive = (this.props.filter === this.props.activeFilter)
    const pathname = toPathname(this.props.filter)

    return (
      <LinkUnlessActive active={isActive} to={pathname}>
        {this.props.children}
      </LinkUnlessActive>
    )
  }
}

// TODO: Consider moving the files in the comtainers folder into the components folder.