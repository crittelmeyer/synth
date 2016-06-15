/* @flow */
import React from 'react'
import { Drawer } from 'material-ui'
import SubMenuItem from './SubMenuItem'

type Props = {
  toggleMenu: Function,
  selectSubMenuItem: Function,
  style: Object,
  subMenuItemStyle: Object,
  open: Boolean | Number,
  item: Object
}

export class SubMenu extends React.Component {
  constructor(props: Props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu: () => void;
  toggleMenu () {
    this.props.toggleMenu(this.props.item)
  }

  render () {
    return (
      <Drawer
        key={this.props.item.id}
        containerStyle={this.props.style}
        onRequestChange={this.toggleMenu}
        open={this.props.open === this.props.item.id}
        docked={false}
      >
        {this.props.item.subMenuItems.map((subMenuItem: Object) => (
          <SubMenuItem
            key={subMenuItem.id}
            item={subMenuItem}
            selectSubMenuItem={this.props.selectSubMenuItem}
            style={this.props.subMenuItemStyle}
          />
        ))}
      </Drawer>
    )
  }
}

export default SubMenu
