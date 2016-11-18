import { createStore } from 'redux'
import rootReducer from '../reducers'
import State from '../interfaces/State'

const configureStore = (preloadedState?: State) => {
  const store = createStore(rootReducer, preloadedState)

  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers.
    (module as any).hot.accept('../reducers', () => {
      const nextReducer = (require('../reducers') as any).default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
