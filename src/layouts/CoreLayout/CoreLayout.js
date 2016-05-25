import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header'

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <Header />
      <div>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
