/* @flow */
import { connect } from 'react-redux'
import { toggleMenu, closeMenu, selectSubMenuItem } from './main-menu.js'

import CoreLayout from 'layouts/CoreLayout'

const mapStateToProps = (state) => ({
  menuOpen: state.mainMenu.menuOpen
})

const mapActionCreators = {
  toggleMenu,
  closeMenu,
  selectSubMenuItem
}

export default connect(mapStateToProps, mapActionCreators)(CoreLayout)
