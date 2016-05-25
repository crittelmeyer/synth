/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  path: 'the-wire-characters',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState: Object, cb: Function) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const TheWireCharacters = require('./containers/TheWireCharactersContainer').default
      const reducer = require('./modules/the-wire-characters').default

      /*  Add the reducer to the store on key 'theWireCharacters'  */
      injectReducer(store, { key: 'theWireCharacters', reducer })

      /*  Return getComponent   */
      cb(null, TheWireCharacters)

      /* Webpack named bundle   */
    }, 'theWireCharacters')
  }
})
