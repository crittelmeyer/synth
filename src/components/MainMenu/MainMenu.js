/* @flow */
import React from 'react'
import globalStyles from 'styles/js/global_styles'
import { Drawer } from 'material-ui'

import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
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

const MENU_ITEMS = [
  {
    text: 'Overview',
    icon: <ContentInbox />,
    subMenuItems: [
      {
        text: 'Hey!',
        href: '/'
      },
      {
        text: 'Look at all',
        href: '/'
      },
      {
        text: 'these menu items!',
        href: '/'
      },
      {
        text: 'They do not',
        href: '/'
      },
      {
        text: 'actually go anywhere...',
        href: '/'
      },
      {
        text: '...',
        href: '/'
      },
      {
        text: 'but you get the idea!',
        href: '/'
      },
      {
        text: 'Actually this one goes to google',
        href: 'http://www.google.com/'
      }
    ]
  },
  {
    text: 'Material-UI',
    icon: <ActionGrade />,
    subMenuItems: [
      {
        text: 'Docs',
        href: 'http://www.material-ui.com/'
      },
      {
        text: 'Demo',
        href: 'http://www.material-ui.com/#/components/app-bar'
      }
    ]
  },
  {
    text: 'Fetch Data',
    icon: <ContentDrafts />,
    href: '/the-wire-characters'
  },
  {
    text: 'Post Data',
    icon: <ContentSend />,
    href: '/add-the-wire-character'
  },
  {
    text: 'React-Slick',
    icon: <ContentDrafts />,
    href: '/the-wire-gallery'
  }
]

const styles = {
  menu: (sizes) => ({
    minHeight: (MENU_ITEMS.length * sizes.itemHeight) + globalStyles.DBL_STANDARD_SPACING + sizes.headerHeight,
    textAlign: 'center',
    zIndex: zIndex.navDrawer + 2
  }),
  menuItem: (sizes) => ({
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
      <img src={`http://lorempixel.com/${props.sizes.width}/${props.sizes.headerHeight}/technics`} />

      {MENU_ITEMS.map((item: Object, index: number) => (
        <MenuItem
          key={index}
          id={index}
          width={props.sizes.width}
          style={styles.menuItem(props.sizes)}
          item={item}
          toggleMenu={props.toggleMenu}
        />
      ))}
    </Drawer>
    {MENU_ITEMS.map((item: Object, index: number) => (
      item.subMenuItems && item.subMenuItems.length > 0
        ? <SubMenu
          key={index}
          id={index}
          item={item}
          toggleMenu={props.toggleMenu}
          selectSubMenuItem={props.selectSubMenuItem}
          style={{
            ...props.style,
            ...styles.subMenu(props.contentLeft, props.sizes, props.open === index)
          }}
          subMenuItemStyle={styles.subMenuItem}
          open={props.open}
          width={props.sizes.subMenuWidth}
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
