import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createSetVisibilityFilter } from '../actions/createSetVisibilityFilter'
import { Filter } from '../model/Filter'
import { Link } from '../components/Link'
import { RootStore } from '../model/RootStore'

interface OwnProps {
  filter: Filter
}

const mapStateToProps = (state: RootStore, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootStore>, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(createSetVisibilityFilter(ownProps.filter))
    }
  }
}

// tslint:disable-next-line variable-name
export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)