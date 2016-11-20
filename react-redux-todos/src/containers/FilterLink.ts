import { connect } from 'react-redux'

import { createSetVisibilityFilter } from '../actions/createSetVisibilityFilter'
import { Link } from '../components/Link'
import { RootStore } from '../model/RootStore'

const mapStateToProps = (state: RootStore, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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