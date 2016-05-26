/* @flow */
import React from 'react'
import { Drawer } from 'material-ui'
import SubMenuItem from './SubMenuItem'

export const SubMenu = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    toggleMenu: React.PropTypes.func.isRequired,
    selectSubMenuItem: React.PropTypes.func.isRequired,
    style: React.PropTypes.object.isRequired,
    subMenuItemStyle: React.PropTypes.object.isRequired,
    open: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.number
    ]).isRequired,
    item: React.PropTypes.object.isRequired,
    width: React.PropTypes.number.isRequired
  },

  _toggleMenu () {
    this.props.toggleMenu({ ...this.props.item, id: this.props.id })
  },

  render () {
    return (
      <Drawer
        key={this.props.id}
        containerStyle={this.props.style}
        onRequestChange={this._toggleMenu}
        open={this.props.open === this.props.id}
        width={this.props.width}
        docked={false}
      >
        {this.props.item.subMenuItems.map((subMenuItem: Object, subIndex: number) => (
          <SubMenuItem
            id={subIndex}
            key={subIndex}
            item={subMenuItem}
            selectSubMenuItem={this.props.selectSubMenuItem}
            style={this.props.subMenuItemStyle}
          />
        ))}
      </Drawer>
    )
  }
})

export default SubMenu
