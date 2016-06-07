import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

type Props = {
  history: Object,
  routes: Object,
  routerKey: Number,
  store: Object
}

const AppContainer = (props: Props) => (
  <Provider store={props.store}>
    <div style={{ height: '100%' }}>
      <Router
        history={props.history}
        children={props.routes}
        key={props.routerKey}
      />
    </div>
  </Provider>
)

export default AppContainer
