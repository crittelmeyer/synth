/* @flow */
// We only need to import the modules necessary for initial render
import CoreLayout from 'containers/CoreLayoutContainer'
import Home from './Home'
import TheWireCharacters from './TheWireCharacters'

export const createRoutes = (store: Object) => ({
  path: '/',
  ...CoreLayout(store),
  indexRoute: Home(store),
  childRoutes: [
    TheWireCharacters(store)
  ]
})

export default createRoutes
