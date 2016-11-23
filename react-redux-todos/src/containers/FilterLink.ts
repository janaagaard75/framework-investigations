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

interface LinkPropTypes {
  active: boolean,
  children: React.ReactChildren,
  onClick: () => void
}

interface MergedProps {
  active: boolean,
  filter: Filter,
  onClick: () => void
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

// TODO: Add types to the connect method: TStateProps, TDispatchProps, TOwnProps and maybe also TMergedProps. Adding the merged properties might fix the build issue in Link.tsx.
// tslint:disable-next-line variable-name
export const FilterLink = connect<StateProps, DispatchProps, OwnProps, LinkPropTypes>(
  mapStateToProps,
  mapDispatchToProps
)(Link)