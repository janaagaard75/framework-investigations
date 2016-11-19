import { connect } from 'react-redux'
import { Link } from '../components/Link'
import { RootStore } from '../model/RootStore'
import { setVisibilityFilter } from '../actions/setVisibilityFilter'

const mapStateToProps = (state: RootStore, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

// tslint:disable-next-line variable-name
export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)