/* @flow */
import { injectReducer } from '../../store/reducers'

export default (store: Object) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState: Object, cb: Function) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/home').default

      /*  Add the reducer to the store on key 'theWireCharacters'  */
      injectReducer(store, { key: 'home', reducer })

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'home')
  }
})
