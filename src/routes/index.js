/* @flow */
// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import TheWireCharactersRoute from './TheWireCharacters'

export const createRoutes = (store: Object) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    TheWireCharactersRoute(store)
  ]
})

export default createRoutes
