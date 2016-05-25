import CoreLayoutContainer from './CoreLayoutContainer'
import reducer from './main-menu'
import { injectReducer } from 'store/reducers'

export default (store) => ({

  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const CoreLayout = require('./CoreLayoutContainer').default
      const reducer = require('./main-menu').default

      /*  Add the reducer to the store on key 'theWireCharacters'  */
      injectReducer(store, { key: 'mainMenu', reducer })

      /*  Return getComponent   */
      cb(null, CoreLayout)

      /* Webpack named bundle   */
    }, 'mainMenu')
  }
})
