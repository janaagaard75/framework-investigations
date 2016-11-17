import { Action } from '../actions/Action'
import { Filter } from '../model/Filter'
import { isType } from './isType'
import { setVisibilityFilter } from '../actions/setVisibilityFilter'

export const visibilityFilterReducer = (state: Filter = 'SHOW_ALL', action: Action<any>): Filter => {
  if (isType(action, setVisibilityFilter)) {
    return action.payload
  }

  return state
}