// TODO: This is action creator is not used. Should it?
import actionCreatorFactory from 'redux-typescript-actions'
import { Filter } from '../model/Filter'

export const createSetVisibilityFilter = actionCreatorFactory()<Filter>('SET_VISIBILITY_FILTER')