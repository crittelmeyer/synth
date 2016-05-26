/* @flow */
import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import baseTheme from 'styles/js/themes/tillurDefault'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { globalStyles } from 'styles/js/global_styles'
import Helmet from 'react-helmet'

import Header from '../../components/Header'
import MainMenu from '../../components/MainMenu'

// Needed for onTouchTap
// Can go away when react 1.0 is released
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
try {
  injectTapEventPlugin()
} catch (e) {} // eslint-disable-line no-empty

type Props = {
  menuOpen: boolean,
  toggleMenu: Function,
  closeMenu: Function,
  selectSubMenuItem: Function,
  children: React.Component
}

const MAIN_MENU_ITEM_HEIGHT = 72
const MAIN_MENU_WIDTH = 128
const SUB_MENU_WIDTH = 256
const HEADER_SEARCH_HEIGHT = 46
const HEADER_HEIGHT = HEADER_SEARCH_HEIGHT + globalStyles.DBL_STANDARD_SPACING
const CONTENT_LEFT = MAIN_MENU_WIDTH + globalStyles.DBL_STANDARD_SPACING
const CONTENT_TOP = HEADER_HEIGHT + globalStyles.STANDARD_SPACING

const styles = {
  mainContainer: {
    position: 'fixed',
    left: globalStyles.STANDARD_SPACING,
    top: globalStyles.STANDARD_SPACING,
    height: '100%',
    width: '100%'
  },
  mainMenu: {
    backgroundColor: '#343434',
    height: `calc(100% - ${globalStyles.DBL_STANDARD_SPACING}px)`,
    position: 'absolute'
  },
  header: {
    position: 'absolute',
    left: CONTENT_LEFT - globalStyles.STANDARD_SPACING,
    width: `calc(100% - ${CONTENT_LEFT + globalStyles.DBL_STANDARD_SPACING}px)`
  },
  content: {
    height: `calc(100% - ${CONTENT_TOP}px)`,
    overflowX: 'scroll',
    paddingTop: globalStyles.STANDARD_SPACING,
    position: 'fixed',
    left: CONTENT_LEFT,
    top: CONTENT_TOP,
    right: globalStyles.STANDARD_SPACING,
    zIndex: -1
  }
}

const muiTheme = getMuiTheme(baseTheme)

export const CoreLayout = (props: Props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.mainContainer}>
      <Helmet
        htmlAttributes={{'lang': 'en'}}
        title='Tillur'
        titleTemplate='Tillur.com - %s'
        defaultTitle='Tillur'
        meta={[
          {'name': 'description', 'content': 'Tillur'},
          {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'},
          {'charset': 'utf-8'}
        ]}
        link={[
          {'rel': 'canonical', 'href': 'http://tillur.com/example'},
          {'rel': 'apple-touch-icon', 'href': 'http://tillur.com/img/apple-touch-icon-57x57.png'},
          {'rel': 'apple-touch-icon', 'sizes': '72x72', 'href': 'http://tillur.com/img/apple-touch-icon-72x72.png'},
          {'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'},
          {'rel': 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css'}
        ]}
      />
      <MainMenu
        sizes={{
          headerHeight: HEADER_HEIGHT,
          itemHeight: MAIN_MENU_ITEM_HEIGHT,
          width: MAIN_MENU_WIDTH,
          subMenuWidth: SUB_MENU_WIDTH
        }}
        contentLeft={CONTENT_LEFT}
        style={styles.mainMenu}
        open={props.menuOpen}
        toggleMenu={props.toggleMenu}
        closeMenu={props.closeMenu}
        selectSubMenuItem={props.selectSubMenuItem}
      />

      <div>
        <div style={styles.header}>
          <Header height={HEADER_HEIGHT} />
        </div>
        <div style={styles.content}>
          {props.children}
        </div>
      </div>
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
