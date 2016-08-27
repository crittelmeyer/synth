/* @flow */
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'styles/js/themes/hiveDefault'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { globalStyles } from 'styles/js/global_styles'
import Helmet from 'react-helmet'

// Needed for onTouchTap
// Can go away when react 1.0 is released
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
try {
  injectTapEventPlugin()
} catch (e) {} // eslint-disable-line no-empty

type Props = {
  children: React.Component
}

const styles = {
  mainContainer: {

  }
}

const muiTheme = getMuiTheme(baseTheme)

export const CoreLayout = (props: Props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.mainContainer}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Hive"
        titleTemplate="Hive - %s"
        defaultTitle="Hive"
        meta={[
          { name: 'description', content: 'Hive' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { charset: 'utf-8' }
        ]}
        link={[
          { rel: 'canonical', href: 'http://hive.com/example' },
          { rel: 'apple-touch-icon', href: 'http://hive.com/img/apple-touch-icon-57x57.png' },
          { rel: 'apple-touch-icon', sizes: '72x72', href: 'http://hive.com/img/apple-touch-icon-72x72.png' },
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' },
        ]}
      />

      <div>
        {props.children}
      </div>
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
