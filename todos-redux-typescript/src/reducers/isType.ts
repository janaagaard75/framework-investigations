import { Action } from '../actions/Action'
import { ActionCreator } from '../actions/ActionCreator'

export const isType = <Payload>(action: Action<any>, creator: ActionCreator<Payload>):
  action is Action<Payload> => action.type === creator.type