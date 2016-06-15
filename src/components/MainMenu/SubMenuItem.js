/* @flow */
import React from 'react'
import { ListItem } from 'material-ui'

type Props = {
  item: Object,
  selectSubMenuItem: Function,
  style: Object
}

export class SubMenuItem extends React.Component {
  constructor(props: Props) {
    super(props)
    this.selectSubMenuItem = this.selectSubMenuItem.bind(this)
  }

  selectSubMenuItem: () => void;
  selectSubMenuItem () {
    this.props.selectSubMenuItem(this.props.item)
  }

  render () {
    return (
      <ListItem
        key={this.props.item.id}
        onTouchTap={this.selectSubMenuItem}
        style={this.props.style}
      >
        {this.props.item.text}
      </ListItem>
    )
  }
}

export default SubMenuItem
