/* @flow */
import React from 'react'
import { Link } from 'react-router'
import { globalStyles } from 'styles/js/global_styles'
import { Avatar } from 'material-ui'

type UserHeaderLink = {
  to: string,
  text: string
}

type Props = {
  avatar: string,
  title: string,
  links: Array<UserHeaderLink>
}

const styles = {
  container: {
    ...globalStyles.flexContainer,
    marginLeft: globalStyles.DBL_STANDARD_SPACING
  },
  title: {
    ...globalStyles.flexFullWidth,
    marginRight: globalStyles.STANDARD_SPACING,
    marginTop: globalStyles.STANDARD_SPACING
  },
  links: {
    textAlign: 'right'
  },
  link: {
    marginLeft: globalStyles.STANDARD_SPACING
  },
  avatar: {
    marginTop: globalStyles.HALF_STANDARD_SPACING
  }
}

export const UserHeader = (props: Props) => (
  <div style={styles.container}>
    <div style={styles.title}>
      {props.title}
      <div style={styles.links}>
        {props.links.map((link, key) => <Link key={key} style={styles.link} to={link.to}>{link.text}</Link>)}
      </div>
    </div>
    <Avatar src={props.avatar} size={globalStyles.BIG_ICON_SIZE} style={styles.avatar} />
  </div>
)

UserHeader.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      to: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    })
  )
}

export default UserHeader
