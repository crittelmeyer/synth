/* @flow */
import React from 'react'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import { currentTheme as theme } from 'styles/js/global_styles'

const styles = {
  icon: {
    width: 32,
    height: 32
  }
}

export const MENU_ITEMS = [
  {
    text: 'Overview',
    icon: <ContentInbox style={styles.icon} color={theme.palette.alternateTextColor} />,
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
    icon: <ActionGrade style={styles.icon} color={theme.palette.alternateTextColor} />,
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
    icon: <ContentDrafts style={styles.icon} color={theme.palette.alternateTextColor} />,
    href: '/the-wire-characters'
  },
  {
    text: 'Post Data',
    icon: <ContentSend style={styles.icon} color={theme.palette.alternateTextColor} />,
    href: '/add-the-wire-character'
  },
  {
    text: 'React-Slick',
    icon: <ContentDrafts style={styles.icon} color={theme.palette.alternateTextColor} />,
    href: '/the-wire-gallery'
  }
]

export default MENU_ITEMS
