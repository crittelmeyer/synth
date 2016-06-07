/* @flow */
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

export const makeRootReducer = (asyncReducers: ?Object): Function => (
  combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers
  })
)

export const injectReducer = (store: Object, { key, reducer }: Object) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
