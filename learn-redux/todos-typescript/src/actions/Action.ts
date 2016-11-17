// TODO: Consider using the standard Redux action library.

// From http://michaellawrie.com/typesafe-redux-in-typescript
export interface Action<Payload> {
  readonly type: string
  readonly payload: Payload
}