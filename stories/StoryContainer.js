/* @flow */
import React from 'react'
import baseTheme from 'styles/js/themes/beatboxDefault'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Helmet from 'react-helmet'
import Radium from 'radium'

type Props = {
  children: React.Element,
  style: Object
}

const styles = {
  container: {
    margin: '90px auto',
    width: 280
  }
}

const muiTheme = getMuiTheme(baseTheme)
const StoryContainer = (props: Props) => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={[
        styles.container,
        props.style
      ]}>
        <Helmet
          link={[
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' }
          ]}
        />
        {props.children}
      </div>
    </MuiThemeProvider>
  </div>
)

export default Radium(StoryContainer)
