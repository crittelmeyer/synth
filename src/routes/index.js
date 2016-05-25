/* @flow */
// We only need to import the modules necessary for initial render
import CoreLayout from 'containers/CoreLayoutContainer'
import Home from './Home'
import TheWireCharactersRoute from './TheWireCharacters'

export const createRoutes = (store: Object) => ({
  path: '/',
  ...CoreLayout(store),
  indexRoute: Home,
  childRoutes: [
    TheWireCharactersRoute(store)
  ]
})

export default createRoutes
