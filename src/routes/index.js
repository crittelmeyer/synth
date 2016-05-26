/* @flow */
// We only need to import the modules necessary for initial render
import CoreLayout from 'containers/CoreLayoutContainer'
import Home from './Home'
import TheWireCharacters from './TheWireCharacters'
import Gallery from './Gallery'

export const createRoutes = (store: Object) => ({
  path: '/',
  ...CoreLayout(store),
  indexRoute: Home,
  childRoutes: [
    TheWireCharacters(store),
    Gallery(store)
  ]
})

export default createRoutes
