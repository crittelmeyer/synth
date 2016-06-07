/* @flow */
import React from 'react'
import { ListItem } from 'material-ui'

type Props = {
  toggleMenu: Function,
  item: Object,
  style: Object
}

export class MenuItem extends React.Component {
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
      <ListItem
        key={this.props.item.id}
        style={this.props.style}
        primaryText={this.props.item.text}
        children={this.props.item.icon}
        onTouchTap={this.toggleMenu}
      />
    )
  }
}

export default MenuItem
