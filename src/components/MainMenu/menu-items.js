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
    id: 1,
    text: 'Overview',
    icon: <ContentInbox style={styles.icon} color={theme.palette.alternateTextColor} />,
    subMenuItems: [
      {
        id: 11,
        text: 'Hey!',
        href: '/'
      },
      {
        id: 12,
        text: 'Look at all',
        href: '/'
      },
      {
        id: 13,
        text: 'these menu items!',
        href: '/'
      },
      {
        id: 14,
        text: 'They do not',
        href: '/'
      },
      {
        id: 15,
        text: 'actually go anywhere...',
        href: '/'
      },
      {
        id: 16,
        text: '...',
        href: '/'
      },
      {
        id: 17,
        text: 'but you get the idea!',
        href: '/'
      },
      {
        id: 18,
        text: 'Actually this one goes to google',
        href: 'http://www.google.com/'
      }
    ]
  },
  {
    id: 2,
    text: 'Material-UI',
    icon: <ActionGrade style={styles.icon} color={theme.palette.alternateTextColor} />,
    subMenuItems: [
      {
        id: 21,
        text: 'Docs',
        href: 'http://www.material-ui.com/'
      },
      {
        id: 22,
        text: 'Demo',
        href: 'http://www.material-ui.com/#/components/app-bar'
      }
    ]
  },
  {
    id: 3,
    text: 'Fetch Data',
    icon: <ContentDrafts style={styles.icon} color={theme.palette.alternateTextColor} />,
    href: '/the-wire-characters'
  },
  {
    id: 4,
    text: 'Post Data',
    icon: <ContentSend style={styles.icon} color={theme.palette.alternateTextColor} />,
    href: '/add-the-wire-character'
  },
  {
    id: 5,
    text: 'React-Slick',
    icon: <ContentDrafts style={styles.icon} color={theme.palette.alternateTextColor} />,
    href: '/gallery'
  }
]

export default MENU_ITEMS
