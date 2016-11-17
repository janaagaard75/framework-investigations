import { Action } from 'redux-actions'

export interface ActionWithPayload<Payload> extends Action<Payload> {
    payload: Payload
}

export interface ActionWithoutPayload extends Action<undefined> {
    payload?: undefined
}
