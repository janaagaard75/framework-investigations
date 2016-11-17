import { ActionCreator } from './ActionCreator'

export const createActionCreator = <Payload>(type: string): ActionCreator<Payload> =>
  Object.assign((payload: Payload): any => ({type, payload}), {type})