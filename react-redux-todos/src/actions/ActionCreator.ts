import { Action } from './Action'

export interface ActionCreator<Payload> {
  readonly type: string
  (payload: Payload): Action<Payload>
}