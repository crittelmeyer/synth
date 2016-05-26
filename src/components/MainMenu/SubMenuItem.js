/* @flow */
import React from 'react'
import { ListItem } from 'material-ui'

export const SubMenu = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    item: React.PropTypes.object.isRequired,
    selectSubMenuItem: React.PropTypes.func.isRequired,
    style: React.PropTypes.object.isRequired
  },

  _selectSubMenuItem () {
    this.props.selectSubMenuItem({ ...this.props.item, id: this.props.id })
  },

  render () {
    return (
      <ListItem
        key={this.props.id}
        onTouchTap={this._selectSubMenuItem}
        style={this.props.style}
      >
        {this.props.item.text}
      </ListItem>
    )
  }
})

export default SubMenu
