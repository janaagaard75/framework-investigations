import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createSetVisibilityFilter } from '../actions/createSetVisibilityFilter'
import { Filter } from '../model/Filter'
import { Link } from '../components/Link'
import { RootStore } from '../model/RootStore'

interface FilterLinkProps {
  filter: Filter
}

const mapStateToProps = (state: RootStore, ownProps: FilterLinkProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootStore>, ownProps: FilterLinkProps) => {
  return {
    onClick: () => {
      dispatch(createSetVisibilityFilter(ownProps.filter))
    }
  }
}

// TODO: Add types to the connect method: TStateProps, TDispatchProps, TOwnProps and maybe also TMergedProps. Adding the merged properties might fix the build issue in Link.tsx.
// tslint:disable-next-line variable-name
export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)