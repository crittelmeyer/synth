import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import handleTransitions from 'redux-history-transitions'
import createSagaMiddleware from 'redux-saga'
import makeRootReducer from './reducers'
import { rootSaga } from 'sagas'

// NOTE: there is currently a bug with babel-eslint where a `space-infix-ops`
// error is incorrectly thrown when using arrow functions, hence the oddity.
// see https://github.com/eslint/eslint/issues/5211 to track the issue
export default function (initialState: Object = {}, history: Object) {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history)
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      handleTransitions(history),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
