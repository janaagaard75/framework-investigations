// TODO: The file is currently not used. It might get deprecated.
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { createSetVisibilityFilter } from '../actions/createSetVisibilityFilter'
import { Filter } from '../model/Filter'
import { Link } from '../components/Link'
import { RootStore } from '../model/RootStore'

interface StateProps {
  active: boolean
}

interface DispatchProps {
  onClick: () => void
}

interface OwnProps {
  filter: Filter
}

const mapStateToProps = (state: RootStore, ownProps: OwnProps): StateProps => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootStore>, ownProps: OwnProps): DispatchProps => {
  return {
    onClick: () => {
      dispatch(createSetVisibilityFilter(ownProps.filter))
    }
  }
}

// TODO: 'as any' is required to make it build. Hopefully this will soon get fixed, so it's no longer necessary.
// tslint:disable-next-line variable-name
export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link) as any