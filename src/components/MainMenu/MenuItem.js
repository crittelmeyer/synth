/* @flow */
import React from 'react'
import { ListItem } from 'material-ui'

export const SubMenu = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    toggleMenu: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired,
    style: React.PropTypes.object.isRequired
  },

  _toggleMenu () {
    this.props.toggleMenu({ ...this.props.item, id: this.props.id })
  },

  render () {
    return (
      <ListItem
        key={this.props.id}
        style={this.props.style}
        primaryText={this.props.item.text}
        children={this.props.item.icon}
        onTouchTap={this._toggleMenu}
      />
    )
  }
})

export default SubMenu
