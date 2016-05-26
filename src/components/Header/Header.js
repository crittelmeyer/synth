/* @flow */
import React from 'react'
import UserHeader from '../UserHeader'
import SearchHeader from '../SearchHeader'
import globalStyles from 'styles/js/global_styles'

export const Header = (props: Props) => (
  <div style={globalStyles.flexContainer}>
    <div style={globalStyles.flexFullWidth}>
      <SearchHeader height={props.height} />
    </div>
    <UserHeader
      avatar='http://lorempixel.com/100/100/nature/'
      title='Julien @ Metro Atlanta Drones'
      links={[
        { to: '/profile', text: 'Profile' },
        { to: '/settings', text: 'Settings' }
      ]}
    />
  </div>
)

// FlowType annotations
type Props = {
  height: number
}

// React PropTypes
Header.propTypes = {
  height: React.PropTypes.number.isRequired
}

export default Header
