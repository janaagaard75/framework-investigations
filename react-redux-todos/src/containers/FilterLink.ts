import { connect } from 'react-redux'

import { LinkUnlessActive } from '../components/LinkUnlessActive'
import { RootState } from '../model/RootState'

interface StateProps {
  active: boolean
}

// TODO: Consider just using 'any' in the call to connect, and remove this interface.
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

// tslint:disable-next-line variable-name
export const FilterLink = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps
)(LinkUnlessActive)