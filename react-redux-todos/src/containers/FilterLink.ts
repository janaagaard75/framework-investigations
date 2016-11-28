import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { LinkUnlessActive } from '../components/LinkUnlessActive'
import { RootState } from '../model/RootState'

// TODO: Clean up.
interface StateProps {
  active: boolean
}

interface DispatchProps {
}

interface OwnProps {
  to: string
}

const mapStateToProps = (state: RootState, ownProps: OwnProps): StateProps => {
  return {
    active: state.routing.locationBeforeTransitions.pathname === ownProps.to
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>, ownProps: OwnProps): DispatchProps => {
  return {
  }
}

// tslint:disable-next-line variable-name
export const FilterLink = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(LinkUnlessActive)