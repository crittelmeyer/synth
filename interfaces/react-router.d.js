import React from 'react'

declare module 'react-router' {
  declare function withRouter(component: React.Component): React.Component
  declare var Link: React.Component
  declare function useRouterHistory(creatHistory: Function): Function
}
