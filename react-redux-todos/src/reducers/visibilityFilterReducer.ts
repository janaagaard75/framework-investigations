import { Action as ReduxAction } from 'redux'
import { Filter } from '../model/Filter'
import { isType } from 'redux-typescript-actions'
import { setVisibilityFilter } from '../actions/setVisibilityFilter'

export const visibilityFilterReducer = (state: Filter = 'SHOW_ALL', action: ReduxAction): Filter => {
  if (isType(action, setVisibilityFilter)) {
    return action.payload
  }

  return state
}