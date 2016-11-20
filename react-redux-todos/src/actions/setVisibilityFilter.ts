import actionCreatorFactory from 'redux-typescript-actions'
import { Filter } from '../model/Filter'

export const setVisibilityFilter = actionCreatorFactory()<Filter>('SET_VISIBILITY_FILTER')