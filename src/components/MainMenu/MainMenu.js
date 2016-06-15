/* @flow */
import React from 'react'
import { globalStyles, currentTheme } from 'styles/js/global_styles'
import { Drawer } from 'material-ui'
import LogoImage from 'shared/images/tillur-logo.png'
import MENU_ITEMS from './menu-items'
import zIndex from 'material-ui/styles/zIndex'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

type Sizes = {
  headerHeight: number,
  itemHeight: number,
  width: number,
  subMenuWidth: number
}

type Props = {
  open: boolean,
  sizes: Sizes,
  contentLeft: number,
  style: Object,
  toggleMenu: Function,
  closeMenu: Function,
  selectSubMenuItem: Function
}

const styles = {
  menu: (sizes) => ({
    minHeight: (MENU_ITEMS.length * sizes.itemHeight) + globalStyles.DBL_STANDARD_SPACING + sizes.headerHeight,
    textAlign: 'center',
    zIndex: zIndex.navDrawer + 2
  }),
  menuItem: (sizes) => ({
    color: currentTheme.palette.alternateTextColor,
    fontSize: 12,
    height: sizes.itemHeight
  }),
  subMenu: (left, sizes, open) => ({
    left: left - globalStyles.DBL_STANDARD_SPACING,
    minHeight: (MENU_ITEMS.length * sizes.itemHeight) + globalStyles.DBL_STANDARD_SPACING + sizes.headerHeight,
    transform: 'none',
    transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    width: open ? sizes.subMenuWidth : 0
  }),
  subMenuItem: {
    whiteSpace: 'nowrap'
  },
  logo: {
    marginBottom: globalStyles.STANDARD_SPACING,
    marginTop: globalStyles.STANDARD_SPACING
  }
}

// TODO: determine if width={props.sizes.width} below in <ListItem> is actually changing anything visually
// TODO: woah, and apparently same for the Drawer down below - in both of these cases, at some point it was no longer
// pulling from the right prop, and I never noticed... I wonder if width was broken and I just happened to not notice?
export const MainMenu = (props: Props) => (
  <div>
    <Drawer
      width={props.sizes.width}
      containerStyle={{
        ...props.style,
        ...styles.menu(props.sizes)
      }}
    >
      <img alt="Tillur logo" src={LogoImage} style={styles.logo} />

      {MENU_ITEMS.map((item: Object) => (
        <MenuItem
          key={item.id}
          style={styles.menuItem(props.sizes)}
          item={item}
          toggleMenu={props.toggleMenu}
        />
      ))}
    </Drawer>
    {MENU_ITEMS.map((item: Object) => (
      item.subMenuItems && item.subMenuItems.length > 0
      ? <SubMenu
          key={item.id}
          item={item}
          toggleMenu={props.toggleMenu}
          selectSubMenuItem={props.selectSubMenuItem}
          style={{
            ...props.style,
            ...styles.subMenu(props.contentLeft, props.sizes, props.open === item.id)
          }}
          subMenuItemStyle={styles.subMenuItem}
          open={props.open}
        />
      : null
    ))}
  </div>
)

MainMenu.propTypes = {
  open: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]).isRequired,
  sizes: React.PropTypes.shape({
    headerHeight: React.PropTypes.number,
    itemHeight: React.PropTypes.number,
    width: React.PropTypes.number,
    subMenuWidth: React.PropTypes.number
  }).isRequired,
  contentLeft: React.PropTypes.number.isRequired,
  style: React.PropTypes.object.isRequired
}

export default MainMenu
